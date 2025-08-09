import { Megaphone } from "lucide-react"

const items = [
  "Yangi yamoqlar e’lon qilindi",
  "CVE ro‘yxatlariga yangilanishlar",
  "Tarmoq xavfsizligi bo‘yicha blog posti",
  "Kriptografiya yangiliklari",
  "Linux yadrosi bo‘yicha e’lon",
  "OWASP yo‘riqnomalari yangilandi",
]

export default function NewsTicker() {
  return (
    <div className="w-full border-b border-emerald-800/50 bg-[#0A1512]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 py-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600/25 text-emerald-300 ring-1 ring-emerald-700/50">
            <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <div className="flex-1 overflow-x-auto">
            <div className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm text-emerald-100">
              {items.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full border border-emerald-800/60 bg-[#0F241F] px-3 py-1 text-emerald-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden sm:block text-xs text-emerald-300/80">Yangiliklar tasmasi</div>
        </div>
      </div>
    </div>
  )
}
