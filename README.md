# Portfolio Website

A beautiful and modern portfolio website built with React, showcasing 5 full-stack projects. This portfolio features a responsive design, smooth animations, and modern UI/UX.

## Features

✨ **Modern Design**
- Responsive layout that works on all devices
- Beautiful gradient backgrounds and animations
- Smooth scrolling navigation
- Professional color scheme

📱 **Responsive**
- Mobile-first design
- Fully responsive on desktop, tablet, and mobile
- Optimized performance

🎨 **Interactive Components**
- Smooth animations and transitions
- Hover effects on cards
- Modal interactions
- Form validation

📝 **Sections**
- Hero section with call-to-action
- Featured projects showcase
- About me section with skills
- Contact form
- Social media links

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Icons** - Icon library
- **Framer Motion** - Animation library (ready for advanced animations)
- **CSS3** - Custom styling

### Backend (Optional)
- Node.js with Express (for form handling)
- Email service integration

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── data/
│   │   └── projects.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── index.html
```

## Installation

1. Clone this repository or navigate to the portfolio folder:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Projects Included

### 1. AQSO Residence - Property Management
A comprehensive property management and booking system with real-time availability and payment processing.
- **Tech:** React, Node.js, Express, PostgreSQL, Sequelize
- **Features:** Booking system, User authentication, Transaction management

### 2. E-Kantin - Food Ordering Platform
Modern food ordering system for cafeterias with order tracking and sales analytics.
- **Tech:** Laravel, Livewire, MySQL, Tailwind CSS
- **Features:** Menu management, Order tracking, Admin dashboard

### 3. Kos Management - Boarding House System
End-to-end boarding house management with tenant and payment tracking.
- **Tech:** HTML5, CSS3, JavaScript, PHP, MySQL
- **Features:** Tenant management, Payment tracking, Room availability

### 4. PMB STIMATA - Student Registration
Comprehensive online student registration system with automated evaluation.
- **Tech:** Laravel, Livewire, MySQL, Vite, Tailwind CSS
- **Features:** Registration forms, Document upload, Online evaluation

### 5. Peternakan - Livestock Management
Livestock management system for tracking animal health and breeding records.
- **Tech:** PHP, MySQL, HTML5, CSS3, JavaScript
- **Features:** Animal tracking, Health monitoring, Production reports

## Customization

### Update Project Data
Edit `src/data/projects.js` to add or modify project information:
```javascript
{
  title: "Your Project Name",
  description: "Project description",
  image: "image-url",
  github: "github-link",
  live: "live-demo-link",
  features: ["Feature 1", "Feature 2"],
  techs: ["React", "Node.js"]
}
```

### Update Contact Information
Edit contact details in `src/components/ContactSection.jsx`

### Customize Colors
Update CSS variables in `src/styles/index.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  /* ... */
}
```

## Performance Optimization

- Code splitting with Vite
- Lazy loading for images
- Optimized CSS and JavaScript
- Tree-shaking for unused code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This portfolio can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop dist folder to Netlify
```

## License

This project is open source and available under the MIT License.

## Author

**Developer**
- Email: hello@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com)

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

## Support

If you have any questions or need help, please open an issue on GitHub.

---

**Last Updated:** 2024

Made with ❤️ using React
