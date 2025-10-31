'use client';
import React, { useState } from 'react';

type FormState = { name: string; email: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        setResult({ ok: false, message: json?.errors ? JSON.stringify(json.errors) : json?.error ?? 'Error' });
      } else {
        setResult({ ok: true, message: 'Message sent' });
        setForm({ name: '', email: '', message: '' });
      }
    } catch (err: any) {
      setResult({ ok: false, message: err?.message ?? 'Network error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="mt-1 block w-full rounded border px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 block w-full rounded border px-3 py-2" rows={4} required />
      </div>
      <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>
        {loading ? 'Sending…' : 'Send'}
      </button>

      {result && (
        <p style={{ marginTop: 12, color: result.ok ? 'green' : 'red' }}>
          {result.message}
        </p>
      )}
    </form>
  );
}