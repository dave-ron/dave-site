import React from 'react';
import { prisma } from '../../lib/db';
import type { Project as PrismaProject } from '@prisma/client';

async function ProjectCard({ project }: { project: PrismaProject }) {
  return (
    <article style={{ border: '1px solid #eee', padding: 12, borderRadius: 6, marginBottom: 12 }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.url ? (
        <p>
          <a href={project.url} target="_blank" rel="noreferrer">
            Visit
          </a>
        </p>
      ) : null}
      {project.tags ? <p>Tags: {project.tags}</p> : null}
    </article>
  );
}

export default async function ProjectsList() {
  const projects: PrismaProject[] = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
  if (!projects || projects.length === 0) return <p>No projects yet.</p>;
  return (
    <section>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}