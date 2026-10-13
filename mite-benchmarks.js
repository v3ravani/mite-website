/**
 * Mite Chess Engine — Verified Benchmark Dataset & Interactive Visualizations
 *
 * All data in this file is directly sourced from 2,600 verified games across
 * 13 automated match series recorded in the repository's `benchmarks/` directory.
 */

// 1. Individual Verified Match Series (13 Matches, 2,600 Games)
const BENCHMARK_MATCHES = [
  {
    id: "sf-tc1",
    opponent: "Stockfish (2000 Elo)",
    opponentKey: "stockfish",
    opponentVersion: "UCI limit (UCI_Elo = 2000)",
    timeControl: "1s / move (tc 1)",
    timeControlSeconds: 1.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 107,
    draws: 11,
    losses: 82,
    scorePct: 56.3,
    whiteRecord: "+55 −37 =8",
    whiteScorePct: 59.0,
    blackRecord: "+52 −45 =3",
    blackScorePct: 53.5,
    eloDiff: "+43.7 ± 47.4",
    los: "96.6%",
    drawRatio: "5.5%",
    terminations: "107 checkmate wins; 82 checkmate losses; 4 50-move, 3 repetition, 3 insufficient, 1 stalemate",
    pgnFile: "benchmarks/vs_Stockfish(2000 elo)/mite_vs_stockfish2000_tc1.pgn"
  },
  {
    id: "sf-tc5",
    opponent: "Stockfish (2000 Elo)",
    opponentKey: "stockfish",
    opponentVersion: "UCI limit (UCI_Elo = 2000)",
    timeControl: "5s / move (tc 5)",
    timeControlSeconds: 5.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 111,
    draws: 11,
    losses: 78,
    scorePct: 58.3,
    whiteRecord: "+62 −34 =4",
    whiteScorePct: 64.0,
    blackRecord: "+49 −44 =7",
    blackScorePct: 52.5,
    eloDiff: "+57.9 ± 47.7",
    los: "99.2%",
    drawRatio: "5.5%",
    terminations: "111 checkmate wins; 78 checkmate losses; 5 50-move, 3 insufficient, 2 repetition, 1 stalemate",
    pgnFile: "benchmarks/vs_Stockfish(2000 elo)/mite_vs_stockfish2000_tc5.pgn"
  },
  {
    id: "sf-tc10",
    opponent: "Stockfish (2000 Elo)",
    opponentKey: "stockfish",
    opponentVersion: "UCI limit (UCI_Elo = 2000)",
    timeControl: "10s / move (tc 10)",
    timeControlSeconds: 10.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 127,
    draws: 12,
    losses: 61,
    scorePct: 66.5,
    whiteRecord: "+64 −28 =8",
    whiteScorePct: 68.0,
    blackRecord: "+63 −33 =4",
    blackScorePct: 65.0,
    eloDiff: "+119.1 ± 49.6",
    los: "100.0%",
    drawRatio: "6.0%",
    terminations: "125 mate wins, 2 SF time forfeits; 61 mate losses; 7 50-move, 3 repetition, 1 insufficient, 1 stalemate",
    pgnFile: "benchmarks/vs_Stockfish(2000 elo)/mite_vs_stockfish2000_tc10.pgn"
  },
  {
    id: "fm-tc1",
    opponent: "Fairy-Max",
    opponentKey: "fairymax",
    opponentVersion: "Fairy-Max 5.0b",
    timeControl: "1s / move (tc 1)",
    timeControlSeconds: 1.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 123,
    draws: 22,
    losses: 55,
    scorePct: 67.0,
    whiteRecord: "+68 −25 =7",
    whiteScorePct: 71.5,
    blackRecord: "+55 −30 =15",
    blackScorePct: 62.5,
    eloDiff: "+123.0 ± 48.3",
    los: "100.0%",
    drawRatio: "11.0%",
    terminations: "122 mate wins, 1 FM time forfeit; 55 mate losses; 15 repetition, 4 insufficient, 2 50-move, 1 stalemate",
    pgnFile: "benchmarks/vs_Fairy-Max/mite_vs_fairymax_tc1.pgn"
  },
  {
    id: "fm-tc5",
    opponent: "Fairy-Max",
    opponentKey: "fairymax",
    opponentVersion: "Fairy-Max 5.0b",
    timeControl: "5s / move (tc 5)",
    timeControlSeconds: 5.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 123,
    draws: 26,
    losses: 51,
    scorePct: 68.0,
    whiteRecord: "+68 −21 =11",
    whiteScorePct: 73.5,
    blackRecord: "+55 −30 =15",
    blackScorePct: 62.5,
    eloDiff: "+130.9 ± 48.0",
    los: "100.0%",
    drawRatio: "13.0%",
    terminations: "123 checkmate wins; 51 checkmate losses; 17 insufficient, 6 repetition, 3 50-move",
    pgnFile: "benchmarks/vs_Fairy-Max/mite_vs_fairymax_tc5.pgn"
  },
  {
    id: "tscp-tc1",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "1s / move (tc 1)",
    timeControlSeconds: 1.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 149,
    draws: 22,
    losses: 29,
    scorePct: 80.0,
    whiteRecord: "+78 −12 =10",
    whiteScorePct: 83.0,
    blackRecord: "+71 −17 =12",
    blackScorePct: 77.0,
    eloDiff: "+240.8 ± 55.7",
    los: "100.0%",
    drawRatio: "11.0%",
    terminations: "149 checkmate wins; 29 checkmate losses; 10 repetition, 9 insufficient, 3 50-move",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_tc1.pgn"
  },
  {
    id: "tscp-tc3",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "3s / move (tc 3)",
    timeControlSeconds: 3.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 159,
    draws: 20,
    losses: 21,
    scorePct: 84.5,
    whiteRecord: "+83 −9 =8",
    whiteScorePct: 87.0,
    blackRecord: "+76 −12 =12",
    blackScorePct: 82.0,
    eloDiff: "+294.6 ± 61.3",
    los: "100.0%",
    drawRatio: "10.0%",
    terminations: "159 checkmate wins; 21 checkmate losses; 12 repetition, 6 insufficient, 2 50-move",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_tc3.pgn"
  },
  {
    id: "tscp-tc5",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "5s / move (tc 5)",
    timeControlSeconds: 5.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 150,
    draws: 19,
    losses: 31,
    scorePct: 79.8,
    whiteRecord: "+76 −16 =8",
    whiteScorePct: 80.0,
    blackRecord: "+74 −15 =11",
    blackScorePct: 79.5,
    eloDiff: "+238.1 ± 56.2",
    los: "100.0%",
    drawRatio: "9.5%",
    terminations: "150 checkmate wins; 31 checkmate losses; 10 repetition, 6 insufficient, 3 50-move",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_tc5.pgn"
  },
  {
    id: "tscp-tc7",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "7s / move (tc 7)",
    timeControlSeconds: 7.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 162,
    draws: 13,
    losses: 25,
    scorePct: 84.3,
    whiteRecord: "+81 −14 =5",
    whiteScorePct: 83.5,
    blackRecord: "+81 −11 =8",
    blackScorePct: 85.0,
    eloDiff: "+291.3 ± 63.5",
    los: "100.0%",
    drawRatio: "6.5%",
    terminations: "162 checkmate wins; 25 checkmate losses; 11 repetition, 2 insufficient",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_tc7.pgn"
  },
  {
    id: "tscp-tc10",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "10s / move (tc 10)",
    timeControlSeconds: 10.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 165,
    draws: 16,
    losses: 19,
    scorePct: 86.5,
    whiteRecord: "+79 −12 =9",
    whiteScorePct: 83.5,
    blackRecord: "+86 −7 =7",
    blackScorePct: 89.5,
    eloDiff: "+322.7 ± 66.1",
    los: "100.0%",
    drawRatio: "8.0%",
    terminations: "165 checkmate wins; 19 checkmate losses; 8 insufficient, 7 repetition, 1 50-move",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_tc10.pgn"
  },
  {
    id: "tscp-tc60",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "60s / move (tc 60)",
    timeControlSeconds: 60.0,
    timeCategory: "Conventional",
    games: 200,
    wins: 176,
    draws: 12,
    losses: 12,
    scorePct: 91.0,
    whiteRecord: "+89 −4 =7",
    whiteScorePct: 92.5,
    blackRecord: "+87 −8 =5",
    blackScorePct: 89.5,
    eloDiff: "+401.9 ± 80.0",
    los: "100.0%",
    drawRatio: "6.0%",
    terminations: "176 checkmate wins; 12 checkmate losses; 8 repetition, 4 insufficient",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_tc60.pgn"
  },
  {
    id: "tscp-st05",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "Fixed 0.5s (st 0.5)",
    timeControlSeconds: 0.5,
    timeCategory: "Fixed Time",
    games: 200,
    wins: 198,
    draws: 1,
    losses: 1,
    scorePct: 99.3,
    whiteRecord: "+100 −0 =0",
    whiteScorePct: 100.0,
    blackRecord: "+98 −1 =1",
    blackScorePct: 98.5,
    eloDiff: "+848.7",
    los: "100.0%",
    drawRatio: "0.5%",
    terminations: "198 checkmate wins; 1 checkmate loss; 1 threefold repetition",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_st0.5.pgn"
  },
  {
    id: "tscp-st2",
    opponent: "TSCP",
    opponentKey: "tscp",
    opponentVersion: "TSCP v1.81",
    timeControl: "Fixed 2.0s (st 2)",
    timeControlSeconds: 2.0,
    timeCategory: "Fixed Time",
    games: 200,
    wins: 197,
    draws: 2,
    losses: 1,
    scorePct: 99.0,
    whiteRecord: "+98 −1 =1",
    whiteScorePct: 98.5,
    blackRecord: "+99 −0 =1",
    blackScorePct: 99.5,
    eloDiff: "+798.3",
    los: "100.0%",
    drawRatio: "1.0%",
    terminations: "197 checkmate wins; 1 checkmate loss; 2 fifty-move rule",
    pgnFile: "benchmarks/vs_TSCP/mite_vs_tscp_st2.pgn"
  }
];

// 2. Aggregate Summaries per Opponent
const OPPONENT_SUMMARIES = [
  {
    opponent: "TSCP",
    matches: 8,
    games: 1600,
    wins: 1356,
    losses: 139,
    draws: 105,
    scorePct: 88.0,
    whiteRecord: "+684 −68 =48 (88.5%)",
    blackRecord: "+672 −71 =57 (87.6%)",
    bias: "+0.9% White"
  },
  {
    opponent: "Stockfish (2000 Elo)",
    matches: 3,
    games: 600,
    wins: 345,
    losses: 221,
    draws: 34,
    scorePct: 60.3,
    whiteRecord: "+181 −99 =20 (63.7%)",
    blackRecord: "+164 −122 =14 (57.0%)",
    bias: "+6.7% White"
  },
  {
    opponent: "Fairy-Max",
    matches: 2,
    games: 400,
    wins: 246,
    losses: 106,
    draws: 48,
    scorePct: 67.5,
    whiteRecord: "+136 −46 =18 (72.5%)",
    blackRecord: "+110 −60 =30 (62.5%)",
    bias: "+10.0% White"
  },
  {
    opponent: "Total / Overall",
    matches: 13,
    games: 2600,
    wins: 1947,
    losses: 466,
    draws: 187,
    scorePct: 78.5,
    whiteRecord: "+1,001 −213 =86 (80.3%)",
    blackRecord: "+946 −253 =101 (76.7%)",
    bias: "+3.6% White"
  }
];

// 3. Table Controller: Sorting and Filtering State
const BenchmarksTable = {
  sortKey: "scorePct",
  sortAsc: false,
  filterOpponent: "all",

  init() {
    this.bindEvents();
    this.render();
    this.renderOpponentTables();
  },

  renderOpponentTables() {
    this.renderSpecificOpponentTable("stockfish", "tableBodyStockfish");
    this.renderSpecificOpponentTable("tscp", "tableBodyTscp");
    this.renderSpecificOpponentTable("fairymax", "tableBodyFairymax");
  },

  renderSpecificOpponentTable(opponentKey, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    const matches = BENCHMARK_MATCHES.filter(m => m.opponentKey === opponentKey);
    tbody.innerHTML = matches.map(row => `
      <tr>
        <td class="cell-tc">
          <code class="tc-code">${row.timeControl}</code>
          <span class="tc-cat-badge">${row.timeCategory}</span>
        </td>
        <td class="cell-numeric font-mono">${row.games}</td>
        <td class="cell-numeric font-mono cell-win">+${row.wins}</td>
        <td class="cell-numeric font-mono cell-draw">=${row.draws}</td>
        <td class="cell-numeric font-mono cell-loss">−${row.losses}</td>
        <td class="cell-score">
          <div class="score-display">
            <span class="score-pct font-mono">${row.scorePct.toFixed(1)}%</span>
            <div class="score-bar-track" title="Mite Score: ${row.scorePct}%">
              <div class="score-bar-fill" style="width: ${row.scorePct}%"></div>
            </div>
          </div>
        </td>
        <td class="cell-color-splits">
          <div class="color-split-row font-mono" title="Mite as White: ${row.whiteRecord}">
            <span class="color-dot white-dot"></span>
            <span class="color-score">${row.whiteScorePct.toFixed(1)}%</span>
          </div>
          <div class="color-split-row font-mono" title="Mite as Black: ${row.blackRecord}">
            <span class="color-dot black-dot"></span>
            <span class="color-score">${row.blackScorePct.toFixed(1)}%</span>
          </div>
        </td>
        <td class="cell-numeric font-mono" style="font-size: 0.8125rem;">${row.eloDiff}</td>
        <td class="cell-numeric font-mono cell-win" style="font-size: 0.8125rem;">${row.los}</td>
        <td class="cell-actions">
          <a href="https://github.com/v3ravani/mite-chess-engine/blob/main/${row.pgnFile}" target="_blank" rel="noopener noreferrer" class="pgn-link" title="Inspect raw PGN match records in repository">
            <span>PGN</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </td>
      </tr>
    `).join("");
  },

  bindEvents() {
    // Filter buttons
    const filterButtons = document.querySelectorAll(".benchmark-filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        filterButtons.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.filterOpponent = e.currentTarget.getAttribute("data-filter");
        this.render();
      });
    });

    // Sortable table headers
    const headers = document.querySelectorAll("#benchmarkTable th[data-sort]");
    headers.forEach(th => {
      th.addEventListener("click", (e) => {
        const key = e.currentTarget.getAttribute("data-sort");
        if (this.sortKey === key) {
          this.sortAsc = !this.sortAsc;
        } else {
          this.sortKey = key;
          // Default numbers to descending, text to ascending
          this.sortAsc = (key === "opponent" || key === "timeControl");
        }
        this.updateHeaderIndicators();
        this.render();
      });
    });
  },

  updateHeaderIndicators() {
    const headers = document.querySelectorAll("#benchmarkTable th[data-sort]");
    headers.forEach(th => {
      const key = th.getAttribute("data-sort");
      th.classList.remove("sort-asc", "sort-desc");
      if (this.sortKey === key) {
        th.classList.add(this.sortAsc ? "sort-asc" : "sort-desc");
        th.setAttribute("aria-sort", this.sortAsc ? "ascending" : "descending");
      } else {
        th.removeAttribute("aria-sort");
      }
    });
  },

  getFilteredData() {
    if (!BENCHMARK_MATCHES || BENCHMARK_MATCHES.length === 0) {
      return [];
    }

    if (this.filterOpponent === "all") {
      return [...BENCHMARK_MATCHES];
    }
    return BENCHMARK_MATCHES.filter(m => m.opponentKey === this.filterOpponent);
  },

  getSortedData(data) {
    return data.sort((a, b) => {
      let valA = a[this.sortKey];
      let valB = b[this.sortKey];

      if (this.sortKey === "timeControl") {
        valA = a.timeControlSeconds;
        valB = b.timeControlSeconds;
      }

      if (typeof valA === "string") {
        return this.sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return this.sortAsc ? valA - valB : valB - valA;
    });
  },

  render() {
    const tbody = document.getElementById("benchmarkTableBody");
    const countEl = document.getElementById("benchmarkResultsCount");
    if (!tbody) return;

    const filtered = this.getFilteredData();
    const sorted = this.getSortedData(filtered);

    if (countEl) {
      countEl.textContent = `Showing ${sorted.length} of ${BENCHMARK_MATCHES.length} verified match series (${sorted.reduce((acc, r) => acc + r.games, 0).toLocaleString()} games)`;
    }

    if (sorted.length === 0) {
      tbody.innerHTML = `
        <tr class="empty-state-row">
          <td colspan="9">
            <div class="table-empty-state">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p class="empty-state-title">No benchmark records match the selected filter</p>
              <p class="empty-state-desc">Select a different opponent filter above to inspect verified tournament series.</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = sorted.map(row => `
      <tr>
        <td class="cell-opponent">
          <div class="opponent-name">${row.opponent}</div>
          <div class="opponent-spec">${row.opponentVersion}</div>
        </td>
        <td class="cell-tc">
          <code class="tc-code">${row.timeControl}</code>
          <span class="tc-cat-badge">${row.timeCategory}</span>
        </td>
        <td class="cell-numeric font-mono">${row.games}</td>
        <td class="cell-numeric font-mono cell-win">+${row.wins}</td>
        <td class="cell-numeric font-mono cell-draw">=${row.draws}</td>
        <td class="cell-numeric font-mono cell-loss">−${row.losses}</td>
        <td class="cell-score">
          <div class="score-display">
            <span class="score-pct font-mono">${row.scorePct.toFixed(1)}%</span>
            <div class="score-bar-track" title="Mite Score: ${row.scorePct}%">
              <div class="score-bar-fill" style="width: ${row.scorePct}%"></div>
            </div>
          </div>
        </td>
        <td class="cell-color-splits">
          <div class="color-split-row font-mono" title="Mite as White: ${row.whiteRecord}">
            <span class="color-dot white-dot"></span>
            <span class="color-score">${row.whiteScorePct.toFixed(1)}%</span>
          </div>
          <div class="color-split-row font-mono" title="Mite as Black: ${row.blackRecord}">
            <span class="color-dot black-dot"></span>
            <span class="color-score">${row.blackScorePct.toFixed(1)}%</span>
          </div>
        </td>
        <td class="cell-actions">
          <a href="https://github.com/v3ravani/mite-chess-engine/blob/main/${row.pgnFile}" target="_blank" rel="noopener noreferrer" class="pgn-link" title="Inspect raw PGN match records in repository">
            <span>PGN</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </td>
      </tr>
    `).join("");
  }
};

// 4. Custom Native SVG Chart 1: Match Score Distribution (Horizontal Stacked Bar Chart)
const ScoreDistributionChart = {
  render() {
    const container = document.getElementById("chartScoreDistContainer");
    if (!container) return;

    // Check for empty data condition
    if (!OPPONENT_SUMMARIES || OPPONENT_SUMMARIES.length === 0) {
      container.innerHTML = this.renderEmptyState();
      return;
    }

    const data = OPPONENT_SUMMARIES;
    const width = 800;
    const rowHeight = 72;
    const paddingLeft = 190;
    const paddingRight = 90;
    const paddingTop = 40;
    const paddingBottom = 40;
    const chartHeight = paddingTop + data.length * rowHeight + paddingBottom;
    const barWidth = width - paddingLeft - paddingRight;

    let svg = `
      <svg viewBox="0 0 ${width} ${chartHeight}" class="native-svg-chart" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Horizontal stacked bar chart showing match outcomes of wins, draws, and losses across opponents">
        <defs>
          <linearGradient id="winGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#215237" />
            <stop offset="100%" stop-color="#296644" />
          </linearGradient>
          <linearGradient id="drawGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#7a6730" />
            <stop offset="100%" stop-color="#8c7739" />
          </linearGradient>
          <linearGradient id="lossGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#8a3030" />
            <stop offset="100%" stop-color="#9e3a3a" />
          </linearGradient>
        </defs>

        <!-- Chart Grid & 50% Parity Line -->
        <line x1="${paddingLeft}" y1="${paddingTop - 15}" x2="${paddingLeft + barWidth}" y2="${paddingTop - 15}" stroke="#dcd9ce" stroke-width="1" />
        <line x1="${paddingLeft + barWidth * 0.5}" y1="${paddingTop - 25}" x2="${paddingLeft + barWidth * 0.5}" y2="${chartHeight - paddingBottom + 10}" stroke="#b5b1a3" stroke-width="1" stroke-dasharray="3,3" />
        <text x="${paddingLeft + barWidth * 0.5}" y="${paddingTop - 30}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="middle">50% Parity</text>

        <!-- Axis Labels (0%, 25%, 50%, 75%, 100%) -->
        <text x="${paddingLeft}" y="${chartHeight - paddingBottom + 25}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="start">0%</text>
        <text x="${paddingLeft + barWidth * 0.25}" y="${chartHeight - paddingBottom + 25}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="middle">25%</text>
        <text x="${paddingLeft + barWidth * 0.5}" y="${chartHeight - paddingBottom + 25}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="middle">50%</text>
        <text x="${paddingLeft + barWidth * 0.75}" y="${chartHeight - paddingBottom + 25}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="middle">75%</text>
        <text x="${paddingLeft + barWidth}" y="${chartHeight - paddingBottom + 25}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="end">100%</text>
    `;

    data.forEach((item, index) => {
      const y = paddingTop + index * rowHeight;
      const total = item.games;
      const winPct = (item.wins / total);
      const drawPct = (item.draws / total);
      const lossPct = (item.losses / total);

      const winW = Math.round(barWidth * winPct);
      const drawW = Math.round(barWidth * drawPct);
      const lossW = barWidth - winW - drawW; // align perfectly to barWidth

      const isAggregate = index === data.length - 1;

      svg += `
        <!-- Row: ${item.opponent} -->
        <g class="chart-bar-group" data-opponent="${item.opponent}">
          <!-- Separator for Aggregate -->
          ${isAggregate ? `<line x1="${paddingLeft - 30}" y1="${y - 12}" x2="${width - 20}" y2="${y - 12}" stroke="#d0cec4" stroke-width="1.5" />` : ''}

          <!-- Label -->
          <text x="${paddingLeft - 18}" y="${y + 16}" font-family="Inter, -apple-system, sans-serif" font-weight="${isAggregate ? '600' : '500'}" font-size="13" fill="#18191a" text-anchor="end">
            ${item.opponent}
          </text>
          <text x="${paddingLeft - 18}" y="${y + 32}" font-family="JetBrains Mono, monospace" font-size="11" fill="#71767d" text-anchor="end">
            ${item.games.toLocaleString()} games (${item.matches} match${item.matches > 1 ? 'es' : ''})
          </text>

          <!-- Bar background track -->
          <rect x="${paddingLeft}" y="${y + 2}" width="${barWidth}" height="28" rx="2" fill="#edebe4" />

          <!-- Win segment -->
          <rect x="${paddingLeft}" y="${y + 2}" width="${winW}" height="28" rx="2" fill="url(#winGrad)">
            <title>${item.opponent}: ${item.wins} Wins (${(winPct * 100).toFixed(1)}%)</title>
          </rect>
          <!-- Draw segment -->
          <rect x="${paddingLeft + winW}" y="${y + 2}" width="${drawW}" height="28" fill="url(#drawGrad)">
            <title>${item.opponent}: ${item.draws} Draws (${(drawPct * 100).toFixed(1)}%)</title>
          </rect>
          <!-- Loss segment -->
          <rect x="${paddingLeft + winW + drawW}" y="${y + 2}" width="${lossW}" height="28" rx="2" fill="url(#lossGrad)">
            <title>${item.opponent}: ${item.losses} Losses (${(lossPct * 100).toFixed(1)}%)</title>
          </rect>

          <!-- Label within bar if wide enough -->
          ${winW > 70 ? `
            <text x="${paddingLeft + winW / 2}" y="${y + 20}" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">
              ${(winPct * 100).toFixed(1)}% W
            </text>
          ` : ''}

          <!-- Score summary at end of bar -->
          <text x="${paddingLeft + barWidth + 14}" y="${y + 20}" font-family="JetBrains Mono, monospace" font-size="13" font-weight="600" fill="#205036" text-anchor="start">
            ${item.scorePct.toFixed(1)}%
          </text>
        </g>
      `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
  },

  renderEmptyState() {
    return `
      <div class="chart-empty-state">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
        <p class="empty-state-title">No score distribution data published</p>
        <p class="empty-state-desc">Match results and distribution charts will automatically appear once verified match records are loaded.</p>
      </div>
    `;
  }
};

// 5. Custom Native SVG Chart 2: Performance Across Time Controls
const TimeControlChart = {
  render() {
    const container = document.getElementById("chartTimeControlContainer");
    if (!container) return;

    // Filter conventional time controls (1s, 3s, 5s, 7s, 10s, 60s)
    const conventionalMatches = BENCHMARK_MATCHES.filter(m => m.timeCategory === "Conventional");

    if (conventionalMatches.length === 0) {
      container.innerHTML = this.renderEmptyState();
      return;
    }

    const width = 800;
    const height = 340;
    const paddingLeft = 70;
    const paddingRight = 160;
    const paddingTop = 40;
    const paddingBottom = 60;
    const chartW = width - paddingLeft - paddingRight;
    const chartH = height - paddingTop - paddingBottom;

    // Time points on X axis: 1s, 3s, 5s, 7s, 10s, 60s
    const timePoints = [
      { label: "1s", sec: 1 },
      { label: "3s", sec: 3 },
      { label: "5s", sec: 5 },
      { label: "7s", sec: 7 },
      { label: "10s", sec: 10 },
      { label: "60s", sec: 60 }
    ];

    // Coordinate mapping functions
    const getX = (index) => paddingLeft + (index / (timePoints.length - 1)) * chartW;
    const getY = (scorePct) => {
      // Y-axis spans 50% to 100%
      const minScore = 50;
      const maxScore = 100;
      const normalized = (scorePct - minScore) / (maxScore - minScore);
      return paddingTop + chartH - (normalized * chartH);
    };

    let svg = `
      <svg viewBox="0 0 ${width} ${height}" class="native-svg-chart" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Line graph showing Mite chess engine performance score percentage scaling across incremental time controls against reference engines">
        <!-- Gridlines (Horizontal every 10% from 50 to 100) -->
    `;

    [50, 60, 70, 80, 90, 100].forEach(score => {
      const y = getY(score);
      const isBaseline = score === 50;
      svg += `
        <line x1="${paddingLeft}" y1="${y}" x2="${paddingLeft + chartW}" y2="${y}" stroke="${isBaseline ? '#b5b1a3' : '#e6e4dc'}" stroke-width="${isBaseline ? '1.5' : '1'}" ${isBaseline ? 'stroke-dasharray="3,3"' : ''} />
        <text x="${paddingLeft - 12}" y="${y + 4}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="end">${score}%</text>
      `;
    });

    // Vertical time control gridlines & labels
    timePoints.forEach((tp, i) => {
      const x = getX(i);
      svg += `
        <line x1="${x}" y1="${paddingTop}" x2="${x}" y2="${paddingTop + chartH}" stroke="#f0ede5" stroke-width="1" />
        <text x="${x}" y="${paddingTop + chartH + 20}" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#18191a" text-anchor="middle">${tp.label}</text>
        <text x="${x}" y="${paddingTop + chartH + 34}" font-family="Inter, sans-serif" font-size="9" fill="#71767d" text-anchor="middle">/ move</text>
      `;
    });

    // Series Definitions
    const series = [
      {
        name: "Stockfish (2000 Elo)",
        color: "#205036", // deep forest green
        dash: "none",
        points: [
          { tpIndex: 0, score: 56.3, elo: "+43.7", games: 200, label: "56.3%" },
          { tpIndex: 2, score: 58.3, elo: "+57.9", games: 200, label: "58.3%" },
          { tpIndex: 4, score: 66.5, elo: "+119.1", games: 200, label: "66.5%" }
        ]
      },
      {
        name: "TSCP",
        color: "#8c5a2b", // warm chess wood brown
        dash: "none",
        points: [
          { tpIndex: 0, score: 80.0, elo: "+240.8", games: 200, label: "80.0%" },
          { tpIndex: 1, score: 84.5, elo: "+294.6", games: 200, label: "84.5%" },
          { tpIndex: 2, score: 79.8, elo: "+238.1", games: 200, label: "79.8%" },
          { tpIndex: 3, score: 84.3, elo: "+291.3", games: 200, label: "84.3%" },
          { tpIndex: 4, score: 86.5, elo: "+322.7", games: 200, label: "86.5%" },
          { tpIndex: 5, score: 91.0, elo: "+401.9", games: 200, label: "91.0%" }
        ]
      },
      {
        name: "Fairy-Max",
        color: "#546e7a", // muted slate
        dash: "4,4",
        points: [
          { tpIndex: 0, score: 67.0, elo: "+123.0", games: 200, label: "67.0%" },
          { tpIndex: 2, score: 68.0, elo: "+130.9", games: 200, label: "68.0%" }
        ]
      }
    ];

    // Draw series paths and points
    series.forEach(s => {
      let pathD = "";
      s.points.forEach((p, idx) => {
        const px = getX(p.tpIndex);
        const py = getY(p.score);
        pathD += `${idx === 0 ? 'M' : 'L'} ${px} ${py} `;
      });

      svg += `
        <!-- Line: ${s.name} -->
        <path d="${pathD}" fill="none" stroke="${s.color}" stroke-width="2.5" stroke-dasharray="${s.dash}" stroke-linecap="round" stroke-linejoin="round" />
      `;

      // Plot data points
      s.points.forEach(p => {
        const px = getX(p.tpIndex);
        const py = getY(p.score);

        svg += `
          <g class="chart-point" tabindex="0">
            <circle cx="${px}" cy="${py}" r="4.5" fill="#ffffff" stroke="${s.color}" stroke-width="2.5">
              <title>${s.name} (${timePoints[p.tpIndex].label}): ${p.label} (${p.elo} Elo)</title>
            </circle>
            <!-- Offset value label -->
            <text x="${px}" y="${py - 10}" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="${s.color}" text-anchor="middle">
              ${p.label}
            </text>
          </g>
        `;
      });
    });

    // Legend on right side
    const legendX = paddingLeft + chartW + 24;
    svg += `
      <g class="chart-legend" transform="translate(${legendX}, ${paddingTop + 10})">
        <text x="0" y="0" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#18191a">OPPONENT</text>
    `;

    series.forEach((s, i) => {
      const ly = 24 + i * 26;
      svg += `
        <line x1="0" y1="${ly - 4}" x2="16" y2="${ly - 4}" stroke="${s.color}" stroke-width="2.5" stroke-dasharray="${s.dash}" />
        <circle cx="8" cy="${ly - 4}" r="3" fill="#ffffff" stroke="${s.color}" stroke-width="2" />
        <text x="24" y="${ly}" font-family="Inter, sans-serif" font-size="12" fill="#18191a">${s.name}</text>
      `;
    });

    // Add note on fixed time modes
    svg += `
        <g transform="translate(0, 115)">
          <rect x="0" y="0" width="130" height="64" rx="3" fill="#f4f3ec" stroke="#e0ded5" />
          <text x="8" y="16" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#4d5156">FIXED TIME (ST):</text>
          <text x="8" y="32" font-family="JetBrains Mono, monospace" font-size="10" fill="#205036">st 0.5s: 99.3%</text>
          <text x="8" y="48" font-family="JetBrains Mono, monospace" font-size="10" fill="#205036">st 2.0s: 99.0%</text>
        </g>
      </g>
    `;

    svg += `</svg>`;
    container.innerHTML = svg;
  },

  renderEmptyState() {
    return `
      <div class="chart-empty-state">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <p class="empty-state-title">Awaiting extended time-control benchmarks</p>
        <p class="empty-state-desc">Performance scaling graphs will populate as additional test match series are completed.</p>
      </div>
    `;
  }
};

// 6. Custom Native SVG Chart 3: White vs. Black Color Performance Comparison
const ColorPerformanceChart = {
  render() {
    const container = document.getElementById("chartColorPerformanceContainer");
    if (!container) return;

    const data = [
      {
        opponent: "TSCP",
        whitePct: 88.5,
        blackPct: 87.6,
        whiteRecord: "+684 −68 =48",
        blackRecord: "+672 −71 =57",
        bias: "+0.9% White"
      },
      {
        opponent: "Stockfish (2000)",
        whitePct: 63.7,
        blackPct: 57.0,
        whiteRecord: "+181 −99 =20",
        blackRecord: "+164 −122 =14",
        bias: "+6.7% White"
      },
      {
        opponent: "Fairy-Max",
        whitePct: 72.5,
        blackPct: 62.5,
        whiteRecord: "+136 −46 =18",
        blackRecord: "+110 −60 =30",
        bias: "+10.0% White"
      },
      {
        opponent: "Overall Total",
        whitePct: 80.3,
        blackPct: 76.7,
        whiteRecord: "+1,001 −213 =86",
        blackRecord: "+946 −253 =101",
        bias: "+3.6% White"
      }
    ];

    const width = 800;
    const height = 320;
    const paddingLeft = 170;
    const paddingRight = 90;
    const paddingTop = 36;
    const paddingBottom = 40;
    const chartW = width - paddingLeft - paddingRight;
    const rowHeight = 60;

    let svg = `
      <svg viewBox="0 0 ${width} ${height}" class="native-svg-chart" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Comparison of Mite score percentage as White versus Black across opponents">
        <!-- 50% Baseline -->
        <line x1="${paddingLeft + chartW * 0.5}" y1="${paddingTop - 15}" x2="${paddingLeft + chartW * 0.5}" y2="${height - paddingBottom + 10}" stroke="#b5b1a3" stroke-width="1" stroke-dasharray="3,3" />
        <text x="${paddingLeft + chartW * 0.5}" y="${paddingTop - 20}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="middle">50% Parity</text>

        <!-- Axis Labels -->
        <text x="${paddingLeft}" y="${height - paddingBottom + 24}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d">0%</text>
        <text x="${paddingLeft + chartW * 0.5}" y="${height - paddingBottom + 24}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="middle">50%</text>
        <text x="${paddingLeft + chartW}" y="${height - paddingBottom + 24}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="end">100%</text>
    `;

    data.forEach((item, idx) => {
      const y = paddingTop + idx * rowHeight;
      const isAggregate = idx === data.length - 1;
      const whiteW = Math.round(chartW * (item.whitePct / 100));
      const blackW = Math.round(chartW * (item.blackPct / 100));

      svg += `
        <g class="chart-bar-group">
          ${isAggregate ? `<line x1="${paddingLeft - 30}" y1="${y - 8}" x2="${width - 20}" y2="${y - 8}" stroke="#d0cec4" stroke-width="1.5" />` : ''}

          <!-- Opponent Label -->
          <text x="${paddingLeft - 14}" y="${y + 16}" font-family="Inter, sans-serif" font-weight="${isAggregate ? '600' : '500'}" font-size="12" fill="#18191a" text-anchor="end">
            ${item.opponent}
          </text>
          <text x="${paddingLeft - 14}" y="${y + 32}" font-family="JetBrains Mono, monospace" font-size="10" fill="#71767d" text-anchor="end">
            ${item.bias}
          </text>

          <!-- White Bar -->
          <rect x="${paddingLeft}" y="${y + 2}" width="${chartW}" height="14" rx="2" fill="#edebe4" />
          <rect x="${paddingLeft}" y="${y + 2}" width="${whiteW}" height="14" rx="2" fill="#e8f0ec" stroke="#205036" stroke-width="1">
            <title>Mite as White vs ${item.opponent}: ${item.whitePct.toFixed(1)}% (${item.whiteRecord})</title>
          </rect>
          <text x="${paddingLeft + whiteW + 8}" y="${y + 13}" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="#205036">
            ${item.whitePct.toFixed(1)}% W
          </text>

          <!-- Black Bar -->
          <rect x="${paddingLeft}" y="${y + 20}" width="${chartW}" height="14" rx="2" fill="#edebe4" />
          <rect x="${paddingLeft}" y="${y + 20}" width="${blackW}" height="14" rx="2" fill="#222324">
            <title>Mite as Black vs ${item.opponent}: ${item.blackPct.toFixed(1)}% (${item.blackRecord})</title>
          </rect>
          <text x="${paddingLeft + blackW + 8}" y="${y + 31}" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600" fill="#18191a">
            ${item.blackPct.toFixed(1)}% B
          </text>
        </g>
      `;
    });

    // Legend
    svg += `
      <g transform="translate(${paddingLeft + 10}, ${height - paddingBottom + 12})">
        <rect x="0" y="0" width="12" height="12" rx="2" fill="#e8f0ec" stroke="#205036" stroke-width="1" />
        <text x="18" y="10" font-family="Inter, sans-serif" font-size="11" fill="#4d5156">Mite as White</text>
        <rect x="120" y="0" width="12" height="12" rx="2" fill="#222324" />
        <text x="138" y="10" font-family="Inter, sans-serif" font-size="11" fill="#4d5156">Mite as Black</text>
      </g>
    `;

    svg += `</svg>`;
    container.innerHTML = svg;
  }
};

// 7. Custom Native SVG Chart 4: Game Termination & Decisiveness Breakdown
const TerminationChart = {
  render() {
    const container = document.getElementById("chartTerminationsContainer");
    if (!container) return;

    const terminations = [
      { type: "Checkmate Wins", count: 1944, pct: 74.8, color: "#205036", cat: "win" },
      { type: "Opponent Time Forfeits", count: 3, pct: 0.1, color: "#2e7d52", cat: "win" },
      { type: "Checkmate Losses", count: 466, pct: 17.9, color: "#8a3030", cat: "loss" },
      { type: "Threefold Repetition", count: 74, pct: 2.8, color: "#7a6730", cat: "draw" },
      { type: "Insufficient Material", count: 54, pct: 2.1, color: "#9c8542", cat: "draw" },
      { type: "50-Move Rule", count: 29, pct: 1.1, color: "#b8a25c", cat: "draw" },
      { type: "Stalemate", count: 4, pct: 0.2, color: "#c9b775", cat: "draw" }
    ];

    const width = 800;
    const height = 180;
    const paddingLeft = 30;
    const paddingRight = 30;
    const paddingTop = 30;
    const barW = width - paddingLeft - paddingRight;

    let svg = `
      <svg viewBox="0 0 ${width} ${height}" class="native-svg-chart" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Game termination and decisiveness distribution across 2,600 verified games">
        <text x="${paddingLeft}" y="${paddingTop - 10}" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#18191a">
          Decisiveness: 92.8% (2,413 Decisive Games) · 7.2% Draws (187 Draws)
        </text>

        <!-- Segmented Track Background -->
        <rect x="${paddingLeft}" y="${paddingTop}" width="${barW}" height="32" rx="3" fill="#edebe4" />
    `;

    let currentX = paddingLeft;
    terminations.forEach(term => {
      const segW = Math.max(2, Math.round(barW * (term.count / 2600)));
      svg += `
        <rect x="${currentX}" y="${paddingTop}" width="${segW}" height="32" fill="${term.color}">
          <title>${term.type}: ${term.count} games (${term.pct}%)</title>
        </rect>
      `;
      currentX += segW;
    });

    // Legend below bar
    const legendItems = [
      { label: "Mite Wins (1,947 · 74.9%)", color: "#205036" },
      { label: "Checkmate Losses (466 · 17.9%)", color: "#8a3030" },
      { label: "Repetition (74 · 2.8%)", color: "#7a6730" },
      { label: "Insufficient (54 · 2.1%)", color: "#9c8542" },
      { label: "50-Move (29 · 1.1%)", color: "#b8a25c" },
      { label: "Stalemate (4 · 0.2%)", color: "#c9b775" }
    ];

    let legX = paddingLeft;
    let legY = paddingTop + 52;
    legendItems.forEach((item, i) => {
      if (i === 3) {
        legX = paddingLeft;
        legY += 22;
      }
      svg += `
        <g transform="translate(${legX}, ${legY})">
          <rect x="0" y="0" width="10" height="10" rx="2" fill="${item.color}" />
          <text x="16" y="9" font-family="Inter, sans-serif" font-size="11" fill="#4d5156">${item.label}</text>
        </g>
      `;
      legX += (i < 2 ? 230 : 170);
    });

    svg += `</svg>`;
    container.innerHTML = svg;
  }
};

