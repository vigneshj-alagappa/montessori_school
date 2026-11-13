/* The folder the site is served from: '/' normally, '/montessori_school/' on GitHub Pages.
   Set at build time with BASE_PATH (see vite.config.js). */
export const BASE = import.meta.env.BASE_URL

/* Turn a site path such as '/logo.png' or '/about' into one that works under BASE.
   Full URLs (https://...) are returned unchanged. */
export const withBase = (path) => (path.startsWith('/') ? BASE + path.slice(1) : path)

/* The reverse: '/montessori_school/about' becomes '/about' */
export const stripBase = (pathname) => (pathname.startsWith(BASE) ? '/' + pathname.slice(BASE.length) : pathname)
