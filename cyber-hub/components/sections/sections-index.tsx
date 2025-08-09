import Link from "next/link"

const LINKS = Array.from({ length: 30 }, (_, i) => ({ label: `${i + 1}`, href: `#section-${i + 1}` }))

export default function SectionsIndex() {
  return (
    <nav
      id="top-index"
      aria-label="Bo‘limlar indeksi"
      className="sticky top-16 z-40 -mx-4 border-y border-emerald-900/40 bg-black/50 px-2 sm:px-4 py-2 sm:py-3 backdrop-blur supports-[backdrop-filter]:bg-black/40"
    >
      <div className="flex w-full items-center gap-1.5 sm:gap-2 overflow-x-auto">
        <span className="text-[11px] sm:text-xs text-emerald-300/80 shrink-0 pl-2 sm:pl-0">Bo‘limlar:</span>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-md border border-emerald-900/60 bg-[#06120F] px-2 py-1 text-[11px] sm:text-xs text-emerald-200 hover:bg-[#0A1D18]"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
