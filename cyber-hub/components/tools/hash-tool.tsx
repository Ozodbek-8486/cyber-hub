"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy, FileIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

async function sha256(message: ArrayBuffer) {
  const hashBuffer = await crypto.subtle.digest("SHA-256", message)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return hashHex
}

export default function HashTool() {
  const [text, setText] = useState("")
  const [hash, setHash] = useState("")
  const [fileName, setFileName] = useState<string | null>(null)
  const { toast } = useToast()

  const handleHashText = async () => {
    const enc = new TextEncoder().encode(text)
    const h = await sha256(enc)
    setHash(h)
  }

  const handleFile = async (f: File) => {
    const buf = await f.arrayBuffer()
    const h = await sha256(buf)
    setHash(h)
    setFileName(f.name)
  }

  return (
    <div className="grid gap-3">
      <Textarea
        placeholder="Matn kiriting yoki fayl yuklang..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 min-h-[100px]"
        aria-label="Matn maydoni"
      />
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={handleHashText} className="bg-emerald-600 hover:bg-emerald-500 text-white">
          Matndan hisobla
        </Button>
        <label className="inline-flex">
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) void handleFile(f)
            }}
            aria-label="Fayl yuklash"
          />
          <Button variant="outline" className="border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800">
            <FileIcon className="mr-2 h-4 w-4" /> Fayldan hisobla
          </Button>
        </label>
      </div>
      {fileName && <p className="text-xs text-zinc-400">Fayl: {fileName}</p>}
      <div className="grid gap-2">
        <Input
          readOnly
          value={hash}
          placeholder="SHA-256 xesh bu yerda paydo bo‘ladi"
          className="bg-zinc-900 border-zinc-800"
        />
        <Button
          variant="outline"
          className="w-fit border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
          onClick={() => {
            if (!hash) return
            navigator.clipboard.writeText(hash)
            toast({ title: "Nusxalandi", description: "Xesh buferga nusxalandi." })
          }}
        >
          <Copy className="mr-2 h-4 w-4" /> Nusxalash
        </Button>
      </div>
      <p className="text-xs text-zinc-500">
        Izoh: Ushbu asbob faqat taʼlim va verifikatsiya ishlarida foydalanish uchun mo‘ljallangan.
      </p>
    </div>
  )
}
