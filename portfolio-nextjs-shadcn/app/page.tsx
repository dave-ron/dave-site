import Link from 'next/link'
import React from 'react'
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';

export const metadata = {
  title: 'Portfolio',
};

export default function HomePage() {
  return (
    <main className="container mx-auto py-16" style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <header className="mb-12">
        <h1 className="h1">Peter_Dev — Web Developer</h1>
        <p className="lead mt-4">
          Building modern, accessible web applications with Next.js, TypeScript and shadcn/ui.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/projects/business-website" className="p-6 border rounded-lg hover:shadow">
          <h2 className="text-lg font-semibold">Business Website</h2>
          <p className="text-sm text-slate-600 mt-2">Marketing site, CMS, performance-focused.</p>
        </Link>

        <Link href="/projects/social-media" className="p-6 border rounded-lg hover:shadow">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <p className="text-sm text-slate-600 mt-2">Realtime features, WebSocket/Streaming, activity feed.</p>
        </Link>

        <Link href="/projects/real-estate" className="p-6 border rounded-lg hover:shadow">
          <h2 className="text-lg font-semibold">Real Estate</h2>
          <p className="text-sm text-slate-600 mt-2">Listings, maps, search & filters.</p>
        </Link>

        <Link href="/projects/other" className="p-6 border rounded-lg hover:shadow">
          <h2 className="text-lg font-semibold">Other Projects</h2>
          <p className="text-sm text-slate-600 mt-2">E-commerce, dashboards, integrations.</p>
        </Link>
      </section>

      <h1>Projects</h1>
      <ProjectsList />
      <hr style={{ margin: '32px 0' }} />
      <h2>Contact</h2>
      <ContactForm />
    </main>
  )
}
