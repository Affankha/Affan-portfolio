// components/Education.tsx
"use client";

import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((e) => (
          <div key={e.school} className="rounded-2xl border p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.school}</h3>
              <span className="text-sm text-muted-foreground">{e.date}</span>
            </div>
            <p className="text-sm">{e.degree}</p>
            <p className="text-sm text-muted-foreground">{e.meta}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
