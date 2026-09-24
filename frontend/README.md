# Simatrix Academy

Premium tech education platform — **Learn. Practice. Build. Get Career Ready.**

Simatrix Academy replaces passive video lectures with an active pipeline: live sessions, hands-on coding arenas (CodeArena, SQLLab, WebLab), real production projects, and verified student portfolios.

## Tech Stack

| Layer    | Tech                                   |
| -------- | -------------------------------------- |
| Frontend | Next.js 16, React 19, CSS Variables    |
| Backend  | Node.js, Express                       |
| Fonts    | Plus Jakarta Sans, JetBrains Mono      |
| Design   | Custom semantic color token system     |

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs on `http://localhost:5000` by default.

## Project Structure

```
frontend/
├── app/              # Next.js App Router pages
│   ├── colors.css    # Semantic color token system
│   ├── globals.css   # Global styles and utilities
│   ├── layout.js     # Root layout with navbar, footer
│   ├── page.js       # Homepage
│   ├── about/        # About page
│   ├── courses/      # Course listings
│   ├── practice/     # CodeArena / practice tools
│   ├── programs/     # Flagship program pages
│   ├── profile/      # Student portfolio profiles
│   ├── verify/       # Credential verification
│   └── ...
├── components/
│   ├── common/       # Reusable UI (Button, Badge, Card)
│   ├── home/         # Homepage sections (Hero, Pillars, etc.)
│   └── layout/       # Navbar, Footer, AnnouncementBar
└── lib/              # Utilities and helpers

backend/
└── src/
    └── server.js     # Express API server
```

## Color System

All design tokens live in `frontend/app/colors.css`. The system uses semantic variable names so you change values without renaming anything across the codebase. See the file header comments for the full token map.
