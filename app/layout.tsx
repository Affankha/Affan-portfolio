// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Affan Khan — Portfolio",
  description: "Full Stack Developer Portfolio (Next.js + Tailwind + Framer Motion)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
