import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PasswordStrength from "@/components/tools/password-strength"
import HashTool from "@/components/tools/hash-tool"

export default function ToolsGrid() {
  return (
    <section id="tools" className="grid gap-6 md:grid-cols-2">
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <CardTitle>Parol kuchi</CardTitle>
          <CardDescription>Mahalliy, brauzerda ishlaydigan parol kuchi baholash.</CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordStrength />
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <CardTitle>SHA-256 Hash generator</CardTitle>
          <CardDescription>Matn yoki fayl uchun kriptografik xesh — faqat taʼlim maqsadida.</CardDescription>
        </CardHeader>
        <CardContent>
          <HashTool />
        </CardContent>
      </Card>
    </section>
  )
}
