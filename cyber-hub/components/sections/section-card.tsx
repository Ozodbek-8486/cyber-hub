"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DraggableCode from "./draggable-code"

type Props = {
  id: string
  title: string
  code: string
}

export default function SectionCard({ id, title, code }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <Card id={id} className="scroll-mt-28 md:scroll-mt-32 border-emerald-800/60 bg-[#081512]/70 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-emerald-100">{title}</CardTitle>
        <CardDescription className="text-emerald-200/75">Faqat ko&apos;rish va nusxa olish mumkin.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <DraggableCode code={code} />
        <div className="flex items-center gap-2">
          <Button
            onClick={handleCopy}
            variant="outline"
            className="border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
          >
            {copied ? "Nusxalandi!" : "Koddan nusxa olish"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
