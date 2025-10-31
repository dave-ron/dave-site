import './globals.css'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Your Name',
  description: 'Web developer portfolio — landing, projects, blog, contact',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}