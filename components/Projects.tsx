// components/Projects.tsx
"use client";

import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.live}
            target="_blank"
            className="group flex flex-col justify-between rounded-2xl border p-5 hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border px-2 py-1">{s}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
