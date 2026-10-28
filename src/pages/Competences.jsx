import SectionTitle from '../components/SectionTitle'

export default function Competences({ language }) {
  const en = language === 'en'
  const skills = en ? [
    ['01', 'Front-end', 'React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, Bootstrap, JavaScript ES6+, HTML5, CSS3', 'Build accessible, responsive interfaces that are enjoyable to use.'],
    ['02', 'Back-end', 'Currently learning', 'Develop server-side foundations and data integration skills.'],
    ['03', 'Tools', 'Git, GitHub, Figma, Vite', 'Collaborate effectively and evolve projects with care.'],
  ] : [
    ['01', 'Front-end', 'React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, Bootstrap, JavaScript ES6+, HTML5, CSS3', 'Créer des interfaces accessibles, responsives et agréables à utiliser.'],
    ['02', 'Back-end', 'En cours d’apprentissage', 'Approfondir les bases côté serveur et la connexion aux données.'],
    ['03', 'Outils', 'Git, GitHub, Figma, Vite', 'Collaborer efficacement et faire évoluer les projets avec méthode.'],
  ]
  return (
    <div>
      <SectionTitle title={en ? <>From concept<br /><em className="font-accent text-orange-600 dark:text-orange-400">to interface.</em></> : <>Du concept<br /><em className="font-accent text-orange-600 dark:text-orange-400">à l’interface.</em></>}>{en ? 'I use modern technologies to build fast, accessible and maintainable experiences.' : 'J’utilise des technologies modernes pour créer des expériences rapides, accessibles et maintenables.'}</SectionTitle>
      <div className="divide-y divide-stone-200 border-y border-stone-200 dark:divide-white/10 dark:border-white/10">
        {skills.map(([number, title, tools, description]) => <article key={number} className="grid gap-4 py-7 md:grid-cols-[70px_1fr_1.3fr] md:items-start"><span className="font-mono text-xs text-orange-600 dark:text-orange-400">{number}</span><div><h2 className="font-display text-2xl">{title}</h2><p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">{description}</p></div><p className="text-sm leading-7 text-stone-700 dark:text-stone-300">{tools}</p></article>)}
      </div>
    </div>
  )
}
