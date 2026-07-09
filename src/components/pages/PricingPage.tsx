"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

function Grain() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "180px",
    }} />
  );
}

const priceGroups = [
  {
    id: "coatings",
    label: "Coatings & Protection",
    items: [
      { service: "PPF — Partial (Bonnet + Bumper + Mirrors)", hatchback: "₹15,000", sedan: "₹18,000", suv: "₹25,000", note: "Brand dependent" },
      { service: "PPF — High-Impact Zone Package", hatchback: "₹25,000", sedan: "₹30,000", suv: "₹40,000", note: "Garware / LLumar / Saint Gobain" },
      { service: "PPF — Full Body", hatchback: "₹65,000", sedan: "₹85,000", suv: "₹1,20,000+", note: "Premium brand, custom quote" },
      { service: "Vinyl Wrap — Colour Change (Partial)", hatchback: "₹25,000", sedan: "₹30,000", suv: "₹40,000", note: "Gloss / matte / satin" },
      { service: "Vinyl Wrap — Full Body Colour Change", hatchback: "₹55,000", sedan: "₹70,000", suv: "₹95,000+", note: "Custom quote available" },
      { service: "9H Ceramic Coating — 1 Year", hatchback: "₹7,999", sedan: "₹10,999", suv: "₹14,999", note: "Includes prep polish" },
      { service: "9H Ceramic Coating — 3 Year", hatchback: "₹12,999", sedan: "₹16,999", suv: "₹22,999", note: "Multi-layer application" },
      { service: "Graphene Coating — 3 Year", hatchback: "₹18,000", sedan: "₹23,000", suv: "₹30,000", note: "10H hardness" },
      { service: "Graphene Coating — 5 Year", hatchback: "₹25,000", sedan: "₹32,000", suv: "₹42,000", note: "Includes paint correction" },
      { service: "Marine Graphene Coating", hatchback: "₹22,000", sedan: "₹28,000", suv: "₹38,000", note: "Extreme environment grade" },
      { service: "Glass / Windshield Coating", hatchback: "₹1,499", sedan: "₹1,799", suv: "₹2,199", note: "All glass surfaces" },
      { service: "Rain Repellent Treatment", hatchback: "₹999", sedan: "₹1,199", suv: "₹1,499", note: "3–6 month durability" },
      { service: "Plastic / Trim Coating", hatchback: "₹799", sedan: "₹999", suv: "₹1,299", note: "UV protection" },
      { service: "Headlight Coating", hatchback: "₹799", sedan: "₹799", suv: "₹999", note: "Front + rear lenses" },
      { service: "Teflon Coating", hatchback: "₹2,500", sedan: "₹3,200", suv: "₹4,200", note: "3–6 months" },
      { service: "Alloy Wheel Coating", hatchback: "₹1,499", sedan: "₹1,499", suv: "₹1,799", note: "All 4 wheels" },
      { service: "Leather Coating", hatchback: "₹1,499", sedan: "₹1,799", suv: "₹2,199", note: "Post Leather Master clean" },
    ],
  },
  {
    id: "detailing",
    label: "Detailing & Restoration",
    items: [
      { service: "Paint Correction — Single Stage (Light)", hatchback: "₹3,499", sedan: "₹4,499", suv: "₹5,999", note: "RUPES BigFoot" },
      { service: "Paint Correction — Two Stage (Medium)", hatchback: "₹5,999", sedan: "₹7,499", suv: "₹9,999", note: "Cutting + finishing" },
      { service: "Paint Correction — Multi Stage (Full)", hatchback: "₹8,999", sedan: "₹11,499", suv: "₹14,999", note: "Includes clay bar" },
      { service: "Chrome Parts Restoration", hatchback: "₹599", sedan: "₹799", suv: "₹1,299", note: "Per set of trim" },
      { service: "Deep Cleaning — Dry (Without Opening Fittings)", hatchback: "₹1,499", sedan: "₹1,799", suv: "₹2,499", note: "Steam + vacuum" },
      { service: "Deep Cleaning — Wet (With Opening Fittings)", hatchback: "₹2,999", sedan: "₹3,999", suv: "₹5,499", note: "Full disassembly clean" },
      { service: "Regular Wash", hatchback: "₹399", sedan: "₹499", suv: "₹599", note: "Foam + hand wash" },
      { service: "Full Detailing Package (Interior + Exterior)", hatchback: "₹5,999", sedan: "₹7,999", suv: "₹10,999", note: "1–2 day service" },
      { service: "Full Car Restoration", hatchback: "Custom", sedan: "Custom", suv: "Custom", note: "Quote after inspection" },
    ],
  },
  {
    id: "interior",
    label: "Interior & Accessories",
    items: [
      { service: "Window Tinting — Basic Dyed Film", hatchback: "₹3,999", sedan: "₹4,499", suv: "₹5,499", note: "Legal VLT compliant" },
      { service: "Window Tinting — Ceramic Film", hatchback: "₹8,999", sedan: "₹10,999", suv: "₹13,999", note: "Saint Gobain / LLumar" },
      { service: "Window Tinting — Premium 3M / Nano Ceramic", hatchback: "₹14,999", sedan: "₹17,999", suv: "₹22,999", note: "Max heat rejection" },
      { service: "Ambient Lighting — Basic (Footwell)", hatchback: "₹3,999", sedan: "₹3,999", suv: "₹4,999", note: "RGB, app controlled" },
      { service: "Ambient Lighting — Full Cabin (Multi-Zone)", hatchback: "₹7,999", sedan: "₹8,999", suv: "₹11,999", note: "Music sync option" },
      { service: "Speaker Upgrade (Front Pair)", hatchback: "₹5,000", sedan: "₹5,000", suv: "₹5,000", note: "Parts + labour" },
      { service: "Full Audio System Upgrade", hatchback: "₹15,000+", sedan: "₹15,000+", suv: "₹20,000+", note: "Custom build quote" },
      { service: "LED Headlight Upgrade / DRL", hatchback: "₹3,000", sedan: "₹3,500", suv: "₹4,500", note: "Parts + labour" },
      { service: "Taillight Upgrade / Sequential LED", hatchback: "₹3,000", sedan: "₹3,500", suv: "₹4,500", note: "Per set" },
      { service: "Perfumes & Diffusers", hatchback: "₹999", sedan: "₹999", suv: "₹999", note: "Multiple fragrances" },
      { service: "Odour Treatment (Ozone)", hatchback: "₹1,499", sedan: "₹1,799", suv: "₹2,199", note: "Smoke / mould / pet" },
      { service: "Anti-Rat Treatment", hatchback: "₹799", sedan: "₹999", suv: "₹1,299", note: "6-month protection" },
      { service: "Dashcam Installation (Front Only)", hatchback: "₹2,999", sedan: "₹2,999", suv: "₹3,499", note: "Parts + concealed wiring" },
      { service: "Dashcam Installation (Front + Rear)", hatchback: "₹4,999", sedan: "₹5,499", suv: "₹6,499", note: "Full hidden install" },
      { service: "Reverse Camera Installation", hatchback: "₹1,999", sedan: "₹2,499", suv: "₹2,999", note: "Wiring included" },
      { service: "Seat Covers — Leatherette", hatchback: "₹7,000", sedan: "₹8,500", suv: "₹11,000", note: "Custom fit" },
      { service: "Seat Covers — Nappa / Premium Leather", hatchback: "₹18,000", sedan: "₹22,000", suv: "₹30,000+", note: "Custom stitch" },
      { service: "Interior Customisation (Dash/Panels)", hatchback: "Custom", sedan: "Custom", suv: "Custom", note: "Quote after design" },
      { service: "Body Kit / Modification", hatchback: "Custom", sedan: "Custom", suv: "Custom", note: "Supply + fit quote" },
    ],
  },
  {
    id: "repairs",
    label: "Car Care & Repairs",
    items: [
      { service: "Denting & Painting — Minor (Per Panel)", hatchback: "₹3,500", sedan: "₹4,000", suv: "₹5,000", note: "Colour matched" },
      { service: "Denting & Painting — Medium (Per Panel)", hatchback: "₹6,000", sedan: "₹7,000", suv: "₹9,000", note: "Body filler + repaint" },
      { service: "Bumper Repair — Plastic Welding", hatchback: "₹2,999", sedan: "₹3,499", suv: "₹4,499", note: "No screws method" },
      { service: "Radiator Flush", hatchback: "₹1,499", sedan: "₹1,499", suv: "₹1,799", note: "Includes fresh coolant" },
      { service: "Coolant Top-Up", hatchback: "₹499", sedan: "₹499", suv: "₹599", note: "OEM-spec coolant" },
      { service: "Coolant Full Replacement", hatchback: "₹1,499", sedan: "₹1,499", suv: "₹1,799", note: "Full flush + refill" },
      { service: "Radiator & Condenser Foam Cleaning", hatchback: "₹999", sedan: "₹999", suv: "₹1,299", note: "Improves AC & mileage" },
      { service: "Hydrodip — Interior Trim Panel", hatchback: "₹3,000/part", sedan: "₹3,000/part", suv: "₹3,000/part", note: "Carbon / wood / custom" },
      { service: "Hydrodip — Alloy Wheels (Set of 4)", hatchback: "₹8,000", sedan: "₹8,000", suv: "₹10,000", note: "Custom pattern" },
    ],
  },
];

const faqs = [
  { q: "Do prices include GST?", a: "All prices shown are exclusive of 18% GST. A proper GST invoice is issued for every service. If you need a GST invoice for business purposes, please provide your GSTIN at booking." },
  { q: "How are prices different for hatchback vs sedan vs SUV?", a: "Prices shown are for hatchbacks (Swift, i20, Nexon, Punch). Sedans (City, Verna, Dzire) are priced in the Sedan column. SUVs/MUVs (Creta, Seltos, Scorpio, Fortuner, XUV700) in the SUV column. Luxury vehicles (BMW, Audi, Mercedes, Jeep) may carry a premium — please contact us for a custom quote." },
  { q: "Do you use genuine RUPES equipment?", a: "Yes. All paint correction and polishing work at Glossy Street is performed using RUPES BigFoot random orbital and gear-driven polishing machines with genuine RUPES and Menzerna compounds. This is professional-grade equipment used by certified detailers worldwide — not consumer tools." },
  { q: "Which PPF brand would you recommend?", a: "For most cars: Garware (great value, Indian brand, solid performance) or LLumar (international brand, good warranty). For premium and luxury vehicles: NAR or Ultraguard (self-healing, high optical clarity). Himanshu will recommend the right brand for your specific vehicle and budget when you book." },
  { q: "Is ceramic coating worth it for my car?", a: "For any car driven in India — yes. India's UV index, monsoon acid rain, dust, bird droppings, and polluted air create paint damage conditions that are genuinely extreme by global standards. A 3-year ceramic coating pays for itself in protection and reduced washing frequency within its first year." },
  { q: "Can I combine services for a discount?", a: "Yes. Combining paint correction + ceramic coating, or PPF + ceramic, or full detailing + coating packages gets you a better effective price than booking individually. Mention at booking and Himanshu will build a bundled price." },
  { q: "How long do services take?", a: "Regular wash: 45–60 min. Deep cleaning: 2–7 hours depending on type. Paint correction: 4–8 hours. Ceramic/graphene coating: full day to 2 days. PPF: 1–3 days. Full detailing or restoration: 2–7 days. We'll confirm your specific timeline when you book." },
  { q: "Do you offer doorstep / mobile service?", a: "Yes, for select services. Mobile availability depends on your location. Contact Himanshu on WhatsApp to check availability and confirm any travel surcharge." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button className="w-full text-left py-5 flex items-start justify-between gap-4 group" onClick={() => setOpen(!open)}>
        <span className="text-sm lg:text-base font-bold uppercase group-hover:text-primary transition-colors"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
          className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5">
          <ChevronDown size={17} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
            <p className="pb-5 text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  const [activeGroup, setActiveGroup] = useState("coatings");

  useEffect(() => {
    document.title = "Pricing — All Services | Glossy Street Car Detailing India";
    const set = (n: string, v: string) => {
      let el = document.querySelector(`meta[name="${n}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); }
      el.content = v;
    };
    set("description", "Full pricing for all 40+ services — ceramic coating from ₹7,999, PPF from ₹15,000, full detailing from ₹5,999. Transparent INR pricing for hatchback, sedan & SUV.");
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-background overflow-hidden">
        <Grain />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Transparent Pricing</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(42px,8.2vw,100px)] font-black uppercase leading-[0.88] mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            PRICING &<br /><span className="text-primary">PACKAGES</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            All prices are transparent, honest, and in INR. No hidden fees. Prices shown per vehicle category — hatchback / sedan / SUV.
            GST (18%) charged separately. Exact price confirmed before any work begins.
          </motion.p>

          {/* Note strip */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-4">
            {["All prices excl. 18% GST", "Luxury vehicles: custom quote", "Bundle discounts available", "RUPES equipment used"].map(n => (
              <div key={n} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
                <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{n}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky category tabs */}
      <div className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {priceGroups.map(g => (
              <button key={g.id}
                onClick={() => {
                  setActiveGroup(g.id);
                  document.getElementById(`price-${g.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`shrink-0 px-5 py-4 border-b-2 text-[11px] font-black tracking-widest uppercase whitespace-nowrap transition-all ${
                  activeGroup === g.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price tables */}
      <section className="bg-background pb-0">
        {priceGroups.map((group, gi) => (
          <div key={group.id} id={`price-${group.id}`} className="border-b border-border">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-10 pb-4">
              <h2 className="text-3xl lg:text-4xl font-black uppercase mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {String(gi + 1).padStart(2, "0")} — {group.label}
              </h2>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                {group.items.length} services · Prices excl. GST
              </p>
            </div>

            {/* Table — desktop */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-10 hidden lg:block">
              <div className="border border-border overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-[1fr_120px_120px_120px_140px] bg-secondary border-b border-border">
                  {["Service", "Hatchback", "Sedan", "SUV / MUV", "Notes"].map(h => (
                    <div key={h} className="px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium"
                      style={{ fontFamily: "'DM Mono', monospace" }}>{h}</div>
                  ))}
                </div>
                {group.items.map((item, i) => (
                  <motion.div key={item.service}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.025 }}
                    className="grid grid-cols-[1fr_120px_120px_120px_140px] border-b border-border last:border-0 hover:bg-secondary/40 transition-colors">
                    <div className="px-4 py-3.5 text-sm font-medium text-foreground/85" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.service}</div>
                    <div className="px-4 py-3.5 text-sm font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.hatchback}</div>
                    <div className="px-4 py-3.5 text-sm font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.sedan}</div>
                    <div className="px-4 py-3.5 text-sm font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.suv}</div>
                    <div className="px-4 py-3.5 text-[11px] text-muted-foreground/60 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.note}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cards — mobile */}
            <div className="max-w-[1400px] mx-auto px-6 pb-8 lg:hidden flex flex-col gap-3">
              {group.items.map((item, i) => (
                <motion.div key={item.service}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-secondary border border-border p-4">
                  <div className="text-sm font-bold text-foreground mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.service}</div>
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-2 mb-1.5">
                    {[{ l: "Hatchback", v: item.hatchback }, { l: "Sedan", v: item.sedan }, { l: "SUV", v: item.suv }].map(c => (
                      <div key={c.l}>
                        <div className="text-[9px] tracking-widest uppercase text-muted-foreground/50 mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{c.l}</div>
                        <div className="text-base font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{c.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] text-muted-foreground/50 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.note}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Popular bundles */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Best Value</span>
          </div>
          <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-none mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            POPULAR<br /><span className="text-primary">BUNDLES</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            {[
              {
                name: "Protect & Shine",
                tag: "Most Popular",
                price: "From ₹13,999",
                note: "Hatchback · saves ~₹2,000",
                includes: ["Single-stage paint correction", "9H Ceramic coating (1 yr)", "Glass coating", "Before & after photography"],
                popular: false,
              },
              {
                name: "Full Protection",
                tag: "Best Value",
                price: "From ₹28,999",
                note: "Hatchback · saves ~₹4,500",
                includes: ["PPF front package", "Graphene coating full car", "Glass coating", "Paint correction prep", "2-year warranty"],
                popular: true,
              },
              {
                name: "The Works",
                tag: "Complete Care",
                price: "From ₹19,999",
                note: "Hatchback · saves ~₹3,000",
                includes: ["Full deep clean (with fittings)", "Two-stage paint correction", "9H Ceramic coating (2 yr)", "Alloy wheel coating", "Odour treatment"],
                popular: false,
              },
            ].map((b, i) => (
              <motion.div key={b.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 lg:p-10 ${b.popular ? "bg-primary" : "bg-card"}`}>
                {b.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-background text-primary text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 border border-primary"
                    style={{ fontFamily: "'DM Mono', monospace" }}>Best Value</div>
                )}
                <div className={`text-[10px] tracking-[0.22em] uppercase mb-2 ${b.popular ? "text-white/60" : "text-muted-foreground"}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}>{b.tag}</div>
                <div className={`text-3xl font-black uppercase mb-1 ${b.popular ? "text-white" : ""}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{b.name}</div>
                <div className={`text-4xl font-black leading-none mb-1 ${b.popular ? "text-white" : "text-primary"}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{b.price}</div>
                <div className={`text-[10px] tracking-widest uppercase mb-6 ${b.popular ? "text-white/50" : "text-muted-foreground"}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}>{b.note}</div>
                <div className="flex flex-col gap-2.5 flex-1 mb-7">
                  {b.includes.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className={`w-1.5 h-1.5 rotate-45 shrink-0 mt-1.5 ${b.popular ? "bg-white/60" : "bg-primary"}`} />
                      <span className={`text-sm leading-snug ${b.popular ? "text-white/85" : "text-foreground/75"}`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 font-black tracking-widest uppercase text-xs cursor-pointer border transition-colors ${
                      b.popular
                        ? "bg-white text-primary border-white hover:bg-transparent hover:text-white"
                        : "border-border text-foreground hover:bg-primary hover:border-primary hover:text-white"
                    }`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Book Bundle <ArrowUpRight size={12} />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-background border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Pricing FAQ</span>
            </div>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-[0.9] mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              YOUR<br />QUESTIONS<br /><span className="text-primary">ANSWERED</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Transparent pricing, honest answers. Not sure which service fits your car? WhatsApp Himanshu directly.
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-xs font-black tracking-widest uppercase cursor-pointer"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Get A Custom Quote <ArrowUpRight size={13} />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="border-t border-border">
            {faqs.map(faq => <FAQItem key={faq.q} {...faq} />)}
          </motion.div>
        </div>
      </section>
    </>
  );
}
