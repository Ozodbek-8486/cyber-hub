"use client"

import Link from "next/link"
import { Github, Send, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/40 bg-[#050907]/95 backdrop-blur supports-[backdrop-filter]:bg-[#050907]/80">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600/20 ring-1 ring-emerald-700/50">
            <Shield className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-wider text-emerald-100">KALI HUB</span>
        </Link>

        {/* 4 nav items */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="text-emerald-200/90 hover:text-emerald-200" href="#sections">
            Bo&apos;limlar
          </Link>
          <Link className="text-emerald-200/90 hover:text-emerald-200" href="#top-index">
            30-raqam
          </Link>
          <Link className="text-emerald-200/90 hover:text-emerald-200" href="#contact">
            Aloqa
          </Link>
          <Link className="text-emerald-200/90 hover:text-emerald-200" href="/">
            Bosh sahifa
          </Link>
        </nav>

        {/* GitHub & Telegram */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
          >
            <a href="https://github.com/your-account" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-emerald-800/60 bg-[#0A1512] text-emerald-100 hover:bg-[#103329]"
          >
            <a href="https://t.me/your-telegram" target="_blank" rel="noreferrer">
              <Send className="mr-2 h-4 w-4" />
              Telegram
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
