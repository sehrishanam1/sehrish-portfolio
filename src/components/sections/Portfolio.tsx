"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { PORTFOLIO_FILTERS, PROJECTS, type Project } from "@/lib/data";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_INCREMENT = 3;

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [filter]);

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const showHideButton = visibleCount > INITIAL_VISIBLE_COUNT;

  return (
    <section id="portfolio" className="section-pad relative bg-bg-soft">
      <div className="container-px">
        <SectionHeading
          eyebrow="MY WORK"
          title="Projects I've Built & Led"
          description="From code to client communication — a look at the products, platforms, and brands I've delivered as both developer and project lead."
        />

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus:outline-none ${
                filter === f
                  ? "text-black"
                  : "text-white/70 hover:text-accent"
              }`}
            >
              {filter === f ? (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 z-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : (
                <span className="absolute inset-0 z-0 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-bg-line bg-bg-card"
                >
                  <button
                    onClick={() => setSelected(project)}
                    aria-label={`View details for ${project.title}`}
                    className="absolute inset-0 z-20"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.icon ? (
                      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-bg-card to-bg-soft pb-14">
                        <Image
                          src={project.icon}
                          alt={project.title}
                          width={200}
                          height={200}
                          sizes="180px"
                          className="h-24 w-24 object-contain drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                    <div className="absolute right-4 top-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-accent text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.tagline ?? project.tags.join(" · ")}
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {project.category}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {(hasMore || showHideButton) && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hasMore && (
              <button
                onClick={() =>
                  setVisibleCount((count) =>
                    Math.min(count + LOAD_MORE_INCREMENT, filtered.length)
                  )
                }
                className="btn-primary"
              >
                Load more
                <ArrowUpRight className="h-4 w-4" />
              </button>
            )}
            {showHideButton && (
              <button
                onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
                className="rounded-full border border-bg-line px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-accent hover:text-white"
              >
                Hide
              </button>
            )}
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
