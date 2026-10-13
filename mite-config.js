/**
 * Mite Chess Engine — Central Website Configuration
 *
 * All external links, project specifications, and developer information
 * are maintained in this single file for straightforward customization.
 */

const MITE_CONFIG = {
  // Brand & identity
  brand: {
    name: "Mite",
    version: "2.0",
    tagline: "Small source. Serious chess.",
    eyebrow: "COMPACT CHESS ENGINE · WRITTEN IN C",
    description: "Mite is a lightweight chess engine written in C, built around a simple goal: deliver a playable, UCI-compatible engine targeting ~2000-Elo-class strength with a remarkably compact codebase of under 20 KB source code and a ~115 KB standalone binary.",
    targetRating: "~2000 Elo (Unofficial Internal Estimate)"
  },

  // Author details (verified)
  author: {
    name: "Viraj Ravani",
    role: "Creator and Developer",
    portfolioUrl: "https://virajravani.in/",
    githubUrl: "https://github.com/v3ravani",
    linkedinUrl: "https://www.linkedin.com/in/virajravani/",
    email: "viraj.ravani@somaiya.edu"
  },

  // External URLs (centralized configuration)
  urls: {
    // Official Website
    officialWebsite: "https://www.virajravani.in/mite",

    // Primary repository
    githubRepo: "https://github.com/v3ravani/mite-chess-engine",
    githubReleases: "https://github.com/v3ravani/mite-chess-engine/releases",
    githubSource: "https://github.com/v3ravani/mite-chess-engine/blob/main/src/Mite.c",
    githubIssues: "https://github.com/v3ravani/mite-chess-engine/issues",

    // Downloads & raw assets
    windowsExecutable: "https://github.com/v3ravani/mite-chess-engine/raw/main/bin/Mite.exe",
    
    // Live Play Demo (Hugging Face Spaces)
    huggingFaceDemo: "https://huggingface.co/spaces/virajravani/mite-chess",

    // External rating lists & registries
    computerChessIndex: "https://computer-chess-index.github.io/cci/",

    // Repository documentation links
    engineNotes: "https://github.com/v3ravani/mite-chess-engine/blob/main/ENGINE_NOTES.md",
    setupGuide: "https://github.com/v3ravani/mite-chess-engine/blob/main/SETUP.md",
    benchmarksReport: "https://github.com/v3ravani/mite-chess-engine/blob/main/benchmarks/overview.md",
    license: "https://github.com/v3ravani/mite-chess-engine/blob/main/LICENSE"
  },

  // Verified Engine Technical Specifications
  specs: {
    language: "ANSI C (C99 standard compatible)",
    sourceSize: "< 20 KB (19.7 KB across ~409 lines in src/Mite.c)",
    sourceLines: "~409 lines",
    binarySize: "~115 KB standalone static Windows executable",
    targetFootprint: "Under 220 KB",
    protocol: "UCI (Universal Chess Interface)",
    boardRepresentation: "0x88 board coordinate system with O(1) off-board detection",
    searchPipeline: "Negamax with Principal Variation Search (PVS), Iterative Deepening to 24 plies, dynamic aspiration windows (±65), Quiescence search with SEE pruning, Null-Move Pruning (NMP), Late Move Reductions (LMR), Late Move Pruning (LMP), and reverse futility pruning",
    moveOrdering: "Transposition table PV move, MVV-LVA, SEE captures, two-tier killer moves, countermoves, depth² history heuristic",
    transpositionTable: "16 MB default (2²⁰ entries) indexed by 64-bit Zobrist hashing keys",
    evaluation: "Handcrafted static evaluation: material balance, packed piece-square tables, pawn structure, rook open files, king safety, knight outposts, bishop pairs, and endgame king-opposition heuristics",
    supportedPlatforms: "Windows (precompiled x64 binary), POSIX / Linux (portable build), WebAssembly (browser)",
    license: "MIT License",
    dependencies: "Zero runtime DLLs or third-party libraries"
  },

  // Verified Benchmark Aggregate Totals (2,600 games)
  benchmarkStats: {
    totalMatches: 13,
    totalGames: 2600,
    overallWins: 1947,
    overallLosses: 466,
    overallDraws: 187,
    overallScorePct: 78.5,
    whiteRecord: {
      games: 1300,
      wins: 1001,
      losses: 213,
      draws: 86,
      scorePct: 80.3
    },
    blackRecord: {
      games: 1300,
      wins: 946,
      losses: 253,
      draws: 101,
      scorePct: 76.7
    },
    stability: {
      engineCrashes: 0,
      illegalMoves: 0,
      timeForfeitLosses: 0,
      opponentTimeForfeits: 3
    },
    decisivenessPct: 92.8,
    drawRatePct: 7.2
  }
};
