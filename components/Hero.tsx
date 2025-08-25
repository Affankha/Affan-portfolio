// components/Hero.tsx
"use client";

import { personal, summary } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl">
          Hi, I am{" "}
          <span className="underline decoration-wavy decoration-2 underline-offset-4">
            {personal.name}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">{personal.title}</p>
        <p className="max-w-xl">{summary}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={personal.github}
            target="_blank"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50 dark:hover:bg-zinc-800"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50 dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50 dark:hover:bg-zinc-800"
          >
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="flex items-center justify-center"
      >
        <div className="h-48 w-48 overflow-hidden rounded-3xl border sm:h-64 sm:w-64">
          {/* Replace with your photo in /public/profile.jpg */}
          <Image
            src="/profile.png"
            alt="Profile"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
