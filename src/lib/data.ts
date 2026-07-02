import {
  Code2,
  Globe,
  Blocks,
  Wrench,
  LayoutTemplate,
  TrendingUp,
  Github,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

// Live site URL — set NEXT_PUBLIC_SITE_URL in Vercel to your real domain.
// Falls back to the production vercel.app URL so SEO tags are never wrong.
export const SITE = {
  name: "Sehrish Anam",
  role: "Senior Full-Stack & WordPress Developer",
  email: "sehrishanam1@gmail.com",
  phone: "+92 300 0000000",
  location: "Faisalabad, Pakistan",
  linkedin: "https://www.linkedin.com/in/sehrish-anam/",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://sehrish-portfolio.vercel.app",
  bio: "I don't just write code — I ship products that rank higher, load faster, and convert better. 8+ years across MERN and WordPress, with 3 plugins live on WordPress.org.",
};

export const SOCIALS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: "https://github.com/sehrishanam1", icon: Github },
  { label: "LinkedIn", href: SITE.linkedin, icon: Linkedin },
  { label: "WordPress.org", href: "https://profiles.wordpress.org/", icon: Globe },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#portfolio" },
  { label: "Resume", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 8, suffix: "+", label: "Years of Impact" },
  { value: 40, suffix: "+", label: "Successful Launches" },
  { value: 200, suffix: "+", label: "Careers Kickstarted" },
];

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: " Full-Stack Development",
    description:
      "End-to-end web applications across multiple stacks — MERN and LAMP as my core, with the flexibility to work in whatever environment your project needs.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Plugin & Theme Development",
    description:
      "Published on WordPress.org. Custom plugins, Elementor widgets, and Gutenberg blocks — reusable, dependency-free, built for the long run.",
    icon: Blocks,
  },
  {
    number: "03",
    title: "API & Third-Party Integrations",
    description:
      "REST API development and third-party integrations — payment gateways, analytics, and custom workflows that connect your stack seamlessly.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Website Maintenance & Support",
    description:
      "Ongoing security updates, troubleshooting, and performance monitoring — so your site stays fast, safe, and up to date long after launch.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "WordPress Development",
    description:
      "Custom themes and full WordPress builds — pixel-perfect, mobile-first, and coded to WordPress standards from the ground up.",
    icon: LayoutTemplate,
  },
  {
    number: "06",
    title: "SEO & Performance Optimization",
    description:
      "Core Web Vitals tuning and technical SEO that's delivered 40%+ faster load times and first-page Google rankings — not theory, results.",
    icon: TrendingUp,
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  tags: string[];
  image: string;
  // icon: optional small brand/logo mark shown beside the title in the popup
  icon?: string;
  description: string[];
  skills: string[];
  gallery: string[];
  links?: ProjectLink[];
  // --- Optional per-project popup styling ---
  // showBanner: full-width banner image at top of the popup (default true)
  showBanner?: boolean;
  // galleryPosition: "side" = 30% right column | "inline" = inside the content, full width (default "side")
  galleryPosition?: "side" | "inline";
  // --- Optional rich content (only rendered if present) ---
  // stats: small highlight strip (e.g. Version / Size / Rating / Status)
  stats?: ProjectStat[];
  // worth: a highlighted "why this shows real skill" paragraph
  worth?: string;
  // demonstrates: bullet list; use "Lead-in — detail" and the lead-in is auto-bolded
  demonstrates?: string[];
}

export const PORTFOLIO_FILTERS = [
  "All",
  "WordPress",
  "Plugins",
  "MERN",
  "Web",
] as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nuvora Reading Time & Progress Bar",
    category: "Published WordPress.org Plugin",
    year: "2026",
    tags: ["Plugins", "WordPress"],
    image: "/projects/wordpress-plugins/reading-time/banner.webp",
    icon: "/projects/wordpress-plugins/reading-time/icon.png",
    description: [
      "A lightweight WordPress plugin that adds an estimated reading time and a smooth scroll-progress bar to any post — published and listed on the official WordPress.org plugin directory.",
      "It ships with a local heuristic engine that fine-tunes estimates from real post structure, plus full styling controls and an Elementor widget, making it drop-in friendly for any theme without touching code.",
    ],
    stats: [
      { value: "1.0.0", label: "Version" },
      { value: "<10KB", label: "Total Size" },
      { value: "5.0★", label: "Rating" },
      { value: "Live", label: "on WP.org" },
    ],
    worth:
      "Getting a plugin approved on WordPress.org isn't the same as writing a plugin — the review team enforces strict security, performance, and coding-standard checks before anything goes live. Passing that bar is proof of professional-grade WordPress engineering, not just a personal project.",
    demonstrates: [
      "Custom algorithm design — built a local heuristic engine that analyzes post structure (heading density, list ratio, paragraph length) to intelligently adjust reading-time estimates, without relying on any external AI service.",
      "Accessibility engineering (WCAG-minded) — implemented semantic ARIA roles, live aria-valuenow updates, keyboard focus support, and full prefers-reduced-motion compliance.",
      "Performance-first development — shipped at ~1.5KB JS / ~1.2KB CSS gzipped, zero jQuery dependency, zero external asset calls, zero tracking.",
      "Extensible architecture — exposed custom template tags (rte_the_reading_time()) and filter hooks (rte_badge_html, rte_show_badge, rte_ai_adjustment_factor) so other developers can extend it.",
      "Elementor widget development — built a fully integrated drag-and-drop Elementor widget with responsive controls, on top of the core plugin.",
      "Internationalization support — added CJK (Chinese / Japanese / Korean) content handling for global compatibility.",
      "Security & compliance — passed WordPress.org's plugin review process, meeting their code-quality and security standards for public distribution.",
    ],
    skills: [
      "WordPress Plugin Architecture",
      "PHP (OOP)",
      "JavaScript (ES6+)",
      "Hooks & Filters API",
      "Elementor Widget API",
      "Accessibility (ARIA / WCAG)",
      "Performance Optimization",
      "Internationalization (i18n)",
      "WordPress Coding Standards",
      "Open Source Publishing",
    ],
    links: [
      {
        label: "View on WordPress.org",
        href: "https://wordpress.org/plugins/nuvora-reading-time-progress-bar/",
      },
    ],
    gallery: [
      "/projects/wordpress-plugins/reading-time/screenshot-1.webp",
      "/projects/wordpress-plugins/reading-time/screenshot-2.webp",
      "/projects/wordpress-plugins/reading-time/screenshot-3.webp",
      "/projects/wordpress-plugins/reading-time/screenshot-4.webp",
      "/projects/wordpress-plugins/reading-time/screenshot-5.webp",
    ],
  },
  {
    id: 2,
    title: "Nuvora Timeline for Elementor",
    category: "Published Elementor Widget Plugin",
    year: "2025",
    tags: ["Plugins", "WordPress"],
    image: "/projects/wordpress-plugins/nuvora-timeline/banner.webp",
    icon: "/projects/wordpress-plugins/nuvora-timeline/icon.webp",
    description: [
      "A beautiful animated timeline widget for Elementor with multiple color schemes and customization options — published on the official WordPress.org plugin directory and actively installed on live sites.",
      "Built as a fully custom Elementor widget, it plugs straight into the drag-and-drop editor with unlimited entries via repeater fields, scroll-triggered animations, and both vertical and horizontal layouts.",
    ],
    stats: [
      { value: "1.0.0", label: "Version" },
      { value: "10+", label: "Active Installs" },
      { value: "3", label: "Color Schemes" },
      { value: "Live", label: "on WP.org" },
    ],
    worth:
      "Unlike the previous plugin (a standalone tool), this one required building a fully native widget inside Elementor's page-builder framework — meaning deep integration with a third-party plugin's API, not just standalone PHP/JS.",
    demonstrates: [
      "Elementor Widget API mastery — built a custom widget that plugs directly into Elementor's drag-and-drop editor, with full support for repeater fields, letting users add unlimited timeline entries dynamically.",
      "Design system thinking — shipped three distinct, production-ready color schemes (Purple/Pink, Blue, Green) plus custom color overrides per item, giving clients real design flexibility without touching code.",
      "Animation & UX engineering — implemented scroll-triggered fadeInUp animations with configurable delays, and built both vertical and horizontal responsive timeline layouts.",
      "Third-party library integration — integrated the LineIcons icon library for scalable, lightweight iconography.",
      "Compatibility & standards — built for Elementor 3.0+, tested up to WordPress 6.9.4 and PHP 8.0+, and passed WordPress.org's public review process.",
      "Open source contribution — released under GPLv2, publicly maintained and versioned via SVN, with public changelog and dev logs.",
    ],
    skills: [
      "Elementor Widget Development",
      "PHP (OOP)",
      "JavaScript (Animations & Interactions)",
      "Elementor Repeater Fields API",
      "Responsive Design (Vertical & Horizontal)",
      "CSS3 Animations",
      "Third-Party Library Integration (LineIcons)",
      "WordPress Coding Standards",
      "Open Source Publishing (SVN, GPLv2)",
    ],
    links: [
      {
        label: "View on WordPress.org",
        href: "https://wordpress.org/plugins/nuvora-timeline-for-elementor/",
      },
    ],
    gallery: [
      "/projects/wordpress-plugins/nuvora-timeline/screenshot-1.webp",
      "/projects/wordpress-plugins/nuvora-timeline/screenshot-2.webp",
      "/projects/wordpress-plugins/nuvora-timeline/screenshot-3.webp",
      "/projects/wordpress-plugins/nuvora-timeline/screenshot-4.webp",
      "/projects/wordpress-plugins/nuvora-timeline/screenshot-5.webp",
      "/projects/wordpress-plugins/nuvora-timeline/screenshot-6.webp",
    ],
  },
  {
    id: 3,
    title: "Nuvora AIO Blocks",
    category: "Published Gutenberg Block Toolkit",
    year: "2025",
    tags: ["Plugins", "WordPress"],
    image: "/projects/wordpress-plugins/aio-blocks/banner-1544x500.webp",
    icon: "/projects/wordpress-plugins/aio-blocks/icon-256x256.webp",
    description: [
      "A native Gutenberg block suite that replaces the need for a page builder entirely — built from scratch and published to the official WordPress.org directory, where it's live and publicly installable by WordPress users worldwide.",
      "It ships 6 fully customizable, production-grade blocks with zero external dependencies, loading only the assets for the blocks you actually use — keeping pages lean and fast.",
    ],
    stats: [
      { value: "1.0.0", label: "Version" },
      { value: "6", label: "Blocks Included" },
      { value: "24+", label: "Style Variants" },
      { value: "Live", label: "on WP.org" },
    ],
    worth:
      "Getting a plugin approved on WordPress.org isn't the same as writing a plugin — the review team enforces strict security, performance, and coding-standard checks before anything goes live. Passing that bar is proof of professional-grade WordPress engineering, not just a personal project.",
    demonstrates: [
      "Native Gutenberg block development — engineered 6 custom blocks (Counter, Pricing Table, Testimonial Carousel, Advanced Tabs, Icon Box, Slider) that work purely within the core block editor, with no reliance on Elementor, Divi, or any third-party page builder.",
      "Reusable design-system architecture — built a consistent control layer across every block (color, typography, padding, border-radius, borders) so all 6 blocks share the same predictable editing experience.",
      "Multi-style component engineering — shipped 4–5 distinct layout styles per block (24+ total variations), each fully responsive, showing depth in CSS architecture and componentized design thinking.",
      "Interactive UX features — implemented animated count-up logic, touch-friendly swipe carousels, dynamic 'Latest Posts' data pulling, and live in-editor previews — all without page reloads.",
      "Performance-conscious output — only the assets for blocks actually used on a page are loaded, avoiding the script and style bloat common in page-builder plugins.",
      "Full-Site Editing (FSE) & theme compatibility — engineered to work across any WordPress theme, including block-based FSE themes, which demands stricter adherence to core WordPress APIs.",
      "Security & compliance — passed WordPress.org's plugin review process, meeting their code-quality, security, and GPLv2+ licensing standards for public distribution.",
      "Open-source ownership — published and maintained under a public developer profile, with SVN repo, changelog, and support forum.",
    ],
    skills: [
      "WordPress Plugin Architecture",
      "Gutenberg Block Development",
      "PHP (OOP)",
      "JavaScript (ES6+) / React",
      "Hooks & Filters API",
      "Responsive CSS / Component Styling",
      "UI/UX Design Systems",
      "Full Site Editing (FSE)",
      "Performance Optimization",
      "WordPress Standards & Security",
      "Open Source Publishing",
    ],
    links: [
      {
        label: "View on WordPress.org",
        href: "https://wordpress.org/plugins/nuvora-aio-blocks/",
      },
    ],
    gallery: [
      "/projects/wordpress-plugins/aio-blocks/screenshot-1.webp",
      "/projects/wordpress-plugins/aio-blocks/screenshot-2.webp",
      "/projects/wordpress-plugins/aio-blocks/screenshot-3.webp",
      "/projects/wordpress-plugins/aio-blocks/screenshot-4.webp",
      "/projects/wordpress-plugins/aio-blocks/screenshot-5.webp",
      "/projects/wordpress-plugins/aio-blocks/screenshot-6.webp",
    ],
  },
  {
    id: 4,
    title: "iSky9 — Cloud & Cybersecurity",
    category: "Custom WordPress Website",
    year: "2025",
    tags: ["WordPress", "Web"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    description: [
      "A fully custom WordPress website for an enterprise cloud-services and cybersecurity company, built from a bespoke theme rather than a template.",
      "It features a multi-section homepage, partner showcases and service breakdowns, all engineered for speed and on-page SEO to help the brand rank for competitive keywords.",
    ],
    skills: ["PHP", "Custom Theme", "HTML5", "CSS3", "JavaScript", "SEO"],
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 5,
    title: "Avento App",
    category: "MERN Web Application",
    year: "2024",
    tags: ["MERN", "Web"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description: [
      "A full-stack MERN application with a decoupled architecture — a React (Vite) frontend talking to a dedicated Node.js / Express backend over a clean REST API.",
      "Styled with Tailwind CSS for a responsive UI and built around reusable hooks and component-based architecture, bundled with Vite for fast HMR in dev and optimized production builds.",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "REST APIs"],
    galleryPosition: "inline", // demo: gallery sits INSIDE the content, not in a side column
    links: [
      { label: "View on GitHub", href: "https://github.com/sehrishanam1/avento-app" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 6,
    title: "Employee Management System",
    category: "MERN Dashboard with RBAC",
    year: "2025",
    tags: ["MERN", "Web"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    description: [
      "A complete Employee Management System built on the MERN stack with role-based access control, employee records management and a clean React admin dashboard.",
      "The dashboard surfaces real-time data updates, secure JWT authentication and role-scoped views, streamlining HR workflows for teams from a single interface.",
    ],
    skills: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
}

export const EXPERIENCE: TimelineItem[] = [
  {
    period: "Oct 2025 — Present",
    title: "Senior CMS & Full-Stack Developer",
    org: "Compilex Technologies",
    description:
      "Lead client projects across MERN and WordPress — custom themes, plugins, REST APIs and performance tuning. Built a role-based Employee Management System with a real-time React dashboard.",
  },
  {
    period: "Jun 2024 — Sep 2025",
    title: "Website Developer",
    org: "Dtech Systems",
    description:
      "Shipped 4+ production MERN apps with Redux. Delivered Alpha Realtors & Dtech sites — first-page Google rankings and 40%+ faster loads via Core Web Vitals optimization and lazy loading.",
  },
  {
    period: "Aug 2022 — Nov 2024",
    title: "Full Stack Developer",
    org: "Essalan Digital Space Dive",
    description:
      "Built custom WordPress themes & plugins plus PHP (OOP) + MySQL backends for offline platforms — authentication, event management, admissions and academic resource tooling.",
  },
  {
    period: "Jan 2021 — May 2022",
    title: "Website Developer",
    org: "Ahsan Ikram Textile Pvt. Ltd",
    description:
      "Developed dynamic WordPress sites with Elementor & WPBakery, PHP/MySQL backends, plus SEO, accessibility, security hardening and payment-gateway / analytics integrations.",
  },
  {
    period: "Jun 2017 — Jul 2022",
    title: "Technical Trainer",
    org: "CM e-Rozgaar Program · PITB",
    description:
      "Trained 200+ students in full-stack web development and evaluated 500+ projects — designing curriculum, live demos and mentorship on secure coding and database management.",
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    period: "2015 — 2017",
    title: "M.Phil, Software Engineering",
    org: "NCBA&E",
    description:
      "Advanced study in software engineering principles, architecture and applied research.",
  },
  {
    period: "2012 — 2014",
    title: "MSc, Computer Science",
    org: "Virtual University of Pakistan",
    description:
      "Core computer science — programming, databases, web technologies and software design.",
  },
];

export interface Publication {
  title: string;
  journal: string;
  details: string;
}

export const PUBLICATION: Publication = {
  title:
    "Impact of Workforce Motivation on Productivity of Organizations — A Case Study of the Apparel Industry, UK",
  journal: "International Journal of Scientific & Engineering Research",
  details: "Vol. 6, Issue 10 · Oct 2015 · ISSN 2229-5518",
};

export interface Community {
  role: string;
  org: string;
  period: string;
  note: string;
}

export const COMMUNITY: Community = {
  role: "Community Leader",
  org: "Meta Developer Circle, Faisalabad",
  period: "2017 — 2022",
  note: "Organized 30+ tech meetups & workshops for 50+ developers, mentoring on modern web technologies and open-source best practices.",
};

export interface Skill {
  name: string;
  level: number;
}

export const SKILLS: Skill[] = [
  { name: "WordPress (Themes & Plugins)", level: 95 },
  { name: "React & MERN Stack", level: 92 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "PHP & MySQL (OOP)", level: 88 },
  { name: "Tailwind CSS & Responsive UI", level: 93 },
  { name: "SEO & Performance Optimization", level: 90 },
];

export const TOOLBOX = [
  "React.js",
  "Node.js",
  "WordPress",
  "PHP / MySQL",
  "Tailwind CSS",
  "Git & GitHub",
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sehrish rebuilt our site on a custom WordPress theme and our Core Web Vitals went green — load times dropped over 40% and we finally rank on page one for our target keywords.",
    name: "Project Lead",
    title: "Alpha Realtors",
  },
  {
    quote:
      "Her Nuvora plugins are clean, well-documented and just work. The Elementor timeline widget saved our team days of custom development.",
    name: "Founder",
    title: "iSky9 Cloud Solutions",
  },
  {
    quote:
      "From MERN dashboards to plugin development, Sehrish delivers end-to-end and hits every deadline. A genuinely senior, reliable pair of hands.",
    name: "Engineering Manager",
    title: "Dtech Systems",
  },
];

export interface Post {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const POSTS: Post[] = [
  {
    title: "Publishing your first plugin on the WordPress.org directory",
    category: "WordPress",
    date: "Feb 14, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cutting load times 40%+ with Core Web Vitals optimization",
    category: "Performance",
    date: "Jan 09, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Structuring a decoupled MERN app with React, Vite & Express",
    category: "MERN",
    date: "Dec 02, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
  },
];
