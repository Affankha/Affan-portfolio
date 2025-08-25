// components/Contact.tsx
"use client";

import Section from "./Section";
import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Want to collaborate or hire me? Reach out via email or phone, or connect on LinkedIn."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <a href={`mailto:${personal.email}`} className="rounded-2xl border p-5 hover:bg-gray-50 dark:hover:bg-zinc-800">
          <div className="text-sm text-muted-foreground">Email</div>
          <div className="font-medium">{personal.email}</div>
        </a>
        <a href={`tel:${personal.phone}`} className="rounded-2xl border p-5 hover:bg-gray-50 dark:hover:bg-zinc-800">
          <div className="text-sm text-muted-foreground">Phone</div>
          <div className="font-medium">{personal.phone}</div>
        </a>
        <a href={personal.linkedin} target="_blank" className="rounded-2xl border p-5 hover:bg-gray-50 dark:hover:bg-zinc-800">
          <div className="text-sm text-muted-foreground">LinkedIn</div>
          <div className="font-medium break-all">{personal.linkedin}</div>
        </a>
      </div>
    </Section>
  );
}
