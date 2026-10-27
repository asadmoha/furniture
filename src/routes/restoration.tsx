import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/restoration")({
  head: () => meta("Restoration & Craftsmanship — Ashcombe & Hale", "Conservation-grade antique furniture restoration: French polishing, veneer repair, carving and upholstery."),
  component: Restoration,
});

const services = [
  { t: "French Polishing", d: "Traditional shellac finishes built up by hand, layer upon layer, to a deep lustrous glow.", s: img.workshop },
  { t: "Veneer & Marquetry", d: "Lifted, missing or damaged veneers matched and relaid using hot hide glue.", s: img.woodwork },
  { t: "Carving & Joinery", d: "Broken carvings recreated and loose joints re-glued without modern fixings.", s: img.workshop2 },
  { t: "Traditional Upholstery", d: "Horsehair, hessian and hand-tied springs — the way it was always done.", s: img.chair3 },
];

function Restoration() {
  return (
    <>
      <PageHero eyebrow="Restoration & Craftsmanship" title="Bringing history gently back to life." image={img.workshop2}>
        We conserve rather than replace, respecting the patina and story of every piece entrusted to us.
      </PageHero>
      <section className="mx-auto max-w-7xl space-y-24 px-6 py-24">
        {services.map((s, i) => (
          <div key={s.t} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="img-zoom aspect-[4/3]"><img src={s.s} alt={s.t} loading="lazy" /></div>
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="mt-3 text-5xl">{s.t}</h2>
              <p className="mt-5 text-lg text-muted-foreground">{s.d}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-walnut py-20 text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-3">
          {[["130+", "Years of craft"], ["6,000", "Pieces restored"], ["11", "Master craftsmen"]].map(([n, l]) => (
            <div key={l}><p className="font-serif text-6xl text-brass">{n}</p><p className="eyebrow mt-2 text-cream/70">{l}</p></div>
          ))}
        </div>
      </section>
      <section className="py-20 text-center">
        <h2 className="text-4xl">Have a piece in need of care?</h2>
        <Link to="/contact" className="btn btn-primary mt-8">Request an Assessment</Link>
      </section>
    </>
  );
}
