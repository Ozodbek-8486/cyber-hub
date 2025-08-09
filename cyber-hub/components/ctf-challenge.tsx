"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, Info } from "lucide-react"

const encoded = "SEFDS19GTEFHX0JBU0U2NF9EQVlfMQ==" // "HACK_FLAG_BASE64_DAY_1"

export default function CtfChallenge() {
  const [answer, setAnswer] = useState("")
  const [status, setStatus] = useState<"idle" | "ok" | "bad">("idle")

  const verify = () => {
    const decoded = atob(encoded)
    if (answer.trim() === decoded) setStatus("ok")
    else setStatus("bad")
  }

  return (
    <Card id="ctf" className="border-zinc-800 bg-zinc-900/50">
      <CardHeader>
        <CardTitle>Base64 Dekodlash</CardTitle>
        <CardDescription>Quyidagi satrni dekod qiling va flagni kiriting.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="rounded-md border border-zinc-800 bg-zinc-950 p-3 text-sm font-mono text-zinc-200">
          {encoded}
        </div>
        <Input
          placeholder="Flagni shu yerga kiriting..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
          aria-label="Flag javobi"
        />
      </CardContent>
      <CardFooter className="flex items-center gap-3">
        <Button onClick={verify} className="bg-emerald-600 hover:bg-emerald-500 text-white">
          Tekshirish
        </Button>
        {status === "ok" && (
          <Alert className="border-emerald-700/50 bg-emerald-500/10 text-emerald-200">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>To‘g‘ri!</AlertTitle>
            <AlertDescription>Tabriklaymiz — keyingi bosqichga tayyorsiz.</AlertDescription>
          </Alert>
        )}
        {status === "bad" && (
          <Alert className="border-yellow-700/50 bg-yellow-500/10 text-yellow-200">
            <Info className="h-4 w-4" />
            <AlertTitle>Noto‘g‘ri</AlertTitle>
            <AlertDescription>Yana urinib ko‘ring. Maslahat: Base64.</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  )
}
