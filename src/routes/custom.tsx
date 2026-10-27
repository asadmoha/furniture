import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { Gallery, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/custom")({
  head: () => meta("Custom Furniture Commissions — Ashcombe & Hale", "Commission a bespoke heirloom piece designed with you and built by hand in solid hardwood."),
  component: Custom,
});

const steps = [
  ["I", "Consultation", "We visit your home or welcome you to the workshop to understand the room, the use and the feeling you want."],
  ["II", "Design & Timber", "Hand-drawn elevations and a timber selection from our seasoned stock of walnut, oak, elm and mahogany."],
  ["III", "Making", "Your piece is built by a single master cabinetmaker using traditional joinery and hand-cut veneers."],
  ["IV", "Finishing & Delivery", "Shellac French polish or hand-rubbed oil, then white-glove delivery and placement."],
];

function Custom() {
  return (
    <>
      <PageHero eyebrow="Custom Furniture" title="Designed with you. Made for generations." image={img.tools}>
        From a single dining chair to a fully fitted library, we make bespoke furniture in the great English tradition.
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-center">The Commission Process</p>
        <h2 className="mt-3 text-center text-5xl">Four unhurried steps</h2>
        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div key={t} className="border-t border-brass pt-6">
              <p className="font-serif text-5xl text-brass">{n}</p>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-5xl">Recent commissions</h2>
          <Gallery items={[
            { src: img.table2, title: "Oak Refectory Table", note: "Commission for a Somerset farmhouse" },
            { src: img.chair3, title: "Reading Chair", note: "Walnut & tan leather" },
            { src: img.cabinet, title: "Bespoke Armoire", note: "Burr walnut veneer" },
            { src: img.interior, title: "Fitted Sideboard", note: "Georgian townhouse, London" },
            { src: img.sofa, title: "Library Settee", note: "Button-back leather" },
          ]} />
        </div>
      </section>
      <section className="bg-forest py-20 text-center text-cream">
        <h2 className="text-4xl md:text-5xl">Begin your commission</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">Commissions typically start from £2,500 and take 12–20 weeks.</p>
        <Link to="/contact" className="btn btn-outline mt-8">Arrange a Consultation</Link>
      </section>
    </>
  );
}
