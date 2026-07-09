"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";

// ─── SEO helper ───────────────────────────────────────────────────────────────
function useSEO(title: string, description: string, keywords: string) {
  useEffect(() => {
    document.title = title;
    const set = (name: string, val: string, og = false) => {
      const sel = og ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        og ? el.setAttribute("property", name) : el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.content = val;
    };
    set("description", description);
    set("keywords", keywords);
    set("og:title", title, true);
    set("og:description", description, true);
    return () => { document.title = "Glossy Street | Car Detailing Studio"; };
  }, [title, description, keywords]);
}

// ─── Post data ────────────────────────────────────────────────────────────────
const posts: Record<string, {
  title: string; subtitle: string; description: string; keywords: string;
  author: string; date: string; readTime: string; category: string;
  heroImg: string; content: () => JSX.Element;
}> = {

  // ─── POST 1 ────────────────────────────────────────────────────────────────
  "ceramic-coating-guide-india": {
    title: "The Complete Guide to Ceramic Coating for Indian Cars (2024) | Glossy Street",
    subtitle: "The Complete Guide to Ceramic Coating for Indian Cars (2024)",
    description: "Thinking about ceramic coating? This guide covers what it is, how it works, pricing in India (₹7,999–₹28,999+), and why it's ideal for Indian roads and weather conditions.",
    keywords: "ceramic coating car India, 9H ceramic coating price India, best ceramic coating India 2024, ceramic coating benefits India, car ceramic coating cost",
    author: "Himanshu", date: "15 March 2024", readTime: "8 min read", category: "Ceramic Coating",
    heroImg: "1764693756618-fc101047a387",
    content: () => (
      <div className="prose-content">
        <p className="lead">
          Indian roads and climate put your car's paint through serious punishment — scorching summer heat above 45°C, monsoon acid rain, heavy dust and pollution, bird droppings, tree sap, and relentless UV radiation. Add frequent automated car washes with abrasive brushes and your paint degrades faster than almost anywhere in the world. Ceramic coating is the professional solution that addresses every single one of these threats.
        </p>

        <h2>What Is Ceramic Coating?</h2>
        <p>
          A nano ceramic coating is a liquid polymer that, when applied to your car's paint, chemically bonds to the clear coat at a molecular level. Unlike wax or sealant — which sit on the surface and wash away within weeks — ceramic coating becomes part of your paint. It forms a hard, transparent shield rated at <strong>9H on the Mohs hardness scale</strong> (the same scale used for minerals, where diamond is 10H).
        </p>
        <p>
          Once cured, the coating — not your paint — is what takes the daily punishment from India's roads and environment. Your original factory paint stays protected beneath it.
        </p>

        <h2>Why Indian Cars Need Ceramic Protection More Than Most</h2>
        <p>India's climate creates a unique combination of paint threats that makes professional protection essential, not optional:</p>

        <h3>Monsoon Water Spotting & Acid Rain</h3>
        <p>
          India's monsoon season brings rain that, in polluted cities like Delhi, Mumbai, Bangalore, and Pune, carries dissolved pollutants and acid. When this water evaporates on bare paint in the heat, it leaves behind mineral deposits and acid etching. Ceramic coating's <strong>hydrophobic properties cause water to bead instantly and roll off</strong>, preventing spot formation altogether.
        </p>

        <h3>Year-Round UV Damage</h3>
        <p>
          India's UV index regularly reaches 9–11 in summer — among the highest on earth. UV radiation oxidises your clear coat, causing the chalky, dull, whitish appearance on older Indian cars. A quality 9H ceramic coating includes UV blockers that prevent this oxidation for 1–5 years depending on the tier chosen.
        </p>

        <h3>Dust, Pollution & Road Grime</h3>
        <p>
          India's air quality (especially in North India) means your car is coated in fine particulate dust within hours of washing. These particles embed in bare paint and cause a dull, grimy appearance between washes. Ceramic coating's slick, hydrophobic surface repels contaminants — your car <strong>stays cleaner 2–3× longer</strong> between washes.
        </p>

        <h3>Bird Droppings & Tree Sap</h3>
        <p>
          India's urban environments mean constant exposure to acidic bird droppings and tree sap, both of which etch bare paint within hours on a hot day. Ceramic coating significantly slows this etching, giving you a window to safely clean it before damage occurs.
        </p>

        <h2>9H Ceramic vs Graphene Coating — Which Is Better for India?</h2>
        <p>Two types of professional coating are available at Glossy Street:</p>

        <h3>9H Ceramic Coating</h3>
        <p>
          The established standard for paint protection. A nano-ceramic formula that bonds chemically to clear coat, delivering 9H hardness, strong hydrophobic water beading, UV resistance, and chemical protection. Available in 1-year, 2-year, and 3-year protection tiers. Best value for everyday Indian cars — Maruti Suzuki Swift, Hyundai Creta, Tata Nexon, Honda City, Kia Seltos.
        </p>

        <h3>Graphene Ceramic Coating</h3>
        <p>
          The next generation of paint protection. Graphene's unique molecular structure adds 10H hardness, significantly better heat dissipation (which reduces water spotting on hot panels — a major issue in India's summer), anti-static properties that repel dust and fine particles, and a deeper, more liquid-looking gloss. Lasts 5+ years with proper care. Worth the investment for premium vehicles — Toyota Fortuner, Mahindra XUV700, BMW 3 Series, Mercedes C-Class.
        </p>

        <h2>Ceramic Coating Prices in India (2024)</h2>
        <div className="price-table">
          <table>
            <thead>
              <tr><th>Vehicle Type</th><th>9H Ceramic (1–2 yr)</th><th>9H Ceramic (3–5 yr)</th><th>Graphene (5+ yr)</th></tr>
            </thead>
            <tbody>
              <tr><td>Hatchback (Swift, i20, Punch)</td><td>₹7,999–₹12,000</td><td>₹12,000–₹16,000</td><td>₹18,000–₹22,000</td></tr>
              <tr><td>Sedan (City, Verna, Dzire)</td><td>₹10,999–₹15,000</td><td>₹15,000–₹22,000</td><td>₹22,000–₹28,000</td></tr>
              <tr><td>SUV (Creta, Seltos, Nexon)</td><td>₹14,999–₹20,000</td><td>₹20,000–₹28,000</td><td>₹28,000–₹38,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="note">*Prices include full preparation and application. GST extra. Luxury and modified vehicles on custom quote.</p>

        <h2>The Ceramic Coating Process at Glossy Street</h2>
        <p>We follow a strict 6-step certified protocol — no shortcuts:</p>
        <ol>
          <li><strong>Decontamination wash</strong> — Remove all surface dirt, iron fallout, and chemical contamination</li>
          <li><strong>Clay bar treatment</strong> — Remove bonded contamination invisible to the naked eye</li>
          <li><strong>Paint correction</strong> — Swirl marks and scratches polished away before coating (defects sealed in look permanent)</li>
          <li><strong>IPA wipe-down</strong> — Strip all oils and residue for a chemically pure surface</li>
          <li><strong>Coating application</strong> — Applied in panels in our climate-controlled bay</li>
          <li><strong>Cure & inspection</strong> — 24-hour cure minimum, final check under high-intensity lights, handover with aftercare guide</li>
        </ol>

        <h2>How to Maintain a Ceramic Coated Car in India</h2>
        <ul>
          <li>Use only pH-neutral car shampoo — never dish soap or strong detergents</li>
          <li>Avoid automated car washes with abrasive brushes — always use touchless wash or hand wash</li>
          <li>Rinse bird droppings immediately — even coated paint can etch in India's heat if left for hours</li>
          <li>Book an annual inspection to check coating performance and apply a top-up if needed</li>
          <li>Use a ceramic boost spray between washes for maximum hydrophobic performance</li>
        </ul>

        <h2>Is Ceramic Coating Worth It in India?</h2>
        <p>
          Consider the maths: a quality 3-year ceramic coating costs ₹15,000–₹25,000 on a sedan. That's ₹5,000–₹8,000 per year of protection against UV oxidation, acid etching, water spotting, and constant contamination. A paint correction to reverse the damage from three years of unprotected Indian driving costs the same or more — and you still have to protect it afterward.
        </p>
        <p>
          Ceramic coating is not a luxury. For anyone who drives in India and cares about their car's appearance and resale value, it's the most cost-effective paint protection investment available.
        </p>
      </div>
    ),
  },

  // ─── POST 2 ────────────────────────────────────────────────────────────────
  "ppf-vs-ceramic-coating-india": {
    title: "PPF vs Ceramic Coating: Which One Does Your Car Need in India? | Glossy Street",
    subtitle: "PPF vs Ceramic Coating: Which One Does Your Car Need in India?",
    description: "PPF or ceramic coating — which is right for your car? This honest guide explains what each does, the cost in India, and the smartest protection strategy for Indian roads.",
    keywords: "PPF vs ceramic coating India, paint protection film India, PPF price India, ceramic coating vs PPF, best car protection India",
    author: "Himanshu", date: "28 February 2024", readTime: "7 min read", category: "PPF",
    heroImg: "1760520830355-e6be53e41c2f",
    content: () => (
      <div className="prose-content">
        <p className="lead">
          Walk into any car detailing studio in India and you'll be offered two types of paint protection: Paint Protection Film (PPF) and Ceramic Coating. They're often mentioned in the same breath and confused with each other — but they do fundamentally different jobs. Choosing the wrong one, or choosing only one when you need both, can be a costly mistake for your car's long-term condition.
        </p>

        <h2>What PPF Does — Physical Protection</h2>
        <p>
          PPF is a physical layer — a transparent urethane film applied directly to the paint surface. Think of it as a second skin for your car. Its job is to absorb <strong>physical impacts</strong>: stone chips on Indian highways, gravel from the endless construction zones across our cities, shopping trolley scratches in mall parking lots, and minor abrasion from road debris.
        </p>
        <p>
          Premium PPF films (XPEL, 3M Scotchgard Pro, LLumar) are <strong>self-healing</strong> — minor surface scratches in the film literally disappear with heat from sunlight or a warm water rinse. The film is optically transparent, so your paint colour, gloss, and finish remain completely unchanged beneath it.
        </p>
        <p><strong>PPF protects against:</strong> Stone chips, road debris, gravel, minor physical scratches, parking lot damage, insect acids</p>
        <p><strong>PPF does NOT:</strong> Repel water or dust, prevent UV fading (most standard films), provide chemical resistance, keep your car clean longer</p>

        <h2>What Ceramic Coating Does — Chemical & UV Protection</h2>
        <p>
          Ceramic coating is a chemical application — a nano-polymer that bonds to your paint's surface at a molecular level. Its job is entirely different to PPF. It cannot stop a stone chip, but it excels at everything PPF cannot do.
        </p>
        <p><strong>Ceramic coating protects against:</strong> UV radiation, acid rain & water spotting, bird dropping etching, tree sap, road grime and pollution, chemical contamination. It also creates strong hydrophobic water beading and dramatically improves gloss.</p>
        <p><strong>Ceramic coating does NOT:</strong> Protect against stone chips, physical scratches, road debris, or parking lot impact damage</p>

        <h2>Why Both Matter for Indian Roads</h2>
        <p>India's driving environment presents a dual threat that makes this choice particularly important:</p>
        <h3>Physical Threats (PPF territory)</h3>
        <ul>
          <li>National Highway stone chips — a constant problem on NH44, NH48, NH58, and most state highways</li>
          <li>Construction gravel across every major Indian city</li>
          <li>Speed bumper contact on low-clearance vehicles</li>
          <li>Crowded urban parking with door ding risk</li>
        </ul>
        <h3>Environmental Threats (Ceramic territory)</h3>
        <ul>
          <li>Monsoon acid rain leaving water spots on paint</li>
          <li>India's extreme UV index (9–11 in summer) causing oxidation</li>
          <li>Industrial and vehicle air pollution embedding in paint</li>
          <li>Bird droppings from urban trees etching in the heat</li>
        </ul>

        <h2>Cost Comparison in India (2024)</h2>
        <div className="price-table">
          <table>
            <thead>
              <tr><th>Protection Type</th><th>Coverage</th><th>Price (Sedan)</th></tr>
            </thead>
            <tbody>
              <tr><td>9H Ceramic Coating (1–2 yr)</td><td>Full vehicle</td><td>₹10,999–₹18,000</td></tr>
              <tr><td>9H Ceramic Coating (3–5 yr)</td><td>Full vehicle</td><td>₹18,000–₹25,000</td></tr>
              <tr><td>Graphene Coating (5+ yr)</td><td>Full vehicle</td><td>₹22,000–₹30,000</td></tr>
              <tr><td>PPF Front Package</td><td>Bonnet, bumper, fenders, mirrors</td><td>₹18,999–₹30,000</td></tr>
              <tr><td>PPF Full Body</td><td>Complete vehicle</td><td>₹65,000–₹1,20,000</td></tr>
              <tr><td><strong>PPF Front + Ceramic Full</strong></td><td><strong>Best combination</strong></td><td><strong>₹28,999+</strong></td></tr>
            </tbody>
          </table>
        </div>

        <h2>When to Choose PPF</h2>
        <ul>
          <li>You frequently drive on Indian highways (stone chip risk is high)</li>
          <li>You own a new vehicle and want to preserve it from day one</li>
          <li>You drive a premium or luxury car (BMW, Audi, Mercedes, Mahindra Thar, Force Gurkha)</li>
          <li>Your bonnet and front bumper are visibly stone-chipped already</li>
          <li>You plan to sell within 2–3 years and want maximum resale value</li>
        </ul>

        <h2>When to Choose Ceramic Coating</h2>
        <ul>
          <li>You primarily drive within the city (lower stone chip exposure)</li>
          <li>Easy maintenance and cleaning is your priority</li>
          <li>You park outdoors and need UV and acid rain protection</li>
          <li>Your budget doesn't allow for PPF right now</li>
          <li>You want long-lasting gloss improvement</li>
        </ul>

        <h2>The Smartest Strategy: Combine Both</h2>
        <p>
          The most cost-effective approach used by smart car owners in India: <strong>PPF on the high-impact zones</strong> (front bumper, full bonnet, front fenders, A-pillars, door cups) + <strong>ceramic coating on the entire vehicle including over the PPF</strong>.
        </p>
        <p>
          This gives you physical stone chip protection where the car takes the most hits, and chemical/UV/hydrophobic protection everywhere else. The cost — roughly ₹28,999–₹45,000 for a sedan — is significantly less than full-body PPF (₹65,000+) while giving you 80% of the protection benefit.
        </p>
        <p>
          At Glossy Street, this is what we recommend for most new car buyers, especially those purchasing premium vehicles like the Toyota Fortuner, Jeep Meridian, Mahindra XUV700, or Tata Safari.
        </p>

        <h2>Final Verdict</h2>
        <p>
          <strong>For a tight budget:</strong> Ceramic coating — gives the best overall protection for daily Indian driving conditions at a rational price.<br/>
          <strong>For highway drivers or new premium cars:</strong> PPF on the front + ceramic everywhere else — the gold standard combination.<br/>
          <strong>For maximum protection regardless of cost:</strong> Full-body PPF with ceramic coating on top — the absolute best protection available.
        </p>
        <p>
          Not sure which is right for your specific car and driving pattern? Come in for a free consultation at Glossy Street. We'll assess your vehicle and give you an honest, no-upsell recommendation.
        </p>
      </div>
    ),
  },

  // ─── POST 3 ────────────────────────────────────────────────────────────────
  "paint-correction-india": {
    title: "Paint Correction in India: What It Is, What It Costs & When You Need It | Glossy Street",
    subtitle: "Paint Correction in India: What It Is, Cost & When You Need It",
    description: "Swirl marks, dull paint, water spots? Paint correction restores your car to better-than-showroom condition. Complete guide with Indian pricing (₹3,499–₹15,000+) and what to expect.",
    keywords: "paint correction India, paint correction cost India, car paint correction, swirl mark removal India, paint polishing India",
    author: "Himanshu", date: "20 January 2024", readTime: "9 min read", category: "Paint Correction",
    heroImg: "1780558852671-e47265577239",
    content: () => (
      <div className="prose-content">
        <p className="lead">
          Look closely at any car that's been through a few monsoon seasons and a regular petrol station car wash routine in India. Under direct sunlight — or even a torch held at a low angle — you'll see them: circular swirl marks spiralling across the bonnet and roof, water etching from mineral-laden rainwater, fine scratches from automated wash brushes, and the dull oxidised haze that accumulates over years of UV exposure. This is paint damage, and paint correction is how it's reversed.
        </p>

        <h2>What Is Paint Correction?</h2>
        <p>
          Paint correction is the process of mechanically removing a microscopic layer of clear coat using professional machine polishers and abrasive compounds, exposing an undamaged, defect-free surface beneath. Done correctly by a trained technician with proper equipment and lighting, it removes:
        </p>
        <ul>
          <li><strong>Swirl marks</strong> — circular scratching patterns from automated washes and improper washing technique</li>
          <li><strong>Water spots</strong> — mineral and acid deposits from monsoon rain and bore water</li>
          <li><strong>Fine scratches</strong> — from keys, clothing, branches, sponges, and brushes</li>
          <li><strong>Oxidation and UV haze</strong> — the dull, chalky appearance from prolonged sun exposure</li>
          <li><strong>Buffer trails</strong> — marks left by amateur or rushed polishing attempts</li>
          <li><strong>Bird dropping etching</strong> — acid damage from bird droppings left in India's heat</li>
        </ul>
        <p>The result is a paint surface that often looks better and deeper than it did when the car was brand new.</p>

        <h2>Why Indian Cars Suffer More Paint Damage</h2>
        <p>Several specific Indian habits and conditions accelerate paint deterioration far faster than in other markets:</p>

        <h3>Automated Petrol Station Car Washes</h3>
        <p>
          The rotating brush automatic car washes available at petrol pumps across India are the <strong>single biggest cause of paint damage</strong> on Indian cars. These machines wash hundreds of vehicles every day. The brushes pick up abrasive particles — sand, grit, stones — from each car and drag them across the next car's paint at speed. Every automated wash visit leaves thousands of fine scratches across your clear coat. Under inspection lighting, cars that have been through these washes 20–30 times look like they've been rubbed with sandpaper.
        </p>

        <h3>Monsoon Water Spots & Acid Rain</h3>
        <p>
          India's monsoons, especially in industrial cities, bring rain carrying dissolved pollutants and light acid. When this water evaporates on your warm bonnet or roof, it leaves behind a concentrated deposit that etches into the clear coat. Mineral-rich bore water used for roadside washing has the same effect. These deposits require more than just washing to remove — they need chemical treatment or mechanical polishing.
        </p>

        <h3>Roadside Sponge Washing</h3>
        <p>
          Common roadside car washing in India uses the same bucket and sponge repeatedly across dozens of vehicles. The sponge becomes loaded with grit and abrasive particles from road surfaces, and every wipe across your paint is dragging these particles across your clear coat. This creates the random fine scratches and haze visible on almost every Indian car over two years old.
        </p>

        <h3>India's Extreme UV Index</h3>
        <p>
          India's UV index regularly hits 9–11 in summer months — among the highest sustained UV exposure on earth. UV radiation breaks down the chemical bonds in your clear coat over time, causing oxidation: the surface becomes dull, rough, and porous. Oxidised clear coat cannot be restored by washing or waxing — it requires mechanical polishing to remove the damaged layer and expose the undamaged surface beneath.
        </p>

        <h2>The Three Stages of Paint Correction</h2>

        <h3>Stage 1: Single-Stage Light Correction</h3>
        <p>
          One pass with a mild abrasive compound using a dual-action (DA) polisher removes light surface swirling and minor water spots. This is appropriate for relatively new cars (1–2 years old) with mainly light wash marring. <strong>Defect removal: 30–50%.</strong> Duration: 3–4 hours.
        </p>

        <h3>Stage 2: Two-Stage Medium Correction</h3>
        <p>
          Two polishing passes — first with a cutting compound (removes defects) then a finishing polish (refines to a perfect gloss). Suitable for most cars 2–5 years old with visible swirl marks, water etching, and moderate scratching. <strong>Defect removal: 70–80%.</strong> Duration: 5–7 hours.
        </p>

        <h3>Stage 3: Multi-Stage Full Correction</h3>
        <p>
          Multiple passes with progressively finer compounds and polishes, including rotary polisher use for heavier cutting. This is the preparation for ceramic coating or PPF, and the treatment for heavily damaged, oxidised, or older paint. <strong>Defect removal: 90–95%.</strong> Duration: 1–2 full days.
        </p>

        <h2>Paint Correction Cost in India (2024)</h2>
        <div className="price-table">
          <table>
            <thead>
              <tr><th>Stage</th><th>What It Addresses</th><th>Hatchback</th><th>Sedan</th><th>SUV</th></tr>
            </thead>
            <tbody>
              <tr><td>Single-Stage</td><td>Light swirls, minor water spots</td><td>₹3,499</td><td>₹4,499</td><td>₹5,499</td></tr>
              <tr><td>Two-Stage</td><td>Moderate swirls, water etching, light scratches</td><td>₹5,999</td><td>₹7,499</td><td>₹8,999</td></tr>
              <tr><td>Multi-Stage</td><td>Heavy correction, oxidation, paint restoration</td><td>₹8,999</td><td>₹11,499</td><td>₹14,999+</td></tr>
            </tbody>
          </table>
        </div>
        <p className="note">*Prices may vary based on current paint condition. All stages include decontamination wash and clay bar as standard.</p>

        <h2>The Glossy Street Paint Correction Process</h2>
        <ol>
          <li><strong>Paint depth gauge measurement</strong> on every panel — to confirm there's sufficient clear coat for safe polishing</li>
          <li><strong>High-intensity defect inspection</strong> under studio-grade lighting that reveals every scratch, swirl, and etch invisible in normal light</li>
          <li><strong>Decontamination wash and clay bar</strong> — the surface must be chemically clean before any polishing</li>
          <li><strong>Staged machine polishing</strong> — rotary polisher for aggressive cutting where needed, DA for finishing</li>
          <li><strong>Panel-by-panel quality check</strong> under inspection lights at every stage</li>
          <li><strong>IPA wipe-down</strong> — removes all polishing oils to reveal the true paint condition</li>
          <li><strong>Before & after documentation</strong> — we photograph every panel under the same lighting so you can see the transformation</li>
        </ol>

        <h2>After Paint Correction: Protect Your Investment</h2>
        <p>
          Paint correction restores your paint to its best-ever condition — but a freshly corrected surface is completely unprotected and will begin accumulating new damage within days. This is why we strongly recommend applying a <Link href="/services#protection" className="text-primary hover:underline">ceramic coating</Link> immediately following paint correction.
        </p>
        <p>
          The corrected surface is chemically clean and perfectly prepared for coating — the bond between ceramic and paint is strongest right after polishing. Most of our <Link href="/pricing" className="text-primary hover:underline">Signature packages</Link> include both multi-stage paint correction and ceramic coating for exactly this reason.
        </p>

        <h2>Does Your Car Need Paint Correction? Signs to Look For</h2>
        <ul>
          <li>Your car looks dull immediately after washing — the paint has no depth or gloss</li>
          <li>You can see swirl marks under direct sunlight or a torch held at an angle</li>
          <li>The paint surface feels rough to the touch (run your fingertips across the bonnet)</li>
          <li>Water no longer beads — it sheets flat across the surface</li>
          <li>There are visible water spot rings that don't come off with washing</li>
          <li>The paint looks hazy or "foggy" compared to how it looked when new</li>
        </ul>
        <p>
          If two or more of these describe your car, paint correction will produce a dramatic, visible transformation. The results under our inspection lighting — before and after — are consistently one of the most satisfying revelations for car owners who book with us.
        </p>
      </div>
    ),
  },
};

// ─── Shared post styles ────────────────────────────────────────────────────────
const proseStyles = `
  .prose-content { color: #b0b0b0; font-family: 'DM Sans', sans-serif; }
  .prose-content .lead { font-size: 1.1rem; line-height: 1.8; color: #d0d0d0; margin-bottom: 2rem; font-weight: 400; }
  .prose-content h2 { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(28px, 4vw, 40px); font-weight: 900; text-transform: uppercase; color: #F0F0F0; margin: 2.5rem 0 1rem; letter-spacing: 0.02em; line-height: 1; }
  .prose-content h3 { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(20px, 3vw, 28px); font-weight: 700; text-transform: uppercase; color: #CC1515; margin: 1.8rem 0 0.75rem; letter-spacing: 0.02em; }
  .prose-content p { line-height: 1.85; margin-bottom: 1.2rem; font-size: 0.95rem; }
  .prose-content strong { color: #F0F0F0; font-weight: 600; }
  .prose-content ul, .prose-content ol { margin: 1rem 0 1.5rem 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
  .prose-content ul li { list-style: none; padding-left: 1.2rem; position: relative; font-size: 0.9rem; line-height: 1.7; }
  .prose-content ul li::before { content: ''; position: absolute; left: 0; top: 0.6rem; width: 6px; height: 6px; background: #CC1515; transform: rotate(45deg); }
  .prose-content ol li { list-style: decimal; font-size: 0.9rem; line-height: 1.7; padding-left: 0.3rem; }
  .prose-content .price-table { overflow-x: auto; margin: 1.5rem 0; }
  .prose-content table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
  .prose-content th { background: #CC1515; color: #fff; padding: 0.75rem 1rem; text-align: left; font-family: 'Barlow Condensed', sans-serif; font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; }
  .prose-content td { padding: 0.65rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.06); color: #c0c0c0; }
  .prose-content tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
  .prose-content tr:last-child td { font-weight: 600; color: #F0F0F0; }
  .prose-content .note { font-size: 0.8rem; color: #666; font-style: italic; margin-top: -0.5rem; }
  .prose-content a { color: #CC1515; }
`;

// ─── Related posts ─────────────────────────────────────────────────────────────
const allPostsMeta = [
  { slug: "ceramic-coating-guide-india", title: "The Complete Guide to Ceramic Coating for Indian Cars (2024)", cat: "Ceramic Coating", img: "1764693756618-fc101047a387", read: "8 min" },
  { slug: "ppf-vs-ceramic-coating-india", title: "PPF vs Ceramic Coating: Which One Does Your Car Need in India?", cat: "PPF", img: "1760520830355-e6be53e41c2f", read: "7 min" },
  { slug: "paint-correction-india", title: "Paint Correction in India: What It Is, Cost & When You Need It", cat: "Paint Correction", img: "1780558852671-e47265577239", read: "9 min" },
];

// ─── BlogPost page ─────────────────────────────────────────────────────────────
export default function BlogPostPage({ slug }: { slug?: string }) {
  const post = slug ? posts[slug] : null;

  useSEO(
    post?.title ?? "Blog | Glossy Street Car Detailing Studio",
    post?.description ?? "Expert car detailing guides from Glossy Street.",
    post?.keywords ?? "car detailing India"
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-black uppercase text-primary mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Post Not Found</h1>
          <p className="text-muted-foreground mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>This article doesn't exist or may have moved.</p>
          <Link href="/blog">
            <motion.div whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-black tracking-widest uppercase text-xs cursor-pointer" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <ArrowLeft size={13} /> Back to Blog
            </motion.div>
          </Link>
        </div>
      </div>
    );
  }

  const PostContent = post.content;
  const related = allPostsMeta.filter(p => p.slug !== slug);

  return (
    <>
      <style>{proseStyles}</style>

      {/* Hero */}
      <section className="relative pt-36 pb-0 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative max-w-[860px] mx-auto px-6 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
              <ArrowLeft size={12} /> Back to Blog
            </Link>
            <span className="text-border">·</span>
            <span className="text-xs tracking-widest uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>{post.category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[clamp(30px,4.8vw,52px)] font-black uppercase leading-[0.92] mb-6 text-foreground"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {post.subtitle}
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground border-t border-b border-border py-4 mb-0" style={{ fontFamily: "'DM Mono', monospace" }}>
            <div className="flex items-center gap-1.5"><User size={11} />{post.author}</div>
            <div className="flex items-center gap-1.5"><Calendar size={11} />{post.date}</div>
            <div className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</div>
            <div className="flex items-center gap-1.5"><Tag size={11} />{post.category}</div>
          </motion.div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[21/9] overflow-hidden bg-muted">
          <img src={`https://images.unsplash.com/photo-${post.heroImg}?w=1400&h=600&fit=crop&auto=format`} alt={post.subtitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-background">
        <div className="max-w-[860px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <PostContent />
          </motion.div>

          {/* CTA */}
          <div className="mt-16 p-8 lg:p-10 bg-primary relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-white/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Glossy Street — Est. 2023</p>
                <h3 className="text-3xl lg:text-4xl font-black uppercase text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Ready to Transform<br />Your Car?
                </h3>
              </div>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2.5 px-7 py-4 bg-white text-primary font-black tracking-widest uppercase text-xs cursor-pointer shrink-0"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Book Now <ArrowUpRight size={13} />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>Read Next</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {related.map((p, i) => (
              <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/blog/${p.slug}`}>
                  <div className="group bg-card flex gap-5 p-6 cursor-pointer hover:bg-muted transition-colors h-full">
                    <div className="w-20 h-20 overflow-hidden bg-muted shrink-0">
                      <img src={`https://images.unsplash.com/photo-${p.img}?w=160&h=160&fit=crop`} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <span className="text-[9px] tracking-widest uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>{p.cat} · {p.read} read</span>
                      <h4 className="text-base font-black uppercase leading-tight group-hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{p.title}</h4>
                    </div>
                    <ArrowUpRight size={16} className="text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
