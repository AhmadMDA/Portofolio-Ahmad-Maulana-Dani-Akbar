# Development & Best Practices Guide

## Before You Start

### Tools You'll Need
- Node.js 14+ (https://nodejs.org/)
- Code Editor (VS Code recommended)
- Git (for version control)
- Browser for testing

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Thunder Client or Postman (for API testing)

## Development Workflow

### 1. Initial Setup
```bash
cd d:\xampp\htdocs\portfolio
npm install
code .  # Open in VS Code
```

### 2. Start Development Server
```bash
npm run dev
# Opens http://localhost:5173
```

### 3. Make Changes
- Edit components in `src/components/`
- Changes auto-reload in browser
- Check console for errors

### 4. Commit Changes
```bash
git add .
git commit -m "Feature: description of changes"
git push
```

## Common Development Tasks

### Add a New Project

**Step 1:** Edit `src/data/projects.js`
```javascript
{
  id: 6,
  title: "Project Name",
  description: "Short description",
  image: "https://image-url.com/image.jpg",
  github: "https://github.com/user/repo",
  live: "https://project-url.com",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  techs: ["React", "Node.js", "MongoDB"]
}
```

**Step 2:** Test locally
```bash
npm run dev
# Check if new project appears
```

### Change Color Scheme

**Edit `src/styles/index.css`:**
```css
:root {
  --primary: #6366f1;      /* Change this */
  --secondary: #8b5cf6;    /* Change this */
  --accent: #ec4899;       /* Change this */
}
```

The entire site uses these colors automatically!

### Add New Section

**Step 1:** Create component
```bash
# src/components/MySection.jsx
export default function MySection() {
  return (
    <section id="mysection" className="my-section">
      <div className="container">
        {/* Your content */}
      </div>
    </section>
  )
}
```

**Step 2:** Create stylesheet
```bash
# src/components/MySection.css
.my-section {
  padding: 80px 0;
  background: white;
}
```

**Step 3:** Add to App.jsx
```javascript
import MySection from './components/MySection'

function App() {
  return (
    <div className="app">
      {/* ... other components */}
      <MySection />
      {/* ... */}
    </div>
  )
}
```

### Update Contact Form

**Edit `src/components/ContactSection.jsx`:**

```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Option 1: Send to backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  // Option 2: Use EmailJS
  // emailjs.send(serviceID, templateID, formData)
  
  // Option 3: Use Formspree
  // https://formspree.io/
  
  setFormData({ name: '', email: '', subject: '', message: '' })
}
```

### Customize Navigation Links

**Edit `src/components/Navbar.jsx`:**

Modify the `scrollToSection` function to add new links pointing to section IDs:

```javascript
<li>
  <button onClick={() => scrollToSection('blog')}>
    Blog
  </button>
</li>
```

Make sure corresponding section with `id="blog"` exists.

## Performance Optimization

### 1. Image Optimization
```javascript
// Before
<img src="large-image.jpg" />

// After
import { lazy } from 'react'
const ProjectCard = lazy(() => import('./ProjectCard'))
```

### 2. Code Splitting
Already handled by Vite automatically!

### 3. CSS Optimization
- Combine CSS files if needed
- Remove unused styles
- Use CSS variables for consistency

### 4. Asset Optimization
```bash
# Check bundle size
npm run build

# Analyze bundle
npm run build -- --analyze
```

## Testing Workflow

### Manual Testing

1. **Desktop Testing**
   - Chrome, Firefox, Safari, Edge
   - Test all sections
   - Check all links

2. **Mobile Testing**
   - Use Chrome DevTools (F12 → Toggle device toolbar)
   - Test with actual phone
   - Check touch interactions

3. **Form Testing**
   - Submit form
   - Verify validation
   - Check error messages

4. **Accessibility Testing**
   - Tab navigation
   - Screen reader (NVDA, JAWS)
   - Keyboard only navigation

### Automated Testing (Optional)

```bash
# Install testing library
npm install --save-dev @testing-library/react

# Create tests in __tests__ folder
# Run tests
npm run test
```

## Git Workflow

### Best Practices
```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes
git add .
git commit -m "Add new section"

# Push to remote
git push -u origin feature/new-section

# Create Pull Request on GitHub
# After review, merge to main
```

### Commit Message Format
```
feat: add new section
fix: resolve contact form bug
style: update color scheme
docs: update readme
refactor: optimize performance
```

## Debugging Tips

### Console Errors
1. Open DevTools (F12)
2. Check Console tab
3. Fix errors based on messages
4. Hard refresh (Ctrl+Shift+R)

### Component Not Rendering
```javascript
// Add debug logging
console.log('Component mounted', props)

// Use React DevTools extension
// Check component tree in DevTools
```

### Styling Issues
1. Check CSS classes are correct
2. Inspect element (Right-click → Inspect)
3. Check CSS specificity
4. Clear browser cache

### Performance Issues
1. Open DevTools → Performance tab
2. Record user interaction
3. Analyze bottlenecks
4. Optimize accordingly

## Maintenance Checklist

### Weekly
- [ ] Test website on multiple browsers
- [ ] Check for console errors
- [ ] Test contact form
- [ ] Review analytics (if setup)

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Security audit: `npm audit`
- [ ] Fix vulnerabilities: `npm audit fix`
- [ ] Backup code

### Quarterly
- [ ] Performance audit (Lighthouse)
- [ ] Update content
- [ ] Check broken links
- [ ] Review and refactor code

### Yearly
- [ ] Update major dependencies
- [ ] Review entire codebase
- [ ] Update portfolio with new projects
- [ ] Plan new features

## Security Best Practices

### Code Security
- ✅ Never commit `.env.local`
- ✅ Don't expose API keys in code
- ✅ Use HTTPS everywhere
- ✅ Keep dependencies updated
- ✅ Use security headers

### Content Security
- ✅ Validate form inputs
- ✅ Sanitize user data
- ✅ Use CSP headers
- ✅ Regular backups

### Deployment Security
- ✅ Use strong passwords
- ✅ Enable 2FA on hosting platform
- ✅ Monitor access logs
- ✅ Setup SSL certificates

## Scaling Your Portfolio

### Add Blog Section
1. Create `BlogSection.jsx`
2. Add blog data structure
3. Implement blog page routing
4. Create markdown support (optional)

### Add Dark Mode
1. Add theme context
2. Toggle button in navbar
3. Update CSS variables
4. Save preference to localStorage

### Add Real Backend
1. Create Node.js/Express API
2. Setup database (MongoDB/PostgreSQL)
3. Create API endpoints
4. Update frontend to call API

### Add Analytics
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Useful Resources

### Documentation
- React: https://react.dev
- Vite: https://vitejs.dev
- React Icons: https://react-icons.github.io/react-icons/
- MDN Web Docs: https://developer.mozilla.org/

### Tools
- VS Code: https://code.visualstudio.com/
- GitHub: https://github.com/
- Chrome DevTools: Built into Chrome
- Lighthouse: Built into Chrome

### Learning
- React Tutorial: https://react.dev/learn
- JavaScript: https://javascript.info/
- CSS: https://css-tricks.com/
- Web Performance: https://web.dev/

## Troubleshooting Guide

### `npm install` fails
```bash
npm cache clean --force
npm install
```

### Port 5173 already in use
```bash
# Find process using port
netstat -ano | findstr :5173

# Kill process
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3000
```

### Build fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Git issues
```bash
# Reset to last commit
git reset --hard HEAD

# Stash changes
git stash

# Remove untracked files
git clean -fd
```

## Asking for Help

When stuck:
1. Check error message carefully
2. Search error on Google/Stack Overflow
3. Check official documentation
4. Ask on GitHub Discussions
5. Use ChatGPT/Claude for coding help

## Time-Saving Tips

### VS Code Shortcuts
- Ctrl+D: Select next occurrence
- Ctrl+/: Toggle comment
- Ctrl+Shift+P: Command palette
- Alt+Up/Down: Move line
- Ctrl+J: Toggle terminal

### Git Shortcuts
```bash
# Alias for common commands
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
```

### Development Tip
- Use extension for auto-formatting
- Setup EditorConfig for consistency
- Use snippets for common code

---

**Remember:** Always test before deployment!

Happy coding! 🚀
