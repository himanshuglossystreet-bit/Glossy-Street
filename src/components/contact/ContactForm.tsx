"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle, MessageCircle, AlertCircle } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { sendContactEmail, type FormState } from "@/app/actions/mail";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

function Grain() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "180px",
      }}
    />
  );
}

const inputBase =
  "w-full bg-secondary border px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none transition-colors duration-200";
const ic = (hasError?: boolean) =>
  `${inputBase} ${hasError ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"}`;

const initialFormState: FormState = {
  success: false,
  message: "",
};

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  date: string;
  service: string;
  message: string;
};

function FieldMessage({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-destructive" style={{ fontFamily: "'DM Mono', monospace" }}>
      {message}
    </p>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <motion.div whileHover={pending ? {} : { scale: 1.02 }} whileTap={pending ? {} : { scale: 0.97 }} className="mt-2">
      <Button type="submit" disabled={pending} size="lg" className="group w-full">
        {pending ? (
          <>
            <Spinner /> Sending...
          </>
        ) : (
          <>
            Send Booking Request
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </>
        )}
      </Button>
    </motion.div>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialFormState);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicle: "",
      date: "",
      service: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.set(key, value || "");
    });

    const result = await sendContactEmail(null, formData);
    setState(result);

    if (result.success) {
      reset();
      setSent(true);
    }
  };

  const submitAnother = () => {
    setSent(false);
    setState(initialFormState);
  };
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/glossystreet_patelnagar/" },
    { label: "YouTube", href: "#" },
    { label: "Facebook", href: "#" },
  ];

  return (
    <>
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 bg-background overflow-hidden">
        <Grain />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-primary" style={{ fontFamily: "'DM Mono', monospace" }}>
              Get In Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(44px,8.5vw,104px)] font-black uppercase leading-[0.88]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            BOOK YOUR
            <br />
            <span className="text-primary">DETAIL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base mt-5 max-w-md leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fill out the booking form below, call us, or message Himanshu directly on WhatsApp. We respond within 1 hour during business hours.
          </motion.p>
        </div>
      </section>

      <section className="bg-background pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-8 lg:gap-10"
          >
            <div>
              <h2 className="text-3xl font-black uppercase mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                CONTACT INFO
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Phone, label: "Call / WhatsApp", value: "+91 98765 43210" },
                  { icon: MessageCircle, label: "WhatsApp Booking", value: "Message us on WhatsApp for fastest response" },
                  { icon: Mail, label: "Email", value: "hello@glossystreet.in" },
                  { icon: MapPin, label: "Studio Location", value: "India - exact address shared on booking confirmation" },
                  { icon: Clock, label: "Working Hours", value: "Mon-Sat: 9AM - 7PM / Sun: By appointment" },
                ].map((item) => (
                  <motion.div key={item.label} whileHover={{ x: 4 }} className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0">
                      <item.icon size={14} className="text-primary" />
                    </div>
                    <div>
                      <div
                        className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-0.5"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {item.label}
                      </div>
                      <div className="text-sm text-foreground/85" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/50 mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                Follow Us
              </div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -3 }}
                    className="px-3 py-2 border border-border text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl font-black uppercase mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              BOOKING REQUEST
            </h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-primary/30 bg-primary/10 p-8 sm:p-10 flex flex-col items-center gap-4 text-center"
              >
                <CheckCircle size={40} className="text-primary" />
                <h3 className="text-2xl font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Request Sent!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {state.message || "Himanshu will get back to you within 1 hour on WhatsApp or call. Check your messages!"}
                </p>
                <Button onClick={submitAnother} variant="outline" size="sm" className="mt-2 border-primary/30 text-primary hover:bg-primary/10">
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground block mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                      Full Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required." })}
                      // aria-invalid={!!errors.name}
                      className={ic(!!errors.name)}
                      placeholder="Rahul Sharma"
                      // style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                    <FieldMessage message={errors.name?.message} />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground block mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                      WhatsApp / Phone
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className={ic()}
                      placeholder="+91 98765 43210"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground block mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Email Address *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                    type="email"
                    // aria-invalid={!!errors.email}
                    className={ic(!!errors.email)}
                    placeholder="rahul@email.com"
                    // style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                  <FieldMessage message={errors.email?.message} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground block mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                      Your Vehicle
                    </label>
                    <input
                      {...register("vehicle")}
                      className={ic()}
                      placeholder="e.g. Hyundai Creta 2023"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground block mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                      Preferred Date
                    </label>
                    <input
                      {...register("date")}
                      type="date"
                      className={ic()}
                      style={{ fontFamily: "'DM Sans', sans-serif", colorScheme: "dark" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground block mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Service Required
                  </label>
                  <select
                    {...register("service")}
                    className={`${ic()} cursor-pointer appearance-none`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="">Select a service...</option>
                    <optgroup label="-- Coatings & Protection --">
                      <option>PPF - Partial Package (from Rs. 15,000)</option>
                      <option>PPF - Full Body (Custom Quote)</option>
                      <option>Vinyl Wrap / Colour Change</option>
                      <option>9H Ceramic Coating (from Rs. 7,999)</option>
                      <option>Graphene Coating (from Rs. 18,000)</option>
                      <option>Marine Graphene Coating (from Rs. 22,000)</option>
                      <option>Glass / Windshield Coating (from Rs. 1,499)</option>
                      <option>Rain Repellent Treatment (from Rs. 999)</option>
                      <option>Teflon Coating (from Rs. 2,500)</option>
                      <option>Alloy Wheel Coating (from Rs. 1,499)</option>
                      <option>Headlight Coating (from Rs. 799)</option>
                      <option>Leather Coating (from Rs. 1,499)</option>
                    </optgroup>
                    <optgroup label="-- Detailing & Restoration --">
                      <option>Paint Correction - RUPES (from Rs. 3,499)</option>
                      <option>Chrome Parts Restoration (from Rs. 599)</option>
                      <option>Deep Clean - Dry, No Fittings (from Rs. 1,499)</option>
                      <option>Deep Clean - Wet, With Fittings (from Rs. 2,999)</option>
                      <option>Regular Wash (from Rs. 399)</option>
                      <option>Full Detailing Package (from Rs. 5,999)</option>
                      <option>Full Car Restoration (Custom Quote)</option>
                    </optgroup>
                    <optgroup label="-- Interior & Accessories --">
                      <option>Window Tinting (from Rs. 3,999)</option>
                      <option>Ambient Lighting (from Rs. 3,999)</option>
                      <option>Speaker / Audio Upgrade</option>
                      <option>Lights & Tails Upgrade</option>
                      <option>Odour Treatment (from Rs. 1,499)</option>
                      <option>Anti-Rat Treatment (from Rs. 799)</option>
                      <option>Dashcam / Reverse Camera</option>
                      <option>Seat Covers & Interior Custom</option>
                      <option>Modification / Body Kit</option>
                    </optgroup>
                    <optgroup label="-- Car Care & Repairs --">
                      <option>Denting & Painting (from Rs. 3,500/panel)</option>
                      <option>Bumper Repair - Plastic Welding (from Rs. 2,999)</option>
                      <option>Radiator Flush (from Rs. 1,499)</option>
                      <option>Coolant Top-Up / Replacement</option>
                      <option>Radiator & Condenser Foam Clean (from Rs. 999)</option>
                      <option>Hydrodip (Custom Quote)</option>
                    </optgroup>
                    <option>Not Sure - Need Advice from Himanshu</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground block mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Additional Notes *
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required." })}
                    rows={4}
                    // aria-invalid={!!errors.message}
                    className={`${ic(!!errors.message)} resize-none`}
                    placeholder="Describe your car's current condition, any specific scratches or damage, or questions you have..."
                    // style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                  <FieldMessage message={errors.message?.message} />
                </div>

                {!state.success && state.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-destructive text-xs border border-destructive/30 bg-destructive/10 px-4 py-3"
                  >
                    <AlertCircle size={14} />
                    {state.message}
                  </motion.div>
                )}

                <SubmitButton pending={isSubmitting} />

                <p className="text-[11px] text-muted-foreground/50 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Response within 1 hour / WhatsApp preferred / GST invoice provided
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
