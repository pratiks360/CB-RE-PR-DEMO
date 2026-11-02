<p align="center">
  <h1 align="center">🤝 Couchbase × Redington Partner Site</h1>
  <p align="center">
    <strong>Single-page pitch site for a Couchbase distribution partnership: market reality, product portfolio, proven success and the Redington-exclusive offer.</strong>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/Live_Site-GitHub_Pages-e11d48?style=for-the-badge" alt="Live_Site">
    <img src="https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white" alt="React">
    <img src="https://img.shields.io/badge/Tailwind-4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
    <img src="https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
    <img src="https://img.shields.io/github/last-commit/pratiks360/CB-RE-PR-DEMO?style=for-the-badge&label=Last+Commit" alt="Last Commit">
  </p>
</p>

---

## ✨ What Is This?

A React + Tailwind landing page built as a partner-pitch demo. It walks a reader through **The Market Reality**, **The Portfolio**, **Proven Success** and a **Redington Exclusive** section in one scrolling page. It deploys itself to GitHub Pages on every push to `main`.

> 🌐 **Live →** [pratiks360.github.io/CB-RE-PR-DEMO](https://pratiks360.github.io/CB-RE-PR-DEMO/)

## 🚀 Quick Start

**Prerequisites:** [Node.js 20+](https://nodejs.org/)

```bash
git clone https://github.com/pratiks360/CB-RE-PR-DEMO.git
cd CB-RE-PR-DEMO
npm install
npm run dev        # http://localhost:5173/CB-RE-PR-DEMO/
npm run build      # production bundle in dist/
```

## 🧩 How It Works

```
 git push main ──► GitHub Actions (deploy.yml) ──► npm ci + vite build ──► GitHub Pages
```

`vite.config.js` sets `base: '/CB-RE-PR-DEMO/'` so assets resolve under the project-pages path.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **UI** | React 18, lucide-react icons |
| **Styling** | Tailwind CSS 4 |
| **Build** | Vite 5 |
| **Hosting** | GitHub Pages via Actions |

## 📄 License

No license file is included; all rights reserved by the author.

---

<p align="center">
  <sub>Built with ❤️ for a partner pitch.</sub>
</p>
