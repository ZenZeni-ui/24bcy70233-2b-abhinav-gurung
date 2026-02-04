# 24BCY70233 Dynamic Product Filter - 2B Release

A modern React application featuring a dynamic product filter with a beautiful gradient theme. Built with React 19 and optimized for production deployment on Netlify.

**Student ID:** 24BCY70233  
**Student Name:** Abhinav Gurung  
**GitHub:** [@ZenZeni-ui](https://github.com/ZenZeni-ui)  
**Email:** grgabhinav781@gmail.com

## 🎯 Features

✨ **Dynamic Product Filtering** - Filter products by category in real-time  
🎨 **Gradient Theme** - Modern galaxy-inspired gradient background with smooth animations  
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
⚡ **Performance Optimized** - Production-ready with optimized bundle size (0.082 MB)  
🔒 **Security Headers** - Best practices implemented for secure deployment  
🚀 **Netlify Ready** - Fully configured for Netlify deployment

## 📋 Tech Stack

- **React** 19.2.4
- **React DOM** 19.2.4
- **React Scripts** 5.0.1
- **CSS3** with gradient effects and animations
- **Node.js** 18+
- **Netlify** for deployment

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm 9+ or yarn
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/ZenZeni-ui/24bcy70233-2b-abhinav-gurung.git
cd 24bcy70233-2b-abhinav-gurung

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## 📁 Project Structure

```
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js           # Main component
│   ├── App.css          # Styling with gradient theme
│   ├── index.js         # Entry point
│   ├── index.css        # Global styles
│   └── setupTests.js    # Test configuration
├── netlify.toml         # Netlify deployment config
├── .netlifyignore       # Netlify ignore rules
├── .netlify/            # Netlify state
├── package.json         # Dependencies
└── README.md            # Documentation
```

## 🚀 Deployment on Netlify

### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 2: GitHub Integration (Recommended)

1. Go to [Netlify Dashboard](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose repository: `24bcy70233-2b-abhinav-gurung`
5. Netlify auto-detects build settings from `netlify.toml`
6. Click "Deploy site"

### Build Configuration
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18

## 🔒 Security Features

Security headers configured in `netlify.toml`:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📊 Performance

- **Bundle Size:** ~0.082 MB (gzipped)
- **Minified Assets:** All CSS and JS optimized
- **Responsive:** Mobile-first approach
- **Lighthouse:** Optimized for all metrics

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

### Production
- react: ^19.2.4
- react-dom: ^19.2.4
- react-scripts: 5.0.1
- web-vitals: ^2.1.4

### Development
- @testing-library/react: ^16.3.2
- @testing-library/jest-dom: ^6.9.1
- @testing-library/dom: ^10.4.1
- @testing-library/user-event: ^13.5.0

## 📝 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way)

## 🎓 Project Information

**Course:** Web Development  
**University:** Savitribai Phule Pune University  
**Version:** 2.0 (2B Release)  
**Last Updated:** February 4, 2026

## 📧 Contact

**Abhinav Gurung**
- GitHub: [@ZenZeni-ui](https://github.com/ZenZeni-ui)
- Email: grgabhinav781@gmail.com

---

For issues or suggestions, please open an issue on GitHub.
