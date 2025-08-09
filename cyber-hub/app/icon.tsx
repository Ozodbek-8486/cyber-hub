import { ImageResponse } from "next/og"

export const size = { width: 192, height: 192 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 110,
        background: "linear-gradient(135deg, #0a0a0a 0%, #0f172a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#34d399",
        letterSpacing: "-0.02em",
        border: "6px solid rgba(52,211,153,0.35)",
      }}
    >
      H
    </div>,
    { ...size },
  )
}
