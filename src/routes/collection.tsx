import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { img } from "@/lib/images";
import { PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/collection")({
  head: () => meta("Our Collection — Ashcombe & Hale", "Antique-style cabinets, carved chairs, tables and wardrobes handmade in solid hardwood."),
  component: Collection,
});

const items = [
  { cat: "Cabinets", t: "Walnut Linen Press", p: "£14,800", s: img.cabinet },
  { cat: "Chairs", t: "Carved Oak Hall Chair", p: "£3,200", s: img.chair },
  { cat: "Tables", t: "Regency Dining Table", p: "£18,500", s: img.table },
  { cat: "Chairs", t: "Elm Windsor Armchair", p: "£2,650", s: img.chair2 },
  { cat: "Tables", t: "Farmhouse Refectory Table", p: "£9,400", s: img.table2 },
  { cat: "Chairs", t: "Leather Library Chair", p: "£4,100", s: img.chair3 },
  { cat: "Cabinets", t: "Mahogany Sideboard", p: "£11,200", s: img.interior },
  { cat: "Seating", t: "Chesterfield Settee", p: "£8,900", s: img.sofa },
  { cat: "Seating", t: "Drawing Room Suite", p: "£16,000", s: img.interior2 },
  { cat: "Chairs", t: "Turned Beech Side Chair", p: "£1,450", s: img.chair2.replace("1538688525198-9b88f6f53126", "1592078615290-033ee584e267") },
  { cat: "Cabinets", t: "Oak Display Cabinet", p: "£12,300", s: img.cabinet.replace("1595428774223-ef52624120d2", "1611486212557-88be5ff6f941") },
  { cat: "Seating", t: "Velvet Fireside Chair", p: "£3,800", s: img.chair.replace("1503602642458-232111445657", "1581539250439-c96689b516dd") },
];
const cats = ["All", "Cabinets", "Chairs", "Tables", "Seating"];

function Collection() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? items : items.filter((i) => i.cat === cat);
  return (
    <>
      <PageHero eyebrow="The Collection" title="Pieces of quiet permanence." image={img.interior}>
        Each piece is made to order in our workshop, typically within 10–16 weeks.
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`btn ${c === cat ? "btn-primary" : "btn-outline text-forest"}`}>{c}</button>
          ))}
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((i) => (
            <article key={i.t} className="group fade-up">
              <div className="img-zoom aspect-[4/5]"><img src={i.s} alt={i.t} loading="lazy" /></div>
              <div className="mt-4 flex items-baseline justify-between border-b border-border pb-3">
                <h3 className="text-2xl">{i.t}</h3>
                <span className="text-muted-foreground">{i.p}</span>
              </div>
              <p className="eyebrow mt-2">{i.cat}</p>
            </article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link to="/contact" className="btn btn-primary">Enquire About a Piece</Link>
        </div>
      </section>
    </>
  );
}
