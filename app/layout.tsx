import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SmartAfter - Never Miss a Return. Never Lose a Receipt.",
  description:
    "SmartAfter organizes all your online orders, receipts, and return alerts — from Gmail, automatically. Join 1,000+ users saving ₹2,847/month.",
  keywords:
    "purchase tracking, receipt management, return alerts, warranty tracking, gmail integration, online shopping, e-commerce",
  authors: [{ name: "SmartAfter Team" }],
  creator: "SmartAfter",
  openGraph: {
    title: "SmartAfter - Never Miss a Return. Never Lose a Receipt.",
    description:
      "SmartAfter organizes all your online orders, receipts, and return alerts — from Gmail, automatically.",
    type: "website",
    locale: "en_IN",
    siteName: "SmartAfter",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartAfter - Never Miss a Return. Never Lose a Receipt.",
    description:
      "SmartAfter organizes all your online orders, receipts, and return alerts — from Gmail, automatically.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  themeColor: "#5B5FEE",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "white",
              border: "1px solid #e2e8f0",
              color: "#1e293b",
              borderRadius: "12px",
              padding: "16px",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  )
}
