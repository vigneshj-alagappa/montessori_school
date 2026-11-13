# Alagappa Montessori School (React + Vite)

Install and run: `npm install`, then `npm run dev`.

Build for production:

    SITE_URL=https://your-domain npm run build

`SITE_URL` is needed for canonical links, social preview images and `sitemap.xml`; they are left out without it. Upload the contents of `dist/`. Each page is built as its own `index.html`, for example `dist/about/index.html`.

## Where to edit

- `src/data.js`: all school details and content: contact details, social links, map, classes, facilities, gallery sections, management and Head Mistress text. Set `SHOW_REVIEWS` to `true` once `reviewsData` holds real parent reviews.
- `src/seo.js`: page URLs, titles and descriptions, plus the social preview image (`OG_IMAGE`).
- `src/components/`: one file per component. Pages end in `Page` (for example `HomePage.jsx`), home page sections end in `Section`, and shared pieces such as `Navbar`, `Footer`, `SectionHeading` and `Icon` sit alongside them.
- `src/hooks/usePage.js`: page switching for in-site links and the back button.
- `src/styles.css`: all styling.
- `index.html`: default metadata and the school's structured data for search engines.
- `public/`: images, referenced from the code as `/file.jpg`.

The contact form opens the visitor's email app with the message addressed to the school. It does not send anything by itself.
