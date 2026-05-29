# Environment Variables Guide

## Setup

### 1. Create Local Environment File
Copy `.env.example` ke `.env.local`:

```bash
# Windows
copy .env.example .env.local

# Mac/Linux
cp .env.example .env.local
```

### 2. Edit `.env.local`
Update nilai-nilai sesuai kebutuhan Anda

## Using Environment Variables in Code

### In React Components
```javascript
// Akses di component
const apiUrl = import.meta.env.VITE_API_URL
const email = import.meta.env.VITE_CONTACT_EMAIL

console.log(apiUrl)
```

### Example: Update Contact Information
Edit `src/components/ContactSection.jsx`:

```javascript
// Before
<p>hello@example.com</p>

// After
<p>{import.meta.env.VITE_CONTACT_EMAIL}</p>
```

### Example: Dynamic Footer Links
Edit `src/components/Footer.jsx`:

```javascript
<a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
  <FiGithub size={24} />
</a>
```

## Important Notes

### Development vs Production
- `.env.local` untuk development (tidak di-commit)
- `.env.example` untuk dokumentasi (di-commit)
- Untuk production, set variables di hosting platform (Vercel, Netlify, etc)

### Naming Convention
- Semua variable harus diawali `VITE_`
- Huruf besar dengan underscore separator
- Contoh: `VITE_CONTACT_EMAIL`

### Security
- Jangan commit `.env.local`
- Jangan expose secrets di browser
- Untuk sensitive data, gunakan backend

## Vercel Deployment

1. Push code ke GitHub
2. Connect ke Vercel
3. Set Environment Variables di Vercel Dashboard:
   - Settings → Environment Variables
   - Add variable dengan nilai production

## Netlify Deployment

1. Set Site settings → Build & Deploy → Environment
2. Add build environment variables
3. Deploy

## Common Variables

```
# Email
VITE_CONTACT_EMAIL=your.email@gmail.com

# Social Media
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile

# API
VITE_API_URL=https://api.yourserver.com

# Analytics
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## Accessing in JSX

```javascript
export default function ContactSection() {
  const email = import.meta.env.VITE_CONTACT_EMAIL
  
  return (
    <a href={`mailto:${email}`}>
      {email}
    </a>
  )
}
```

## Debugging

Untuk cek apakah variables sudah ter-load:

```javascript
console.log(import.meta.env)
```

Akan menampilkan semua variables yang tersedia.

## Troubleshooting

### Variable not showing?
1. Pastikan nama diawali `VITE_`
2. Restart dev server: `npm run dev`
3. Refresh browser

### Different on production?
1. Set variables di platform hosting
2. Rebuild application
3. Clear browser cache

---

Untuk info lebih lanjut: https://vitejs.dev/guide/env-and-mode.html
