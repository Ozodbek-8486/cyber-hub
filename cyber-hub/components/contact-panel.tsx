"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Send, Mail, Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function ContactPanel() {
  const [copied, setCopied] = useState(false)
  const email = "contact@example.com"
  const copy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <Card className="border-emerald-800/60 bg-[#081512]/70">
        <CardHeader>
          <CardTitle className="text-emerald-100">Aloqa</CardTitle>
          <CardDescription className="text-emerald-200/75">Quyidagi kanallar orqali bog&apos;laning.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Button className="bg-emerald-700 hover:bg-emerald-600 text-white" asChild>
              <a href="https://github.com/your-account" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub profil
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
            >
              <a href="https://t.me/your-telegram" target="_blank" rel="noreferrer">
                <Send className="mr-2 h-4 w-4" />
                Telegram
              </a>
            </Button>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-emerald-200/80">Email</label>
            <div className="flex gap-2">
              <Input readOnly value={email} className="bg-[#0A1512] border-emerald-800/60 text-emerald-100" />
              <Button
                variant="outline"
                onClick={copy}
                className="border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Nusxalandi!" : "Nusxa"}
              </Button>
            </div>
            <Button
              asChild
              variant="outline"
              className="w-fit border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
            >
              <a href={`mailto:${email}?subject=Salom%20KALI%20HUB&body=Assalomu%20alaykum%2C`}>
                <Mail className="mr-2 h-4 w-4" />
                Email yozish
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
