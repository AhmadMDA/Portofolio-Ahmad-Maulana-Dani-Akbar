# Deployment Guide

## Pre-Deployment Checklist

- [ ] Update project data in `src/data/projects.js`
- [ ] Update contact info in `src/components/ContactSection.jsx`
- [ ] Update social links in `src/components/Footer.jsx`
- [ ] Test locally: `npm run dev`
- [ ] Build production: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Update `.env.example` with all variables
- [ ] Update GitHub repository

## Option 1: Deploy to Vercel ⭐ Recommended

### Step 1: Prepare Repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Visit https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Select "React" as framework
5. Click "Deploy"

### Step 3: Configure Environment Variables
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add each variable from `.env.example`:
   - `VITE_CONTACT_EMAIL`
   - `VITE_GITHUB_URL`
   - etc.

### Step 4: Deploy
- Automatic on every push to main
- Or click "Redeploy" manually

**Result:** Your site will be live at `https://your-project.vercel.app`

---

## Option 2: Deploy to Netlify

### Step 1: Prepare Build
```bash
npm run build
```

### Step 2: Connect to Netlify
**Method A: Using Netlify UI**
1. Visit https://netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag and drop `dist` folder
4. Your site is live!

**Method B: Using Git**
1. Push to GitHub
2. Visit https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

### Step 3: Configure Environment Variables
1. Site settings → Build & Deploy → Environment
2. Add variables:
   - VITE_CONTACT_EMAIL
   - VITE_GITHUB_URL
   - etc.

**Result:** Your site will be at `https://your-site.netlify.app`

---

## Option 3: Deploy to GitHub Pages

### Step 1: Update vite.config.js
```javascript
export default {
  base: '/portfolio/',  // atau '/' jika di root
  // ... rest of config
}
```

### Step 2: Build & Deploy
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push
```

### Step 3: Configure GitHub
1. Go to Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, folder: `/docs` (or `dist`)
4. Save

**Result:** Your site at `https://yourusername.github.io/portfolio/`

---

## Option 4: Deploy to Traditional Hosting (cPanel)

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload Files
1. FTP/SFTP ke hosting
2. Upload isi folder `dist/` ke folder public

### Step 3: Configure htaccess
Create `.htaccess` in dist folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Option 5: Deploy Locally (XAMPP)

### Step 1: Build
```bash
npm run build
```

### Step 2: Move Files
```bash
# Copy dist folder ke htdocs
xcopy dist d:\xampp\htdocs\portfolio-prod /E /I
```

### Step 3: Access
Visit: `http://localhost/portfolio-prod/`

---

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile
- [ ] Check all links work
- [ ] Test contact form (if applicable)
- [ ] Verify social links open correctly
- [ ] Test on different browsers
- [ ] Check performance (Lighthouse)
- [ ] Setup SSL/HTTPS
- [ ] Monitor for errors

---

## Troubleshooting

### 404 Errors After Deploy
**Solution:** Make sure all routes redirect to index.html
- Vercel: Automatic ✓
- Netlify: Add `_redirects` file (included)
- GitHub Pages: Update base URL in vite.config.js
- Traditional: Configure .htaccess

### Styling Issues
**Solution:** Check base URL in vite.config.js matches deploy path

### Environment Variables Not Working
**Solution:** 
1. Set variables in platform settings
2. Restart deployment
3. Clear browser cache

### Build Fails
**Solution:**
1. Check Node.js version (14+)
2. Delete node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

---

## Performance Tips

### Before Deployment
```bash
# Check bundle size
npm run build

# Show file sizes
du -sh dist/
```

### Optimize Images
- Use WEBP format when possible
- Compress images before upload
- Use CDN for static assets

### Enable Gzip Compression
- Vercel: Automatic ✓
- Netlify: Automatic ✓
- Others: Configure on server

---

## Domain Setup

### Custom Domain on Vercel
1. Domains → Add Domain
2. Update DNS records
3. Wait 24-48 hours

### Custom Domain on Netlify
1. Site settings → Domain management
2. Add new domain
3. Update DNS records

---

## Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Redeploy After Updates
- Git commit and push (Vercel/Netlify)
- Re-upload files (traditional hosting)

### Monitor Performance
- Vercel Analytics
- Netlify Analytics
- Google Analytics (if added)

---

## Security Best Practices

- ✅ Use HTTPS (included in Vercel/Netlify)
- ✅ Don't commit secrets (.env.local)
- ✅ Keep dependencies updated
- ✅ Use security headers
- ✅ Regular backups

---

## Support & Help

- Vercel: https://vercel.com/support
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com
- Vite: https://vitejs.dev

---

**Recommended for beginners:** Vercel or Netlify (easiest setup)

Happy deploying! 🚀
