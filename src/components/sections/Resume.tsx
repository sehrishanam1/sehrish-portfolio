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
        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-[0_0_30px_rgba(163,230,53,0.16)]">
          <Icon className="h-5 w-5 text-accent" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-transparent bg-gradient-to-r from-accent via-accent-soft to-white bg-clip-text">
          {title}
        </h3>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={`${item.org}-${item.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-3xl border border-accent/20 bg-bg-card/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-card shadow-[0_20px_50px_rgba(163,230,53,0.08)]"
          >
            <span className="absolute left-0 top-0 h-1.5 w-16 bg-accent" />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                {item.period}
              </span>
            </div>
            <h4 className="mt-5 font-display text-2xl font-semibold text-white">
              {item.title}
            </h4>
            <p className="mt-2 text-sm font-medium text-white/80">{item.org}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
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
          <div className="space-y-6">
            <Timeline title="Education" icon={GraduationCap} items={EDUCATION} />
            <Reveal direction="up">
              <div className="overflow-hidden rounded-3xl border border-accent/20 bg-bg-card/90 p-6 shadow-[0_20px_50px_rgba(163,230,53,0.08)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-[0_0_30px_rgba(163,230,53,0.16)]">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Publication
                    </h3>
                    <p className="text-sm text-muted">Recognized work and publications</p>
                  </div>
                </div>
                <p className="mt-6 text-sm font-medium leading-relaxed text-white/85">
                  {PUBLICATION.title}
                </p>
                <p className="mt-3 text-sm text-accent">{PUBLICATION.journal}</p>
                <p className="mt-1 text-xs text-muted">{PUBLICATION.details}</p>
              </div>
            </Reveal>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-[0_0_30px_rgba(163,230,53,0.16)]">
                  <Users className="h-5 w-5 text-accent" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-transparent bg-gradient-to-r from-accent via-accent-soft to-white bg-clip-text">
                  Volunteer Experience
                </h3>
              </div>
              <Reveal direction="up" delay={0.1}>
                <div className="overflow-hidden rounded-3xl border border-accent/20 bg-bg-card/90 p-6 shadow-[0_20px_50px_rgba(163,230,53,0.08)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-[0_0_30px_rgba(163,230,53,0.16)]">
                      <Users className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-semibold text-white">
                        {COMMUNITY.role}
                      </h4>
                      <p className="text-sm text-accent">{COMMUNITY.org}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                    {COMMUNITY.period}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {COMMUNITY.note}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Remove the separate community section that was at the bottom */}
      </div>
    </section>
  );
}
