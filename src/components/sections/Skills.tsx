"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { SKILLS, TOOLBOX } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-bg-soft">
      <div className="absolute inset-0 -z-0 glow-radial opacity-60" />
      <div className="container-px relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="My Skills"
            title="Tools & Expertise I Bring"
            description="A balanced toolkit across design and engineering — so ideas ship without losing their soul."
          />

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {TOOLBOX.map((tool) => (
                <div
                  key={tool}
                  className="rounded-xl border border-bg-line bg-bg-card/60 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {tool}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-7">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  {skill.name}
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.4 }}
                  className="text-sm font-semibold text-accent"
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-bg-line">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-glow to-accent shadow-[0_0_12px_-2px_theme(colors.accent.DEFAULT)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
