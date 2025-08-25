// components/Experience.tsx
"use client";

import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((e) => (
          <div key={e.company} className="rounded-2xl border p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.role} · {e.company}</h3>
              <span className="text-sm text-muted-foreground">{e.date}</span>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {e.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
