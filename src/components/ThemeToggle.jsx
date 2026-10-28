export default function ThemeToggle({ theme, onToggle, language }) {
  const isEnglish = language === 'en'
  return (
    <button
      type="button"
      onClick={onToggle}
      className="grid size-10 place-items-center rounded-full border border-stone-300 text-lg transition hover:border-orange-500 dark:border-white/15 dark:text-stone-100"
      aria-label={theme === 'dark' ? (isEnglish ? 'Switch to light theme' : 'Activer le thème clair') : (isEnglish ? 'Switch to dark theme' : 'Activer le thème sombre')}
      title={theme === 'dark' ? (isEnglish ? 'Light theme' : 'Thème clair') : (isEnglish ? 'Dark theme' : 'Thème sombre')}
    >
      {theme === 'dark' ? '☼' : '☾'}
    </button>
  )
}
