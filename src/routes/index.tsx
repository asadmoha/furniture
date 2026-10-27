import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { Gallery, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Ashcombe & Hale — Handcrafted Antique Furniture", "Heirloom cabinetry, carved chairs and expert restoration from a family workshop established in 1894."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-walnut">
        <img src={img.hero} alt="Antique furnished drawing room" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-walnut via-walnut/60 to-transparent" />
        <div className="fade-up relative mx-auto w-full max-w-7xl px-6 text-cream">
          <p className="eyebrow">Cabinetmakers · Restorers · Since 1894</p>
          <h1 className="mt-6 max-w-3xl text-6xl leading-[1.05] md:text-8xl">Furniture made to outlive us all.</h1>
          <p className="mt-6 max-w-lg text-xl text-cream/80">Four generations of hand-cut joinery, carved detail and patient French polish — crafted in solid walnut, oak and mahogany.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/collection" className="btn btn-primary">View the Collection</Link>
            <Link to="/contact" className="btn btn-outline">Book a Visit</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">Our Heritage</p>
          <h2 className="mt-4 text-5xl leading-tight">A quiet devotion to the old ways.</h2>
          <p className="mt-6 text-muted-foreground">From our mill in the Cotswolds, our makers still mark out dovetails by hand and season timber for years before it meets the bench. No two pieces are alike — each carries the hand of the craftsman who made it.</p>
          <Link to="/about" className="btn btn-outline mt-8 text-forest">Our Story</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="img-zoom aspect-[3/4]"><img src={img.workshop} alt="Workshop tools" /></div>
          <div className="img-zoom mt-12 aspect-[3/4]"><img src={img.woodwork} alt="Artisan at work" /></div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow">Selected Pieces</p><h2 className="mt-3 text-5xl">From the Collection</h2></div>
            <Link to="/collection" className="btn btn-outline text-forest">See All</Link>
          </div>
          <Gallery items={[
            { src: img.cabinet, title: "Georgian Wardrobe", note: "Figured walnut, c. 1790 style" },
            { src: img.chair, title: "Carved Hall Chair", note: "English oak" },
            { src: img.table, title: "Regency Dining Table", note: "Mahogany, seats ten" },
            { src: img.chair2, title: "Windsor Armchair", note: "Elm & ash" },
            { src: img.interior2, title: "Library Settee", note: "Hand-tufted leather" },
          ]} />
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {[
          { to: "/custom", t: "Custom Commissions", s: img.tools },
          { to: "/restoration", t: "Restoration", s: img.workshop2 },
          { to: "/about", t: "The Workshop", s: img.woodwork },
        ].map((c) => (
          <Link key={c.t} to={c.to} className="group img-zoom relative aspect-square bg-walnut">
            <img src={c.s} alt={c.t} className="opacity-70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
              <h3 className="text-4xl">{c.t}</h3>
              <span className="mt-3 text-sm uppercase tracking-[0.3em] text-brass">Discover →</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="font-serif text-3xl italic leading-snug md:text-4xl">“They restored my grandmother's bureau so beautifully, I wept. It looks as it must have in 1880.”</p>
        <p className="eyebrow mt-6">— Eleanor Whitfield, Bath</p>
      </section>
    </>
  );
}
