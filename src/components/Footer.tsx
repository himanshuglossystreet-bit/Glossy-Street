"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/imports/image.png";

const cols = [
  {
    heading: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      // { label: "Gallery", href: "/gallery" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "PPF (9 Brands)", href: "/services#protection" },
      { label: "Ceramic & Graphene Coating", href: "/services#protection" },
      { label: "Vinyl Wrap", href: "/services#protection" },
      { label: "Paint Correction (RUPES)", href: "/services#detailing" },
      { label: "Deep Cleaning", href: "/services#detailing" },
      { label: "Window Tints", href: "/services#interior" },
      { label: "Ambient Lights & Audio", href: "/services#interior" },
      { label: "Denting & Painting", href: "/services#repairs" },
      { label: "Anti-Rat Treatment", href: "/services#interior" },
      { label: "Odour Treatment", href: "/services#interior" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "+91 98765 43210", href: "/contact" },
      { label: "hello@glossystreet.in", href: "/contact" },
      { label: "Book via WhatsApp", href: "/contact" },
      { label: "Mon–Sat: 9AM – 7PM", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/glossystreet_patelnagar/", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      {/* CTA band */}
      <div className="border-b border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <h2 className="text-[clamp(38px,5.5vw,78px)] font-black uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            READY TO<br /><span className="text-primary">SHINE</span> AGAIN?
          </h2>
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-10 py-5 bg-primary text-white font-black tracking-widest uppercase text-sm cursor-pointer"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Book Now
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Brand */}
        <div className="col-span-2">
          <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
            <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden border border-border">
              <img src={logoImg.src} alt="Glossy Street" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-black uppercase tracking-[0.12em]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Glossy <span className="text-primary">Street</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50 mt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>
                Car Detailing Studio
              </span>
            </div>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            India's premium car detailing studio. Ceramic coatings, paint correction, PPF, and interior restoration — founded by Himanshu with one obsession: perfection.
          </p>
          <div className="flex flex-col gap-2 mb-5 text-sm text-muted-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="flex items-center gap-2"><Phone size={12} className="text-primary shrink-0" />+91 98765 43210</div>
            <div className="flex items-center gap-2"><Mail size={12} className="text-primary shrink-0" />hello@glossystreet.in</div>
            <div className="flex items-center gap-2"><MapPin size={12} className="text-primary shrink-0" />India</div>
          </div>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label}
                whileHover={{ y: -3, color: "#CC1515" }} whileTap={{ scale: 0.94 }}
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary transition-colors">
                <Icon size={14} />
              </motion.a>
            ))}
            <motion.a href="#" aria-label="X" whileHover={{ y: -3 }} whileTap={{ scale: 0.94 }}
              className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.843L1.5 2.25h7.006l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Link cols */}
        {cols.map(col => (
          <div key={col.heading}>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-5 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>{col.heading}</p>
            <div className="flex flex-col gap-2.5">
              {col.links.map(l => (
                <motion.div key={l.label} whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
                  <Link href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-[11px] text-muted-foreground/40" style={{ fontFamily: "'DM Mono', monospace" }}>© 2024 Glossy Street Car Detailing Studio. All rights reserved.</span>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-[11px] text-muted-foreground/40" style={{ fontFamily: "'DM Mono', monospace" }}>Est. 2023 · Founded by Himanshu · Made in India</span>
            <motion.a
              href="https://orign.co.in"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -1 }}
              className="text-[11px] text-white/58 hover:text-white/82 transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Designed and Developed by ORIGN
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
