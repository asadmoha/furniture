import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Us — Ashcombe & Hale", "The story of a family of Cotswolds cabinetmakers working by hand since 1894."),
  component: About,
});

const team = [
  { n: "Thomas Hale", r: "Master Cabinetmaker", s: img.woodwork },
  { n: "Margaret Ashcombe", r: "Head of Restoration", s: img.workshop2 },
  { n: "William Reeve", r: "Carver & Turner", s: img.tools },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Four generations at the same bench." image={img.workshop} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-5xl leading-tight">It began with one chest of drawers.</h2>
          <p className="mt-6 text-muted-foreground">In 1894 Josiah Hale set up his bench in a disused corn mill beside the river Cam. His first commission — a walnut chest for the local rector — still stands in the vicarage today.</p>
          <p className="mt-4 text-muted-foreground">Joined by the Ashcombe family of upholsterers in 1921, the workshop has passed from parent to child ever since. Today eleven craftsmen and women carry the same tools, the same patience and the same promise: to make things properly.</p>
        </div>
        <div className="img-zoom aspect-[4/5]"><img src={img.tools} alt="Hand tools on the bench" /></div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">The Makers</p>
          <h2 className="mt-3 text-5xl">Meet the workshop</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((t) => (
              <div key={t.n}>
                <div className="img-zoom aspect-[3/4]"><img src={t.s} alt={t.n} loading="lazy" /></div>
                <h3 className="mt-4 text-3xl">{t.n}</h3>
                <p className="eyebrow mt-1">{t.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
