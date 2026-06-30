"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import {
  EXPERIENCE,
  EDUCATION,
  PUBLICATION,
  COMMUNITY,
  type TimelineItem,
} from "@/lib/data";

function Timeline({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: LucideIcon;
  items: TimelineItem[];
}) {
  return (
    <div>
      <div className="mb-10 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-bg-line bg-bg-card text-accent">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="relative space-y-8 border-l border-bg-line pl-8">
        {items.map((item, i) => (
          <motion.div
            key={`${item.org}-${item.period}`}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
          >
            <span className="absolute -left-[2.6rem] top-1.5 grid h-5 w-5 place-items-center rounded-full border border-bg-line bg-bg">
              <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
            </span>

            <span className="inline-block rounded-full border border-bg-line bg-bg-card px-3 py-1 text-xs font-medium text-accent">
              {item.period}
            </span>
            <h4 className="mt-3 font-display text-lg font-semibold text-white">
              {item.title}
            </h4>
            <p className="text-sm font-medium text-white/70">{item.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="Resume"
          title="Experience & Education"
          description="8+ years building, shipping and teaching full-stack web development across the MERN stack and WordPress."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Timeline title="Experience" icon={Briefcase} items={EXPERIENCE} />
          <Timeline title="Education" icon={GraduationCap} items={EDUCATION} />
        </div>

        {/* Publication & Community */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal direction="up">
            <div className="card-surface h-full p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-bg-line bg-bg text-accent">
                  <BookOpen className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  Publication
                </h3>
              </div>
              <p className="mt-5 text-sm font-medium leading-relaxed text-white/85">
                {PUBLICATION.title}
              </p>
              <p className="mt-3 text-sm text-accent">{PUBLICATION.journal}</p>
              <p className="mt-1 text-xs text-muted">{PUBLICATION.details}</p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="card-surface h-full p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-bg-line bg-bg text-accent">
                  <Users className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  Community Leadership
                </h3>
              </div>
              <p className="mt-5 font-medium text-white/90">
                {COMMUNITY.role} ·{" "}
                <span className="text-accent">{COMMUNITY.org}</span>
              </p>
              <p className="mt-1 text-xs text-muted">{COMMUNITY.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {COMMUNITY.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
