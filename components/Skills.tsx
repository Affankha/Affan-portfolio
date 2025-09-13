// components/Skills.tsx
"use client";

import Image from "next/image";
import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className=" flex items-center justify-center p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-[#1e293b] rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform cursor-pointer gap-3 p-2"
            >
              <Image
                src={skill.link}
                alt={skill.name}
                width={50}
                height={50}
                className=""
              />
              <p className="text-zinc-900 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
