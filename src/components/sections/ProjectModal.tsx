"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/* Thumbnail gallery grid — reused for the side column and the inline layout */
function GalleryGrid({
  project,
  columnsClass,
  onOpen,
}: {
  project: Project;
  columnsClass: string;
  onOpen: (i: number) => void;
}) {
  return (
    <div className={`mt-5 grid gap-3 ${columnsClass}`}>
      {project.gallery.map((src, i) => (
        <button
          key={src}
          onClick={() => onOpen(i)}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-bg-line"
          aria-label={`Open image ${i + 1}`}
        >
          <Image
            src={src}
            alt={`${project.title} screenshot ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-bg/0 transition-colors duration-300 group-hover:bg-bg/30" />
          <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-black">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}

/* Popup body: full-width banner + (70/30 side gallery) OR (inline gallery) */
function ModalContent({
  project,
  onOpenImage,
}: {
  project: Project;
  onOpenImage: (i: number) => void;
}) {
  const showBanner = project.showBanner !== false; // default: show
  const inlineGallery = project.galleryPosition === "inline";
  const isFullBanner = project.bannerFit === "contain";
  const bannerFitClass = isFullBanner ? "object-contain" : "object-cover";
  const bannerHeightClass = isFullBanner
    ? "h-[45vh] sm:h-[50vh] md:h-[55vh]"
    : "h-52 sm:h-64 md:h-72";
  const hasGallery = project.gallery.length > 0;

  const header = (
    <div className="flex items-start gap-4">
      {project.icon && (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-bg-line bg-bg-card shadow-lg">
          <Image
            src={project.icon}
            alt={`${project.title} icon`}
            fill
            sizes="56px"
            className="object-contain p-2"
          />
        </div>
      )}
      <div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {project.tagline ?? project.tags.join(" · ")} · {project.year}
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
          {project.title}
        </h2>
        <p className="mt-1 text-sm text-muted">{project.category}</p>
      </div>
    </div>
  );

  const description = (
    <div className="mt-5 space-y-4">
      {project.description.map((para, i) => (
        <p key={i} className="text-sm leading-relaxed text-white/75">
          {para}
        </p>
      ))}
    </div>
  );

  const skills = (
    <div className="mt-7">
      <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white">
        <Sparkles className="h-4 w-4 text-accent" />
        Skills &amp; Tech
      </h3>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {project.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
            className="rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent transition-colors hover:border-accent hover:bg-accent/20"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );

  // Optional: highlight stat strip (Version / Size / Rating / Status …)
  const statStrip = project.stats && project.stats.length > 0 && (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {project.stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-bg-line bg-bg-card/50 px-3 py-3 text-center"
        >
          <div className="font-display text-lg font-bold text-accent">
            {s.value}
          </div>
          <div className="mt-0.5 text-[11px] uppercase tracking-wide text-muted">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );

  // Optional: highlighted "why this shows real skill" callout
  const worthBlock = project.worth && (
    <div className="mt-7 rounded-2xl border border-accent/20 bg-accent/5 p-5">
      <h3 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
        <Award className="h-4 w-4 text-accent" />
        Why this shows real skill
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-white/75">
        {project.worth}
      </p>
    </div>
  );

  // Optional: "what this demonstrates" checklist (lead-in before "—" is bolded)
  const demonstratesBlock = project.demonstrates &&
    project.demonstrates.length > 0 && (
      <div className="mt-7">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
          What this project demonstrates
        </h3>
        <ul className="mt-4 space-y-3">
          {project.demonstrates.map((item, i) => {
            const dash = item.indexOf("—");
            const lead = dash > -1 ? item.slice(0, dash).trim() : "";
            const detail = dash > -1 ? item.slice(dash + 1).trim() : item;
            return (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-white/75">
                  {lead && (
                    <span className="font-semibold text-white">{lead} — </span>
                  )}
                  {detail}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );

  const links = project.links && project.links.length > 0 && (
    <div className="mt-8 flex flex-wrap gap-3">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {link.label}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ))}
    </div>
  );

  const galleryHeading = (
    <>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
        Gallery
      </h3>
      <p className="mt-1 text-xs text-muted">
        Click any image to view it full-screen.
      </p>
    </>
  );

  return (
    <div className="max-h-[90vh] overflow-y-auto" data-lenis-prevent>
      {/* Full-width banner across the top of the popup */}
      {showBanner && (
        <div className={`relative w-full overflow-hidden ${bannerHeightClass}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className={bannerFitClass}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-soft via-bg-soft/20 to-transparent" />
        </div>
      )}

      {inlineGallery || !hasGallery ? (
        /* INLINE — single column, gallery flows inside the content */
        <div className="p-7 sm:p-9">
          {header}
          {statStrip}
          {description}
          {worthBlock}
          {demonstratesBlock}
          {skills}
          {hasGallery && (
            <div className="mt-8">
              {galleryHeading}
              <GalleryGrid
                project={project}
                columnsClass="grid-cols-2 sm:grid-cols-3"
                onOpen={onOpenImage}
              />
            </div>
          )}
          {links}
        </div>
      ) : (
        /* SIDE — 70 / 30 split: content left, gallery right */
        <div className="grid lg:grid-cols-[7fr_3fr]">
          <div className="p-7 sm:p-9">
            {header}
            {statStrip}
            {description}
            {worthBlock}
            {demonstratesBlock}
            {skills}
            {links}
          </div>
          <aside className="border-t border-bg-line bg-bg-card/40 p-7 sm:p-9 lg:sticky lg:top-0 lg:self-start lg:max-h-[90vh] lg:overflow-y-auto lg:border-l lg:border-t-0">
            {galleryHeading}
            <GalleryGrid
              project={project}
              columnsClass="grid-cols-2"
              onOpen={onOpenImage}
            />
          </aside>
        </div>
      )}
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // index of the image open in the lightbox, or null when closed
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(false);
  const lenis = useLenis();

  const gallery = project?.gallery ?? [];

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setLightboxZoom(false);
  }, []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % gallery.length)),
    [gallery.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + gallery.length) % gallery.length
      ),
    [gallery.length]
  );

  // Lock page scroll while the modal is open — also pause Lenis smooth-scroll,
  // otherwise the wheel keeps driving the page behind the popup.
  useEffect(() => {
    if (!project) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      document.body.style.overflow = original;
      lenis?.start();
    };
  }, [project, lenis]);

  // Keyboard: ESC closes lightbox first, then the modal; arrows navigate gallery
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) closeLightbox();
        else onClose();
      } else if (lightbox !== null && e.key === "ArrowRight") next();
      else if (lightbox !== null && e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, lightbox, onClose, closeLightbox, next, prev]);

  // Reset lightbox whenever a different project is opened/closed
  useEffect(() => {
    setLightbox(null);
    setLightboxZoom(false);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          data-lenis-prevent
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:items-center sm:p-6"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-4 w-full max-w-5xl overflow-hidden rounded-3xl border border-bg-line bg-bg-soft shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-bg-line bg-bg/80 text-white backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-5 w-5" />
            </button>

            <ModalContent project={project} onOpenImage={setLightbox} />
          </motion.div>

          {/* LIGHTBOX */}
          <AnimatePresence>
            {lightbox !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  aria-label="Close image"
                  className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:border-accent hover:text-accent"
                >
                  <X className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxZoom((value) => !value);
                  }}
                  aria-label={lightboxZoom ? "Zoom out" : "Zoom in"}
                  className="absolute right-5 top-20 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:border-accent hover:text-accent"
                >
                  {lightboxZoom ? (
                    <ZoomOut className="h-5 w-5" />
                  ) : (
                    <ZoomIn className="h-5 w-5" />
                  )}
                </button>

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      aria-label="Previous image"
                      className="absolute left-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:border-accent hover:text-accent sm:left-8"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      aria-label="Next image"
                      className="absolute right-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:border-accent hover:text-accent sm:right-8"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                <motion.div
                  key={lightbox}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxZoom((v) => !v);
                  }}
                  className={`relative h-[80vh] w-full max-w-4xl overflow-hidden ${
                    lightboxZoom ? "cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                >
                  <Image
                    src={gallery[lightbox]}
                    alt={`${project.title} full image ${lightbox + 1}`}
                    fill
                    sizes="100vw"
                    className={`object-contain transition-transform duration-300 ${
                      lightboxZoom ? "scale-[1.4]" : "scale-100"
                    }`}
                  />
                </motion.div>

                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-xs font-medium text-white/80">
                  {lightbox + 1} / {gallery.length}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
