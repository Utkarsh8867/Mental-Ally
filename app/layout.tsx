import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mental Ally - Your AI Mental Health Companion",
  description: "Peace of mind, one conversation at a time. Get compassionate, evidence-based mental health support 24/7 with Mental Ally.",
  keywords: ["mental health", "AI therapy", "emotional support", "mental wellness", "counseling"],
  authors: [{ name: "Mental Ally Team" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Mental Ally - Your AI Mental Health Companion",
    description: "Peace of mind, one conversation at a time. Get compassionate mental health support 24/7.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
