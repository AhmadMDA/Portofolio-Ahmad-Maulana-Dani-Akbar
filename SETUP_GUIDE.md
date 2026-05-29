# Setup Guide

## Prerequisites

Sebelum memulai, pastikan Anda sudah menginstall:
- Node.js (versi 14 atau lebih tinggi)
- npm (biasanya datang dengan Node.js)

## Quick Start

### 1. Navigate to Portfolio Directory
```bash
cd d:\xampp\htdocs\portfolio
```

### 2. Install Dependencies
```bash
npm install
```

Ini akan menginstall semua package yang diperlukan:
- react
- react-dom
- react-icons
- framer-motion
- vite
- @vitejs/plugin-react

### 3. Start Development Server
```bash
npm run dev
```

Aplikasi akan terbuka di `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## Troubleshooting

### Port 5173 sudah terpakai?
Vite akan otomatis menggunakan port berikutnya. Cek terminal untuk URL yang benar.

### Module not found error?
```bash
# Hapus node_modules dan package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### Build error?
```bash
npm cache clean --force
npm install
npm run build
```

## File Structure Guide

```
portfolio/
├── index.html              # Entry point HTML
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
├── README.md              # Project documentation
│
├── public/                # Static assets
│   └── ...
│
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Main App component
    ├── App.css            # App styles
    │
    ├── components/        # React components
    │   ├── Navbar.jsx
    │   ├── Navbar.css
    │   ├── Hero.jsx
    │   ├── Hero.css
    │   ├── ProjectCard.jsx
    │   ├── ProjectCard.css
    │   ├── ProjectsSection.jsx
    │   ├── ProjectsSection.css
    │   ├── AboutSection.jsx
    │   ├── AboutSection.css
    │   ├── ContactSection.jsx
    │   ├── ContactSection.css
    │   ├── Footer.jsx
    │   └── Footer.css
    │
    ├── data/              # Data files
    │   └── projects.js    # Project information
    │
    └── styles/            # Global styles
        └── index.css      # Global CSS variables
```

## Development Tips

### Add New Project
1. Edit `src/data/projects.js`
2. Add new project object dengan struktur:
```javascript
{
  id: 6,
  title: "Project Name",
  description: "Description",
  image: "image-url",
  github: "github-url",
  live: "live-url",
  features: ["Feature 1", "Feature 2"],
  techs: ["Tech 1", "Tech 2"]
}
```

### Customize Colors
Edit di `src/styles/index.css`:
```css
:root {
  --primary: #6366f1;      /* Main color */
  --secondary: #8b5cf6;    /* Secondary color */
  --accent: #ec4899;       /* Accent color */
  /* ... */
}
```

### Add New Section
1. Create component file di `src/components/`
2. Create CSS file
3. Import di `src/App.jsx`
4. Add ke JSX render

## Performance Optimization

- Vite sudah mengoptimalkan build
- CSS diminify dan dikombinasikan
- JavaScript di-bundle dan di-tree-shake
- Image optimization recommended

## Deployment Options

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. `npm run build`
2. Upload `dist` folder ke Netlify

### GitHub Pages
1. `npm run build`
2. Push `dist` ke gh-pages branch

## Environment Variables

Jika diperlukan, buat file `.env.local`:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your-email@example.com
```

Akses di code:
```javascript
console.log(import.meta.env.VITE_API_URL)
```

## Need Help?

- Check React documentation: https://react.dev
- Check Vite documentation: https://vitejs.dev
- Open an issue on GitHub

## Updates & Maintenance

Untuk update dependencies:
```bash
npm update
```

Untuk install specific version:
```bash
npm install react@18.2.0
```

Untuk remove unused dependencies:
```bash
npm prune
```

---

Selamat mengembangkan! 🚀
