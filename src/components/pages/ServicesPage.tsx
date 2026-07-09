"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown, ArrowUpRight, CheckCircle,
  Shield, Sparkles, Wrench, Settings
} from "lucide-react";

function Grain() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "180px",
    }} />
  );
}

// ─── All Services Data ─────────────────────────────────────────────────────────

const categories = [
  {
    id: "protection",
    icon: Shield,
    label: "Coatings & Protection",
    num: "01",
    desc: "Nano-ceramic coatings, graphene technology, paint protection films and specialised armour for every surface of your vehicle.",
    accentImg: "1764693756618-fc101047a387",
    services: [
      {
        num: "01", title: "Paint Protection Film (PPF)",
        tagline: "Ultimate physical paint defence",
        price: "From ₹15,000", duration: "1–3 days",
        img: "1760520830355-e6be53e41c2f",
        description: "Paint Protection Film is a self-healing urethane film that physically protects your car's paint from stone chips, road debris, scratches, and environmental damage. Available in gloss, matte, and satin finishes. We stock and install all major brands.",
        brands: ["Garware", "NAR", "Ultraguard", "UC Films", "Saint Gobain", "LLumar", "Camio", "Troro", "Neoshield"],
        includes: ["Partial front-end package (bumper, bonnet, fenders)", "Full-body PPF available", "Self-healing film technology", "UV-resistant & yellowing-proof", "10-year manufacturer warranty (brand dependent)", "RUPES machine polished prep surface"],
      },
      {
        num: "02", title: "Vinyl Wrap / Colour Change Wrap",
        tagline: "Transform your car's look",
        price: "From ₹25,000", duration: "2–4 days",
        img: "1616591938558-fb03d845567b",
        description: "Full or partial vinyl wrap to completely transform your car's colour and finish. Available in gloss, matte, satin, chrome, carbon fibre, and custom printed designs. Fully reversible — your original paint is preserved underneath.",
        includes: ["Full colour-change wrap available", "Partial wrap / accent panels", "Gloss, matte, satin, chrome finishes", "Carbon fibre & custom prints", "Fully reversible — protects OEM paint", "3–5 year film life"],
      },
      {
        num: "03", title: "9H Ceramic Coating",
        tagline: "Nano-ceramic paint protection",
        price: "From ₹7,999", duration: "1 day",
        img: "1550561438-3c2c3b8ea3a6",
        description: "Professional-grade 9H nano-ceramic coating that chemically bonds to your clear coat, creating a permanent hard layer that repels water, UV rays, bird droppings, acid rain, and chemical contamination. Dramatically amplifies gloss depth. Backed by RUPES polishing prep.",
        includes: ["Iron fallout decontamination", "Clay bar treatment", "Paint correction prep polish", "9H nano-ceramic application", "Hydrophobic water-beading", "1-year, 2-year & 3-year tiers available"],
      },
      {
        num: "04", title: "Graphene Coating",
        tagline: "10H next-gen protection",
        price: "From ₹18,000", duration: "1–2 days",
        img: "1764693756618-fc101047a387",
        description: "Graphene coating surpasses ceramic in every metric — harder (10H), better heat dissipation, anti-static dust repellency, and superior water-spot resistance. Ideal for India's intense UV and dust conditions. Produces an extraordinary mirror-depth gloss.",
        includes: ["10H graphene hardness", "Anti-static particle repellency", "Superior heat dissipation", "Hard water spot resistance", "Full paint correction included", "2–5 year protection guarantee"],
      },
      {
        num: "05", title: "Marine Graphene Coating",
        tagline: "For extreme environment protection",
        price: "From ₹22,000", duration: "1–2 days",
        img: "1764693756663-211afae0c81d",
        description: "Marine-grade graphene coating — the most chemically resistant formulation available. Designed for vehicles exposed to salt air, extreme heat, or industrial environments. Provides maximum protection against oxidation, chemical etching, and UV degradation.",
        includes: ["Marine-grade graphene formulation", "Highest chemical resistance", "Salt & industrial environment safe", "Extreme UV protection", "5+ year durability"],
      },
      {
        num: "06", title: "Glass Coating",
        tagline: "Crystal-clear hydrophobic windshield",
        price: "From ₹1,499", duration: "1–2 hours",
        img: "1520340356584-f9917d1eea6f",
        description: "Nano glass coating applied to all exterior glass surfaces. Rain beads and rolls off at speed above 60 km/h, dramatically improving monsoon visibility. Resists mineral deposits, insect splatter, and ice adhesion.",
        includes: ["All exterior glass surfaces", "Nano hydrophobic coating", "Rain-repellent effect", "Mineral deposit resistance", "1-year durability"],
      },
      {
        num: "07", title: "Rain Repellent Treatment",
        tagline: "Monsoon-ready visibility",
        price: "From ₹999", duration: "30–45 min",
        img: "1607860108855-64acf2078ed9",
        description: "Quick-apply professional rain repellent treatment for windshields and glass. Ensures water beads and clears instantly even in heavy monsoon rain, improving driver visibility and safety significantly.",
        includes: ["Windshield application", "Side & rear glass treatment", "Instant beading effect", "3–6 month durability"],
      },
      {
        num: "08", title: "Plastic / Trim Coating",
        tagline: "Restore and protect all trim",
        price: "From ₹799", duration: "1–2 hours",
        img: "1608506375591-b90e1f955e4b",
        description: "Specialised nano-polymer coating for exterior plastic bumpers, door strips, mirror caps, and interior trim. Restores deep black tone to faded plastics and provides long-lasting UV protection against future bleaching.",
        includes: ["Exterior & interior plastic trim", "UV protective polymer", "Restores faded black trim", "12–18 month durability"],
      },
      {
        num: "09", title: "Headlight Coating",
        tagline: "Clarity protection for lenses",
        price: "From ₹799", duration: "45–60 min",
        img: "1474065581914-e24d783b0c55",
        description: "Nano-ceramic coating specifically formulated for polycarbonate headlight lenses. Creates a UV-resistant hard barrier preventing oxidation, yellowing, and haziness — maintaining optical clarity and light output.",
        includes: ["Front & rear lens treatment", "UV-block nano coating", "Prevents yellowing & haze", "2-year durability"],
      },
      {
        num: "10", title: "Teflon Coating",
        tagline: "Classic protective wax alternative",
        price: "From ₹2,500", duration: "2–3 hours",
        img: "1761934657948-708146148588",
        description: "Professional Teflon (PTFE) coating creates a slick, non-stick surface over your paintwork that repels water, dust, and minor contamination. An affordable protection option with moderate durability, ideal as an entry-level paint protection.",
        includes: ["Full exterior paint surface", "PTFE Teflon application", "Water & dust repellency", "Mild gloss enhancement", "3–6 month durability"],
      },
      {
        num: "11", title: "Alloy Wheel Coating",
        tagline: "Brake-dust resistant wheel armour",
        price: "From ₹1,499", duration: "1–2 hours",
        img: "1565689876697-e467b6c54da2",
        description: "Ceramic coating specifically for alloy wheels — creates a barrier against brake dust embedding, road salt corrosion, and chemical attack from wheel cleaners. Wheel faces stay cleaner longer and are dramatically easier to clean.",
        includes: ["All 4 alloy wheels", "Brake dust release coating", "Road salt resistance", "Tyre dressing included", "12-month durability"],
      },
      {
        num: "12", title: "Leather Coating",
        tagline: "Premium leather surface protection",
        price: "From ₹1,499", duration: "1–2 hours",
        img: "1520340356584-f9917d1eea6f",
        description: "Professional nano-protective topcoat for leather seats, steering wheel, and door panels. Prevents cracking, UV fading, and staining. Applied after our Leather Master deep-clean process for maximum bond and durability.",
        includes: ["Seats, steering, door panels", "Leather Master deep clean first", "UV-protective topcoat", "Crack & stain resistance", "12–18 month durability"],
      },
    ],
  },
  {
    id: "detailing",
    icon: Sparkles,
    label: "Detailing & Restoration",
    num: "02",
    desc: "Professional-grade paint correction using RUPES machines, surface restoration, and deep cleaning — restoring your car to better-than-showroom condition.",
    accentImg: "1780558852671-e47265577239",
    services: [
      {
        num: "01", title: "Paint Correction",
        tagline: "RUPES machine polishing — full defect removal",
        price: "From ₹3,499", duration: "4–8 hours",
        img: "1780558852671-e47265577239",
        description: "Multi-stage machine polishing using RUPES BigFoot random orbital and gear-driven polishers with premium Menzerna/RUPES compounds. Systematically removes swirl marks, wash marring, water etching, light scratches, and oxidation — restoring genuine paint depth and clarity.",
        includes: [
          "Step 1: Foam wash & iron fallout decontamination",
          "Step 2: Clay bar full paint decontamination",
          "Step 3: Paint depth gauge reading (all panels)",
          "Step 4: High-intensity defect inspection under studio lights",
          "Step 5: RUPES machine cutting compound (removes defects)",
          "Step 6: RUPES finishing polish (refines to mirror gloss)",
          "Step 7: IPA wipe-down and panel check",
          "Step 8: Sealant or coating application",
          "Before & after documentation photography",
        ],
      },
      {
        num: "02", title: "Chrome Parts Restoration",
        tagline: "Revive faded & pitted chrome",
        price: "From ₹599", duration: "1–3 hours",
        img: "1533666834526-903b11416fc1",
        description: "Specialist restoration of chrome trim, grilles, bumpers, and exterior accents. We remove surface pitting, rust bloom, tarnishing, and oxidation using fine chrome polishes and hand techniques, then apply a chrome sealant for long-term protection.",
        includes: ["Chemical rust/oxidation treatment", "Fine-abrasive chrome polish", "Machine polishing where safe", "Chrome protective sealant", "Exterior chrome trim only"],
      },
      {
        num: "03", title: "Deep Cleaning — Dry (Without Opening Fittings)",
        tagline: "Thorough dry interior clean",
        price: "From ₹1,499", duration: "2–3 hours",
        img: "1761934657948-708146148588",
        description: "A comprehensive dry interior clean covering all surfaces without dismantling any fittings or trim panels. Includes high-power vacuum of all surfaces and crevices, steam cleaning of vents and hard-to-reach areas, wipe-down of all hard surfaces, and interior glass clean.",
        includes: [
          "High-power vacuum all surfaces & crevices",
          "Steam clean AC vents & instrument panel",
          "Dashboard, door panels & console wipe-down",
          "Interior glass & mirror clean",
          "Boot / dicky clean",
          "Seat vacuum & surface clean",
          "Air freshener application",
        ],
      },
      {
        num: "04", title: "Deep Cleaning — Wet (With Opening Fittings)",
        tagline: "Full disassembly deep clean",
        price: "From ₹2,999", duration: "4–7 hours",
        img: "1608506375591-b90e1f955e4b",
        description: "Our most thorough interior service — trim panels and seat fittings are partially dismantled to allow complete cleaning access underneath and behind every surface. Includes hot-water carpet extraction, steam sanitisation, odour elimination, and leather conditioning.",
        includes: [
          "Partial trim panel removal for full access",
          "Under-seat and under-carpet cleaning",
          "Hot-water carpet & upholstery extraction",
          "Steam sanitisation of all surfaces",
          "Leather / fabric deep clean & condition",
          "Boot liner removal & clean",
          "Door pocket & storage area clean",
          "Odour neutralisation treatment",
        ],
      },
      {
        num: "05", title: "Regular Washing",
        tagline: "Safe, scratch-free hand wash",
        price: "From ₹399", duration: "45–60 min",
        img: "1607860108855-64acf2078ed9",
        description: "Professional touchless foam pre-wash followed by a two-bucket contact hand wash using pH-neutral shampoo. Wheel and tyre clean, streak-free drying, and tyre dress. Safe for all coatings and PPF.",
        includes: ["Foam pre-rinse", "Two-bucket hand wash", "Wheel & tyre clean", "Streak-free towel dry", "Tyre dressing"],
      },
      {
        num: "06", title: "Full Detailing Package",
        tagline: "Complete interior + exterior transformation",
        price: "From ₹5,999", duration: "1–2 days",
        img: "1520340356584-f9917d1eea6f",
        description: "Our most comprehensive single package combining a complete exterior decontamination wash, single-stage paint correction, interior deep clean with fittings removal, leather conditioning, carpet extraction, and a spray sealant finish.",
        includes: [
          "Full exterior decontamination wash",
          "Clay bar treatment",
          "Single-stage RUPES paint correction",
          "Deep clean with opening fittings",
          "Carpet hot-water extraction",
          "Leather clean & condition",
          "Engine bay wipe-down",
          "Spray polymer sealant",
          "Before & after photography",
        ],
      },
      {
        num: "07", title: "Full Car Restoration",
        tagline: "Complete head-to-toe rejuvenation",
        price: "Custom Quote", duration: "3–7 days",
        img: "1764693756663-211afae0c81d",
        description: "For older or heavily neglected vehicles, our full car restoration combines multi-stage paint correction, chrome restoration, interior deep clean, headlight restoration, trim restoration, mechanical inspection, and full protection coating — bringing the car as close to new as possible.",
        includes: [
          "Multi-stage RUPES paint correction",
          "Chrome & trim restoration",
          "Full interior deep clean",
          "Headlight restoration",
          "Alloy wheel restoration",
          "Full ceramic coating application",
          "Complete before & after documentation",
        ],
      },
    ],
  },
  {
    id: "interior",
    icon: Settings,
    label: "Interior & Accessories",
    num: "03",
    desc: "Window tints, ambient lighting, audio upgrades, dashcams, and interior customisation — everything to make your cabin smarter, safer, and more personal.",
    accentImg: "1761934657948-708146148588",
    services: [
      {
        num: "01", title: "Window Tinting",
        tagline: "Legal, quality solar protection",
        price: "From ₹3,999", duration: "2–3 hours",
        img: "1550561438-3c2c3b8ea3a6",
        description: "Professional window film installation using legal-compliant films (70% VLT front, 50% VLT sides as per MV Act). We stock basic dyed, ceramic, and premium nano-ceramic films from Saint Gobain, 3M, LLumar and others. Heat rejection up to 99% on ceramic grades.",
        includes: ["Legal VLT compliant installation", "Dyed / ceramic / nano-ceramic options", "Saint Gobain, LLumar, 3M brands", "UV & heat rejection", "Scratch-resistant hard coat", "Professional bubble-free fitting"],
      },
      {
        num: "02", title: "Ambient Lighting",
        tagline: "Transform your cabin atmosphere",
        price: "From ₹3,999", duration: "2–4 hours",
        img: "1760520830355-e6be53e41c2f",
        description: "Custom RGB or multi-zone ambient LED lighting fitted to footwells, door panels, dashboard edges, and roof lining. App-controlled or sync-to-music options available. Clean, professional installation with concealed wiring.",
        includes: ["Footwell, door panel & dash zones", "RGB multi-colour options", "App / music-sync control", "Concealed wiring installation", "OEM-style clean finish"],
      },
      {
        num: "03", title: "Speaker & Music Upgradation",
        tagline: "Premium audio experience",
        price: "From ₹5,000", duration: "Half–full day",
        img: "1533666834526-903b11416fc1",
        description: "Complete audio system upgrades — from entry-level speaker swaps to full-system builds with component speakers, subwoofers, amplifiers, and sound deadening. We work with all major brands: JBL, Sony, Kenwood, Pioneer, and more.",
        includes: ["Component speaker replacement", "Subwoofer & amplifier install", "Head unit upgrade", "Sound deadening application", "Tuning & calibration", "Clean OEM-finish install"],
      },
      {
        num: "04", title: "Lights & Tails Upgradation",
        tagline: "LED & projector upgrades",
        price: "From ₹3,000", duration: "2–4 hours",
        img: "1474065581914-e24d783b0c55",
        description: "LED headlight and taillight upgrades — DRL strips, projector retrofits, LED sequential indicators, and custom tail light assemblies. All fittings are road-legal and professionally wired with no visible cable management.",
        includes: ["LED headlight upgrade", "DRL strip installation", "Sequential LED indicators", "Taillight upgrade / smoked finish", "Projector headlight retrofit", "Professional wiring"],
      },
      {
        num: "05", title: "Perfumes & Diffusers",
        tagline: "Premium cabin fragrance",
        price: "From ₹999", duration: "15–30 min",
        img: "1761934657948-708146148588",
        description: "Premium car perfumes and vent-clip diffusers in a range of fragrances. We stock long-lasting oil-based diffusers, luxury car fragrances, and clip-on options that complement your vehicle's interior without overpowering.",
        includes: ["Oil-based vent diffusers", "Luxury car perfumes", "Long-lasting 30–60 day options", "Multiple fragrance choices"],
      },
      {
        num: "06", title: "Odour Treatment",
        tagline: "Eliminate stubborn cabin smells",
        price: "From ₹1,499", duration: "2–4 hours",
        img: "1608506375591-b90e1f955e4b",
        description: "Professional odour elimination using ozone treatment and enzyme-based deodorisers. Targets cigarette smoke, pet odours, mould, food smells, and musty HVAC odours at the molecular level — not just masking with fragrance.",
        includes: ["Ozone treatment (O₃ generation)", "Enzyme-based odour eliminator", "HVAC/AC duct treatment", "Post-treatment air freshener", "Targets smoke, mould, pet & food odours"],
      },
      {
        num: "07", title: "Anti-Rat Treatment",
        tagline: "Protect wiring from rodent damage",
        price: "From ₹799", duration: "30–60 min",
        img: "1565689876697-e467b6c54da2",
        description: "Rodent damage to wiring looms is a major and increasingly common problem in India. Our anti-rat treatment applies specialised repellent compounds in engine bays, under-dash areas, and wiring routes to deter rodents and prevent expensive wire damage.",
        includes: ["Engine bay treatment", "Under-dash repellent spray", "Wiring loom protection", "Rodent-repellent foam application", "6-month effectiveness"],
      },
      {
        num: "08", title: "Dashcam & Reverse Camera",
        tagline: "Safety and security tech",
        price: "From ₹2,999", duration: "1–2 hours",
        img: "1520340356584-f9917d1eea6f",
        description: "Professional installation of dashcams (front only or front+rear), reverse cameras, and parking sensors. All wiring is concealed behind trim panels for a clean, OEM look. We stock and fit brands including Viofo, 70mai, Qubo, and more.",
        includes: ["Front dashcam installation", "Front + rear dashcam option", "Reverse camera fitting", "Fully concealed wiring", "Parking sensor install available", "Multiple brand options"],
      },
      {
        num: "09", title: "Interior Customisation & Seat Covers",
        tagline: "Make it uniquely yours",
        price: "From ₹5,000", duration: "1–3 days",
        img: "1608506375591-b90e1f955e4b",
        description: "Custom seat covers, dashboard wraps, steering wheel covers, door panel modification, and complete interior restyling. We work with premium leatherette, Nappa leather, alcantara, and fabric options to create a fully personalised cabin.",
        includes: ["Custom leatherette seat covers", "Nappa / alcantara options", "Steering wheel recover", "Dashboard & door panel wrap", "Roof lining change", "Full interior restyling available"],
      },
      {
        num: "10", title: "Modification, Kits & Accessories",
        tagline: "Body kits and more",
        price: "Custom Quote", duration: "Varies",
        img: "1616591938558-fb03d845567b",
        description: "Exterior body kits, spoilers, lip additions, side skirts, diffusers, and performance-style modifications. We supply and fit OEM-style and aftermarket body kits with professional paint-matched or wrapped finishes.",
        includes: ["Front & rear lip additions", "Side skirts & diffusers", "Spoiler installation", "Body kit supply & fit", "Paint-matched or wrapped finish"],
      },
    ],
  },
  {
    id: "repairs",
    icon: Wrench,
    label: "Car Care & Repairs",
    num: "04",
    desc: "Denting, painting, mechanical care, and specialist repair services — keeping your car in perfect mechanical and cosmetic condition.",
    accentImg: "1607860108855-64acf2078ed9",
    services: [
      {
        num: "01", title: "Denting & Painting",
        tagline: "Panel repair & colour-matched repaint",
        price: "From ₹3,500 / panel", duration: "1–3 days",
        img: "1780558852671-e47265577239",
        description: "Professional dent repair and colour-matched panel repainting. We use computerised paint-mixing systems to match your car's exact factory colour code, followed by a blending process to ensure the repainted panel is indistinguishable from the original.",
        includes: ["Dent removal (with or without filler)", "Computerised colour-code matching", "Panel preparation & primer", "Colour coat & clear coat", "Panel blending", "Post-paint polish & finish"],
      },
      {
        num: "02", title: "Bumper Repair — Plastic Welding",
        tagline: "No screws — factory-perfect repair",
        price: "From ₹2,999", duration: "4–8 hours",
        img: "1608506375591-b90e1f955e4b",
        description: "Split, cracked, or broken plastic bumpers repaired without replacement using professional hot plastic welding technology. The weld is reinforced from behind with mesh, then filler-finished and painted to match — invisible when complete.",
        includes: ["Hot plastic welding (no screws)", "Mesh reinforcement backing", "Filler and sanding prep", "Colour-matched repaint", "Polish & finish"],
      },
      {
        num: "03", title: "Radiator Flush",
        tagline: "Clean and refresh your cooling system",
        price: "From ₹1,499", duration: "1–2 hours",
        img: "1533666834526-903b11416fc1",
        description: "Complete radiator and cooling system flush using professional flushing agents to remove old coolant, rust particles, scale deposits, and contamination. Prevents overheating and extends radiator and engine life significantly.",
        includes: ["Full cooling system drain", "Chemical flush treatment", "System rinse", "Fresh coolant refill", "Thermostat check", "Hose & cap inspection"],
      },
      {
        num: "04", title: "Coolant Top-Up & Replacement",
        tagline: "Keep your engine cool",
        price: "Top-Up ₹499 / Replace ₹1,499", duration: "30–60 min",
        img: "1565689876697-e467b6c54da2",
        description: "Coolant level top-up using the correct OEM-specified coolant, or full coolant replacement. Using wrong coolant causes corrosion and scale — we always check your vehicle's spec before adding or replacing coolant.",
        includes: ["OEM-specified coolant check", "Full system inspection", "Correct coolant type", "Level top-up or full replace", "Antifreeze protection check"],
      },
      {
        num: "05", title: "Radiator & Condenser Foam Cleaning",
        tagline: "Restore AC efficiency & fuel economy",
        price: "From ₹999", duration: "45–90 min",
        img: "1607860108855-64acf2078ed9",
        description: "Over time, radiator and AC condenser fins get blocked with mud, dust, insects, and debris — reducing AC cooling efficiency and engine operating temperature. Our foam jet cleaning restores airflow, improving both AC performance and fuel economy noticeably.",
        includes: ["Radiator fin foam cleaning", "AC condenser cleaning", "Intercooler clean (if applicable)", "Post-clean airflow check", "Visible improvement guaranteed"],
      },
      {
        num: "06", title: "Hydrodip",
        tagline: "Custom hydrographic print finish",
        price: "Custom Quote", duration: "2–4 days",
        img: "1760520830355-e6be53e41c2f",
        description: "Hydrographic printing (water transfer printing) applies any pattern — carbon fibre, wood grain, camouflage, geometric designs — to any 3D surface: dashboard trim, alloy wheels, interior panels, and more. Results are permanent and fully clearcoated.",
        includes: ["Any pattern / design choice", "Applied to interior or exterior parts", "Dashboard, wheels, trim panels", "Permanent with clearcoat finish", "Carbon fibre, wood, custom patterns"],
      },
    ],
  },
];

// ─── PPF Brands strip ──────────────────────────────────────────────────────────
const ppfBrands = ["Garware", "NAR", "Ultraguard", "UC Films", "Saint Gobain", "LLumar", "Camio", "Troro", "Neoshield"];

function PPFBrands() {
  return (
    <div className="border-b border-border bg-secondary py-6">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-4">
        <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground/50 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>
          Authorised PPF Brands We Stock & Install
        </p>
      </div>
      <div className="relative overflow-hidden">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="flex gap-0 whitespace-nowrap">
          {[...ppfBrands, ...ppfBrands, ...ppfBrands, ...ppfBrands].map((b, i) => (
            <div key={i} className="flex items-center px-8">
              <span className="text-lg font-black uppercase tracking-[0.12em] text-muted-foreground/25 hover:text-primary/60 transition-colors cursor-default"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{b}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ─── Service card ──────────────────────────────────────────────────────────────
interface ServiceItem {
  num: string; title: string; tagline: string; price: string; duration: string;
  img: string; description: string; includes: string[]; brands?: string[];
}

function ServiceCard({ s }: { s: ServiceItem }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout className="border-b border-border">
      <button className="w-full text-left group" onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-4 lg:gap-8 py-6 lg:py-8">
          <span className="text-3xl lg:text-5xl font-black text-border group-hover:text-primary/20 transition-colors shrink-0 w-10 lg:w-16 leading-none pt-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.num}</span>
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0 min-w-0">
            <div className="flex-1 min-w-0">
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{s.tagline}</div>
              <h3 className="text-xl lg:text-3xl font-black uppercase group-hover:text-primary transition-colors duration-300 leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.title}</h3>
            </div>
            <div className="flex items-center gap-5 lg:gap-10 shrink-0">
              <div>
                <div className="text-[9px] tracking-widest uppercase text-muted-foreground/40 mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>Price</div>
                <div className="text-base lg:text-xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.price}</div>
              </div>
              {/* <div className="hidden sm:block">
                <div className="text-[9px] tracking-widest uppercase text-muted-foreground/40 mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>Time</div>
                <div className="text-base lg:text-xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.duration}</div>
              </div> */}
            </div>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.32 }}
            className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1">
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <div className="pb-10 pl-10 lg:pl-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img src={`https://images.unsplash.com/photo-${s.img}?w=800&h=450&fit=crop&auto=format`}
                  alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.description}</p>
                {s.brands && (
                  <div className="mb-5">
                    <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground/50 mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Available Brands</div>
                    <div className="flex flex-wrap gap-2">
                      {s.brands.map(b => (
                        <span key={b} className="px-2.5 py-1 border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{b}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground/50 mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>What's Included</div>
                  <div className="flex flex-col gap-2">
                    {s.includes.map(item => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle size={12} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/75" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white font-black tracking-widest uppercase text-xs cursor-pointer"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Book This Service <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Services page ─────────────────────────────────────────────────────────────
export default function Services() {
  const [activeTab, setActiveTab] = useState("protection");

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
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Complete Service Menu</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(42px,8.2vw,100px)] font-black uppercase leading-[0.88] mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            OUR<br /><span className="text-primary">SERVICES</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm max-w-2xl leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            40+ professional services across coatings, protection, detailing, interior upgrades, and car care. All work performed using professional RUPES machines and equipment. Click any service to see full details and pricing.
          </motion.p>
        </div>

        {/* Quick stats */}
        <div className="border-t border-border bg-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { v: "40+", l: "Services" }, { v: "9", l: "PPF Brands" },
              { v: "RUPES", l: "Equipment" }, { v: "9H–10H", l: "Coating Grade" }, { v: "GST", l: "Invoice Provided" },
            ].map(s => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-xl font-black text-primary" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.v}</div>
                <div className="text-[10px] tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPF Brands marquee */}
      <PPFBrands />

      {/* Sticky category tabs */}
      <div className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {categories.map(cat => (
              <button key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`group flex items-center gap-2 px-4 lg:px-6 py-4 border-b-2 text-[11px] font-black tracking-widest uppercase whitespace-nowrap transition-all ${
                  activeTab === cat.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <cat.icon size={13} />
                {cat.label}
                <span className={`text-[9px] px-1.5 py-0.5 ml-1 ${activeTab === cat.id ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  {cat.services.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category sections */}
      <div className="bg-background">
        {categories.map(cat => (
          <section key={cat.id} id={cat.id} className="border-b border-border">
            {/* Category header */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-14 pb-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <cat.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-primary mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {cat.num} — {cat.services.length} Services
                    </div>
                    <h2 className="text-[clamp(34px,5.5vw,64px)] font-black uppercase leading-[0.88]"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {cat.label}
                    </h2>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl sm:pl-14" style={{ fontFamily: "'DM Sans', sans-serif" }}>{cat.desc}</p>
              </motion.div>
            </div>

            {/* Wide banner image */}
            <div className="relative aspect-[16/7] sm:aspect-[21/6] lg:aspect-[21/5] overflow-hidden bg-muted mx-0 mb-0">
              <img src={`https://images.unsplash.com/photo-${cat.accentImg}?w=1400&h=340&fit=crop&auto=format`}
                alt={cat.label} className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[clamp(48px,10vw,124px)] font-black uppercase text-white/4 select-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{cat.label.split(" ")[0]}</span>
              </div>
            </div>

            {/* Services list */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="border-t border-border">
                {cat.services.map(s => <ServiceCard key={s.title} s={s as ServiceItem} />)}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      
    </>
  );
}
