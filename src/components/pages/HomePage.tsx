"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight, ChevronRight, Star, Play, Sparkles, Shield,
  Zap, Clock, Car, Droplets, CheckCircle, ChevronDown, ArrowRight,
  Wrench
} from "lucide-react";

// ─── Shared helpers ───────────────────────────────────────────────────────────
function Grain({ opacity = 0.04 }: { opacity?: number }) {
  return (
    null
  );
}

function GridLines({ opacity = 0.025 }: { opacity?: number }) {
  return (
    null
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-primary" />
      <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>{children}</span>
    </div>
  );
}

function useCounter(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let t0: number | null = null;
    const raf = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, target, duration]);
  return count;
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
function Marquee() {
  const items = [
    "PPF — 9 Brands", "Graphene Coating", "9H Ceramic Coating",
    "RUPES Paint Correction", "Deep Cleaning", "Window Tinting",
    "Vinyl Wrap", "Ambient Lighting", "Anti-Rat Treatment",
    "Denting & Painting", "Odour Treatment", "Dashcam Install",
    "Marine Graphene", "Teflon Coating", "Alloy Wheel Coating",
    "Seat Covers", "Radiator Flush", "Hydrodip",
  ];
  return (
    <div className="relative overflow-hidden border-y border-border py-3.5 bg-secondary">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-sm tracking-[0.22em] uppercase text-muted-foreground px-7 font-medium" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {item}
            </span>
            <span className="text-primary/60 text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] lg:min-h-screen bg-background overflow-hidden flex flex-col" id="home">
      <Grain opacity={0.035} />
      <GridLines opacity={0.018} />

      {/* Red radial glow emanating from the car side */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 65% at 85% 50%, rgba(200,18,26,0.14) 0%, transparent 68%)" }} />

      {/* ── Right side: car image ──────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none opacity-45 sm:opacity-60 lg:opacity-100">
        <img
          src="https://images.unsplash.com/photo-1764693756618-fc101047a387?w=1200&h=1000&fit=crop&auto=format"
          alt="Premium red sports car — Glossy Street"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
      </div>

      {/* ── Left side: content ─────────────────────────────────── */}
      <div className="relative flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-28 pb-12 lg:pt-24 lg:pb-16">

        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.65 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="text-[10px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>
            Est. 2023 · India's Premium Detailing Studio
          </span>
        </motion.div>

        {/* Headline — three lines with staggered reveal */}
        <div className="mb-6 sm:mb-8">
          {[
            { text: "GET READY", solid: true },
            { text: "TO TRANSFORM", solid: false },
            { text: "YOUR RIDE.", solid: true },
          ].map((line, i) => (
            <div key={line.text} className="overflow-hidden">
              <motion.div
                initial={{ y: 110, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.42 + i * 0.13, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(46px,8.2vw,118px)] font-black uppercase leading-[0.87]"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: line.solid ? "#F3F3F3" : "transparent",
                  WebkitTextStroke: line.solid ? undefined : "2px #C8121A",
                  textShadow: line.solid ? undefined : "0 0 60px rgba(200,18,26,0.25)",
                }}
              >
                {line.text}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.65 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 mb-8 sm:mb-10"
        >
          <p className="text-muted-foreground leading-relaxed text-[15px] max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Ceramic coatings, paint correction &amp; PPF — crafted for India's roads, by Himanshu.
          </p>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04, backgroundColor: "#a80f15" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-xs font-black tracking-widest uppercase cursor-pointer transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Book Now
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.div>
            </Link>
            <Link href="/gallery">
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="group flex items-center gap-2 px-7 py-3.5 border border-border text-foreground/70 hover:text-foreground hover:border-foreground/30 text-xs font-black tracking-widest uppercase cursor-pointer transition-all"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <Play size={10} className="fill-current" /> Our Work
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {["500+ Cars Detailed", "Gtechniq Certified", "4.9★ Rated", "XPEL PPF Installer"].map(b => (
            <div key={b} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
              <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{b}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Floating rating badge ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.88 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-8 lg:right-[42%] bottom-32 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 hidden md:flex flex-col items-center gap-1.5 bg-card/85 backdrop-blur-xl border border-border p-5 w-36"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-primary text-primary" />)}
        </div>
        <div className="text-4xl font-black text-primary leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>4.9</div>
        <div className="text-[9px] tracking-widest uppercase text-muted-foreground text-center" style={{ fontFamily: "'DM Mono', monospace" }}>500+ Reviews</div>
        <div className="w-full h-px bg-border my-1" />
        <div className="text-[9px] tracking-wider uppercase text-primary/70 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>Certified Studio</div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 [writing-mode:vertical-rl]" style={{ fontFamily: "'DM Mono', monospace" }}>Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent origin-top"
        />
      </motion.div>

      {/* ── Bottom stats strip ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.7 }}
        className="relative border-t border-border bg-secondary/80 backdrop-blur-sm"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { v: "500+", l: "Cars Detailed" },
              { v: "2+ Yrs", l: "In Business" },
              { v: "99%", l: "5-Star Satisfaction" },
              { v: "8+", l: "Certifications" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.07 }}
                className="px-5 lg:px-8 py-4 flex flex-col gap-0.5"
              >
                <div className="text-xl lg:text-2xl font-black text-primary leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.v}</div>
                <div className="text-[9px] tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


// ─── Brand partners ───────────────────────────────────────────────────────────
const brands = [
  "Garware", "LLumar", "Saint Gobain", "NAR", "Ultraguard",
  "UC Films", "Camio", "Troro", "Neoshield", "RUPES",
  "Gtechniq", "Gyeon", "IGL Coatings", "3M", "XPEL",
  "Menzerna", "Sonax", "Ceramic Pro",
];

function BrandPartners() {
  return (
    <div className="border-b border-border bg-background py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-6">
        <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground/40 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>
          Certified & Authorised Partners
        </p>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-0 whitespace-nowrap"
        >
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="flex items-center px-10">
              <span className="text-xl font-black uppercase tracking-widest text-muted-foreground/20 hover:text-muted-foreground/50 transition-colors cursor-default" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{b}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── 3-Pillar Services ────────────────────────────────────────────────────────
const pillars = [
  {
    icon: Shield,
    num: "01",
    title: "Coatings & PPF",
    subtitle: "Protect & Defend",
    desc: "PPF in 9 brands (Garware, LLumar, Saint Gobain & more), 9H ceramic, graphene, marine graphene, glass, rain repellent, teflon, alloy, headlight, leather coatings & vinyl wraps.",
    services: ["PPF — 9 Brands Available", "9H Ceramic Coating", "Graphene & Marine Graphene", "Glass & Rain Repellent", "Teflon Coating", "Alloy & Headlight Coating", "Vinyl Colour Wrap"],
    img: "1764693756618-fc101047a387",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Detailing",
    subtitle: "Restore & Perfect",
    desc: "RUPES machine paint correction with clay bar + cutting + finishing stages, deep cleaning (dry & wet with fittings), chrome restoration, washing, and full car restoration.",
    services: ["Paint Correction (RUPES Machines)", "Deep Clean — Dry (No Fittings)", "Deep Clean — Wet (With Fittings)", "Chrome Parts Restoration", "Regular Wash", "Full Detailing Package", "Full Car Restoration"],
    img: "1780558852671-e47265577239",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Interior & Repairs",
    subtitle: "Upgrade & Fix",
    desc: "Window tints, ambient lights, audio, dashcam, anti-rat treatment, odour treatment, denting & painting, bumper plastic welding, radiator flush, hydrodip, seat covers & more.",
    services: ["Window Tints (Legal Compliant)", "Ambient Lighting & Audio", "Dashcam & Reverse Camera", "Anti-Rat & Odour Treatment", "Denting & Painting", "Bumper Plastic Welding", "Seat Covers & Interior Custom"],
    img: "1607860108855-64acf2078ed9",
  },
];

function ThreePillars() {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              THREE PILLARS<br /><span className="text-primary">OF EXCELLENCE</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="lg:max-w-xs">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Every vehicle we touch goes through our proven three-stage process — restore, protect, and maintain. It's not just a detail. It's a transformation with lasting results.
            </p>
            <Link href="/services" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:gap-3 transition-all" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              View All Services <ChevronRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}>
              <Link href="/services">
                <div className="group relative bg-card flex flex-col overflow-hidden cursor-pointer h-full">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <motion.img
                      src={`https://images.unsplash.com/photo-${p.img}?w=600&h=380&fit=crop&auto=format`}
                      alt={p.title}
                      className="w-full h-full object-cover object-center"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute top-4 left-4 w-9 h-9 bg-card/70 backdrop-blur-sm border border-border flex items-center justify-center">
                      <p.icon size={16} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-7 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{p.num} — {p.subtitle}</span>
                        <h3 className="text-3xl font-black uppercase mt-1 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{p.title}</h3>
                      </div>
                      <ArrowUpRight size={18} className="text-muted-foreground/30 group-hover:text-primary transition-colors mt-1" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                    <div className="flex flex-col gap-2 pt-2 border-t border-border mt-auto">
                      {p.services.slice(0, 4).map(s => (
                        <div key={s} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary/60 rotate-45 shrink-0" />
                          <span className="text-xs text-muted-foreground/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s}</span>
                        </div>
                      ))}
                      <span className="text-xs text-primary/60 mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>+{p.services.length - 4} more</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatBox({ value, suffix, label, sub }: { value: number; suffix: string; label: string; sub: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(value, 2000, started);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="text-[clamp(38px,5.5vw,68px)] font-black leading-none text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{count}{suffix}</div>
      <div className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{label}</div>
      <div className="text-[11px] text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{sub}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-secondary py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {[
            { value: 500, suffix: "+", label: "Cars Detailed", sub: "And counting" },
            { value: 2, suffix: " Yrs", label: "In Business", sub: "Est. 2023" },
            { value: 99, suffix: "%", label: "5-Star Reviews", sub: "Google & Facebook" },
            { value: 12, suffix: "+", label: "Certifications", sub: "Gtechniq, XPEL & more" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <StatBox {...s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
const steps = [
  { n: "01", title: "Inspection & Consultation", desc: "We start with a thorough vehicle inspection under high-intensity lighting, measuring paint depth across all panels and assessing existing damage. You receive a detailed service recommendation — no upselling, just honest advice.", icon: Zap },
  { n: "02", title: "Decontamination Wash", desc: "Before any correction or coating, the vehicle undergoes a complete decontamination: foam pre-wash, iron fallout treatment, clay bar decontamination, and a careful two-bucket hand wash using pH-neutral professional shampoo.", icon: Droplets },
  { n: "03", title: "RUPES Machine Correction", desc: "Using professional RUPES BigFoot random-orbital and gear-driven polishers with Menzerna cutting compounds and finishing polishes, we systematically remove swirl marks, water etching, oxidation, and scratches — panel by panel, under high-intensity inspection lighting.", icon: Wrench },
  { n: "04", title: "Protection Application", desc: "Your chosen protection layer — ceramic coating, graphene coating, or PPF — is applied in our climate-controlled facility under controlled temperature and humidity, ensuring a perfect bond and flawless finish.", icon: Shield },
  { n: "05", title: "Quality Inspection", desc: "Every completed vehicle goes through a rigorous final quality inspection with panel-by-panel light inspection, documentation photography, and a detailed service report that accompanies every job.", icon: CheckCircle },
  { n: "06", title: "Handover & Aftercare", desc: "You receive full aftercare instructions, maintenance recommendations, and a scheduled 6-month follow-up inspection. We don't just hand you your keys — we invest in your vehicle's long-term condition.", icon: Car },
];

function Process() {
  return (
    <section className="py-28 lg:py-36 bg-background" id="process">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-[0.9] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                OUR PROVEN<br /><span className="text-primary">6-STEP</span><br />PROCESS
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Every vehicle we touch follows the same rigorous, certified process — no shortcuts, no exceptions. This consistency is why our results are always showroom-level.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src="https://images.unsplash.com/photo-1761934657948-708146148588?w=700&h=530&fit=crop&auto=format" alt="Precision detailing process" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
                
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col gap-0 border-t border-border">
            {steps.map((step, i) => (
              <motion.div key={step.n} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group flex gap-5 py-7 border-b border-border">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="w-9 h-9 border border-border group-hover:border-primary group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
                    <step.icon size={14} className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] tracking-[0.2em] text-primary/60" style={{ fontFamily: "'DM Mono', monospace" }}>{step.n}</span>
                    <h3 className="text-lg font-black uppercase group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us split ──────────────────────────────────────────────────────
function WhyUs() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="py-28 lg:py-36 bg-secondary border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        <div ref={imageRef} className="relative overflow-hidden aspect-[4/5] bg-muted">
          <motion.img style={{ y: imgY }}
            src="https://images.unsplash.com/photo-1780558852671-e47265577239?w=900&h=1100&fit=crop&auto=format"
            alt="Expert technician paint correction" className="absolute inset-0 w-full h-[115%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 to-transparent" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="absolute bottom-6 left-6 right-6 bg-card/85 backdrop-blur-xl border border-border p-5">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                <Star size={14} className="fill-primary-foreground text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Top Rated in India</div>
                <div className="flex gap-0.5 mt-0.5">{[...Array(5)].map((_, j) => <Star key={j} size={10} className="fill-primary text-primary" />)}</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              "Himanshu's attention to detail is unreal. My BMW M3 looks better than showroom after the graphene coating." — Arjun M., Mumbai
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="flex flex-col justify-center px-0 lg:px-14 py-10 lg:py-0">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="text-[clamp(32px,4.4vw,56px)] font-black uppercase leading-[0.92] mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            WE DON'T JUST<br />CLEAN CARS.<br /><span className="text-primary">WE OBSESS</span><br />OVER THEM.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Founded by Himanshu in 2023, Glossy Street was built on one belief: every Indian car deserves professional-grade care, not a petrol-station brush wash. That means certified products, climate-controlled bays, paint depth gauges on every panel, and results we're proud to document and photograph every single time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Gtechniq & Gyeon Accredited", "IGL Coatings Authorised Applicator",
              "XPEL Certified PPF Installer", "Paint Depth Gauge on Every Panel",
              "High-Intensity Defect Lighting", "Full Before & After Documentation",
              "6-Month Follow-Up Included", "No Consumer-Grade Products — Ever",
            ].map(item => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
                <span className="text-sm text-foreground/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Link href="/about">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground text-xs font-black tracking-widest uppercase cursor-pointer" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Our Story <ArrowUpRight size={13} />
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div whileHover={{ scale: 1.03 }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 text-xs font-black tracking-widest uppercase cursor-pointer transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Our Services
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Featured Services Detail ──────────────────────────────────────────────────
const featuredServices = [
  {
    title: "PPF — 9 Brands",
    subtitle: "Paint Protection Film",
    badge: "Most Advanced",
    img: "1760520830355-e6be53e41c2f",
    desc: "We stock and install 9 PPF brands — Garware, NAR, Ultraguard, UC Films, Saint Gobain, LLumar, Camio, Troro, and Neoshield. Self-healing urethane film guards against stone chips, road debris, UV rays, and environmental damage. We recommend the right brand for your budget and vehicle.",
    points: ["9 brands: Garware, LLumar, Saint Gobain & more", "Self-healing under heat", "Gloss, matte & satin finishes", "Partial or full-body coverage", "Up to 10-year manufacturer warranty"],
    price: "From ₹15,000",
  },
  {
    title: "Graphene Coating",
    subtitle: "10H Next-Gen Protection",
    badge: "Premium",
    img: "1764693756618-fc101047a387",
    desc: "Graphene coating surpasses 9H ceramic in every metric — 10H hardness, superior heat dissipation, anti-static dust repellency, and better water-spot resistance. Perfect for India's intense UV, dust, and monsoon conditions. Produces an extraordinary mirror-depth gloss that must be seen to be believed.",
    points: ["10H graphene hardness", "Anti-static particle repellency", "Superior monsoon water-spot resistance", "Includes full RUPES paint correction", "2–5 year protection guarantee"],
    price: "From ₹18,000",
  },
  {
    title: "RUPES Paint Correction",
    subtitle: "Professional Machine Polishing",
    badge: "Best Results",
    img: "1780558852671-e47265577239",
    desc: "Multi-stage machine polishing using professional RUPES BigFoot polishers and Menzerna compounds. Systematically removes swirl marks, petrol-station wash marring, water etching, oxidation and light scratches — restoring genuine paint depth. Includes clay bar decontamination and full paint depth measurement.",
    points: ["RUPES BigFoot professional machines", "Clay bar + cutting + finishing stages", "Paint depth gauge every panel", "High-intensity defect inspection", "Before & after photography included"],
    price: "From ₹3,499",
  },
];

function FeaturedServices() {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel>Featured Services</SectionLabel>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              SIGNATURE<br /><span className="text-primary">PROTECTION</span>
            </h2>
          </motion.div>
          <Link href="/services" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:gap-3 transition-all shrink-0" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            All Services <ArrowUpRight size={13} />
          </Link>
        </div>

        <div className="flex flex-col gap-px bg-border">
          {featuredServices.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className={`group grid grid-cols-1 lg:grid-cols-2 bg-card overflow-hidden ${i % 2 === 1 ? "" : ""}`}>
                <div className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-muted ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.img src={`https://images.unsplash.com/photo-${s.img}?w=800&h=500&fit=crop&auto=format`} alt={s.title}
                    className="w-full h-full object-cover object-center" whileHover={{ scale: 1.04 }} transition={{ duration: 0.7 }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/20 to-transparent" />
                  <div className="absolute top-5 left-5 px-3 py-1.5 bg-primary text-primary-foreground text-[10px] font-black tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{s.badge}</div>
                </div>
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{s.subtitle}</span>
                  <h3 className="text-4xl lg:text-5xl font-black uppercase mb-4 group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
                  <div className="flex flex-col gap-2 mb-7">
                    {s.points.map(pt => (
                      <div key={pt} className="flex items-center gap-2.5">
                        <CheckCircle size={12} className="text-primary shrink-0" />
                        <span className="text-sm text-foreground/75" style={{ fontFamily: "'DM Sans', sans-serif" }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.price}</span>
                    <Link href="/contact">
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                        className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-black tracking-widest uppercase cursor-pointer" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Book Now <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery preview ──────────────────────────────────────────────────────────
const galleryItems = [
  { id: "1760520830355-e6be53e41c2f", alt: "Black sports car showroom", span: "row-span-2" },
  { id: "1764693756618-fc101047a387", alt: "Red ceramic coated sports car", span: "" },
  { id: "1565689876697-e467b6c54da2", alt: "Wheel detail wash", span: "" },
  { id: "1761934657948-708146148588", alt: "Microfiber paint finish", span: "" },
  { id: "1550561438-3c2c3b8ea3a6", alt: "Polished black coupe", span: "" },
];

function GalleryPreview() {
  return (
    <section className="py-28 lg:py-36 bg-secondary border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel>Real Results</SectionLabel>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>OUR WORK</h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Every photo is unedited, unfiltered. Real vehicles, real technicians, real results.</p>
          </motion.div>
          <Link href="/gallery" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:gap-3 transition-all shrink-0" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Full Gallery <ArrowUpRight size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[260px]">
          {galleryItems.map((img, i) => (
            <motion.div key={img.id} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden bg-muted ${img.span}`}>
              <motion.img src={`https://images.unsplash.com/photo-${img.id}?w=600&h=600&fit=crop&auto=format`} alt={img.alt}
                className="w-full h-full object-cover object-center" whileHover={{ scale: 1.06 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} />
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <ArrowUpRight size={24} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const reviews = [
  { name: "Arjun Mehta", vehicle: "2023 BMW M3 Competition", stars: 5, text: "The paint correction on my M3 completely transformed it. Himanshu found swirl marks under his inspection lights that I had never noticed, and eliminated every single one. The gloss depth is better than when I drove it out of the showroom." },
  { name: "Priya Kapoor", vehicle: "2022 Hyundai Creta SX(O)", stars: 5, text: "Ceramic coating service was absolutely flawless. Himanshu walked me through every stage and the results speak for themselves. Seven months and two monsoons later, my Creta still beads water perfectly. Worth every rupee." },
  { name: "Rahul Verma", vehicle: "2023 Toyota Fortuner Legender", stars: 5, text: "Got the full Signature package on my Fortuner — paint correction plus graphene coating. Himanshu treated it like his own vehicle. The gloss and the hydrophobic effect are insane. Highly recommend to anyone with a premium car." },
  { name: "Ananya Singh", vehicle: "2022 Mahindra XUV700 AX7L", stars: 5, text: "Trusted Glossy Street with my XUV700 for PPF on the front end plus full ceramic coating. Communication was excellent, the work was meticulous, and the documentation photos were incredibly detailed. Could not be happier." },
  { name: "Vikram Malhotra", vehicle: "2023 Tata Safari Dark Edition", stars: 5, text: "Got the graphene coating done on my Safari after a friend's recommendation. The depth of gloss is unreal — I've had people ask if it's freshly painted at every petrol stop. Himanshu's knowledge of paint science is seriously impressive." },
  { name: "Deepika Nair", vehicle: "2023 Mercedes C-Class AMG Line", stars: 5, text: "Full Signature package on my C-Class. Paint correction removed monsoon water spots and swirl marks I'd accumulated over two years. The ceramic coating is now making maintenance effortless. Absolutely elite work." },
  { name: "Siddharth Rao", vehicle: "2022 Kia Seltos HTX+", stars: 5, text: "Booked the 9H ceramic package after seeing Glossy Street's work on Instagram. Himanshu was thorough and professional, and the finish was perfect. The Seltos looks factory-fresh even after the monsoon." },
  { name: "Kavya Reddy", vehicle: "2023 Skoda Slavia TSI", stars: 5, text: "Got window tinting and full detailing done together. The interior came out spotless — I could not believe it was the same car. Tint quality is perfect and totally VLT compliant. Excellent service all round." },
  { name: "Aakash Joshi", vehicle: "2023 Maruti Suzuki Brezza ZXi+", stars: 5, text: "Even for a Brezza, Himanshu gave it the same attention as a luxury car. Regular wash plus teflon coating — the results are outstanding. Booked on WhatsApp, dropped off, picked up spotless. Will be back monthly." },
  { name: "Neha Sharma", vehicle: "2022 Honda City ZX", stars: 5, text: "Booked paint correction for a second-hand car I had just bought. The swirl damage from petrol station washes was completely gone after one session. Himanshu is a genuine artist — the car looks factory new." },
];

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div className="w-[340px] shrink-0 bg-card border border-border p-7 flex flex-col gap-4 mx-2.5">
      <div className="flex gap-0.5">
        {[...Array(r.stars)].map((_, j) => <Star key={j} size={11} className="fill-primary text-primary" />)}
      </div>
      <p className="text-foreground/70 text-sm leading-relaxed flex-1 line-clamp-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="pt-4 border-t border-border">
        <div className="text-sm font-black tracking-wide uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{r.name}</div>
        <div className="text-[10px] text-muted-foreground mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{r.vehicle}</div>
      </div>
    </div>
  );
}

function ReviewRow({ items, toLeft }: { items: typeof reviews; toLeft: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: toLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((r, i) => <ReviewCard key={i} r={r} />)}
      </motion.div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel>Client Reviews</SectionLabel>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              WHAT OUR<br /><span className="text-primary">CLIENTS SAY</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="text-right">
              <div className="text-5xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>4.9</div>
              <div className="flex gap-0.5 justify-end mt-1">{[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-primary text-primary" />)}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>500+ Reviews · Google & Instagram</div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ReviewRow items={reviews.slice(0, 5)} toLeft={true} />
        <ReviewRow items={reviews.slice(5)} toLeft={false} />
      </div>
    </section>
  );
}

// ─── Blog preview ─────────────────────────────────────────────────────────────
const posts = [
  { title: "PPF vs Ceramic Coating: Which Does Your Car Actually Need?", cat: "Protection", date: "Mar 15, 2024", img: "1764693756663-211afae0c81d", read: "6 min read" },
  { title: "10 Things You Must Know Before Getting a Ceramic Coating", cat: "Ceramic", date: "Feb 28, 2024", img: "1560611811-8a87a5239655", read: "8 min read" },
  { title: "The Complete Guide to Paint Correction: Stages, Tools & Results", cat: "Detailing", date: "Jan 20, 2024", img: "1533666834526-903b11416fc1", read: "10 min read" },
];

function BlogPreview() {
  return (
    <section className="py-28 lg:py-36 bg-secondary border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel>Knowledge Base</SectionLabel>
            <h2 className="text-[clamp(30px,4.2vw,52px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              LATEST<br /><span className="text-primary">FROM THE BLOG</span>
            </h2>
          </motion.div>
          <Link href="/blog" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:gap-3 transition-all shrink-0" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            All Articles <ArrowUpRight size={13} />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {posts.map((post, i) => (
            <motion.div key={post.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link href="/blog">
                <div className="group bg-card flex flex-col overflow-hidden cursor-pointer h-full">
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <motion.img src={`https://images.unsplash.com/photo-${post.img}?w=600&h=340&fit=crop&auto=format`} alt={post.title}
                      className="w-full h-full object-cover object-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} />
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-primary text-primary-foreground text-[9px] font-black tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{post.cat}</div>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground/60" style={{ fontFamily: "'DM Mono', monospace" }}>
                      <span>{post.date}</span><span>·</span><span>{post.read}</span>
                    </div>
                    <h3 className="text-lg font-black uppercase leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{post.title}</h3>
                    <div className="flex items-center gap-1.5 text-primary text-xs font-bold tracking-widest uppercase mt-auto group-hover:gap-2.5 transition-all" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      Read Article <ArrowRight size={11} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "What is nano ceramic coating?", a: "Nano ceramic coating is a liquid polymer that chemically bonds to your vehicle's clear coat, forming a hard, transparent protective layer rated at 9H on the Mohs hardness scale. Once cured, it becomes the sacrificial surface that takes all the punishment from the environment — UV, bird droppings, tree sap, road chemicals — so your original paint doesn't have to." },
  { q: "How long does ceramic coating last?", a: "Depending on the tier chosen, our coatings are guaranteed for 1 to 5 years. 9H ceramic: 1–3 year tiers. Graphene coating: 3–5 year tiers. Marine graphene: 5+ years. With proper maintenance — pH-neutral shampoo, no automated brush washes — coatings routinely outlast their rated duration. Every coating booking includes a follow-up inspection to verify performance." },
  { q: "Is paint correction necessary before coating?", a: "Yes. Applying a ceramic coating over imperfect paint permanently locks in any existing swirl marks, scratches, or oxidation beneath the hardened layer. We always perform at minimum a light paint correction (single-stage polish) before any coating service, with deeper multi-stage correction available for vehicles with heavier defects." },
  { q: "What is PPF and how is it different from ceramic coating?", a: "Paint Protection Film (PPF) is a physical urethane film applied to the paint surface that absorbs physical impacts — stone chips, road debris, scratches. Ceramic coating is a chemical bond that provides chemical resistance and hydrophobic properties but does not absorb physical impacts. For maximum protection, we recommend combining both: PPF for high-impact areas and ceramic coating over the top for chemical resistance and gloss." },
  { q: "Can I wash my car normally after ceramic coating?", a: "After the initial 7-day curing period, your vehicle can be washed normally. We recommend using only pH-neutral car shampoos, avoiding automated car washes with abrasive brushes, and washing in the shade. We provide full aftercare instructions and offer a ceramic maintenance wash service to preserve coating performance long-term." },
];

function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-[clamp(32px,4.4vw,56px)] font-black uppercase leading-[0.9] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            COMMON<br />QUESTIONS<br /><span className="text-primary">ANSWERED</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            We believe an informed client is the best client. Here are the questions we get asked most often — answered honestly.
          </p>
          <Link href="/pricing#faq">
            <motion.div whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 text-xs font-black tracking-widest uppercase cursor-pointer transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              More FAQs <ChevronRight size={13} />
            </motion.div>
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-t border-border">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button className="w-full text-left py-5 flex items-start justify-between gap-4 group" onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-base font-bold uppercase group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}>{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5">
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{faq.a}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTABand() {
  return (
    null
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandPartners />
      <ThreePillars />
      <Stats />
      <Process />
      <WhyUs />
      <FeaturedServices />
      <GalleryPreview />
      <Testimonials />
      <BlogPreview />
      <HomeFAQ />
      <CTABand />
    </>
  );
}
