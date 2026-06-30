"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { TypingText } from "@/components/ui/TypingText";
import { SITE, STATS, SOCIALS } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBlobs = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 grid-glow" />
      <div className="absolute inset-0 -z-10 glow-radial" />

      {/* Large outlined "HI" watermark with subtle zoom in/out */}
      <motion.div
        aria-hidden
        style={{ y: yBlobs }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute inset-0 -z-10 flex select-none items-center justify-center"
      >
        <span
          className="font-display font-bold leading-none"
          style={{
            fontSize: "clamp(11rem, 30vw, 26rem)",
            color: "transparent",
            WebkitTextStroke: "2px rgba(163, 230, 53, 0.13)",
          }}
        >
          HI
        </span>
      </motion.div>

      <motion.div
        style={{ y: yBlobs }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-[140px]" />
      </motion.div>

      <div className="container-px grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="eyebrow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance work
          </motion.span>

          <motion.h1
            variants={item}
            className="heading-xl mt-6 text-5xl sm:text-6xl md:text-7xl"
          >
            Hi, I&apos;m {SITE.name.split(" ")[0]}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 font-display text-2xl font-semibold text-white/90 sm:text-3xl md:text-4xl"
          >
            <span className="text-muted">I&apos;m a </span>
            <TypingText
              className="text-gradient"
              phrases={[
                "Product Designer",
                "Frontend Developer",
                "UX/UI Specialist",
                "Creative Thinker",
              ]}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {SITE.bio}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="/cv.pdf" download className="btn-primary">
              Download CV
              <Download className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost"
            >
              View Works
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-4"
          >
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-bg-line text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-bg-line pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-white md:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs leading-tight text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={{ y: yImage, opacity }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="group relative mx-auto hidden w-full max-w-md lg:block"
        >
          {/* Soft accent glow behind the card — intensifies on hover */}
          <div className="absolute inset-0 -z-10 animate-float rounded-[2.5rem] bg-accent/20 blur-3xl transition-all duration-500 group-hover:bg-accent/45" />
          <div className="relative -rotate-3 overflow-hidden rounded-[2.5rem] border-2 border-bg-line bg-bg-card transition-all duration-500 ease-out group-hover:rotate-0 group-hover:border-accent group-hover:shadow-[0_0_45px_-4px_rgba(163,230,53,0.7)]">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80"
              alt={SITE.name}
              width={900}
              height={1100}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="card-surface absolute -bottom-6 -left-6 flex items-center gap-3 px-5 py-4"
          >
            <div className="font-display text-2xl font-bold text-accent">
              <Counter value={98} suffix="%" />
            </div>
            <p className="text-xs leading-tight text-muted">
              Client
              <br />
              Satisfaction
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
