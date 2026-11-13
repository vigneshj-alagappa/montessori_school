import { useEffect, useState } from 'react'
import { PAGE_META } from '../seo'

const pageFromPath = (path) => {
  const key = path.replace(/^\/+|\/+$/g, '') || 'home'
  return Object.hasOwn(PAGE_META, key) ? key : 'home'
}

/* Tracks which page is shown, handles in-site links and the back button, and updates the page title */
export function usePage() {
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname))

  useEffect(() => {
    // Old links such as /#/about keep working
    if (window.location.hash.startsWith('#/')) {
      const key = pageFromPath(window.location.hash.slice(2))
      window.history.replaceState(null, '', PAGE_META[key].path)
      setPage(key)
    }
    const onPop = () => setPage(pageFromPath(window.location.pathname))
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest('a[href]')
      if (!link || link.target || link.origin !== window.location.origin) return
      e.preventDefault()
      if (link.pathname !== window.location.pathname) window.history.pushState(null, '', link.pathname)
      setPage(pageFromPath(link.pathname))
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('popstate', onPop)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onPop)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    document.title = PAGE_META[page].title
    document.querySelector('meta[name="description"]')?.setAttribute('content', PAGE_META[page].description)
  }, [page])

  return page
}
