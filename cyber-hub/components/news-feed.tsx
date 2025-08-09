"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark, ExternalLink } from "lucide-react"

type NewsItem = {
  id: string
  title: string
  excerpt: string
  tag: "vulnerabilities" | "defense" | "research"
  source: string
  url: string
  date: string
}

const SAMPLE: NewsItem[] = [
  {
    id: "1",
    title: "Zero-day sinfida yangi zaiflik tahlili",
    excerpt:
      "Tadqiqotchilar muhim tizimlarda yangi ekspluat sinfini ko‘rsatishdi. Yopiq PoC, etik ko‘rib chiqish bilan.",
    tag: "research",
    source: "SecLab",
    url: "https://example.com/article/1",
    date: "2025-08-01",
  },
  {
    id: "2",
    title: "Defence-in-Depth: Identifikatsiya qatlamini mustahkamlash",
    excerpt: "IAM va zoriy MFA siyosatlari orqali lateral harakatni kamaytirish amaliyotlari.",
    tag: "defense",
    source: "BlueTeam Daily",
    url: "https://example.com/article/2",
    date: "2025-08-04",
  },
  {
    id: "3",
    title: "Kernel darajasidagi zaifliklar trendi",
    excerpt: "Kod sifati va fuzzing qamrovining ta’siri, CVE-lar bo‘yicha statistik ko‘rinish.",
    tag: "vulnerabilities",
    source: "VulnWatch",
    url: "https://example.com/article/3",
    date: "2025-08-06",
  },
]

export default function NewsFeed() {
  const [saved, setSaved] = useState<Record<string, boolean>>({})
  const [tab, setTab] = useState<string>("all")

  const filtered = tab === "all" ? SAMPLE : SAMPLE.filter((i) => i.tag === (tab as NewsItem["tag"]))

  return (
    <section id="news">
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="bg-black border border-white/20">
          <TabsTrigger value="all" className="text-white data-[state=active]:bg-white/10">
            Barchasi
          </TabsTrigger>
          <TabsTrigger value="vulnerabilities" className="text-white data-[state=active]:bg-white/10">
            Zaifliklar
          </TabsTrigger>
          <TabsTrigger value="defense" className="text-white data-[state=active]:bg-white/10">
            Mudofaa
          </TabsTrigger>
          <TabsTrigger value="research" className="text-white data-[state=active]:bg-white/10">
            Tadqiqot
          </TabsTrigger>
        </TabsList>
        <TabsContent value={tab} className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Card key={item.id} className="border border-white/20 bg-black/70">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                      onClick={() => setSaved((s) => ({ ...s, [item.id]: !s[item.id] }))}
                    >
                      <Bookmark
                        className={`h-4 w-4 ${saved[item.id] ? "fill-white text-white" : "text-white/80"}`}
                        aria-hidden="true"
                      />
                      <span className="sr-only">Saqlash</span>
                    </Button>
                  </div>
                  <CardDescription className="text-white/70">
                    {item.source} · {new Date(item.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white/90">{item.excerpt}</CardContent>
                <CardFooter className="flex items-center justify-between">
                  <Badge variant="outline" className="border-white/30 text-white" aria-label={`Teg: ${item.tag}`}>
                    {item.tag}
                  </Badge>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <a href={item.url} target="_blank" rel="noreferrer">
                      O‘qish <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
