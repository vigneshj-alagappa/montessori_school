import { AboutUsPage } from './components/AboutUsPage'
import { ContactPage } from './components/ContactPage'
import { Footer } from './components/Footer'
import { GalleryPage } from './components/GalleryPage'
import { HomePage } from './components/HomePage'
import { LocatePage } from './components/LocatePage'
import { ManagementPage } from './components/ManagementPage'
import { Navbar } from './components/Navbar'
import { usePage } from './hooks/usePage'

const pagesByKey = {
  home: HomePage,
  management: ManagementPage,
  about: AboutUsPage,
  gallery: GalleryPage,
  contact: ContactPage,
  locate: LocatePage
}

export default function App() {
  const page = usePage()
  const Page = pagesByKey[page]

  return (
    <>
      <Navbar page={page} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  )
}
