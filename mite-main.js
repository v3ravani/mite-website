/**
 * Mite Chess Engine — Main Application Script
 *
 * Handles sticky header transitions, mobile navigation accessibility,
 * smooth scrolling, tabbed documentation, clipboard interactions,
 * dynamic configuration binding, and the interactive hero chessboard.
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  initAnnouncementBar();
  bindConfigUrls();
  initHeaderScroll();
  initMobileNav();
  initActiveNavObserver();
  initTabbedPanels();
  initCodeCopyButtons();
  initHeroChessboard();
  initDynamicYear();
  initScrollReveal();

  // Initialize Benchmarks table & charts if present
  if (typeof BenchmarksTable !== "undefined") {
    BenchmarksTable.init();
  }
  if (typeof ScoreDistributionChart !== "undefined") {
    ScoreDistributionChart.render();
  }
  if (typeof TimeControlChart !== "undefined") {
    TimeControlChart.render();
  }
  if (typeof ColorPerformanceChart !== "undefined") {
    ColorPerformanceChart.render();
  }
  if (typeof TerminationChart !== "undefined") {
    TerminationChart.render();
  }

  // Handle window resizing for SVG charts
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (typeof ScoreDistributionChart !== "undefined") {
        ScoreDistributionChart.render();
      }
      if (typeof TimeControlChart !== "undefined") {
        TimeControlChart.render();
      }
      if (typeof ColorPerformanceChart !== "undefined") {
        ColorPerformanceChart.render();
      }
      if (typeof TerminationChart !== "undefined") {
        TerminationChart.render();
      }
    }, 150);
  });
}

/**
 * 0. Slim Announcement Bar for CCI Listing
 * Handles smooth dismissal, CSS variable height sync, and session persistence.
 */
function initAnnouncementBar() {
  const bar = document.getElementById("announcementBar");
  const closeBtn = document.getElementById("announcementClose");
  if (!bar) return;

  const storageKey = "mite_cci_announcement_dismissed";

  // Check if previously dismissed in this session
  let isDismissed = false;
  try {
    isDismissed = sessionStorage.getItem(storageKey) === "true";
  } catch (e) {
    // Session storage not accessible (e.g. strict sandbox mode)
  }

  if (isDismissed) {
    bar.classList.add("is-hidden");
    document.documentElement.classList.add("announcement-dismissed-session");
    document.documentElement.style.setProperty("--announcement-bar-height", "0px");
    return;
  }

  // Dynamically synchronize the CSS variable to the actual rendered height
  const syncAnnouncementHeight = () => {
    if (bar.classList.contains("is-hidden") || bar.classList.contains("is-dismissing")) return;
    const h = bar.offsetHeight;
    if (h > 0) {
      document.documentElement.style.setProperty("--announcement-bar-height", `${h}px`);
    }
  };

  // Sync initially and on viewport resize
  syncAnnouncementHeight();
  window.addEventListener("resize", syncAnnouncementHeight, { passive: true });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      // 1. Record dismissal for current session
      try {
        sessionStorage.setItem(storageKey, "true");
      } catch (e) {}

      // 2. Smoothly transition CSS custom property to 0px (glides header smoothly to top: 0)
      document.documentElement.style.setProperty("--announcement-bar-height", "0px");

      // 3. Trigger collapse & fade animation on the banner itself
      bar.classList.add("is-dismissing");

      // 4. Hide element from layout after transition completes
      setTimeout(() => {
        bar.classList.add("is-hidden");
        document.documentElement.classList.add("announcement-dismissed-session");
      }, 360);
    });
  }
}

/**
 * 1. Wire up URLs from MITE_CONFIG to corresponding DOM elements
 */
function bindConfigUrls() {
  if (typeof MITE_CONFIG === "undefined") return;

  const mapping = [
    { selector: ".link-github-repo", url: MITE_CONFIG.urls.githubRepo },
    { selector: ".link-github-releases", url: MITE_CONFIG.urls.githubReleases },
    { selector: ".link-github-source", url: MITE_CONFIG.urls.githubSource },
    { selector: ".link-huggingface-demo", url: MITE_CONFIG.urls.huggingFaceDemo },
    { selector: ".link-windows-binary", url: MITE_CONFIG.urls.windowsExecutable },
    { selector: ".announcement-link", url: MITE_CONFIG.urls.computerChessIndex },
    { selector: ".link-engine-notes", url: MITE_CONFIG.urls.engineNotes },
    { selector: ".link-setup-guide", url: MITE_CONFIG.urls.setupGuide },
    { selector: ".link-benchmarks-report", url: MITE_CONFIG.urls.benchmarksReport },
    { selector: ".link-license", url: MITE_CONFIG.urls.license },
    { selector: ".link-author-portfolio", url: MITE_CONFIG.author.portfolioUrl },
    { selector: ".link-author-github", url: MITE_CONFIG.author.githubUrl },
    { selector: ".link-author-linkedin", url: MITE_CONFIG.author.linkedinUrl },
    { selector: ".link-author-email", url: `mailto:${MITE_CONFIG.author.email}` }
  ];

  mapping.forEach(item => {
    document.querySelectorAll(item.selector).forEach(el => {
      if (el.tagName === "A" && item.url) {
        el.href = item.url;
      }
    });
  });
}

/**
 * 2. Sticky Header scroll styling
 */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * 3. Accessible Mobile Navigation
 */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("mainNavigation");
  const backdrop = document.getElementById("navBackdrop");

  if (!toggleBtn || !navMenu) return;

  function openNav() {
    toggleBtn.setAttribute("aria-expanded", "true");
    navMenu.classList.add("nav-open");
    if (backdrop) backdrop.classList.add("backdrop-active");
    document.body.classList.add("body-locked");
  }

  function closeNav() {
    toggleBtn.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("nav-open");
    if (backdrop) backdrop.classList.remove("backdrop-active");
    document.body.classList.remove("body-locked");
  }

  toggleBtn.addEventListener("click", () => {
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (backdrop) {
    backdrop.addEventListener("click", closeNav);
  }

  // Close when clicking internal links
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("nav-open")) {
        closeNav();
      }
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      closeNav();
      toggleBtn.focus();
    }
  });
}

/**
 * 4. Active Navigation Highlighting on Scroll
 */
function initActiveNavObserver() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
          } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/**
 * 5. Tabbed Panels for 'How to Play' GUI Guides
 */
function initTabbedPanels() {
  const tabContainers = document.querySelectorAll(".tab-container");

  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll(".tab-btn");
    const panels = container.querySelectorAll(".tab-panel");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-tab-target");

        tabs.forEach(t => {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach(p => {
          p.classList.remove("active");
          p.hidden = true;
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        const targetPanel = container.querySelector(`#${targetId}`);
        if (targetPanel) {
          targetPanel.classList.add("active");
          targetPanel.hidden = false;
        }
      });
    });
  });
}

/**
 * 6. Copy to Clipboard for Terminal / Code snippets
 */
function initCodeCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
      const targetId = btn.getAttribute("data-copy-target");
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const codeText = targetEl.innerText.trim();

      try {
        await navigator.clipboard.writeText(codeText);
        showCopyFeedback(btn, true);
      } catch (err) {
        // Fallback for older browsers or restricted permissions
        const textarea = document.createElement("textarea");
        textarea.value = codeText;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          showCopyFeedback(btn, true);
        } catch (e) {
          showCopyFeedback(btn, false);
        }
        document.body.removeChild(textarea);
      }
    });
  });

  function showCopyFeedback(button, success) {
    const textEl = button.querySelector(".copy-text");
    const iconEl = button.querySelector(".copy-icon");
    const originalText = textEl?.textContent || "Copy";
    const originalIconHtml = iconEl ? iconEl.outerHTML : "";

    button.classList.add("copied");
    if (textEl) textEl.textContent = success ? "Copied!" : "Failed";
    if (iconEl && success) {
      iconEl.outerHTML = `<svg class="copy-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    }

    setTimeout(() => {
      button.classList.remove("copied");
      if (textEl) textEl.textContent = originalText;
      const currentIcon = button.querySelector(".copy-icon");
      if (currentIcon && originalIconHtml) {
        currentIcon.outerHTML = originalIconHtml;
      }
    }, 2000);
  }
}

/**
 * 7. Interactive Hero Chessboard (Static Illustrative Position with Inspection)
 */
function initHeroChessboard() {
  const boardEl = document.getElementById("heroChessboard");
  const inspectOutput = document.getElementById("boardInspectStatus");
  if (!boardEl) return;

  // Authentic sharp middlegame position: White has dynamic initiative
  // FEN: r2q1rk1/ppp2ppp/2n1bn2/3p4/2PP4/1PN1PN2/P4PPP/R1BQKB1R w KQ - 1 8 (adjusted for rich pieces)
  const initialPosition = [
    ['r', null, null, 'q', null, 'r', 'k', null], // 8
    ['p', 'p', 'p', null, null, 'p', 'p', 'p'], // 7
    [null, null, 'n', null, 'b', 'n', null, null], // 6
    [null, null, null, 'p', null, null, null, null], // 5
    [null, null, 'P', 'P', null, null, null, null], // 4
    [null, 'P', 'N', null, 'P', 'N', null, null], // 3
    ['P', null, null, null, null, 'P', 'P', 'P'], // 2
    ['R', null, 'B', 'Q', 'K', 'B', null, 'R']  // 1
  ];

  const pieceNames = {
    'p': 'Black Pawn', 'r': 'Black Rook', 'n': 'Black Knight',
    'b': 'Black Bishop', 'q': 'Black Queen', 'k': 'Black King',
    'P': 'White Pawn', 'R': 'White Rook', 'N': 'White Knight',
    'B': 'White Bishop', 'Q': 'White Queen', 'K': 'White King'
  };

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  const pieceImages = {
    'p': 'mite-assets/pieces/bP.png',
    'r': 'mite-assets/pieces/bR.png',
    'n': 'mite-assets/pieces/bN.png',
    'b': 'mite-assets/pieces/bB.png',
    'q': 'mite-assets/pieces/bQ.png',
    'k': 'mite-assets/pieces/bK.png',
    'P': 'mite-assets/pieces/wP.png',
    'R': 'mite-assets/pieces/wR.png',
    'N': 'mite-assets/pieces/wN.png',
    'B': 'mite-assets/pieces/wB.png',
    'Q': 'mite-assets/pieces/wQ.png',
    'K': 'mite-assets/pieces/wK.png'
  };

  function getPieceImg(code) {
    const src = pieceImages[code];
    if (!src) return '';
    const name = pieceNames[code] || 'Chess Piece';
    return `<img src="${src}" alt="${name}" class="piece-img" draggable="false" width="45" height="45">`;
  }

  // Build 64 squares with coordinate labels
  let boardHtml = '';
  for (let r = 0; r < 8; r++) {
    const rankNum = 8 - r;
    for (let f = 0; f < 8; f++) {
      const fileChar = files[f];
      const squareKey = `${fileChar}${rankNum}`;
      const isLight = (r + f) % 2 === 0;
      const pieceCode = initialPosition[r][f];

      // Add rank/file labels on edge squares
      const showRankLabel = f === 0;
      const showFileLabel = r === 7;

      boardHtml += `
        <div class="board-square ${isLight ? 'square-light' : 'square-dark'}" 
             data-square="${squareKey}" 
             data-piece="${pieceCode || 'empty'}" 
             tabindex="0"
             role="gridcell"
             aria-label="Square ${squareKey}: ${pieceCode ? pieceNames[pieceCode] : 'empty'}">
          ${showRankLabel ? `<span class="rank-label">${rankNum}</span>` : ''}
          ${showFileLabel ? `<span class="file-label">${fileChar}</span>` : ''}
          ${pieceCode ? getPieceImg(pieceCode) : ''}
        </div>
      `;
    }
  }

  boardEl.innerHTML = boardHtml;

  // Add subtle interactive square inspection
  const squares = boardEl.querySelectorAll('.board-square');
  squares.forEach(sq => {
    sq.addEventListener('mouseenter', () => handleSquareInspect(sq));
    sq.addEventListener('focus', () => handleSquareInspect(sq));
  });

  function handleSquareInspect(sq) {
    const square = sq.getAttribute('data-square');
    const piece = sq.getAttribute('data-piece');

    squares.forEach(s => s.classList.remove('square-highlighted'));
    sq.classList.add('square-highlighted');

    if (inspectOutput) {
      if (piece && piece !== 'empty') {
        inspectOutput.innerHTML = `<span class="badge-square font-mono">${square}</span> <span class="badge-piece">${pieceNames[piece]}</span>`;
      } else {
        inspectOutput.innerHTML = `<span class="badge-square font-mono">${square}</span> <span class="badge-piece text-muted">Empty square</span>`;
      }
    }
  }
}

/**
 * 8. Dynamic Copyright Year
 */
function initDynamicYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * 9. Subtle Scroll Reveal Animations
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-fade");
  if (!revealElements.length) return;

  // Immediately reveal on mobile or if user prefers reduced motion
  if (window.innerWidth <= 768 || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  // Immediately reveal elements that are already within or near the initial viewport
  const vh = window.innerHeight || document.documentElement.clientHeight;
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh + 120) {
      el.classList.add("revealed");
    }
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "50px 0px 50px 0px",
    threshold: 0.01
  });

  revealElements.forEach(el => {
    if (!el.classList.contains("revealed")) {
      observer.observe(el);
    }
  });
}
