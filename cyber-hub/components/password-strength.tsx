"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function scorePassword(pw: string) {
  if (!pw) return 0
  let score = 0
  const letters: Record<string, number> = {}
  for (let i = 0; i < pw.length; i++) {
    letters[pw[i]] = (letters[pw[i]] || 0) + 1
    score += 5.0 / letters[pw[i]]
  }
  const variations = {
    digits: /\d/.test(pw),
    lower: /[a-z]/.test(pw),
    upper: /[A-Z]/.test(pw),
    symbols: /[^a-zA-Z0-9]/.test(pw),
    len8: pw.length >= 8,
    len12: pw.length >= 12,
  }
  const variationCount = Object.values(variations).filter(Boolean).length
  score += (variationCount - 1) * 12
  score += Math.min(20, Math.max(0, pw.length - 8) * 2)
  return Math.max(0, Math.min(100, Math.round(score)))
}

function labelFor(score: number) {
  if (score >= 85) return "Juda kuchli"
  if (score >= 65) return "Kuchli"
  if (score >= 45) return "O‘rtacha"
  if (score >= 25) return "Zaif"
  return "Juda zaif"
}

export default function PasswordStrength() {
  const [pw, setPw] = useState("")
  const score = useMemo(() => scorePassword(pw), [pw])
  const label = useMemo(() => labelFor(score), [score])

  const requirements = [
    { ok: pw.length >= 8, text: "Kamida 8 ta belgi" },
    { ok: pw.length >= 12, text: "Yaxshi: 12+ belgi" },
    { ok: /[a-z]/.test(pw), text: "Kichik harf" },
    { ok: /[A-Z]/.test(pw), text: "Katta harf" },
    { ok: /\d/.test(pw), text: "Raqam" },
    { ok: /[^a-zA-Z0-9]/.test(pw), text: "Maxsus belgi" },
  ]

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="pw" className="text-sm text-emerald-200/80">
          Parol
        </label>
        <Input
          id="pw"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Parolni kiriting"
          className="bg-[#0A1512] border-emerald-800/60 text-emerald-100 placeholder:text-emerald-300/50"
          aria-label="Parol maydoni"
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-200/80">Baholash</span>
          <Badge
            variant="outline"
            className={cn(
              "border-emerald-700/40 text-emerald-200",
              score >= 85 && "border-green-500/50 text-green-300",
              score >= 65 && score < 85 && "border-emerald-500/50 text-emerald-300",
              score >= 45 && score < 65 && "border-yellow-500/50 text-yellow-300",
              score >= 25 && score < 45 && "border-orange-500/50 text-orange-300",
              score < 25 && "border-red-500/50 text-red-300",
            )}
          >
            {label}
          </Badge>
        </div>
        <Progress value={score} className="h-2 bg-emerald-900/40" />
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {requirements.map((r, i) => (
          <li
            key={i}
            className={cn(
              "rounded-md border px-2 py-1.5 text-xs",
              r.ok
                ? "border-emerald-500/40 text-emerald-200 bg-emerald-500/10"
                : "border-emerald-900/50 text-emerald-200/70 bg-[#06120F]",
            )}
            aria-live="polite"
          >
            {r.text}
          </li>
        ))}
      </ul>

      <p className="text-xs text-emerald-300/70">
        Eslatma: Parollarni hech qachon umumiy joylarda saqlamang. Bu tekshiruv faqat brauzeringizda ishlaydi.
      </p>
    </div>
  )
}
