"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const move = (step: number) => {
    setDirection(step);
    setIndex((current) => (current + step + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const visibleTestimonials = [0, 1].map(
    (offset) => TESTIMONIALS[(index + offset) % TESTIMONIALS.length],
  );
  const featured = TESTIMONIALS[(index + 2) % TESTIMONIALS.length];

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden border-y border-white/[0.04] bg-bg-soft"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(163,230,53,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.05),transparent_30%)]" />

      <div className="container-px relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14">
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex rounded-md border border-accent/20 bg-accent/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Validated outcomes
          </span>

          <h2 className="heading-xl mt-7 max-w-md text-4xl uppercase sm:text-5xl">
            Voices from the
            <span className="block text-white/25">frontier.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
            I don&apos;t just collect reviews. I build long-term partnerships backed by
            reliable delivery, measurable improvements, and work that performs.
          </p>

          <div className="mt-10 flex gap-10 border-t border-white/[0.06] pt-7">
            <div>
              <p className="font-display text-3xl font-bold text-white">8+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Years of impact
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-accent">40+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Successful launches
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Client feedback
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous testimonials"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-accent/50 hover:text-accent"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next testimonials"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-accent/50 hover:text-accent"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 55 : -55 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -55 : 55 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 md:grid-cols-2"
              >
                {visibleTestimonials.map((testimonial, cardIndex) => (
                  <article
                    key={`${testimonial.name}-${cardIndex}`}
                    className="flex min-h-[300px] flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:p-8"
                  >
                    <span className="text-2xl font-black leading-none tracking-[0.14em] text-accent">
                      •••
                    </span>
                    <blockquote className="mt-4 flex-1 font-display text-lg italic leading-8 text-white/85">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="mt-7 flex items-center gap-4 border-t border-white/[0.06] pt-6">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-gradient-to-br from-white/20 to-white/5 text-xs font-bold text-white">
                        {getInitials(testimonial.name)}
                      </span>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wide text-white">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={`featured-${index}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="mt-5 grid items-center gap-6 rounded-[1.75rem] border border-white/10 bg-black/20 p-7 sm:grid-cols-[72px_1fr] sm:p-9"
            >
              <span className="grid h-[72px] w-[72px] place-items-center rounded-full border border-white/15 bg-gradient-to-br from-accent/25 to-white/5 font-display text-lg font-bold text-white">
                {getInitials(featured.name)}
              </span>
              <div>
                <blockquote className="font-display text-lg leading-8 text-white/85 sm:text-xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                  <span className="h-px w-8 bg-accent" />
                  {featured.name}, {featured.title}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-6 flex justify-end gap-2">
            {TESTIMONIALS.map((testimonial, dotIndex) => (
              <button
                key={`${testimonial.name}-${dotIndex}`}
                type="button"
                onClick={() => {
                  setDirection(dotIndex > index ? 1 : -1);
                  setIndex(dotIndex);
                }}
                aria-label={`Show testimonial group ${dotIndex + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  dotIndex === index ? "w-8 bg-accent" : "w-3 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
