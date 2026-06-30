"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerItem } from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="What I Do"
          title="My Quality Services"
          description="End-to-end product work — from the first sketch to the final pixel-perfect, performant release."
        />

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.number}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-bg-line bg-bg-card/60 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-accent/10 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-bg-line bg-bg text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-bold text-white/5 transition-colors duration-500 group-hover:text-accent/20">
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mt-7 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
