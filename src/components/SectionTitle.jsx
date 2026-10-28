export default function SectionTitle({ title, children }) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <h1 className="font-display text-4xl leading-tight tracking-tight text-stone-900 dark:text-stone-50 sm:text-6xl">{title}</h1>
      </div>
      {children && <p className="max-w-lg text-base leading-7 text-stone-600 dark:text-stone-300">{children}</p>}
    </div>
  )
}
