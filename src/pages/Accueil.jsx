import portrait from '../assets/resia-portrait.jpeg'

const technologies = ['React.js','Next.js','Vu.js','Nuxt.js', 'JavaScript', 'Tailwind CSS', 'Figma', 'Git', 'Github']

export default function Accueil({ navigate, language }) {
  const en = language === 'en'
  const highlights = en
    ? [['01', 'Useful interfaces', 'A thoughtful experience'], ['02', 'From concept to code', 'An end-to-end approach'], ['03', 'Curiosity without limits', 'Always learning']]
    : [['01', 'Des interfaces utiles', 'Une expérience soignée'], ['02', 'Du concept au code', 'Une approche complète'], ['03', 'Une curiosité sans fin', 'Toujours en apprentissage']]
  return (
    <div className="space-y-20">
      <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div>
          <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-stone-300 px-4 py-2 text-xs text-stone-600 dark:border-white/15 dark:text-stone-300"><span className="size-2 rounded-full bg-emerald-500" />{en ? 'Available for new opportunities' : 'Disponible pour de nouvelles opportunités'}</p>
          <p className="mb-3 font-mono text-sm text-orange-600 dark:text-orange-400">{en ? 'Hello, I’m' : 'Bonjour, je suis'}</p>
          <h1 className="font-display text-6xl font-semibold leading-[.98] tracking-tight sm:text-8xl">Resia<br /><em className="font-accent font-normal text-orange-600 dark:text-orange-400">Djonga.</em></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-300">{en ? 'React.js developer, I turn ambitious ideas into high-performing web experiences.' : 'Développeuse React.js, je transforme des idées ambitieuses en expériences web performantes.'}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button onClick={() => navigate('/competences')} className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700">{en ? 'Explore my skills' : 'Découvrir mes compétences'} <span className="ml-2">↗</span></button>
            <button onClick={() => navigate('/apropos')} className="text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-orange-600 dark:text-stone-200">{en ? 'Learn more' : 'En savoir plus'}</button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-orange-600/30" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.7rem] bg-stone-200 dark:bg-stone-800">
            <img className="h-full w-full scale-[1.08] object-cover object-center origin-center" src={portrait} alt={en ? 'Resia Djonga, React.js developer' : 'Resia Djonga, développeuse React.js'} />
          </div>
          <div className="relative ml-4 mt-4 w-fit rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-xl dark:border-white/10 dark:bg-stone-900/95"><p className="font-mono text-[10px] text-orange-600 dark:text-orange-400">DEVELOPER</p><p className="mt-1 text-sm font-medium">{en ? 'Creating with intention.' : 'Créer avec intention.'}</p></div>
        </div>
      </section>
      <section className="border-y border-stone-200 py-7 dark:border-white/10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[.2em] text-stone-500">{en ? 'Technologies & tools' : 'Technologies & outils'}</p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">{technologies.map((technology) => <span key={technology} className="font-display text-xl text-stone-600 dark:text-stone-300">{technology}</span>)}</div>
      </section>
      <section className="grid gap-8 rounded-3xl bg-[#e8ecf5] p-7 sm:grid-cols-3 sm:p-10 dark:bg-[#111827]">
        {highlights.map(([number, title, description]) => <article key={number}><span className="font-mono text-xs text-orange-600 dark:text-orange-400">{number}</span><h2 className="mt-4 font-display text-xl">{title}</h2><p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{description}</p></article>)}
      </section>
    </div>
  )
}
