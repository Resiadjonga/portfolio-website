import SectionTitle from '../components/SectionTitle'

export default function Faq({ language }) {
  const en = language === 'en'
  const questions = en
    ? [
        ['Can we work together remotely?', 'Yes. I am based in Kinshasa and available for remote work.'],
        ['What should I include in my message?', 'Share your name, email address, a short project description, and any goals or timing you already have in mind.'],
        ['Does the form send the email automatically?', 'No. It opens a Gmail draft addressed to me. You can review and edit it before choosing to send it.'],
        ['Can I write in French or English?', 'Yes. You can contact me in either language.'],
      ]
    : [
        ['Peut-on travailler ensemble à distance ?', 'Oui. Je suis basée à Kinshasa et disponible pour travailler à distance.'],
        ['Que faut-il inclure dans mon message ?', 'Indiquez votre nom, votre adresse e-mail, une brève description du projet et, si vous les connaissez déjà, vos objectifs ou délais.'],
        ['Le formulaire envoie-t-il l’e-mail automatiquement ?', 'Non. Il ouvre un brouillon Gmail qui m’est adressé. Vous pouvez le relire et le modifier avant de décider de l’envoyer.'],
        ['Puis-je écrire en français ou en anglais ?', 'Oui. Vous pouvez me contacter dans l’une ou l’autre langue.'],
      ]

  return (
    <div>
      <SectionTitle title={en ? <>Frequently<br /><em className="font-accent text-orange-600 dark:text-orange-400">asked questions.</em></> : <>Questions<br /><em className="font-accent text-orange-600 dark:text-orange-400">fréquentes.</em></>}>
        {en ? 'Answers to a few common questions about working together and getting in touch.' : 'Quelques réponses aux questions courantes sur une collaboration et la prise de contact.'}
      </SectionTitle>
      <section className="max-w-3xl border-t border-stone-200 pt-3 dark:border-white/10" aria-label={en ? 'Frequently asked questions' : 'Questions fréquentes'}>
        <div className="divide-y divide-stone-200 dark:divide-white/10">
          {questions.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:hidden">{question}<span aria-hidden="true" className="text-orange-600 transition-transform group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-300">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
