# 🧩 Memory Game

An interactive browser-based memory and attention training game built on the "find a pair" principle.

## 📝 Project Description
The player flips cards on the game board, trying to memorize their layout. The objective of the game is to find all matching pairs of cards in the fewest moves and shortest time possible.

## 🛠️ Tech Stack
* **Core:** JavaScript (ES6+), Vanilla JS (no heavy UI frameworks)
* **Bundler:** [Vite](https://vitejs.dev)
* **Styling:** CSS3 (Modern Grid & Flexbox)
* **Linting & Formatting:** ESLint + Prettier (Standard Code Convention)
* **Git Hooks:** Husky (automatic pre-commit code verification)
* **Fonts:** Bubblegum Sans (Google Fonts)

## 🏗️ Project Architecture
The project follows a modular structure to isolate business logic from the UI representation:
```text
memory-game/
├── .husky/              # Git hooks configuration (pre-commit)
├── src/
│   ├── assets/          # Static assets (icons, fonts)
│   ├── components/      # UI components (Card, Board, Timer, Scoreboard)
│   ├── core/            # Pure business logic (Game Engine, State, Algorithms)
│   ├── styles/          # Global styles and CSS variables
│   └── main.js          # Entry point and application initialization
├── index.html           # Main HTML template
└── package.json         # Dependencies and build scripts
```

## ⚡ Optimization & Algorithms
* **Card Shuffling Algorithm:** Uses the **Fisher-Yates Shuffle** algorithm.
  * **Time Complexity:** O(N) — linear time, cards are shuffled in exactly one pass.
  * **Space Complexity:** O(1) — shuffling happens *in-place* (within the existing array) without allocating extra memory.
* **Rendering:** Optimized direct DOM access without redundant layout recalculations (Reflow/Repaint).

## 🚀 Quick Start

### Requirements
* [Node.js](https://nodejs.org) (version 18.x or higher)
* npm (or yarn/pnpm)

### Project Initialization
1. Install the project dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Once started, the game will be available at `http://localhost:5173`.

### Available Scripts
* `npm run dev` — Starts the local development server (Vite).
* `npm run build` — Builds the optimized production-ready project into the `/dist` directory.
* `npm run preview` — Previews the production build locally.
* `npm run lint` — Validates code with ESLint and automatically applies minor fixes (`--fix`).
* `npm run format` — Enforces consistent formatting across all code files using Prettier.

