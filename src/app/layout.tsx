import "@styles/globals.css"

import type { Metadata } from "next"
import { irsans } from "@assets/fonts"
import { QueryProvider } from "@components/providers/QueryProvider"
import { ThemeProvider } from "@components/providers/theme-provider"
import { ToastProvider } from "@components/providers/ToastProvider"
import { SiteLayout } from "@components/site/SiteLayout"
import { siteConfig } from "@config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="theme-color" href="#14B8A6" />
      </head>
      <body className={irsans.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            enableColorScheme
            disableTransitionOnChange
          >
            <SiteLayout>{children}</SiteLayout>
          </ThemeProvider>
          <ToastProvider />
        </QueryProvider>
      </body>
    </html>
  )
}
