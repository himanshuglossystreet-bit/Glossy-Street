"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Award, Users, Zap, Star, Shield, Target, Heart } from "lucide-react";

function Grain() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "180px",
    }} />
  );
}

const milestones = [
  { year: "Jan 2023", title: "Founded", event: "Himanshu founds Glossy Street — starting with a single polishing machine, a full product kit, and one clear belief: every car in India deserves professional-grade care, not just a petrol-station wash." },
  { year: "Mar 2023", title: "First 50 Cars", event: "First 50 vehicles completed — all referrals. Word-of-mouth growth from day one. Every client got a before/after photo set and a full aftercare guide." },
  { year: "Jun 2023", title: "Certified", event: "Achieved first professional product certifications. Moved to a dedicated studio bay with proper inspection lighting, climate control, and a decontamination wash area." },
  { year: "Sep 2023", title: "Ceramic Coating Launch", event: "Ceramic coating and graphene coating services launched following advanced application training. First Gtechniq-certified application in the region." },
  { year: "Dec 2023", title: "PPF Service Added", event: "Paint Protection Film installation added to the service menu. XPEL and 3M film installer certification completed. First full-body PPF installs completed." },
  { year: "Mar 2024", title: "200+ Vehicles", event: "Passed the 200-vehicle milestone. Expanded studio capacity, added a dedicated coating bay with humidity and temperature control for optimal film bonding." },
  { year: "Sep 2024", title: "Premium Studio", event: "Moved into current purpose-built studio — 4 bays, car lift, high-intensity inspection tunnel, and dedicated interior treatment area. Full team operational." },
  { year: "2024–25", title: "500+ Happy Clients", event: "Crossed 500 completed vehicles. Maintained a 4.9-star average across all reviews. Every job documented with before/after photography. The obsession hasn't changed." },
];

const values = [
  { icon: Award, title: "Certified, Not Just Experienced", desc: "Himanshu holds active certifications from Gtechniq, Gyeon, XPEL, IGL Coatings, and Menzerna. In India, most detailers learn on YouTube. Glossy Street learns from the brands themselves." },
  { icon: Target, title: "Zero Shortcuts, Every Time", desc: "We use only professional-grade products — never the consumer ranges. We never rush a correction job to turn a bay. Every process step exists for a reason, and every step gets done." },
  { icon: Users, title: "Honest Over Impressive", desc: "We tell you what your car actually needs, what's a waste of money for your use case, and what results are realistic for your paint's current condition. No overselling, no inflated promises." },
  { icon: Zap, title: "India-First Approach", desc: "Ceramic coating guides written for Western climates don't apply here. Indian monsoons, UV, dust, and road conditions need specific knowledge. Our processes are adapted for India." },
  { icon: Shield, title: "Your Long-Term Partner", desc: "We keep a service log for every car we touch. We follow up after coating jobs. We're available on WhatsApp for questions between visits. We want to be your car's lifelong care partner." },
  { icon: Heart, title: "Genuine Passion for Cars", desc: "Himanshu started Glossy Street because he was genuinely frustrated with the quality of detailing available in India — not because it was a profitable gap in the market. That passion shows in every result." },
];

const certifications = [
  { name: "RUPES", full: "Authorised Professional Detailer", year: "2023" },
  { name: "Gtechniq", full: "Accredited Detailer", year: "2023" },
  { name: "Gyeon", full: "Certified Applicator", year: "2023" },
  { name: "IGL Coatings", full: "Authorised Applicator", year: "2024" },
  { name: "XPEL", full: "Certified PPF Installer", year: "2023" },
  { name: "Garware", full: "Authorised PPF Installer", year: "2023" },
  { name: "LLumar", full: "Authorised Film Installer", year: "2023" },
  { name: "3M", full: "Authorised Film Installer", year: "2023" },
  { name: "Menzerna", full: "Certified Polishing Partner", year: "2023" },
  { name: "Saint Gobain", full: "Authorised Window Film Installer", year: "2024" },
  { name: "Sonax", full: "Authorised Professional", year: "2024" },
  { name: "Ceramic Pro", full: "Certified Installer", year: "2024" },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us — Himanshu & Glossy Street | Car Detailing Studio India";
    const set = (name: string, val: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.content = val;
    };
    set("description", "Glossy Street was founded by Himanshu in 2023 with a single belief: every Indian car deserves professional-grade care. Learn our story, certifications, and values.");
    set("keywords", "Glossy Street about, Himanshu car detailing, car detailing studio India, ceramic coating specialist India");
  }, []);

  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroImageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-0 bg-background overflow-hidden">
        <Grain />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Est. 2023 · India</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(44px,8.5vw,104px)] font-black uppercase leading-[0.88] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            OUR<br /><span className="text-primary">STORY</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Glossy Street started in 2023 with a single polishing machine and a deep frustration with the quality of car care available in India. Founded by Himanshu, we've grown from a one-person operation into a full-service detailing studio — and the obsession that started it hasn't changed one bit.
          </motion.p>
        </div>

        <div ref={heroImageRef} className="relative overflow-hidden h-[50vh] lg:h-[65vh]">
          <motion.img style={{ y: imageY }}
            src="https://images.unsplash.com/photo-1760520830355-e6be53e41c2f?w=1800&h=900&fit=crop&auto=format"
            alt="Glossy Street studio" className="absolute inset-0 w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>
      </section>

      {/* Story + values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>The Founder</span>
            </div>
            <h2 className="text-[clamp(32px,4.2vw,54px)] font-black uppercase leading-[0.9] mb-7" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              FOUNDED BY<br /><span className="text-primary">HIMANSHU</span><br />IN 2023
            </h2>
            <div className="flex flex-col gap-5 text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p>
                Himanshu founded Glossy Street after years of frustration with the car care options available in India. Every experience told the same story: consumer-grade products applied by undertrained staff, rushed jobs to keep bays turning, and no documentation, no follow-up, no accountability.
              </p>
              <p>
                His background in automotive care led him to study the science of paint correction and coating chemistry seriously — taking training directly from Gtechniq, Gyeon, XPEL, and Menzerna rather than learning from YouTube tutorials and word-of-mouth advice like most operators in the market.
              </p>
              <p>
                The studio he built reflects that obsession: every vehicle is inspected under high-intensity lighting. Every panel gets a paint depth reading before polishing. Every ceramic coating application happens in a climate-controlled bay with verified temperature and humidity levels. Before and after photography is standard on every job.
              </p>
              <p>
                The goal was never to be the biggest detailing studio in India. The goal was to be the most trusted — by car owners who care deeply about their vehicles and want honest, skilled, documented care for them.
              </p>
              <p>
                Today, Glossy Street has completed 500+ vehicles, holds 8 active brand certifications, and has maintained a 4.9-star average across all client reviews. The standards Himanshu set on day one have never been lowered.
              </p>
            </div>

            {/* Founder badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="mt-8 flex items-center gap-4 p-5 border border-primary/20 bg-primary/5">
              
              <div>
                <div className="text-lg font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Himanshu</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Founder & Lead Detailer · Glossy Street</div>
                <div className="flex gap-0.5 mt-1">{[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-primary text-primary" />)}</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group flex gap-5 p-6 border border-border hover:border-primary/30 transition-colors">
                <v.icon size={18} className="text-primary/50 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-black uppercase mb-1.5 group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Promise */}
      

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Since 2023</span>
            </div>
            <h2 className="text-[clamp(32px,4.5vw,58px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              OUR<br /><span className="text-primary">JOURNEY</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-background p-8 flex gap-6 hover:bg-secondary transition-colors border-b border-r-0 border-border">
                <div className="text-4xl font-black text-primary/25 group-hover:text-primary/50 transition-colors shrink-0 leading-none w-24" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {m.year}
                </div>
                <div>
                  <div className="text-sm font-black uppercase text-foreground/80 mb-1.5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{m.title}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Accreditations</span>
            </div>
            <h2 className="text-[clamp(32px,4.5vw,58px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              CERTIFIED &<br /><span className="text-primary">ACCREDITED</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-12">
            {certifications.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group bg-secondary p-7 flex flex-col gap-3 hover:bg-card transition-colors">
                <div className="text-3xl font-black uppercase text-primary/70 group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{c.name}</div>
                <div>
                  <div className="text-sm font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{c.full}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>Certified {c.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm max-w-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Glossy Street holds more active brand certifications than most detailing studios in India. Our certifications require ongoing training, not just a one-time test — and they're renewed annually through direct engagement with each brand.
            </p>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.03 }}
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white font-black tracking-widest uppercase text-xs cursor-pointer" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Book With Us <ArrowUpRight size={13} />
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Our Facility</span>
            </div>
            <h2 className="text-[clamp(32px,4.2vw,54px)] font-black uppercase leading-[0.9] mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              BUILT FOR<br /><span className="text-primary">PRECISION</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-7" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our studio was set up from scratch to meet professional detailing standards — not a converted garage or a shared commercial space. Every station, bay, and piece of equipment was chosen for a specific reason: to produce better, more consistent results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "4", l: "Detailing Bays" }, { v: "1", l: "Coating Room" },
                { v: "100%", l: "Climate Controlled" }, { v: "1", l: "Car Lift" },
                { v: "9H+", l: "Coating Grade" }, { v: "UVA", l: "Inspection Lighting" },
              ].map(s => (
                <div key={s.l} className="flex flex-col gap-0.5 p-4 bg-secondary border border-border">
                  <div className="text-2xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.v}</div>
                  <div className="text-[10px] tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img src="https://images.unsplash.com/photo-1764693756663-211afae0c81d?w=700&h=880&fit=crop&auto=format" alt="Glossy Street studio facility" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
