import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LayoutShell from "@/components/LayoutShell"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aura CRM - Plataforma de Multiatendimento",
  description: "Centralize conversas do WhatsApp, Instagram e Messenger em uma única plataforma",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LayoutShell>
            {children}
          </LayoutShell>
        </ThemeProvider>
        <Script 
          src="https://minio-server.jssolucoeseservicos.com.br/cdn/widget.iife.js"
          strategy="afterInteractive"
          data-token="abc-123" 
          data-color="#eb25c3"
          data-position="right"
        />
      </body>
    </html>
  )
}
