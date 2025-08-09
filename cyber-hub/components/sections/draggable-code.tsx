"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  code: string
  className?: string
}

/**
 * Mobil: touch scroll
 * Desktop: sichqoncha bilan drag-to-scroll (gorizontal va vertikal)
 * Faqat ko‘rish uchun.
 */
export default function DraggableCode({ code, className }: Props) {
  const ref = useRef<HTMLPreElement | null>(null)
  const [dragging, setDragging] = useState(false)
  const pos = useRef<{ x: number; y: number; sl: number; st: number }>({ x: 0, y: 0, sl: 0, st: 0 })

  const onPointerDown = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    setDragging(true)
    pos.current = { x: e.clientX, y: e.clientY, sl: el.scrollLeft, st: el.scrollTop }
    el.setPointerCapture(e.pointerId)
    el.style.userSelect = "none"
    el.style.cursor = "grabbing"
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || !dragging) return
    const dx = e.clientX - pos.current.x
    const dy = e.clientY - pos.current.y
    el.scrollLeft = pos.current.sl - dx
    el.scrollTop = pos.current.st - dy
  }

  const endDrag = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    setDragging(false)
    try {
      el.releasePointerCapture(e.pointerId)
    } catch {}
    el.style.userSelect = ""
    el.style.cursor = ""
  }

  return (
    <pre
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={cn(
        "max-h-[260px] sm:max-h-[300px] md:max-h-[360px] overflow-auto rounded-md",
        "border border-emerald-800/60 bg-[#0A1110] p-3 text-[13px] sm:text-sm leading-relaxed",
        "text-emerald-100 whitespace-pre cursor-grab select-text",
        className,
      )}
      style={{
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-x pan-y",
        overscrollBehavior: "contain",
      }}
      aria-label="Kod ko‘rish sohasi"
    >
      <code>{code}</code>
    </pre>
  )
}
