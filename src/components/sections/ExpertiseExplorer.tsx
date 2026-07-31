"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Braces,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Database,
  Gauge,
  GraduationCap,
  Layers3,
  MousePointer2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface SkillCategory {
  title: string;
  shortTitle: string;
  eyebrow: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-Stack Development",
    shortTitle: "Full-Stack",
    eyebrow: "End-to-end engineering",
    icon: Braces,
    color: "#a855f7",
    skills: [
      "MERN Stack (MongoDB, Express.js, React, Node.js)",
      "Next.js (App Router, headless architecture, on-demand revalidation/ISR)",
      "PHP (OOP, Composer, MVC frameworks)",
      "WordPress Development (Custom Themes, Plugins, Headless CMS via REST API)",
      "RESTful API Design & Integration",
      "Redux & State Management",
      "TypeScript",
    ],
  },
  {
    title: "Front-End Technologies",
    shortTitle: "Front-End",
    eyebrow: "Responsive digital experiences",
    icon: Code2,
    color: "#3b82f6",
    skills: [
      "React.js (Hooks, Context API, Redux)",
      "HTML5, CSS3, JavaScript (ES6+), jQuery",
      "Tailwind CSS, Bootstrap",
      "Responsive & Mobile-First Design",
      "Cross-Browser Compatibility",
      "UI/UX Implementation",
    ],
  },
  {
    title: "Back-End & Database",
    shortTitle: "Back-End",
    eyebrow: "Secure, scalable foundations",
    icon: Database,
    color: "#06b6d4",
    skills: [
      "Node.js & Express.js",
      "MongoDB, MySQL (Design & Optimization)",
      "Authentication & Authorization (JWT, OAuth, 2FA systems)",
      "API Performance Optimization",
      "PHP Web Scrapers & Data Automation",
    ],
  },
  {
    title: "WordPress Ecosystem",
    shortTitle: "WordPress",
    eyebrow: "Production WordPress expertise",
    icon: Layers3,
    color: "#f97316",
    skills: [
      "Custom Plugin Development (Gutenberg Blocks, Elementor Widgets)",
      "Headless WordPress + Next.js Integration",
      "WordPress.org Plugin Publishing (3 published plugins)",
      "Elementor & WPBakery Development",
      "Plugin Security & Vulnerability Management",
    ],
  },
  {
    title: "AI & API Integrations",
    shortTitle: "AI & APIs",
    eyebrow: "Connected, intelligent products",
    icon: Bot,
    color: "#ec4899",
    skills: [
      "AI API Integration (Claude, Gemini, Groq — fallback chains)",
      "AI-Powered Content Generation Tools",
      "Third-Party API Integration (Travelpayouts, Kiwi.com Tequila, YouTube Data API v3, WHOIS/Registrar APIs)",
      "Payment Gateway Integrations",
    ],
  },
  {
    title: "Optimization & SEO",
    shortTitle: "Optimization",
    eyebrow: "Fast, discoverable, resilient",
    icon: Gauge,
    color: "#84cc16",
    skills: [
      "Website Speed Optimization (Lighthouse, Core Web Vitals)",
      "Technical & On-Page SEO (Rank Math, Google Search Console)",
      "Site Architecture & Migration (DNS, subdomain/root domain splits)",
      "Malware Remediation & Site Hardening",
    ],
  },
  {
    title: "Project Management & Collaboration",
    shortTitle: "Leadership",
    eyebrow: "From requirements to release",
    icon: BriefcaseBusiness,
    color: "#f59e0b",
    skills: [
      "Agile/Scrum Workflows",
      "Git & GitHub",
      "ClickUp, Slack, Teams, Trello, Jira",
      "Cross-Functional Team Leadership",
      "Client Communication & Requirements Gathering",
      "End-to-End Project Delivery (Freelance & Team-Based)",
    ],
  },
  {
    title: "Tools & Platforms",
    shortTitle: "Tools",
    eyebrow: "A practical delivery toolkit",
    icon: Wrench,
    color: "#14b8a6",
    skills: [
      "VS Code, Postman, Figma, Chrome DevTools",
      "Web Hosting & Deployment (cPanel, VPS, Vercel, Hostinger)",
      "CI/CD & Version Control Workflows",
    ],
  },
  {
    title: "Training & Mentorship",
    shortTitle: "Mentorship",
    eyebrow: "Growing people and teams",
    icon: GraduationCap,
    color: "#e879f9",
    skills: [
      "Technical Training & Curriculum Design",
      "Mentoring Junior Developers",
      "Workshop Facilitation (30+ sessions delivered)",
    ],
  },
];

// Matches the orbit at `inset-[10%]`: its centerline has a 40% radius.
const RADIUS = 40;

export function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const orbitRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ angle: 0, rotation: 0 });
  const reduceMotion = useReducedMotion();
  const active = SKILL_CATEGORIES[activeIndex];
  const ActiveIcon = active.icon;

  const pointerAngle = (clientX: number, clientY: number) => {
    const box = orbitRef.current?.getBoundingClientRect();
    if (!box) return 0;
    return Math.atan2(clientY - (box.top + box.height / 2), clientX - (box.left + box.width / 2)) * (180 / Math.PI);
  };

  const selectCategory = (index: number) => {
    setActiveIndex(index);
    setRotation(index * (360 / SKILL_CATEGORIES.length));
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      angle: pointerAngle(event.clientX, event.clientY),
      rotation,
    };
    setDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const next = dragStart.current.rotation + pointerAngle(event.clientX, event.clientY) - dragStart.current.angle;
    setRotation(next);
  };

  const finishDrag = () => {
    if (!dragging) return;
    const step = 360 / SKILL_CATEGORIES.length;
    const index = ((Math.round(rotation / step) % SKILL_CATEGORIES.length) + SKILL_CATEGORIES.length) % SKILL_CATEGORIES.length;
    setDragging(false);
    selectCategory(index);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!orbitRef.current?.contains(document.activeElement)) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      selectCategory((activeIndex + direction + SKILL_CATEGORIES.length) % SKILL_CATEGORIES.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section id="expertise" className="section-pad relative overflow-hidden bg-bg">
      <div className="pointer-events-none absolute inset-0 grid-glow opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container-px relative">
        <SectionHeading
          align="center"
          eyebrow="Skills & Expertise"
          title="A full-stack toolkit, explored your way"
          description="Click a category or drag the orbit to explore the technologies, platforms, and leadership skills I bring to every project."
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)] lg:gap-14">
          <div className="min-w-0">
            <div
              className="no-scrollbar mb-6 flex snap-x gap-2 overflow-x-auto pb-2 lg:hidden"
              aria-label="Skill categories"
            >
              {SKILL_CATEGORIES.map((category, index) => (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => selectCategory(index)}
                  className={`shrink-0 snap-start rounded-full border px-4 py-2 text-sm transition-all ${
                    activeIndex === index
                      ? "border-accent bg-accent text-black"
                      : "border-white/10 bg-white/[.04] text-white/60 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category.shortTitle}
                </button>
              ))}
            </div>

            <div
              ref={orbitRef}
              role="group"
              aria-label="Draggable skills explorer. Use arrow keys to change category."
              tabIndex={0}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={finishDrag}
              onPointerCancel={finishDrag}
              className={`relative mx-auto hidden aspect-square w-full max-w-[590px] select-none touch-none rounded-full outline-none lg:block ${
                dragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              <div className="absolute inset-[10%] rounded-full border border-white/10 shadow-[0_0_70px_rgba(163,230,53,.04)]" />
              <div className="absolute inset-[22%] rounded-full border border-dashed border-white/[.08]" />
              <motion.div
                className="pointer-events-none absolute inset-[29%] z-[3] rounded-full"
                animate={{ rotate: rotation }}
                transition={dragging || reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 18 }}
              >
                <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_5px_rgba(163,230,53,.5)]" />
              </motion.div>

              <div className="absolute inset-[29%] grid place-items-center rounded-full border border-white/10 bg-[#101014]/95 text-center shadow-[0_0_50px_rgba(0,0,0,.65)] backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    className="px-7"
                  >
                    <ActiveIcon className="mx-auto mb-3 text-accent" size={28} strokeWidth={1.7} />
                    <p className="font-display text-lg font-semibold text-white">{active.shortTitle}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/40">{active.eyebrow}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {SKILL_CATEGORIES.map((category, index) => {
                const angle = index * (360 / SKILL_CATEGORIES.length) - 90;
                const x = 50 + RADIUS * Math.cos((angle * Math.PI) / 180);
                const y = 50 + RADIUS * Math.sin((angle * Math.PI) / 180);
                const Icon = category.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={category.title}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <motion.button
                      type="button"
                      aria-pressed={isActive}
                      aria-label={`Show ${category.title} skills`}
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={() => selectCategory(index)}
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      whileHover={{ scale: isActive ? 1.08 : 1.05 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      className="group flex w-[104px] -translate-x-0 flex-col items-center gap-2 text-center"
                    >
                      <span
                        className="grid h-14 w-14 place-items-center rounded-2xl border bg-[#121219] transition-[border-color,box-shadow] duration-300"
                        style={{
                          borderColor: isActive ? category.color : `${category.color}55`,
                          color: category.color,
                          boxShadow: isActive ? `0 0 28px ${category.color}55` : `0 0 18px ${category.color}18`,
                        }}
                      >
                        <Icon size={23} strokeWidth={1.8} />
                      </span>
                      <span className={`text-[11px] font-medium leading-tight transition-colors ${isActive ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                        {category.shortTitle}
                      </span>
                    </motion.button>
                  </div>
                );
              })}

              <div className="pointer-events-none absolute -bottom-1 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-accent/20 bg-[#101014]/95 px-4 py-2 text-[10px] uppercase tracking-[.14em] text-white/55 shadow-lg backdrop-blur-md">
                <MousePointer2 size={11} />
                Drag to explore
              </div>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <motion.div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px]"
              animate={{ backgroundColor: `${active.color}32` }}
              transition={{ duration: 0.5 }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: reduceMotion ? 0 : 0.32, ease: "easeOut" }}
                className="relative"
              >
                <div className="mb-7 flex items-start gap-4">
                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border"
                    style={{ color: active.color, borderColor: `${active.color}60`, backgroundColor: `${active.color}12` }}
                  >
                    <ActiveIcon size={23} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[.18em]" style={{ color: active.color }}>
                      {active.eyebrow}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{active.title}</h3>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {active.skills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, y: 9 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : index * 0.045 }}
                      className="group flex items-start gap-3 rounded-xl border border-transparent bg-black/15 px-3.5 py-3 text-sm leading-relaxed text-white/65 transition-colors hover:border-white/[.08] hover:bg-white/[.04] hover:text-white"
                    >
                      <ChevronRight className="mt-0.5 shrink-0 text-accent" size={16} />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center justify-between border-t border-white/[.08] pt-5 text-xs text-white/35">
                  <span>{String(activeIndex + 1).padStart(2, "0")} / {String(SKILL_CATEGORIES.length).padStart(2, "0")}</span>
                  <span>{active.skills.length} core capabilities</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
