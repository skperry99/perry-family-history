# Perry Family History 📖🌿

A story-forward family history website built with **React + Vite**, deployed on **Netlify**.

The site presents “ancestor pages” as readable biographies that place each person’s life in context, with special focus on the Milburn, Simmons, and Tatum lines (and related branches as they’re added).

- Repo: https://github.com/skperry99/perry-family-history
- Live site: https://iridescent-lily-089cbe.netlify.app/

---

## What this site does

- **Ancestor Gallery** home page
- **Search + filters** (by name, lifespan, relationship)
- Individual **ancestor pages** with:
  - Snapshot
  - Story-style biography
  - “World Around Them”
  - Family & legacy
  - Notes / patterns

---

## Tech stack

- React + Vite
- React Router
- CSS (warm “archival paper” theme)

Hosted on Netlify with GitHub auto-deploy from `main`.

---

## Project structure

Key files:

- `src/data/ancestors.js`
  - The main content source of truth (ancestor objects)
- `src/pages/HomePage.jsx`
  - Ancestor Gallery + search/filter UI
- `src/pages/AncestorPage.jsx`
  - Detail page renderer for each ancestor by `id`
- `src/components/Layout.jsx`
  - Site header/nav/footer
- `src/index.css`
  - Theme, typography, layout styles

---

## Adding a new ancestor

1. Open: `src/data/ancestors.js`
2. Add a new object to the `ancestors` array with a unique `id`:

Example fields:

- `id` (URL slug)
- `name`
- `lifespan`
- `relationship`
- `snapshot` (array of short lines)
- `story` (array of paragraphs)
- `worldAround` (array of paragraphs)
- `legacy` (array of paragraphs)
- `notes` (array of bullets)

3. Save, commit, and push. Netlify will redeploy automatically.

---

## Running locally

```bash
npm install
npm run dev
Build:

npm run build
npm run preview
Netlify SPA routing (important)
Because this site uses React Router, direct navigation to routes like:

/ancestor/james-clarence-milburn

requires a redirect rule on Netlify.

Add this file:

public/_redirects

with:

/* /index.html 200
Then commit + push to ensure refresh/deep-links work.

Roadmap / future improvements
 Add source citations per ancestor (GEDCOM, census, obituary, etc.)

 Add optional photo gallery / document images per ancestor

 Add timeline / place trail component (e.g., “Opelousas → Beaumont → San Francisco”)

 Improve navigation: “Next / Previous ancestor” and “Related people”

 Search should also match story text and snapshot lines (currently searches name, lifespan, relationship)

 Add tag/filter system (locations, surnames, time periods)

 Add a “Convergence” page that narrates the direct line down to James and beyond

Notes on tone and approach
This project aims for biographies that are:

narrative and readable

respectful and grounded

contextualized in time/place (“what was happening in the world around them”)

Some conclusions (especially around biological relationships) may be informed by DNA evidence and should be treated as hypotheses unless documented with records.