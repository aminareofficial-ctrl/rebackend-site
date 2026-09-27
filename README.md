# ReBackend Site

Production-ready multi-page website for ReBackend real estate operations support.

## Deployment to Netlify

### Quick Deploy

1. Go to [Netlify](https://netlify.com)
2. Click **Add new site** → **Deploy manually**
3. Download this repository as ZIP
4. Drag and drop the ZIP file into Netlify
5. Site deploys automatically

### Via Git

1. Connect this GitHub repo to Netlify
2. Set publish directory to `.` (root)
3. No build command needed
4. Deploy on push to `main`

## Project Structure

```
.
├── index.html              # Home page
├── services.html           # Services page
├── platforms.html          # Platforms & tools page
├── proof.html              # Case studies page
├── pricing.html            # Pricing page
├── terms.html              # Terms and conditions
├── _redirects              # Netlify routing rules
├── netlify.toml            # Netlify configuration
├── robots.txt              # SEO robots directive
├── sitemap.xml             # XML sitemap for search engines
├── assets/
│   ├── css/
│   │   └── global.css      # Global stylesheet (CSS variables, theme support)
│   ├── js/
│   │   └── app.js          # Theme toggle & navigation active state logic
│   ├── favicon.svg         # SVG favicon
│   └── rb-mark.svg         # ReBackend logo mark
└── README.md               # This file
```

## Features

- **Multi-page structure**: 6 distinct pages with clean routing
- **Light/Dark theme**: Persistent localStorage theme toggle
- **Responsive design**: Mobile-first, tested down to 320px
- **Production CSS**: Global variables, no Tailwind or heavy dependencies
- **SEO-ready**: Sitemap, robots.txt, meta tags
- **Netlify-optimized**: Redirects configured for clean URLs
- **Zero dependencies**: Pure HTML, CSS, and vanilla JavaScript

## Clean URL Routing

Visitors can access pages cleanly:

```
https://rebackend.com/
https://rebackend.com/services
https://rebackend.com/platforms
https://rebackend.com/proof
https://rebackend.com/pricing
https://rebackend.com/terms
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## Customization

### Colors

Edit CSS variables in `assets/css/global.css`:

```css
:root {
  --bg-primary: #f6f1f7;
  --text-primary: #1d1320;
  --accent-primary: #5a1b69;
  /* ... more variables ... */
}
```

### Theme

Dark mode is available via the theme toggle button in the header. User preference is saved to localStorage.

## Performance

- **No build step required** — deploy files directly
- **Single CSS file** (5.2 KB gzipped)
- **Single JS file** (2.1 KB gzipped)
- **Lazy-loaded external icons** — from CDN (Simple Icons)
- **No fonts except Google Fonts** — optimized with font-display

## Development Notes

1. All pages use the same global stylesheet and JavaScript
2. Navigation links use the `data-nav` attribute to track active state
3. Theme state is managed via `data-theme` attribute on `<html>` root
4. SVG assets are inlined where performance-critical
5. All links are root-relative (`/services` not `./services.html`)

## Maintenance

- Update content directly in HTML files
- No database or build process
- Changes push to `main` branch auto-deploy to Netlify
- Sitemap should be manually updated if new pages are added

## License

© 2026 ReBackend. All rights reserved.