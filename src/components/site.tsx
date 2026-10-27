import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/collection", label: "Collection" },
  { to: "/custom", label: "Custom" },
  { to: "/restoration", label: "Restoration" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-walnut/80 bg-walnut text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl tracking-wide">
          Ashcombe <span className="text-brass">&amp;</span> Hale
          <span className="ml-3 hidden text-[0.65rem] uppercase tracking-[0.3em] text-brass sm:inline">Est. 1894</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm uppercase tracking-[0.2em] text-cream/80 transition hover:text-brass" activeProps={{ className: "text-brass" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-sm uppercase tracking-widest" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-cream/10 px-6 py-6 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-serif text-2xl">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-walnut text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-cream">Ashcombe &amp; Hale</p>
          <p className="mt-4 max-w-sm">Cabinetmakers and restorers since 1894. Every piece made by hand in our Cotswolds workshop.</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Workshop</p>
          <p>The Old Mill, Bourton Lane<br />Chipping Campden, GL55 6JX</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Enquiries</p>
          <p>+44 1386 840 212<br />studio@ashcombehale.co.uk</p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-sm text-cream/50">© 2026 Ashcombe &amp; Hale Cabinetmakers</div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: string; image: string; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-walnut">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/40 to-transparent" />
      <div className="fade-up relative mx-auto w-full max-w-7xl px-6 pb-16 text-cream">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">{title}</h1>
        {children && <div className="mt-6 max-w-xl text-lg text-cream/80">{children}</div>}
      </div>
    </section>
  );
}

export function Gallery({ items }: { items: { src: string; title: string; note?: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <figure key={it.title} className={`group img-zoom relative ${i % 5 === 0 ? "lg:row-span-2 aspect-[3/4] lg:aspect-auto" : "aspect-[4/3]"}`}>
          <img src={it.src} alt={it.title} loading="lazy" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-walnut/90 to-transparent p-5 text-cream">
            <p className="font-serif text-2xl">{it.title}</p>
            {it.note && <p className="text-sm text-cream/70">{it.note}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
