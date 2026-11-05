import SectionTitle from '../components/SectionTitle'
import { socialLinks } from '../data/socialLinks'

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=resiadjonga20%40gmail.com'
export default function Contact({ language }) {
  const en = language === 'en'
  return (
    <div>
      <SectionTitle title={en ? <>Let’s build something<br /><em className="font-accent text-orange-600 dark:text-orange-400">meaningful.</em></> : <>Construisons quelque<br /><em className="font-accent text-orange-600 dark:text-orange-400">chose de fort.</em></>}>{en ? 'A project, an opportunity or just an idea? I’d be happy to talk about it.' : 'Un projet, une opportunité ou simplement une idée ? Je serais ravie d’en discuter avec vous.'}</SectionTitle>
      <div className="grid gap-10 border-t border-stone-200 pt-8 sm:grid-cols-2 dark:border-white/10">
        <div><p className="font-mono text-xs uppercase tracking-[.2em] text-stone-500">{en ? 'Email me' : 'M’écrire'}</p><a className="mt-3 inline-flex items-center gap-3 font-display text-2xl transition hover:text-orange-600 sm:text-3xl" href={gmailComposeUrl} target="_blank" rel="noreferrer"><img aria-hidden="true" className="size-7 object-contain" src="/gmail.jpg" alt="" />resiadjonga20@gmail.com <span aria-hidden="true">↗</span></a></div>
        <div><p className="font-mono text-xs uppercase tracking-[.2em] text-stone-500">{en ? 'Location' : 'Localisation'}</p><p className="mt-3 font-display text-2xl">{en ? 'Kinshasa/DRC · Available remotely' : 'Kinshasa/RDC· Disponible à distance'}</p></div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3" aria-label={en ? 'Social profiles' : 'Profils sociaux'}>
        {socialLinks.map(({ label, url, icon }) => <a key={label} href={typeof url === 'function' ? url(en) : url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-stone-300 px-5 py-3 text-sm font-medium transition hover:border-orange-600 hover:text-orange-600 dark:border-white/15 dark:hover:border-orange-400 dark:hover:text-orange-400"><img aria-hidden="true" className="size-5 rounded object-contain" src={icon} alt="" />{label}<span aria-hidden="true">↗</span></a>)}
      </div>
    </div>
  )
}
