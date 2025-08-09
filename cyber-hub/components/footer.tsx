import { Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-emerald-800/60 bg-[#07120F]">
      <div className="container mx-auto px-4 py-8 text-sm text-emerald-300/80">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} KALI HUB — ta’limiy va etik kontent</p>
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
            >
              <a href="https://github.com/your-account" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
            >
              <a href="https://t.me/your-telegram" target="_blank" rel="noreferrer">
                <Send className="mr-2 h-4 w-4" /> Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
