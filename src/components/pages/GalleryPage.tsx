"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ArrowUpRight } from "lucide-react";

function Grain() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "180px",
    }} />
  );
}

const filters = ["All", "Exterior Detail", "Ceramic Coating", "Paint Correction", "PPF", "Interior", "Before & After"];

const items = [
  { id: "1520340356584-f9917d1eea6f", alt: "Gleaming black car — exterior detail",        cat: "Exterior Detail",   cols: "sm:col-span-2" },
  { id: "1764693756618-fc101047a387", alt: "Red sports car — ceramic coating result",       cat: "Ceramic Coating",   cols: "" },
  { id: "1780558852671-e47265577239", alt: "Paint correction in progress",                  cat: "Paint Correction",  cols: "" },
  { id: "1565689876697-e467b6c54da2", alt: "Wheel decontamination wash",                   cat: "Exterior Detail",   cols: "" },
  { id: "1761934657948-708146148588", alt: "Microfiber final wipe",                         cat: "Exterior Detail",   cols: "" },
  { id: "1760520830355-e6be53e41c2f", alt: "Black sports car — showroom PPF finish",        cat: "PPF",               cols: "sm:col-span-2" },
  { id: "1550561438-3c2c3b8ea3a6",   alt: "Polished black coupe — paint correction",        cat: "Paint Correction",  cols: "" },
  { id: "1533666834526-903b11416fc1", alt: "Alloy wheel — ceramic wheel armor",             cat: "Ceramic Coating",   cols: "" },
  { id: "1764693756663-211afae0c81d", alt: "Red sports car top view — ceramic gloss",       cat: "Ceramic Coating",   cols: "" },
  { id: "1560611811-8a87a5239655",   alt: "Ferrari — multi-stage paint correction",         cat: "Paint Correction",  cols: "" },
  { id: "1616591938558-fb03d845567b", alt: "Matte black — PPF wrap",                        cat: "PPF",               cols: "" },
  { id: "1605164598708-25701594473e", alt: "Interior detailing — leather care",             cat: "Interior",          cols: "" },
  { id: "1607860108855-64acf2078ed9", alt: "Exterior foam wash pre-rinse",                  cat: "Exterior Detail",   cols: "sm:col-span-2" },
  { id: "1708805283017-c662be2c7a44", alt: "Tyre detail — wheel restoration",               cat: "Exterior Detail",   cols: "" },
  { id: "1474065581914-e24d783b0c55", alt: "Taillight detail — before & after correction",  cat: "Before & After",    cols: "" },
  { id: "1575844611398-2a68400b437c", alt: "White Mustang — full exterior detail",          cat: "Exterior Detail",   cols: "" },
  { id: "1608506375591-b90e1f955e4b", alt: "Interior vinyl — cabin armor coat",             cat: "Interior",          cols: "" },
  { id: "1656685299995-817275c284d7", alt: "Black car brick road — PPF install",            cat: "PPF",               cols: "sm:col-span-2" },
];

const stats = [
  { v: "500+", l: "Vehicles Completed" },
  { v: "100%", l: "Unedited Photos" },
  { v: "4.9★", l: "Average Rating" },
  { v: "8 Yrs", l: "In Business" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof items[0]>(null);

  const filtered = active === "All" ? items : items.filter(i => i.cat === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-0 bg-background overflow-hidden">
        <Grain />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Our Work</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-[clamp(44px,8.5vw,104px)] font-black uppercase leading-[0.88]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              THE<br /><span className="text-primary">GALLERY</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm max-w-xs leading-relaxed lg:pb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Every photo is unedited, unfiltered work from our studio. Real vehicles, real technicians, real results — nothing staged or enhanced.
            </motion.p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-border bg-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 sm:py-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }} className="text-center">
                <div className="text-2xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.v}</div>
                <div className="text-[10px] tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 overflow-x-auto">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`shrink-0 px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                active === f ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {f}
            </button>
          ))}
          <span className="ml-auto text-[10px] text-muted-foreground/40 shrink-0 pl-4" style={{ fontFamily: "'DM Mono', monospace" }}>
            {filtered.length} photos
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-background pb-28 pt-4">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px]">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div key={img.id} layout
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  className={`group relative overflow-hidden bg-muted cursor-pointer ${img.cols}`}
                  onClick={() => setLightbox(img)}>
                  <motion.img
                    src={`https://images.unsplash.com/photo-${img.id}?w=700&h=500&fit=crop&auto=format`}
                    alt={img.alt} className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <ZoomIn size={26} className="text-primary" />
                    <span className="text-[9px] tracking-widest uppercase text-foreground/60" style={{ fontFamily: "'DM Mono', monospace" }}>{img.cat}</span>
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-1 bg-background/70 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] tracking-widest uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>{img.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              No photos in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              WANT RESULTS<br /><span className="text-primary">LIKE THESE?</span>
            </h2>
            <p className="text-muted-foreground text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Book your vehicle in and let our certified team deliver the same level of result on your car.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }}
                className="group flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-black tracking-widest uppercase text-xs cursor-pointer" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Book A Detail <ArrowUpRight size={14} />
              </motion.div>
            </Link>
            <Link href="/pricing">
              <motion.div whileHover={{ scale: 1.03 }}
                className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-foreground/70 hover:text-foreground font-black tracking-widest uppercase text-xs cursor-pointer transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                View Pricing
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/96 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}>
            <button
              className="absolute top-6 right-6 w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              onClick={() => setLightbox(null)}>
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={`https://images.unsplash.com/photo-${lightbox.id}?w=1400&h=900&fit=crop&auto=format`}
              alt={lightbox.alt} className="max-w-5xl w-full max-h-[85vh] object-contain"
              onClick={e => e.stopPropagation()} />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
              <span className="text-sm text-foreground/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>{lightbox.alt}</span>
              <span className="text-[10px] tracking-widest uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>{lightbox.cat}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
