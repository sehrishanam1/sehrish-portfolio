"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Blocks,
  CheckCircle2,
  Code2,
  Globe2,
  Loader2,
  LockKeyhole,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell me a little more about your project"),
  timeline: z.string().min(1, "Select your preferred timeline"),
});

type FormValues = z.infer<typeof schema>;

const projectTypes = [
  { label: "Website", icon: Globe2 },
  { label: "Web App", icon: Code2 },
  { label: "WordPress", icon: Blocks },
  { label: "AI Integration", icon: Sparkles },
  { label: "Other", icon: Star },
];

const benefits = [
  { title: "Quick Response", text: "I reply within 24 hours", icon: Zap },
  { title: "Confidential", text: "Your data is safe", icon: ShieldCheck },
  { title: "Client Focused", text: "Solutions that scale", icon: Star },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [artworkFailed, setArtworkFailed] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");

    const response = await fetch("https://formsubmit.co/ajax/meerabazhan@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        _subject: `New portfolio lead: ${data.projectType}`,
        _template: "table",
      }),
    });

    if (!response.ok) {
      setSubmitError("Your message could not be sent. Please try again or email me directly.");
      return;
    }

    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-fuchsia-500/70 focus:ring-2 focus:ring-fuchsia-500/10";

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-[#080811]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_80%_35%,rgba(168,85,247,0.11),transparent_32%)]" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal direction="right">
          <div className="flex min-h-[680px] flex-col justify-center lg:min-h-[760px]">
            <div className="relative -ml-[10%] aspect-[16/11] w-[120%] sm:-ml-[15%] sm:w-[130%] lg:-mt-10">
              {artworkFailed ? (
                <div className="absolute inset-[12%] rounded-[3rem] bg-[radial-gradient(circle_at_58%_48%,rgba(217,70,239,0.5),transparent_28%),radial-gradient(circle_at_38%_42%,rgba(37,99,235,0.45),transparent_38%)] blur-2xl" />
              ) : (
                <Image
                  src="/images/contact-cubes.jpg"
                  alt="Abstract illuminated glass cubes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-contain object-center"
                  onError={() => setArtworkFailed(true)}
                />
              )}
            </div>

            <div className="relative z-10 -mt-8 w-full px-1 sm:-mt-12">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-400">
                <span className="h-px w-7 bg-fuchsia-500" />
                Let&apos;s connect
              </p>
              <h2 className="heading-xl mt-5 text-4xl sm:text-5xl">
                Let&apos;s Make It <span className="text-fuchsia-500">Happen!</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                Have a project idea or need help with your next big thing? I&apos;d love to
                hear about it. Fill out the form and I&apos;ll get back to you soon.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {benefits.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-fuchsia-500/15 text-fuchsia-400">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs text-white/55">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-[2rem] border border-fuchsia-400/40 bg-[#0e0e1b]/80 p-6 shadow-[0_30px_100px_rgba(88,28,135,0.18)] backdrop-blur-xl sm:p-8"
          >
            <h3 className="font-display text-3xl font-bold text-white">Send Me a Message</h3>
            <span className="mt-5 block h-0.5 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500" />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-white">
                Your Name
                <input {...register("name")} placeholder="e.g. Jane Doe" className={`${fieldClass} mt-2`} />
                {errors.name && <span className="mt-1.5 block text-xs text-red-400">{errors.name.message}</span>}
              </label>
              <label className="text-sm font-medium text-white">
                Your Email
                <input {...register("email")} type="email" placeholder="e.g. jane@email.com" className={`${fieldClass} mt-2`} />
                {errors.email && <span className="mt-1.5 block text-xs text-red-400">{errors.email.message}</span>}
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-white">Project Type</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {projectTypes.map(({ label, icon: Icon }) => (
                  <label key={label} className="cursor-pointer">
                    <input {...register("projectType")} type="radio" value={label} className="peer sr-only" />
                    <span className="flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-2 text-center text-xs text-white/80 transition hover:border-fuchsia-400/50 peer-checked:border-fuchsia-400 peer-checked:bg-fuchsia-500/10 peer-checked:text-white">
                      <Icon size={16} className="shrink-0 text-fuchsia-400" />
                      {label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.projectType && <span className="mt-1.5 block text-xs text-red-400">{errors.projectType.message}</span>}
            </fieldset>

            <label className="mt-6 block text-sm font-medium text-white">
              Project Budget <span className="text-white/40">(Optional)</span>
              <select {...register("budget")} defaultValue="" className={`${fieldClass} mt-2 text-white/70`}>
                <option value="" className="bg-[#11111d]">Select budget range</option>
                <option value="Under $500" className="bg-[#11111d]">Under $500</option>
                <option value="$500–$1,500" className="bg-[#11111d]">$500–$1,500</option>
                <option value="$1,500–$5,000" className="bg-[#11111d]">$1,500–$5,000</option>
                <option value="$5,000+" className="bg-[#11111d]">$5,000+</option>
              </select>
            </label>

            <label className="mt-6 block text-sm font-medium text-white">
              Tell me about your project
              <textarea {...register("message")} rows={4} placeholder="Share your ideas, goals, requirements, or any details that can help me understand your project better..." className={`${fieldClass} mt-2 resize-y`} />
              {errors.message && <span className="mt-1.5 block text-xs text-red-400">{errors.message.message}</span>}
            </label>

            <label className="mt-6 block text-sm font-medium text-white">
              When are you looking to start?
              <select {...register("timeline")} defaultValue="" className={`${fieldClass} mt-2 text-white/70`}>
                <option value="" className="bg-[#11111d]">Select timeline</option>
                <option value="Immediately" className="bg-[#11111d]">Immediately</option>
                <option value="Within 2 weeks" className="bg-[#11111d]">Within 2 weeks</option>
                <option value="Within a month" className="bg-[#11111d]">Within a month</option>
                <option value="Flexible" className="bg-[#11111d]">Flexible</option>
              </select>
              {errors.timeline && <span className="mt-1.5 block text-xs text-red-400">{errors.timeline.message}</span>}
            </label>

            {submitError && <p role="alert" className="mt-5 rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">{submitError}</p>}

            <motion.button
              type="submit"
              disabled={isSubmitting || sent}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-black shadow-[0_12px_35px_rgba(163,230,53,0.2)] transition hover:bg-accent-soft hover:shadow-[0_14px_40px_rgba(163,230,53,0.3)] disabled:opacity-70"
            >
              {isSubmitting ? <><Loader2 size={17} className="animate-spin" /> Sending</> : sent ? <><CheckCircle2 size={17} /> Message sent</> : <><Send size={17} /> Send Message</>}
            </motion.button>

            <p className="mt-5 flex items-center justify-center gap-2 text-xs text-white/50">
              <LockKeyhole size={14} /> Your information is secure and will never be shared.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
