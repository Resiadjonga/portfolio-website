import { useEffect, useState } from 'react'

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('portfolio-language') || 'fr'
    } catch {
      return 'fr'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('portfolio-language', language)
    } catch {
      // Language selection remains available when storage is disabled.
    }
  }, [language])

  return { language, toggleLanguage: () => setLanguage((current) => current === 'fr' ? 'en' : 'fr') }
}
