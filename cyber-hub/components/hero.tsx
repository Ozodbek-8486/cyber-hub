import { Button } from "@/components/ui/button"
import { Terminal, Lock } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Matrix uslubidagi neon yashil fon naqshi"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_40%)]" />
      </div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Etik kiberxavfsizlik platformasi
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-zinc-50">
            Kiberxavfsizlikni o&apos;rganing, mashq qiling va xabardor bo&apos;ling
          </h1>
          <p className="mt-4 text-zinc-300 max-w-2xl">
            Yangiliklar, etik asboblar va mini CTF bilan zamonaviy, hacker-uslubdagi tajriba. Hech qanday noqonuniy
            faoliyat — faqat ta&apos;lim va mas&apos;uliyatli yondashuv.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white">
              <Terminal className="mr-2 h-4 w-4" />
              Boshlash
            </Button>
            <Button variant="outline" className="border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800">
              Demoni ko&apos;rish
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
