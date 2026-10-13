# Mite Chess Engine Website

Official website and tournament benchmark report for **Mite**, a lightweight UCI chess engine written in C by [Viraj Ravani](https://virajravani.in/).

- **Engine Repository:** [v3ravani/mite-chess-engine](https://github.com/v3ravani/mite-chess-engine)
- **Live Play Demo:** [Hugging Face Spaces](https://huggingface.co/spaces/virajravani/mite-chess)
- **Listing:** Listed in the [Computer Chess Index (CCI)](https://computer-chess-index.github.io/cci/) on 13-10-26

---

## Overview

Mite is an engineering study in algorithmic density: a playable, UCI-compatible chess engine targeting ~2000-Elo-class playing strength contained in under 20 KB of ANSI C source code (`src/Mite.c`) and a ~115 KB standalone binary.

This repository hosts the static, zero-dependency website and verified benchmark report documentation.

### Pages

- **`index.html` / `mite.html`**: Main showcase page featuring engine architecture, UCI specifications, interactive 0x88 chessboard preview, feature breakdowns, GUI setup guides (Arena, Cutechess, CLI, Terminal), and downloads.
- **`mite-benchmarks.html`**: Comprehensive tournament benchmark report documenting **2,600 verified games** across 13 match series against Stockfish (2000 Elo), TSCP v1.81, and Fairy-Max 5.0b, complete with interactive SVG graphs, color splits, and game termination audits.

---

## Architecture & Tech Stack

- **Core:** Semantic HTML5 & Vanilla JavaScript (ES6+, zero frameworks, zero external runtime bundles).
- **Styling:** Vanilla CSS design system with custom CSS custom properties, responsive breakpoints (desktop, tablet, mobile down to 320px), and smooth micro-animations.
- **Graphics & Visualizations:** Native interactive SVG charts and 0x88 chessboard piece rendering.
- **SEO & Accessibility:**
  - Full Open Graph and Twitter Card metadata.
  - JSON-LD structured data (`WebSite`, `SoftwareApplication`, `TechArticle`, `BreadcrumbList`, and `Person`).
  - Production `robots.txt` and `sitemap.xml`.
  - Accessible ARIA landmarks, gridcells, and screen-reader alternatives.

---

## License

Released under the [MIT License](https://github.com/v3ravani/mite-chess-engine/blob/main/LICENSE).
Created and maintained by [Viraj Ravani](https://virajravani.in/).
