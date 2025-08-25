// components/Skills.tsx
"use client";

import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="rounded-full border px-3 py-1 text-sm">{s}</span>
        ))}
      </div>
    </Section>
  );
}
