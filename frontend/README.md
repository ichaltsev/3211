# Averix Frontend

Production-ready React SPA for decentralized prop trading platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm start
# Opens http://localhost:3000
```

### Build for Production
```bash
# Create production build
npm run build

# Run bundle size check
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Radix UI components
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer with legal links
│   ├── WalletModal.js  # Wallet connection modal
│   └── ErrorBoundary.js # Error handling
├── pages/              # Route components
│   ├── Home.js         # Landing page
│   ├── Whitepaper.js   # Whitepaper viewer
│   ├── Auth.js         # Wallet connection
│   ├── Dashboard.js    # User dashboard
│   ├── Privacy.js      # Privacy policy
│   ├── Terms.js        # Terms of service
│   └── Disclaimer.js   # Risk disclaimer
├── context/            # React context providers
├── hooks/              # Custom React hooks
└── lib/                # Utility functions

public/
├── favicon.svg         # App icon
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── _headers           # Security headers (Netlify)
├── _redirects         # SPA fallback (Netlify)
├── 404.html           # SPA fallback (GitHub Pages)
├── sitemap.xml        # SEO sitemap
├── robots.txt         # SEO robots
└── whitepaper.pdf     # Whitepaper document
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables configured in Vercel dashboard

### GitHub Pages
1. Run `npm run build`
2. Push `build/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Headers and redirects automatically applied

## 🔧 Environment Variables

Create `.env` file in frontend root:

```bash
# Backend API URL
REACT_APP_BACKEND_URL=http://localhost:8000

# Optional: Analytics or other services
REACT_APP_ANALYTICS_ID=your_analytics_id
```

## 📱 PWA Features

- **Offline Support**: Service worker caches critical assets
- **Installable**: Add to home screen on mobile devices
- **Manifest**: App metadata and icons configured
- **Responsive**: Mobile-first design with Tailwind CSS

## 🔒 Security

- **CSP Headers**: Content Security Policy configured
- **HTTPS**: Strict Transport Security enabled
- **Frame Protection**: X-Frame-Options set to DENY
- **No External Scripts**: All dependencies bundled locally

## ♿ Accessibility

- **WCAG AA Compliant**: Focus management and color contrast
- **Reduced Motion**: Respects user motion preferences
- **Semantic HTML**: Proper landmarks and headings
- **Screen Reader**: ARIA labels and descriptions

## 📊 Performance

- **Code Splitting**: Lazy-loaded routes reduce initial bundle
- **Bundle Budget**: Automated size monitoring (350KB limit)
- **Image Optimization**: SVG icons and optimized assets
- **Caching**: Service worker for offline functionality

## 🛠️ Available Scripts

- `npm start` - Development server
- `npm run build` - Production build with bundle check
- `npm test` - Run test suite
- `npm run lint` - ESLint code analysis
- `npm run postbuild` - Copy headers for deployment

## 📄 Legal Pages

- `/privacy` - Privacy Policy
- `/terms` - Terms of Service  
- `/disclaimer` - Risk Disclaimer

All legal pages are linked in the footer and accessible via direct URLs.

## 🔗 External Links

- **Whitepaper**: Download or view PDF
- **Contact**: averix.found@gmail.com
- **Telegram**: @averix_founder

## 🐛 Troubleshooting

### Build Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (requires 16+)

### Deployment Issues
- Verify environment variables are set
- Check build output in `build/` directory
- Review browser console for runtime errors

### PWA Issues
- Service worker only registers in production
- Clear browser cache if manifest changes
- Test offline functionality in production build
