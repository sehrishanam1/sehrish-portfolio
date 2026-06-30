"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerItem } from "@/components/motion/Reveal";
import { POSTS } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="section-pad relative bg-bg-soft">
      <div className="container-px">
        <SectionHeading
          eyebrow="Blog"
          title="Recent Articles"
          description="Notes on design, code and the craft of building delightful digital products."
        />

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={staggerItem}
              className="group overflow-hidden rounded-2xl border border-bg-line bg-bg-card transition-all duration-500 hover:-translate-y-2 hover:border-accent/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                  {post.title}
                </h3>

                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors group-hover:text-accent">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
