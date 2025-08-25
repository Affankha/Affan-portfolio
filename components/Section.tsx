// components/Section.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Section({
  id,
  title,
  subtitle,
  children
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          {subtitle ? (
            <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
          ) : null}
        </motion.div>
        <motion.div variants={fadeInUp}>{children}</motion.div>
      </motion.div>
    </section>
  );
}
