import SectionCard from "./section-card"
import { SECTIONS } from "./sections-data"

export default function SectionsGrid() {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SECTIONS.map((s) => (
        <SectionCard key={s.id} id={s.id} title={s.title} code={s.code} />
      ))}
    </section>
  )
}
