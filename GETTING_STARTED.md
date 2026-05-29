# Getting Started - Quick Reference

## 🚀 Start Here

Selamat! Portfolio website Anda sudah siap. Ikuti langkah-langkah di bawah untuk mulai.

## ⚡ Quick Start (5 Menit)

### 1. Buka Terminal
```bash
cd d:\xampp\htdocs\portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

### 4. Buka di Browser
```
http://localhost:5173
```

**Selesai!** Website Anda sekarang live untuk development.

## 📝 Customization (10 Menit)

### Update Project Data
Edit file: `src/data/projects.js`

Hapus/ubah 5 proyek default dengan proyek Anda sendiri.

### Update Contact Info
Edit file: `src/components/ContactSection.jsx`

Update email, phone, dan location.

### Update Social Links
Edit file: `src/components/Footer.jsx`

Add link GitHub, LinkedIn, Twitter Anda.

### Change Colors
Edit file: `src/styles/index.css`

Update CSS variables untuk warna sesuai preferensi.

## 🎨 Hasil

Setelah customization, Anda akan punya:
- ✅ Professional portfolio website
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI dengan animations
- ✅ 5 project showcase
- ✅ Contact form
- ✅ Social media links

## 📚 Documentation

Kami sudah menyediakan 8 file dokumentasi:

1. **README.md** - Pengenalan proyek
2. **SETUP_GUIDE.md** - Panduan instalasi & troubleshooting
3. **DEVELOPMENT_GUIDE.md** - Tips pengembangan
4. **DEPLOYMENT_GUIDE.md** - Cara deploy ke internet
5. **ENV_VARIABLES.md** - Konfigurasi environment
6. **FILES_STRUCTURE.md** - Struktur file proyek
7. **PROJECT_SUMMARY.md** - Ringkasan proyek
8. **GETTING_STARTED.md** - File ini

## 🌐 Deploy ke Internet

### Opsi 1: Vercel (Recommended - Paling Mudah)
```bash
npm install -g vercel
vercel
```

Ikuti instruksi di layar. Website Anda akan live di vercel.app!

### Opsi 2: Netlify
1. `npm run build`
2. Drag & drop folder `dist` ke https://netlify.com
3. Done! Live di netlify.app

### Opsi 3: GitHub Pages
Push ke GitHub dan gunakan GitHub Pages settings.

**Lihat DEPLOYMENT_GUIDE.md untuk instruksi detail.**

## 🛠️ Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Build & Deploy
npm run build            # Create production build
npm run preview          # Preview production build

# Maintenance
npm update              # Update dependencies
npm audit               # Check security
npm audit fix           # Fix vulnerabilities
```

## 📁 File Structure

```
portfolio/
├── src/
│   ├── components/      # 7 React components
│   ├── data/           # Project data
│   └── styles/         # Global styles
├── public/             # Static assets
└── Documentation/      # 8 guide files
```

## 🎯 Next Steps

### Immediate (Today)
- [ ] Install dependencies: `npm install`
- [ ] Run dev server: `npm run dev`
- [ ] Customize projects in `src/data/projects.js`
- [ ] Update contact info
- [ ] Update social links

### Short Term (This Week)
- [ ] Test on mobile devices
- [ ] Customize colors & branding
- [ ] Add real project images
- [ ] Test all links
- [ ] Get feedback

### Medium Term (This Month)
- [ ] Deploy to Vercel/Netlify
- [ ] Setup custom domain
- [ ] Setup analytics
- [ ] Share with portfolio
- [ ] Start getting inquiries!

## 📖 Learn More

### Key Documentation
- **SETUP_GUIDE.md** - Jika ada error atau masalah
- **DEVELOPMENT_GUIDE.md** - Untuk add features, customize lebih lanjut
- **DEPLOYMENT_GUIDE.md** - Saat siap deploy

### Useful Links
- React: https://react.dev
- Vite: https://vitejs.dev
- Vercel: https://vercel.com
- Netlify: https://netlify.com

## ❓ FAQ

### Q: Berapa lama setup pertama kali?
A: ±5-10 menit untuk install & jalankan

### Q: Berapa lama sampai live di internet?
A: ±5 menit dengan Vercel/Netlify

### Q: Bisakah saya ubah design?
A: Ya! Edit `src/styles/index.css` untuk colors dan layouts

### Q: Berapa cost untuk deploy?
A: Gratis di Vercel/Netlify (free tier)

### Q: Bisakah saya add lebih banyak section?
A: Ya! Lihat DEVELOPMENT_GUIDE.md untuk caranya

### Q: Gimana jika ada error?
A: Lihat SETUP_GUIDE.md bagian Troubleshooting

## 🚨 Common Issues

### npm install error
```bash
npm cache clean --force
npm install
```

### Port already in use
```bash
npm run dev -- --port 3000
```

### Changes tidak muncul
```
Tekan Ctrl+Shift+R (hard refresh) di browser
```

## 💡 Pro Tips

1. **Use Git** - `git init`, commit changes regularly
2. **Mobile First** - Always test on mobile
3. **Backup** - Backup regularly sebelum major changes
4. **Version Control** - Push ke GitHub untuk safety

## 🎉 You're All Set!

Sekarang Anda bisa:
- ✅ Jalankan website locally
- ✅ Customize sesuai kebutuhan
- ✅ Deploy ke internet
- ✅ Maintain & update

## 📞 Need Help?

1. Check dokumentasi yang sesuai
2. Google the error message
3. Stack Overflow
4. Ask ChatGPT/Claude

## 🎓 Learning Path

Ingin belajar lebih dalam?

1. **React Basics** - https://react.dev/learn
2. **CSS** - https://css-tricks.com/
3. **JavaScript** - https://javascript.info/
4. **Web Development** - https://web.dev/

## ✨ What's Inside

### Components
- Navbar (with mobile menu)
- Hero section
- Projects showcase
- About me
- Contact form
- Footer

### Features
- Fully responsive
- Mobile menu
- Smooth scrolling
- Project filtering
- Contact form
- Social links

### Technologies
- React 18
- Vite
- React Icons
- Modern CSS3
- Responsive design

## 🏁 Ready?

```bash
# Let's go!
cd d:\xampp\htdocs\portfolio
npm install
npm run dev
```

Akses di `http://localhost:5173` dan mulai customize!

---

**Questions?** Baca dokumentasi atau lihat README.md

**Happy coding!** 🚀
