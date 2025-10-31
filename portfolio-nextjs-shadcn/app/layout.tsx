import './globals.css'
import React from 'react'
import Providers from './providers';

export const metadata = {
  title: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-slate-900">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}