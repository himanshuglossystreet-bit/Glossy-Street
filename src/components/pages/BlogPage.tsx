"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

function Grain() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "180px",
    }} />
  );
}

const categories = ["All", "Ceramic Coating", "PPF", "Paint Correction", "Interior", "Maintenance", "Buying Guides"];

const posts = [
  {
    id: 1, slug: "ceramic-coating-guide-india",
    title: "The Complete Guide to Ceramic Coating for Indian Cars (2024)",
    excerpt: "India's roads, monsoons, UV, and dust are brutal on paint. This guide covers what ceramic coating is, how it works, what it costs in India (₹7,999–₹38,000), and whether it's right for your car.",
    cat: "Ceramic Coating", date: "15 March 2024", read: "8 min read",
    img: "1764693756618-fc101047a387", featured: true, author: "Himanshu",
  },
  {
    id: 2, slug: "ppf-vs-ceramic-coating-india",
    title: "PPF vs Ceramic Coating: Which One Does Your Car Need in India?",
    excerpt: "PPF and ceramic coating do completely different things. Choosing wrong — or choosing just one when you need both — is a costly mistake. Here's the honest breakdown for Indian driving conditions.",
    cat: "PPF", date: "28 February 2024", read: "7 min read",
    img: "1760520830355-e6be53e41c2f", featured: true, author: "Himanshu",
  },
  {
    id: 3, slug: "paint-correction-india",
    title: "Paint Correction in India: What It Is, Cost & When You Need It",
    excerpt: "Swirl marks from petrol station car washes, monsoon water spots, UV haze — Indian cars suffer unique paint damage. Paint correction reverses all of it. Here's everything you need to know.",
    cat: "Paint Correction", date: "20 January 2024", read: "9 min read",
    img: "1780558852671-e47265577239", featured: false, author: "Himanshu",
  },
  {
    id: 4, slug: "ceramic-coating-guide-india",
    title: "How to Maintain a Ceramic Coated Car During Indian Monsoon",
    excerpt: "Monsoon season is the ultimate test of your ceramic coating. Here's how to care for your coated car during heavy rains, flooding, and the mud and contamination that follow.",
    cat: "Maintenance", date: "10 January 2024", read: "5 min read",
    img: "1607860108855-64acf2078ed9", featured: false, author: "Himanshu",
  },
  {
    id: 5, slug: "ppf-vs-ceramic-coating-india",
    title: "Why Petrol Station Car Washes Are Destroying Your Paint",
    excerpt: "The automated brush washes at petrol pumps across India are the single biggest cause of swirl marks on Indian cars. Here's what's really happening to your paint — and what to do instead.",
    cat: "Buying Guides", date: "5 December 2023", read: "6 min read",
    img: "1565689876697-e467b6c54da2", featured: false, author: "Himanshu",
  },
  {
    id: 6, slug: "paint-correction-india",
    title: "Leather Interior Care in India: Heat, Humidity & How to Protect It",
    excerpt: "India's heat and humidity is particularly harsh on leather interiors. Most car owners are cleaning their leather wrong with products that actively degrade it. Here's the correct approach.",
    cat: "Interior", date: "20 November 2023", read: "7 min read",
    img: "1761934657948-708146148588", featured: false, author: "Himanshu",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Detailing Blog & Guides | Glossy Street Car Detailing Studio";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Expert car detailing guides for Indian car owners — ceramic coating, PPF, paint correction, and maintenance tips written by certified professionals.");
    setMeta("keywords", "car detailing blog India, ceramic coating guide India, PPF India, paint correction India");
  }, []);

  const featured = posts.filter(p => p.featured);
  const allFiltered = activeCategory === "All" ? posts : posts.filter(p => p.cat === activeCategory);

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
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Knowledge Base</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(44px,8.5vw,104px)] font-black uppercase leading-[0.88] mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            DETAILING<br /><span className="text-primary">INSIGHTS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Expert guides on ceramic coatings, paint correction, PPF, and car care — written specifically for Indian car owners and conditions by Himanshu at Glossy Street.
          </motion.p>
        </div>
      </section>

      {/* Featured posts */}
      {activeCategory === "All" && (
        <section className="bg-background pb-0">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-12 border-b border-border">
            <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground/50 mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>Featured Articles</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
              {featured.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group bg-card flex flex-col overflow-hidden cursor-pointer h-full">
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        <motion.img src={`https://images.unsplash.com/photo-${post.img}?w=800&h=450&fit=crop&auto=format`} alt={post.title}
                          className="w-full h-full object-cover" whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-2.5 py-1 bg-primary text-white text-[9px] font-black tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Featured</span>
                          <span className="px-2.5 py-1 bg-background/70 backdrop-blur-sm text-foreground/80 text-[9px] font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{post.cat}</span>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col gap-3 flex-1">
                        <div className="flex items-center gap-3 text-[10px] text-muted-foreground/60" style={{ fontFamily: "'DM Mono', monospace" }}>
                          <Clock size={10} /><span>{post.read}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.author}</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{post.title}</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{post.excerpt}</p>
                        <div className="flex items-center gap-1.5 text-primary text-xs font-bold tracking-widest uppercase mt-2 group-hover:gap-2.5 transition-all" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                          Read Article <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category filter */}
      <div className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 overflow-x-auto">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all ${
                activeCategory === c ? "bg-primary text-white" : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Tag size={10} />{c}
            </button>
          ))}
        </div>
      </div>

      {/* Post grid */}
      <section className="py-16 pb-28 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground/40 mb-8" style={{ fontFamily: "'DM Mono', monospace" }}>
            {activeCategory === "All" ? `All Articles (${posts.length})` : `${activeCategory} (${allFiltered.length})`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {allFiltered.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="group bg-card flex flex-col overflow-hidden cursor-pointer h-full">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <motion.img src={`https://images.unsplash.com/photo-${post.img}?w=600&h=375&fit=crop&auto=format`} alt={post.title}
                        className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white text-[9px] font-black tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{post.cat}</div>
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground/50 flex-wrap" style={{ fontFamily: "'DM Mono', monospace" }}>
                        <span>{post.date}</span><span>·</span><span>{post.read}</span>
                      </div>
                      <h3 className="text-xl font-black uppercase leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{post.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed flex-1 line-clamp-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{post.excerpt}</p>
                      <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold tracking-widest uppercase mt-auto group-hover:gap-2 transition-all" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        Read More <ArrowUpRight size={11} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Stay Informed</span>
            </div>
            <h2 className="text-[clamp(30px,4.2vw,50px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              EXPERT CAR CARE TIPS<br /><span className="text-primary">IN YOUR INBOX</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Monthly guides for Indian car owners — ceramic maintenance, monsoon care, and product advice. No spam.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-0 w-full lg:w-auto max-w-md">
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-card border border-border px-5 py-4 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }} />
            <motion.button whileHover={{ scale: 1.02 }}
              className="px-7 py-4 bg-primary text-white font-black tracking-widest uppercase text-xs shrink-0"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Subscribe
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
