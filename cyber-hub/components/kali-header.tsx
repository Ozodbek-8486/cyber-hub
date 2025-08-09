import Image from "next/image"

export default function KaliHeader() {
  return (
    <header className="relative border-b border-emerald-900/40 bg-gradient-to-b from-[#07120F] via-[#040A08] to-black">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/60 bg-[#0E221D] px-3 py-1 text-xs text-emerald-300">
            Qora + to&apos;q yashil, Kali uslubi
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-emerald-100 md:text-5xl">
            30 ta bo&apos;lim — faqat ko&apos;rish va nusxalash
          </h1>
          <p className="mt-3 max-w-xl text-sm text-emerald-200/85 md:text-base">
            Kodlarni siz kiritasiz. Foydalanuvchilar o&apos;zgartira olmaydi — faqat ko&apos;rish va nusxa olish.
          </p>
        </div>

        {/* Katta, to‘liq ko‘rinadigan aylanuvchi globus */}
        <div className="relative mx-auto aspect-square w-72 sm:w-96 md:w-[44rem] lg:w-[52rem]">
          <div
            className="absolute inset-0 will-change-transform animate-[spin_22s_linear_infinite] pointer-events-none"
            aria-hidden="true"
          >
            <Image
              src="/images/globe-dots.png"
              alt="Aylanuvchi nuqtali globus"
              fill
              priority
              sizes="(max-width: 640px) 18rem, (max-width: 768px) 24rem, (max-width: 1024px) 44rem, 52rem"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
