"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { SKILLS } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Skills() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByRef = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.9, 200);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollByRef(-1);
      if (e.key === "ArrowRight") scrollByRef(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <section id="skills" className="section-pad relative bg-bg-soft">
      <div className="absolute inset-0 -z-0 glow-radial opacity-60" />
      <div className="container-px relative">
        <div className="text-center">
          <SectionHeading
            align="center"
            eyebrow="My Skills"
            title="Tools & Expertise I Bring"
            description="A balanced toolkit across design and engineering — so ideas ship without losing their soul."
          />
        </div>

        <div className="relative">
          {/* Arrow controls (hidden on very small screens) */}
          <button
            aria-label="Previous skills"
            className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-bg-card/70 p-2 text-white/90 shadow-md hover:bg-white/5 sm:flex"
            onClick={() => scrollByRef(-1)}
            type="button"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            aria-label="Next skills"
            className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-bg-card/70 p-2 text-white/90 shadow-md hover:bg-white/5 sm:flex"
            onClick={() => scrollByRef(1)}
            type="button"
          >
            <ChevronRight size={20} />
          </button>

          <Reveal delay={0.2}>
            <div className="mt-16 pb-4">
              <div
                ref={scrollerRef}
                className="flex gap-6 snap-x snap-mandatory md:gap-8 no-scrollbar overflow-x-auto"
              >
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex min-w-[170px] max-w-[170px] snap-start flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(163,230,53,0.18)] sm:min-w-[190px] sm:max-w-[190px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 shadow-lg transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                    <div className="relative h-16 w-16">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2 }}
                    className="mb-2 text-center text-lg font-bold text-accent"
                  >
                    {skill.level}%
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3 }}
                    className="text-center text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white"
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
