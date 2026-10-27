import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { img } from "@/lib/images";
import { PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — Ashcombe & Hale", "Visit our Cotswolds workshop or send an enquiry about commissions and restoration."),
  component: Contact,
});

const field = "w-full border-b border-input bg-transparent py-3 outline-none transition focus:border-brass";

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    const msg = String(d.get("message") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) return setError("Please fill in your name, a valid email and a message.");
    setError("");
    setSent(true);
  }
  return (
    <>
      <PageHero eyebrow="Contact" title="Come and see the workshop." image={img.interior2} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-5">
        <div className="md:col-span-2 space-y-8">
          <div><p className="eyebrow">Showroom & Workshop</p><p className="mt-2 text-xl">The Old Mill, Bourton Lane<br />Chipping Campden, GL55 6JX</p></div>
          <div><p className="eyebrow">Opening Hours</p><p className="mt-2">Tue – Sat, 9am – 5pm<br />Visits by appointment</p></div>
          <div><p className="eyebrow">Telephone & Email</p><p className="mt-2">+44 1386 840 212<br />studio@ashcombehale.co.uk</p></div>
          <div className="img-zoom aspect-[4/3]"><img src={img.chair} alt="Carved chair" /></div>
        </div>
        <div className="md:col-span-3">
          {sent ? (
            <div className="border border-brass p-12 text-center">
              <h2 className="text-4xl">Thank you.</h2>
              <p className="mt-4 text-muted-foreground">Your enquiry has been received. One of our makers will reply within two working days.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-8" noValidate>
              <h2 className="text-4xl">Send an enquiry</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <input name="name" placeholder="Your name" maxLength={100} className={field} />
                <input name="email" type="email" placeholder="Email address" maxLength={255} className={field} />
              </div>
              <select name="topic" className={field} defaultValue="Commission">
                <option>Commission</option><option>Restoration</option><option>Collection piece</option><option>Workshop visit</option>
              </select>
              <textarea name="message" rows={6} placeholder="Tell us about your piece or project" maxLength={2000} className={field} />
              {error && <p className="text-destructive">{error}</p>}
              <button type="submit" className="btn btn-primary">Send Enquiry</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
