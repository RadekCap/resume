# Resume - Movie-Themed CV Collection

A creative portfolio showcasing my professional experience through 10 different movie and series themes. Each theme presents the same information in a unique, immersive style.

## 🎬 Available Themes

- **X-Men (Cerebro)** - Mutant powers meet cluster management
- **X-Men (Mutant)** - Alternative X-Men themed design
- **Lord of the Rings** - An epic journey through Middle-Earth
- **Lord of the Rings (Alt)** - Alternative LOTR parchment style
- **Star Wars** - A long time ago in a galaxy far, far away...
- **James Bond 007** - Shaken, not stirred
- **Resident Evil** - Survival horror meets software engineering
- **Harry Potter** - The wizard who coded
- **The Matrix** - Follow the white rabbit
- **Terminator** - I'll be back

## 🚀 Live Site

Visit the live site at: **https://radekcap.github.io/resume/**

## 💻 Development

### Prerequisites
- Node.js 20 or higher
- npm

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS (via inline styles)
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD pipeline

## 📦 Project Structure

```
resume/
├── .github/
│   └── workflows/
│       ├── deploy-github-pages.yml    # Deployment workflow
│       └── delete-branch-on-merge.yml # Auto-cleanup workflow
├── pages/                             # Individual CV theme components
│   ├── xmen.js
│   ├── xmen-alt.js
│   ├── lord-of-the-rings.js
│   ├── lord-of-the-rings-alt.js
│   ├── star-wars.js
│   ├── james-bond.js
│   ├── resident-evil.js
│   ├── harry-potter.js
│   ├── matrix.js
│   └── terminator.js
├── src/
│   ├── App.jsx                        # Main app with routing
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── index.html                         # HTML template
├── vite.config.js                     # Vite configuration
└── package.json                       # Dependencies and scripts
```

## 🔄 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions.

## 📝 License

© 2025 Radoslav Cap. All themes are creative representations of my professional experience.
