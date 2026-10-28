import Layout from './components/Layout'
import Apropos from './pages/Apropos'
import Accueil from './pages/Accueil'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import { usePathname } from './hooks/usePathname'
import { useTheme } from './hooks/useTheme'
import { useLanguage } from './hooks/useLanguage'

export default function App() {
  const { pathname, navigate } = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const pages = {
    '/': <Accueil navigate={navigate} language={language} />,
    '/apropos': <Apropos language={language} />,
    '/competences': <Competences language={language} />,
    '/contact': <Contact language={language} />,
  }
  const page = pages[pathname] || pages['/']

  return <Layout pathname={pages[pathname] ? pathname : '/'} navigate={navigate} theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage}>{page}</Layout>
}
