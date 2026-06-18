# Bright Osei Amankwatia Personal Website

A simple, professional, mobile-responsive personal website for Bright Osei Amankwatia: ICT and Computing educator, computer science researcher, AI/web solutions developer, and digital skills program facilitator.

## Tech Stack

- Vue 3
- Vite
- Vue Router
- Bootstrap 5
- Bootstrap Icons
- GitHub Pages

Tailwind CSS was not added because Bootstrap is the primary layout and component framework for this project. Skipping Tailwind keeps the styling simpler and avoids visual conflicts.

## Pages Included

- Home
- About
- Teaching & Leadership
- Research & Publications
- Projects / Portfolio
- Software Solutions
- Programs & Events
- Contact
- 404 Not Found

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## GitHub Pages Deployment

The workflow file is located at `.github/workflows/deploy.yml`. It runs on pushes to the `main` branch, installs dependencies, builds the Vite app, uploads the `dist` folder, and deploys to GitHub Pages.

In GitHub, enable Pages with GitHub Actions as the source.

The project is configured for `https://amankwatia.github.io/personal/` with `base: '/personal/'` in `vite.config.js`. Change the base to `/` when moving to a custom domain or GitHub user site.

## Routing

This project uses `createWebHashHistory()` in `src/router/index.js`. Hash routing avoids refresh and direct-link issues on GitHub Pages without requiring a custom `404.html` redirect.

## Updating Content

Most website content is stored in `src/data`:

- Profile and studio name: `src/data/profile.js`
- Services and software studio offerings: `src/data/services.js`
- Projects: `src/data/projects.js`
- Publications and research interests: `src/data/publications.js`
- Skills: `src/data/skills.js`
- Teaching timeline: `src/data/timeline.js`
- Programs and events: `src/data/programsEvents.js`

## Replacing the Professional Photo

The current optimized portrait is `src/assets/images/bright-osei-amankwatia.webp`. Replace it with another web-optimized portrait using the same filename, or update the `professionalPortrait` import in `src/data/profile.js`.

Use a portrait image with good lighting and keep `object-fit: cover` so the image does not stretch.

## Replacing the CV

Replace `public/Bright_Osei_Amankwatia_CV.pdf` with a public-safe CV using the same filename.

The public CV should not include private information such as date of birth, religion, marital status, referees, or unnecessary personal details.

## Updating Contact Links

Update placeholder LinkedIn, GitHub, Google Scholar, and ORCID links in `src/data/profile.js`.

## Static Contact Form

The contact form uses a `mailto:` fallback because this is a static GitHub Pages website. To use Formspree later, add the Formspree endpoint in `src/views/ContactView.vue` and replace the current submit handler.

## SEO Files

Basic SEO support files are in `public`:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/favicon.svg`

The SEO files currently use `https://amankwatia.github.io/personal/`. Update them if the site moves to a custom domain.

## Future Improvements

- Add a Blog or Insights page.
- Possible article categories: ICT Education, AI in Education, Cybersecurity Awareness, Web Development, Digital Skills, and School Digital Transformation.
- Replace placeholder social links with live profiles.
- Replace the placeholder CV and profile image before public launch.
- Add project detail pages when live demos or case studies are ready.
