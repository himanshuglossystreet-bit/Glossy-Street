"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          className="text-[clamp(86px,18vw,180px)] font-black leading-none text-transparent select-none"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            WebkitTextStroke: "2px rgba(201,163,71,0.2)",
          }}
        >
          404
        </div>
        <div className="mt-4 mb-2">
          <h1 className="text-3xl lg:text-4xl font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Page Not Found</h1>
        </div>
        <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Looks like this page took a wrong turn. Let&apos;s get you back on the road.
        </p>
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground font-black tracking-widest uppercase text-xs cursor-pointer"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Back to Home <ArrowUpRight size={14} />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
