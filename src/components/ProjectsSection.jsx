import { projects } from '../data/portfolio'

export default function ProjectsSection({ language }) {
  const en = language === 'en'
  const projectList = en ? projects.en : projects.fr

  return (
    <section id="projets" aria-labelledby="projects-title" className="scroll-mt-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-orange-600 dark:text-orange-400">02 {en ? 'Selected projects' : 'Projets sélectionnés'}</p>
          <h2 id="projects-title" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{en ? 'Work with purpose.' : 'Des projets utiles.'}</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-stone-600 dark:text-stone-300">{en ? 'Interfaces designed to answer real needs, with care given to the experience.' : 'Des interfaces pensées pour répondre à de vrais besoins, avec une attention particulière à l’expérience.'}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {projectList.map(({ number, category, name, description, technologies }) => (
          <article key={name} className="group flex h-full flex-col rounded-3xl border border-stone-200 bg-white/70 p-6 transition-colors hover:border-orange-600/50 dark:border-white/10 dark:bg-white/[.03] dark:hover:border-orange-400/50">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs text-orange-600 dark:text-orange-400">{number}</span>
              <span aria-hidden="true" className="text-xl text-stone-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[.16em] text-stone-500">{category}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{name}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-stone-600 dark:text-stone-300">{description}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={en ? `${name} technologies` : `Technologies de ${name}`}>
              {technologies.map((technology) => <li key={technology} className="rounded-full bg-stone-100 px-3 py-1.5 font-mono text-[10px] text-stone-600 dark:bg-white/10 dark:text-stone-300">{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
