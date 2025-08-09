"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

function scorePassword(pw: string) {
  let score = 0
  if (!pw) return 0
  const letters: Record<string, number> = {}
  for (let i = 0; i < pw.length; i++) {
    letters[pw[i]] = (letters[pw[i]] || 0) + 1
    score += 5.0 / letters[pw[i]]
  }
  const variations = {
    digits: /\d/.test(pw),
    lower: /[a-z]/.test(pw),
    upper: /[A-Z]/.test(pw),
    nonWords: /\W/.test(pw),
    length8: pw.length >= 8,
    length12: pw.length >= 12,
  }
  const variationCount = Object.values(variations).filter(Boolean).length
  score += (variationCount - 1) * 10
  return Math.min(100, Math.round(score))
}

function labelFor(score: number) {
  if (score >= 80) return "Juda kuchli"
  if (score >= 60) return "Kuchli"
  if (score >= 40) return "O‘rtacha"
  if (score >= 20) return "Zaif"
  return "Juda zaif"
}

export default function PasswordStrength() {
  const [pw, setPw] = useState("")
  const score = useMemo(() => scorePassword(pw), [pw])
  const label = useMemo(() => labelFor(score), [score])

  return (
    <div className="grid gap-3">
      <Input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="Parolingizni kiriting"
        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
        aria-label="Parol maydoni"
      />
      <Progress value={score} className="h-2 bg-zinc-800" />
      <div className="flex items-center justify-between text-sm text-zinc-400">
        <span>Baholash:</span>
        <Badge variant="outline" className="border-emerald-500/40 text-emerald-300">
          {label}
        </Badge>
      </div>
      <ul className="text-xs text-zinc-400 list-disc pl-4">
        <li>Uzunroq va turli belgilardan foydalaning</li>
        <li>Ma&apos;lum iboralar va shaxsiy ma&apos;lumotlardan qoching</li>
      </ul>
    </div>
  )
}
