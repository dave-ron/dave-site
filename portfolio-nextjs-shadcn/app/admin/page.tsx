'use client';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AdminPage() {
  const { data: session } = useSession();
  const [form, setForm] = useState({ slug: '', title: '', description: '', url: '', tags: '' });
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function createProject(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          slug: form.slug,
          title: form.title,
          description: form.description,
          url: form.url || undefined,
          tags: form.tags ? form.tags.split(',').map((s) => s.trim()) : [],
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setMsg(json?.error ?? 'Failed');
      } else {
        setMsg('Created: ' + json.slug);
        setForm({ slug: '', title: '', description: '', url: '', tags: '' });
      }
    } catch (err: any) {
      setMsg(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin</h1>
      {!session ? (
        <div>
          <p>Sign in to manage content</p>
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        </div>
      ) : (
        <div>
          <p>
            Signed in as {(session.user as any)?.email}
            <button style={{ marginLeft: 12 }} onClick={() => signOut()}>
              Sign out
            </button>
          </p>

          <hr />

          <h2>Create Project</h2>
          <form onSubmit={createProject} style={{ maxWidth: 700 }}>
            <div>
              <label>Slug</label>
              <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required />
            </div>
            <div>
              <label>Title</label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div>
              <label>Description</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
            </div>
            <div>
              <label>URL</label>
              <input value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
            </div>
            <div>
              <label>Tags (comma separated)</label>
              <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
            </div>
            <div style={{ marginTop: 8 }}>
              <button type="submit" disabled={loading}>
                {loading ? 'Creating…' : 'Create'}
              </button>
            </div>
          </form>
          {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
        </div>
      )}
    </main>
  );
}