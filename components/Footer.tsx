// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
      © {new Date().getFullYear()} Affan Khan. All rights reserved.
    </footer>
  );
}
