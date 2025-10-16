# Monadic DNA Blog

A privacy-first genomic data blog built with Astro, featuring modern design, animations, and content management.

## 🧬 About

This blog showcases Monadic DNA's work in privacy-preserving genomics, cryptographic techniques, and secure computation. The design is inspired by [monadicdna.com](https://monadicdna.com/) with gradient backgrounds, modern typography, and smooth animations.

## ✨ Features

- **Modern Design**: Gradient backgrounds, animated blobs, and clean typography using Inter and Unbounded fonts
- **Content Collections**: Blog posts managed through Astro's content collections with frontmatter support
- **Responsive Layout**: Mobile-first design that works seamlessly across all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Fast Performance**: Static site generation for optimal load times
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🚀 Project Structure

```text
/
├── public/
│   ├── Logo/             # Monadic DNA logos (light/dark variants)
│   ├── Social/           # Social media images
│   └── favicon.svg       # Site favicon
├── src/
│   ├── content/
│   │   ├── blog/         # Blog post markdown files
│   │   └── config.ts     # Content collection schema
│   ├── layouts/
│   │   └── Layout.astro  # Main layout with nav and footer
│   ├── pages/
│   │   ├── index.astro   # Home page with hero section
│   │   ├── about.astro   # About page
│   │   └── blog/
│   │       ├── index.astro      # Blog listing page
│   │       └── [...slug].astro  # Dynamic blog post pages
│   └── styles/
│       └── global.css    # Global styles and Tailwind imports
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2025-01-15
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

3. The post will automatically appear on the blog listing page

## 🎨 Design System

- **Primary Font**: Unbounded (headings)
- **Body Font**: Inter (body text)
- **Colors**: Purple/Pink gradients with grayscale base
- **Components**: Rounded corners, shadow effects, smooth transitions

## 🌐 Deployment

The site can be deployed to any static hosting service:

- **Netlify**: `npm run build` → Deploy `dist/` folder
- **Vercel**: Connect repository and deploy automatically
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Cloudflare Pages**: Connect repository for automatic deployments

## 📄 License

This work is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to share and adapt the content with proper attribution to Monadic DNA.

Copyright © 2025 Monadic DNA.
