"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import logoImg from "@/imports/image.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const menuVariants = {
  closed: { clipPath: "inset(0 0 100% 0)", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } },
  open:   { clipPath: "inset(0 0 0% 0)",   transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } },
};

const linkVariants = {
  closed: { y: 60, opacity: 0 },
  open: (i: number) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.55, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-background/96 backdrop-blur-2xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        {/* Top utility bar — only on large screens */}
        <div className="hidden xl:flex items-center justify-between max-w-[1400px] mx-auto px-12 py-2 border-b border-border/50">
          <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground/50" style={{ fontFamily: "'DM Mono', monospace" }}>
            India's Premium Car Detailing Studio · Est. 2023
          </span>
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-muted-foreground/50 hover:text-primary transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
            <Phone size={9} /> +91 98765 43210
          </a>
        </div>

        {/* Main nav bar */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }} className="w-9 h-9 rounded-full overflow-hidden border border-border shrink-0">
              <img src={logoImg.src} alt="Glossy Street" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-black uppercase tracking-[0.1em] text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Glossy <span className="text-primary group-hover:text-foreground transition-colors">Street</span>
              </span>
              <span className="text-[8px] tracking-[0.18em] uppercase text-muted-foreground/50 hidden sm:block" style={{ fontFamily: "'DM Mono', monospace" }}>
                Car Detailing Studio
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[11px] xl:text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 whitespace-nowrap ${
                  pathname === l.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {l.label}
                {pathname === l.href && (
                  <motion.div layoutId="nav-active" className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Book Now CTA */}
          <Link href="/contact" className="hidden lg:block shrink-0">
            <motion.div
              whileHover={{ scale: 1.04, backgroundColor: "#a80f15" }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-[11px] font-black tracking-widest uppercase cursor-pointer"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Book Now
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.div>
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen menu ────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants as any}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-background flex flex-col justify-between px-8 pb-12 pt-28 lg:hidden"
          >
            {/* Grain */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }} />
            {/* Red gradient */}
            <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

            <nav className="flex flex-col">
              {links.map((l, i) => (
                <div key={l.href} className="overflow-hidden border-b border-border last:border-b-0">
                  <motion.div custom={i} variants={linkVariants as any} initial="closed" animate="open">
                    <Link
                      href={l.href}
                      className={`group flex items-center justify-between py-4 text-[clamp(28px,7vw,44px)] font-black uppercase leading-none transition-colors ${
                        pathname === l.href ? "text-primary" : "text-foreground/60 hover:text-foreground"
                      }`}
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {l.label}
                      <ArrowUpRight size={20} className={`shrink-0 ${pathname === l.href ? "text-primary" : "text-foreground/20 group-hover:text-primary"} transition-colors`} />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 text-xs text-muted-foreground/50" style={{ fontFamily: "'DM Mono', monospace" }}>
                <span>India</span>
                <span>·</span>
                <span>Est. 2023</span>
                <span>·</span>
                <span>+91 98765 43210</span>
              </div>
              <Link href="/contact" onClick={() => setOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-4 bg-primary text-white font-black tracking-widest uppercase text-sm text-center"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Book A Detail →
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
