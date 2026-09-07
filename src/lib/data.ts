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
  {
    label: "WordPress.org",
    href: "https://profiles.wordpress.org/meerab123/",
    icon: Globe,
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#portfolio" },
  { label: "Resume", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
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
  // tagline: optional display label for the eyebrow/card (e.g. "Website · WordPress · Project Management").
  // Falls back to tags.join(" · "). `tags` still drives the filter buttons.
  tagline?: string;
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
  // bannerFit: 'cover' keeps the default crop behavior; 'contain' shows the full image inside the banner area.
  bannerFit?: "cover" | "contain";
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
  {
    id: 7,
    title: "Infinity Empire",
    category: "Corporate Website, Custom Job Portal & Client-Managed Delivery",
    year: "2026",
    tags: ["Web", "WordPress"],
    tagline: "Website · WordPress · Project Management",
    image: "/projects/wordpress-websites/infinity-empire/Banner.webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "A full corporate business website built end-to-end for a client, combining a modern brand-facing site with a custom-built WordPress job portal for internal hiring and applicant management. I owned the project in its entirety — development, UI design, SEO, and direct client management from first requirement to final launch.",
      "The job portal isn't a form plugin bolted onto a page — it's a purpose-built system with its own custom post type and capability-based access control, giving the client full control over job postings and applicant handling without touching code. Paired with custom UI components matched to the brand identity and a technical SEO pass, this project reflects delivery at every layer: build, design, and client relationship.",
    ],
    stats: [
      { value: "Full-Stack", label: "+ Project Mgmt" },
      { value: "Custom", label: "Job Portal Plugin" },
      { value: "SEO", label: "Optimized" },
      { value: "Live", label: "iinfinity.tw" },
    ],
    worth:
      "Building the site is table stakes — managing the client relationship end-to-end, translating vague business asks into a working job portal, and shipping on a deadline without a PM buffering you from the client is what separates freelance execution from agency-style delivery. This project required moving fluidly between developer, designer, and project manager without a handoff to anyone else.",
    demonstrates: [
      "Custom plugin architecture — built a job portal from scratch (custom post type, capability-based access control), not a form plugin.",
      "Client & stakeholder management — sole point of contact for requirements, scope, and delivery timeline.",
      "Technical SEO implementation — structured metadata, crawlability, and speed optimization for organic ranking.",
      "UI system design — custom components built to match brand identity, not stock theme elements.",
      "Cross-functional ownership — moved between dev, QA, and client communication without handoffs.",
    ],
    skills: [
      "WordPress",
      "Plugin Architecture",
      "PHP (OOP)",
      "Client Management",
      "Project Delivery",
      "Technical SEO",
      "Custom Post Types",
      "Requirements Gathering",
    ],
    links: [
      {
        label: "View Figma Prototype",
        href: "https://www.figma.com/proto/YAEnB1EYQrkdp6cwn0sOUO/Iinfinity-website?node-id=4404-7162&t=GuBMS5D0d0TjAaBW-0&scaling=min-zoom&content-scaling=fixed&page-id=4404%3A2144",
      },
    ],
    gallery: [
      "/projects/wordpress-websites/infinity-empire/screenshot (1).webp",
      "/projects/wordpress-websites/infinity-empire/screenshot (2).webp",
      "/projects/wordpress-websites/infinity-empire/screenshot (3).webp",
      "/projects/wordpress-websites/infinity-empire/screenshot (4).webp",
      "/projects/wordpress-websites/infinity-empire/screenshot (5).webp",
    ],
  },
  {
    id: 8,
    title: "Anexly",
    category: "Subscription Marketplace · WooCommerce · Custom UI Development",
    year: "2025",
    tags: ["Web", "WordPress", "WooCommerce"],
    tagline: "Website · WooCommerce · Project Management",
    image: "/projects/wordpress-websites/Anexly/Banner.webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "Anexly is a subscription marketplace built on WooCommerce, letting users browse, compare, and purchase 300+ subscription products across streaming, music, AI tools, gaming, and productivity categories. I led this project as both developer and project manager — managing a technically demanding client directly, leading a 5-person team, and taking the build from a difficult set of requirements to a fully custom, production-stable storefront.",
      "The core challenge was scale without slowdown: a 300-product catalog on WooCommerce breaks fast if you rely on default templates and queries. I redesigned the site's architecture and code quality from the ground up so the store stays fast and never loses cart or order data, even under a large, filterable catalog.",
    ],
    stats: [
      { value: "Full-Stack", label: "+ PM" },
      { value: "300+", label: "Products" },
      { value: "5-Member", label: "Team" },
      { value: "Live", label: "anexly.us" },
    ],
    worth:
      "Anexly wasn't a template WooCommerce install — it demanded custom widgets, custom templates for every core commerce flow, and a client who needed constant technical translation and expectation management. Running a 5-person team while owning the client relationship meant I wasn't just writing code — I was making architecture calls, reviewing team output, and being the single point of accountability for a store that couldn't afford downtime or data loss at 300+ products.",
    demonstrates: [
      "Custom WooCommerce template development — built custom templates for the single product page, cart page, cart popups, and checkout flow instead of relying on default WooCommerce markup.",
      "Custom widget engineering — built a 'See How Much You Save Instantly' price-comparison widget that calculates real-time savings between regular and bundled subscription pricing, plus a full filterable product browser (category, price range, service provider, duration).",
      "Multi-gateway payment integration — implemented several payment method integrations into a unified custom checkout flow.",
      "Performance at scale — restructured queries and code architecture to keep 300+ products fast and stable, with zero data loss on cart/order state.",
      "Mobile-specific dynamic UI — built device-specific interaction patterns (slide-in filter drawer, mobile cart popups, responsive account dashboard) rather than just scaling desktop layouts down.",
      "User account system — built a full customer dashboard (order history, order details, account/profile settings, password management).",
      "Team leadership — managed and directed a 5-member development team through planning, execution, and delivery.",
      "Difficult client management — served as the sole technical point of contact for a demanding, highly technical client, translating requirements into shippable scope.",
    ],
    skills: [
      "WooCommerce Development",
      "PHP (OOP)",
      "Custom Template Architecture",
      "Payment Gateway Integration",
      "Performance Optimization",
      "Responsive/Mobile UI",
      "Team Leadership",
      "Client Management",
      "Project Delivery",
      "MySQL",
    ],
    gallery: [
      "/projects/wordpress-websites/Anexly/screenshots (1).png",
      "/projects/wordpress-websites/Anexly/screenshots (2).png",
      "/projects/wordpress-websites/Anexly/screenshots (3).png",
      "/projects/wordpress-websites/Anexly/screenshots (4).png",
      "/projects/wordpress-websites/Anexly/screenshots (5).png",
      "/projects/wordpress-websites/Anexly/screenshots (6).png",
      "/projects/wordpress-websites/Anexly/screenshots (7).png",
      "/projects/wordpress-websites/Anexly/screenshots (8).png",
    ],
  },
  {
    id: 9,
    title: "iSky9",
    category: "Cloud Services Website · Custom Domain Search & Automated Content Integration",
    year: "2026",
    tags: ["Web", "WordPress"],
    tagline: "Website · WordPress · Project Management",
    image: "/projects/wordpress-websites/iSky9/banner.webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "A full corporate website built for a cloud infrastructure, cybersecurity, and AI solutions provider — spanning 10+ individual service pages, team and testimonial modules, and two custom-built dynamic features not found in a standard WordPress build. I led the project end-to-end: development, custom feature implementation, content management, and delivery timeline.",
      "Beyond the core site architecture, this project required building real functionality on top of WordPress rather than configuring it — a domain search tool wired into a live registrar/WHOIS API, and an automated content feed pulling directly from the client's YouTube channel via the YouTube Data API v3 on a scheduled refresh. Both features remove manual upkeep for the client's team while giving visitors live, real-time functionality baked into the page.",
    ],
    stats: [
      { value: "Full-Stack", label: "+ Project Mgmt" },
      { value: "Custom", label: "Domain Search Tool" },
      { value: "API", label: "Driven Content" },
      { value: "Live", label: "iSky9.com" },
    ],
    worth:
      "Most WordPress builds stop at page templates and content blocks. This project required going past that — integrating external APIs directly into the site so it does something, not just displays something. Wiring a registrar API into a functional search tool and building a scheduled content-fetch pipeline from YouTube both required backend logic beyond typical theme customization, while still delivering the polish and structure of a full 10+ page corporate site on schedule.",
    demonstrates: [
      "API integration — connected a registrar/WHOIS API to build a working domain search tool, and the YouTube Data API v3 for automated, scheduled content updates.",
      "Custom feature development — went beyond plugin configuration to build functional, brand-specific tools rather than relying on stock solutions.",
      "Site architecture at scale — structured and built 10+ distinct service pages with consistent design and navigation.",
      "Content management — structured and populated content across service pages, team bios, and testimonials for consistency site-wide.",
      "Project ownership — managed scope and timeline across development and content phases.",
    ],
    skills: [
      "WordPress",
      "Elementor",
      "PHP",
      "API Integration",
      "YouTube Data API",
      "WHOIS/Registrar API",
      "Project Delivery",
      "Content Management",
      "Custom Feature Development",
    ],
    gallery: [
      "/projects/wordpress-websites/iSky9/snapshot (1).webp",
      "/projects/wordpress-websites/iSky9/snapshot (2).webp",
      "/projects/wordpress-websites/iSky9/snapshot (3).webp",
      "/projects/wordpress-websites/iSky9/snapshot (4).webp",
    ],
  },
  {
    id: 10,
    title: "Compilex Technologies",
    category: "Corporate Website · Custom Design System & Content Strategy",
    year: "2026",
    tags: ["Web", "WordPress"],
    tagline: "Website · WordPress · Project Management · Design Strategy",
    image: "/projects/wordpress-websites/compilex/Banner.webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "A full corporate website built for Compilex Technologies, a custom software development company spanning AI, blockchain, cloud, and enterprise solutions. I owned this project as Project Manager — but beyond scope and delivery, I drove the site's design direction, content strategy, and structure from the ground up, with several sections custom-built rather than pulled from stock templates.",
      "This wasn't a case of managing a build someone else designed — the visual system, service showcase interactions, and content narrative (how the company's work is framed, sequenced, and proven through stats and testimonials) were shaped by me. The result is a site that reads as a cohesive brand experience rather than a stitched-together template: an animated multi-category service explorer, a six-step 'How We Process' section, live stat counters, and a testimonial system — all built to reinforce trust and credibility for an enterprise-facing audience.",
    ],
    stats: [
      { value: "Project Mgmt", label: "Design & UX Strategy" },
      { value: "Custom", label: "Built Sections" },
      { value: "Live", label: "compilex.it.com" },
    ],
    worth:
      "Managing a project is one skill; deciding what the project should look like and say is another. This project required both — translating a technical company's positioning into a visual and content strategy, then managing that vision through to a live, polished build. It's proof of range beyond execution: strategic thinking about how a brand should present itself, not just following a brief.",
    demonstrates: [
      "Design & UX direction — defined the visual system and page structure, including a custom interactive service showcase (tabbed categories with icon-driven sub-navigation).",
      "Content strategy — shaped how the company's expertise is presented: outcome-driven proof points (uptime, revenue impact, cost reduction), a structured 6-step process narrative, and a testimonial system built for credibility.",
      "Custom-built sections — several homepage modules (service explorer, process steps, stat counters) built beyond standard theme components.",
      "Project management — owned scope, timeline, and delivery from requirement to launch.",
    ],
    skills: [
      "WordPress",
      "Elementor",
      "UI/UX Design",
      "Content Strategy",
      "Project Delivery",
      "Custom Sections",
      "Brand Storytelling",
    ],
    gallery: [
      "/projects/wordpress-websites/compilex/screenshots (1).webp",
      "/projects/wordpress-websites/compilex/screenshots (6).webp",
      "/projects/wordpress-websites/compilex/screenshots (7).webp",
      "/projects/wordpress-websites/compilex/screenshots (8).webp",
      "/projects/wordpress-websites/compilex/screenshots (9).webp",
      "/projects/wordpress-websites/compilex/screenshots (10).webp",
    ],
  },
  {
    id: 11,
    title: "Fallers Jewellers",
    category: "Heritage E-commerce · Multi-Currency · International Logistics",
    year: "2025",
    tags: ["Web", "WordPress"],
    tagline: "Website · WordPress/WooCommerce · Elementor · 2025",
    image: "/projects/wordpress-websites/Fallers/banner.webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "Fallers.com is the e-commerce platform for Fallers Jewellers, a heritage Irish jeweler established in 1879, specializing in Claddagh rings, Celtic jewelry, and branded watches for customers across Ireland and internationally. I built the storefront on WordPress with Elementor as the visual page-building layer, giving the client full control over landing pages and campaigns without hard-coding every layout — critical for a heritage retail brand that runs frequent seasonal and collection-based promotions.",
      "The core challenge was serving two very different audiences from one platform: domestic Irish shoppers and international customers with different currencies, payment expectations, and customs requirements. I engineered a currency-switching system (USD/EUR/GBP/AUD/CAD) so international buyers see accurate local pricing, and built in duties/customs/tariff calculation for U.S. orders, bundled into a \"free delivery over $250\" promise — a genuinely non-trivial cross-border commerce feature that most WooCommerce builds skip entirely.",
    ],
    stats: [
      { value: "Full-Stack", label: "+ Elementor" },
      { value: "146+ Years", label: "Heritage Brand" },
      { value: "5 Currencies", label: "Multi-Currency" },
      { value: "7+ Gateways", label: "Unified Checkout" },
    ],
    worth:
      "Fallers wasn't a simple product-catalog build — it required structuring dozens of interlinked product categories (Claddagh, Celtic, Watches, Brands, Gifts) for both SEO and intuitive navigation, integrating seven-plus payment methods into one checkout, and handling the operational complexity of international shipping and tax logic for a brand with 146 years of heritage and reputation riding on every transaction.",
    demonstrates: [
      "CMS & page-building architecture — Built on WordPress with Elementor, enabling flexible, editable storefront layouts without hard-coding every landing page.",
      "Full e-commerce infrastructure — Product catalog, cart, wishlist, and account management structured around dozens of cross-linked categories/collections for SEO and navigation.",
      "Multi-currency engineering — Currency-switching system (USD/EUR/GBP/AUD/CAD) for accurate local pricing across international markets.",
      "Multi-gateway payment integration — Unified checkout supporting Google Pay, Apple Pay, PayPal, Amazon Pay, Klarna, Humm (buy-now-pay-later), and major card networks.",
      "International logistics handling — Built-in duties/customs/tariff calculation bundled into a \"free over $250\" delivery promise for U.S. orders.",
      "SEO & metadata engineering — Structured Open Graph, Twitter Card, and canonical meta implementation for social sharing and search visibility, with Google/Facebook site verification.",
      "Security & privacy — Cloudflare-based email obfuscation to prevent scraping/spam harvesting, plus a GDPR-conscious newsletter opt-in flow.",
      "Performance & UX — Responsive, mobile-first layout, lazy-loading imagery, and font optimization for fast load times across devices.",
    ],
    skills: [
      "WordPress Development",
      "Elementor",
      "WooCommerce",
      "Multi-Currency Systems",
      "Payment Gateway Integration",
      "International Tax/Duties Logic",
      "SEO & Structured Metadata",
      "GDPR Compliance",
      "Cloudflare Security",
      "Responsive/Mobile UI",
    ],
    gallery: [
      "/projects/wordpress-websites/Fallers/screenshots (1).webp",
      "/projects/wordpress-websites/Fallers/Screenshots (2).webp",
      "/projects/wordpress-websites/Fallers/screenshots (3).webp",
      "/projects/wordpress-websites/Fallers/screenshots (4).webp",
      "/projects/wordpress-websites/Fallers/screenshots (5).webp",
    ],
  },
  {
    id: 12,
    title: "Murphy Maude Interiors",
    category: "Luxury Interior Design · Brand Site · Booking Integration",
    year: "2025",
    tags: ["Web"],
    tagline: "Website · Wix · Brand & Portfolio Site · 2025",
    image: "/projects/wordpress-websites/murphymaude/banner.webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "Murphy Maude Interiors is the brand and portfolio website for a nationally and internationally published, woman-owned luxury interior design firm serving Nashville, Miami, and beyond. The site was built on Wix to give the client a fully editable, visually rich platform capable of showcasing high-end residential work without needing developer involvement for every content update — critical for a design-led brand where imagery and storytelling carry more weight than transactional features.",
      "The core challenge was translating a premium, editorial-quality brand into a functioning marketing site: full-bleed photography, a curated project portfolio, press credibility (Architectural Digest, HGTV, The Spruce, Domino, The Zoe Report), and a frictionless path from browsing to booking a consultation — all while keeping load times and navigation clean on a media-heavy site.",
    ],
    stats: [
      { value: "Design & Build", label: "Full Service" },
      { value: "Nashville + Miami", label: "Locations" },
      { value: "5+ Features", label: "Press & Media" },
      { value: "Live", label: "Brand Site" },
    ],
    worth:
      "Unlike a transactional e-commerce build, a luxury design site lives or dies on presentation and trust signals. This meant structuring the site architecture around storytelling — design philosophy, portfolio, press, services — while integrating scheduling tools, social proof, and cross-brand links (a personal author site and a product shop) into one cohesive brand experience.",
    demonstrates: [
      "CMS & site architecture — Built on Wix, structured around clear brand pathways (Design Philosophy, Offerings + Services, Portfolio, Press, Inquire) for intuitive navigation and easy client-side content updates.",
      "Visual-first portfolio presentation — High-resolution, full-bleed image galleries showcasing completed residential projects, optimized for fast loading despite heavy visual content.",
      "Booking & lead-generation integration — Direct \"Book a Call\" scheduling flow embedded across the site to convert visitors into consultation leads.",
      "Press & credibility integration — Dedicated \"As Seen In\" section featuring national publications (Architectural Digest, HGTV, The Spruce, Domino, The Zoe Report) to build trust and authority.",
      "Cross-brand linking — Integrated links to affiliated ventures (a personal design-author site and a product brand) without diluting the primary site's navigation or brand identity.",
      "SEO & metadata engineering — Structured Open Graph and Twitter Card metadata, canonical URLs, and descriptive meta tags for search visibility and clean social sharing previews.",
      "Responsive, mobile-first design — Fully responsive layout with device-optimized image scaling for a consistent luxury experience across desktop and mobile.",
      "Social & contact integration — Connected Instagram, Facebook, and Houzz profiles alongside direct inquiry and phone/email contact pathways.",
    ],
    skills: [
      "Wix Development",
      "Site Architecture",
      "UX/Brand Storytelling",
      "SEO & Structured Metadata",
      "Responsive/Mobile Design",
      "Booking/Scheduling Integration",
      "Content Strategy",
      "Cross-Platform Brand Integration",
    ],
    gallery: [
      "/projects/wordpress-websites/murphymaude/screenshot (1).webp",
      "/projects/wordpress-websites/murphymaude/screenshot (2).webp",
      "/projects/wordpress-websites/murphymaude/screenshot (3).webp",
      "/projects/wordpress-websites/murphymaude/screenshot (4).webp",
      "/projects/wordpress-websites/murphymaude/screenshot (5).webp",
      "/projects/wordpress-websites/murphymaude/screenshot (6).webp",
      "/projects/wordpress-websites/murphymaude/screenshot (7).webp",
    ],
  },
  {
    id: 13,
    title: "Knitting Tours",
    category: "Niche Travel Booking · Multi-Region · Lead Capture System",
    year: "2025",
    tags: ["Web", "WordPress"],
    tagline: "Website · WordPress · WP Rocket · 2025",
    image: "/projects/wordpress-websites/knitting_tours/Banner.webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "Knitting Tours is a niche travel and tourism booking site offering curated, expert-led knitting and craft vacation packages across Ireland, Scotland, Shetland, and mainland Europe (Madrid, Copenhagen, and more), built to support an international customer base spanning the US, Canada, UK, and Australia. I built and maintained the site on WordPress, layering in performance optimization via WP Rocket (page caching, lazy loading, and minification) to keep a content- and image-heavy travel site fast for visitors booking from across four continents.",
      "The core challenge was serving a genuinely international audience without a generic \"one-size-fits-all\" contact experience. I implemented dynamic, region-based contact routing that displays the correct toll-free number depending on whether a visitor is in the USA/Canada, Australia, UK, or elsewhere internationally — a conditional-rendering feature based on locale that goes beyond a static contact page.",
    ],
    stats: [
      { value: "Full-Stack", label: "WordPress Core" },
      { value: "4 Continents", label: "Served Worldwide" },
      { value: "Multi-Region", label: "Tour Catalog" },
      { value: "Live", label: "Booking Platform" },
    ],
    worth:
      "A niche tour operator lives or dies on trust and lead capture, not just browsing. This meant building custom modal/popup components for newsletter capture and promotional tour announcements — triggered by scroll depth and exit-intent — to capture leads without disrupting the browsing experience, and building a filterable, anchor-based tour catalog (?tour=2025#ireland, #scotland_shetland, #mainland_europe) so visitors could jump directly to the destination category they cared about across a multi-region catalog.",
    demonstrates: [
      "Performance optimization — WP Rocket implementation for page caching, lazy loading, and minification, keeping a media-heavy travel site fast.",
      "Multi-region dynamic contact routing — Conditional rendering of toll-free contact numbers based on visitor region (USA/Canada, Australia, UK, International).",
      "Filterable tour/destination catalog — URL-parameter and anchor-driven filtering system across a dynamic, multi-region tour catalog.",
      "Custom lead-capture components — Modal/popup components for newsletter signup and promotional tour announcements, triggered by scroll depth and exit-intent to maximize conversions without hurting UX.",
      "Analytics & conversion tracking — Google Tag Manager integration for tracking marketing campaign performance and conversions.",
      "Trust & credibility integration — Display of ASTA/ACTA/ITOA travel industry accreditation badges alongside Facebook/Instagram embeds for social proof.",
      "SEO & metadata engineering — Full Open Graph and Twitter Card configuration, Facebook domain verification, and Google site verification.",
      "Lead-generation forms — Multiple customized newsletter/subscription forms integrated with email marketing workflows.",
    ],
    skills: [
      "WordPress Development",
      "WP Rocket (Performance Optimization)",
      "Conditional/Locale-Based Rendering",
      "Custom Modal/Popup Development",
      "Google Tag Manager",
      "Lead Generation Forms",
      "SEO & Structured Metadata",
      "Cross-Browser/Regional UX",
    ],
    gallery: [
      "/projects/wordpress-websites/knitting_tours/screenshots (1).webp",
      "/projects/wordpress-websites/knitting_tours/screenshots (2).webp",
      "/projects/wordpress-websites/knitting_tours/knitting Tours (4) (2).webp",
      "/projects/wordpress-websites/knitting_tours/Screenshot 2026-07-21 113036.webp",
    ],
  },
  {
    id: 14,
    title: "JOJO",
    category: "AI-Powered Work Collaboration Platform · Custom WebGL Interactive Site",
    year: "2025",
    tags: ["Web", "WordPress"],
    tagline: "Website + SaaS Product · WordPress · WebGL · Multilingual · 2025",
    image: "/projects/wordpress-websites/JoJoCN/banner.png",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "JOJO is the marketing and product site for a SaaS work-collaboration platform built by Zhimaite Technologies, a Shenzhen-based digital agency that developed JOJO as its own in-house product alongside client services. The platform bundles five modules into one workspace — HR & Employee Management, AI Finance & Expense Management, Real-Time Team Communication, AI Video Conferencing, and Project Management — targeting startups and SMEs that want an all-in-one tool instead of stitching together separate apps.",
      "The core challenge was presenting a genuinely complex, feature-dense SaaS product without overwhelming visitors, while giving the brand a distinct, premium feel in a crowded productivity-software market. I built the site on WordPress with Elementor, and implemented a custom WebGL fluid-simulation animation as an interactive background element — a canvas-based effect with configurable density diffusion, velocity, pressure, and splat radius — a meaningfully more technical build than the standard Elementor template site, giving the brand a visual identity that matches its AI-forward product positioning.",
    ],
    stats: [
      { value: "Full-Stack", label: "+ WebGL Canvas" },
      { value: "5 Modules", label: "Integrated Suite" },
      { value: "EN / CN", label: "Bilingual Localization" },
      { value: "Live", label: "SaaS Platform" },
    ],
    worth:
      "Most agency or SaaS marketing sites lean entirely on page-builder defaults. Layering a custom WebGL interactive element on top of Elementor required understanding both the design-system constraints of a page builder and lower-level canvas/shader work — a rare combination. Beyond that, the site needed full bilingual support (English/Chinese) for a company straddling domestic and international clients, plus a structured methodology section and lead-capture flow built to convert visitors evaluating a genuinely feature-rich product.",
    demonstrates: [
      "Custom WebGL interactive animation — Built a fluid-simulation canvas element (density diffusion, velocity, pressure, splat radius) as an interactive hero/background effect, going beyond standard page-builder capabilities.",
      "CMS & page-building architecture — Built on WordPress with Elementor (v4.2.4) for flexible, editable marketing pages across five product modules.",
      "Multilingual localization — English/Chinese language switching via TranslatePress, supporting both domestic and international audiences.",
      "Custom lead-capture components — Modal components for demo booking and free-trial CTAs, integrated into the contact/lead-capture flow.",
      "Animated data presentation — Scroll-triggered, JS-driven stat counters (e.g., efficiency and productivity metrics) to reinforce product value visually.",
      "Structured process/methodology section — Built out a clear Discovery → Planning → Design → Development → Testing/QA → Deployment → Support framework, communicating dev methodology to prospective clients.",
      "Social proof integration — Client testimonial carousel with structured schema (name, role, company size) for credibility.",
      "Security & privacy — Cloudflare-based email obfuscation to prevent scraping/spam harvesting.",
    ],
    skills: [
      "WordPress Development",
      "Elementor",
      "WebGL/Canvas Animation",
      "TranslatePress (Multilingual)",
      "Custom Modal/Popup Development",
      "JavaScript (Scroll-Triggered Animation)",
      "Cloudflare Security",
      "UX for Complex SaaS Products",
    ],
    gallery: [
      "/projects/wordpress-websites/JoJoCN/snapshot (1).png",
      "/projects/wordpress-websites/JoJoCN/snapshot (2).png",
      "/projects/wordpress-websites/JoJoCN/snapshot (3).png",
      "/projects/wordpress-websites/JoJoCN/snapshot (4).png",
      "/projects/wordpress-websites/JoJoCN/snapshot (5).png",
      "/projects/wordpress-websites/JoJoCN/snapshot (6).png",
      "/projects/wordpress-websites/JoJoCN/snapshot (7).png",
    ],
  },
  {
    id: 15,
    title: "No Stars – Premium Hotel Apartments",
    category: "Bilingual Booking Engine · Direct-Booking Hospitality Site",
    year: "2025",
    tags: ["Web", "WordPress"],
    tagline: "Website · WordPress/WooCommerce · Elementor · WPML · 2025",
    image: "/projects/wordpress-websites/no-stars/screenshots (1).webp",
    bannerFit: "contain",
    galleryPosition: "inline",
    description: [
      "No Stars is the direct-booking website for a 5-unit premium apartment complex in Ioannina, Greece, built to convert organic and direct traffic into confirmed reservations — reducing the property's reliance on OTA commissions from Booking.com and Airbnb. I built the site on WordPress with Elementor as the page-building layer, and implemented full Greek/English localization with WPML, including a language-switcher and separate URL structures (/en/) so international guests could browse and book seamlessly in their own language.",
      "The core challenge was integrating a real booking engine, not just a \"contact us\" form. I built a custom date-picker/availability flow (arrival, departure, adults/children selectors) tied into a third-party PMS reservation system, handling date formatting, form validation, and the API/iframe integration needed to pass live availability data between the site and the booking engine — a meaningfully more technical task than a typical brochure-style hospitality site.",
    ],
    stats: [
      { value: "Full-Stack", label: "+ Elementor" },
      { value: "5 Units", label: "Boutique Property" },
      { value: "EL / EN", label: "WPML Bilingual" },
      { value: "4.9★", label: "72 Live Reviews" },
    ],
    worth:
      "Hospitality sites live or die on trust and frictionless booking. This meant going beyond a pretty gallery: integrating live third-party data (Google Reviews, pulled in real time at 4.9★ from 72 reviews), building a genuinely functional reservation flow instead of a static form, and localizing the entire experience — not just translating text, but restructuring URLs and navigation for two languages — so the site could convert both domestic Greek travelers and international guests directly.",
    demonstrates: [
      "CMS & page-building architecture — Built on WordPress with Elementor (v3.29.2), enabling flexible, editable layouts for rooms, galleries, and local guide content.",
      "Multilingual localization — Full Greek/English setup via WPML (Sitepress), with a language-switcher and separate /en/ URL structure for proper bilingual SEO and UX.",
      "Custom-coded booking flow — Embedded date-picker/availability form (arrival, departure, adults/children) integrated with a third-party reservation engine, including form validation and date-formatting logic.",
      "Live third-party data integration — Real-time Google Business reviews widget pulling live rating/review data via API.",
      "Interactive galleries & local guide — Custom Elementor-based image galleries with lightbox functionality for rooms and nearby attractions.",
      "Location integration — Embedded Google Maps for property context and directions.",
      "SEO & localization metadata — hreflang-style language handling, custom favicon/tile icons, and responsive meta viewport configuration.",
      "Social & brand integration — Direct Facebook/Instagram links with consistent branding across all sections.",
    ],
    skills: [
      "WordPress Development",
      "Elementor",
      "WPML (Multilingual/Localization)",
      "Booking Engine/API Integration",
      "Form Validation",
      "Third-Party Widget Integration (Reviews API)",
      "SEO & hreflang Implementation",
      "Responsive/Mobile UI",
    ],
    gallery: [
      "/projects/wordpress-websites/no-stars/screenshots (1).webp",
      "/projects/wordpress-websites/no-stars/screenshots (2).webp",
      "/projects/wordpress-websites/no-stars/screenshots (3).webp",
      "/projects/wordpress-websites/no-stars/screenshots (4).webp",
      "/projects/wordpress-websites/no-stars/screenshots (5).webp",
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
  {
    period: "Completed",
    title: "M.A., English",
    org: "Government College University Faisalabad",
    description:
      "Studied English literature, developing a strong foundation in literary analysis, critical thinking and communication.",
  },
  {
    period: "Completed",
    title: "Bachelor of Education (B.Ed.)",
    org: "Education Studies",
    description:
      "Studied education, teaching methodologies, curriculum development and effective classroom practices.",
  },
];

export interface Publication {
  title: string;
  summary: string;
  journal: string;
  details: string;
}

export const PUBLICATION: Publication = {
  title:
    "Impact of Workforce Motivation on Productivity of Organizations — A Case Study of the Apparel Industry, UK",
  summary:
    "Examined how motivational factors influence employee productivity within the UK apparel sector, analyzing the relationship between workforce engagement, job satisfaction, and organizational output.",
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
  // icon: optional path to an SVG in /public/skills — falls back to a letter badge
  icon?: string;
}

export const SKILLS: Skill[] = [
  {
    name: "WordPress (Themes & Plugins)",
    level: 95,
    icon: "/skills/wordpress.svg",
  },
  { name: "React & MERN Stack", level: 92, icon: "/skills/react.svg" },
  { name: "JavaScript / TypeScript", level: 90, icon: "/skills/javascript.svg" },
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
      "Sehrish is extremely responsive and a great help when needed for my website development. I am always happy to work with her and know I can count on her to get the job done in a timely manner.",
    name: "wanderlustjen",
    title: "United States",
  },
  {
    quote:
      "She helped me a lot with my WooCommerce and other issues. She’s a great person and has excellent knowledge of WordPress, Elementor, domain management, and coding. Communication and delivery were on point. Thank you, Sehrish.",
    name: "elenawww",
    title: "United States",
  },
  {
    quote:
      "Absolutely thrilled with the web development services provided! The team demonstrated exceptional expertise and professionalism throughout the entire project. They were incredibly responsive, understood our requirements perfectly, and delivered a stunning website that exceeded our expectations.",
    name: "andygami",
    title: "Singapore",
  },
  {
    quote:
      "Sehrish Anam was absolutely wonderful to work with. Dedicated to getting it right, she is gifted with an understanding of what you want to see in the design, and so hardworking and diligent to make it happen. Thank you, Sehrish, for your outstanding professionalism and creativity.",
    name: "darlenejacobson",
    title: "United States",
  },
  {
    quote:
      "Sehrish Anam delivered exceptional work on my website, demonstrating top-notch professionalism, attention to detail, and deep code expertise. Communicating with her was a breeze; she was proactive, responsive, and consistently went above and beyond. Her magic touch brought my broken site back to life. I’ll definitely hire her for future website maintenance!",
    name: "consolidatedweb",
    title: "United States",
  },
  {
    quote:
      "Sehrish Anam delivered exceptional work, showcasing her code expertise and keen attention to detail, truly exceeding my expectations. Her proactive communication and politeness made the entire process smooth. She took my dead website and transformed it with her incredible design skills using a new theme. She listened intently to my needs, ensuring changes were made promptly. I’m beyond satisfied and will definitely hire her again.",
    name: "consolidatedweb",
    title: "United States",
  },
  {
    quote:
      "I couldn’t be happier with the effort and care Sehrish Anam demonstrated working on my order. Her work is to a very high standard and always makes sure I am happy. Her communication is excellent, friendly, and clear. There is a high level of knowledge and experience. I would not hesitate to place an order again.",
    name: "artlad",
    title: "United Kingdom",
  },
  {
    quote:
      "Sehrish was easy to work with. She communicated with me well and fixed my problem in no time! Her work was fantastic! I recommend her services and will use her again.",
    name: "kristlstar",
    title: "United States",
  },
  {
    quote:
      "Excellent service. My project was very complicated and she delivered it. She exceeded my expectations, communicated well, and was available on Zoom to discuss solutions to difficulties. Reasonable price; I will get back in the future for my other projects. Thank you again!",
    name: "tbasoglou",
    title: "Australia",
  },
  {
    quote:
      "An unbelievable service. Contacted at 6 p.m. yesterday and the order was completed by 8 a.m. the next day! Highly recommend—a true expert in their field.",
    name: "maxgibbons332",
    title: "United Kingdom",
  },
  {
    quote:
      "Super awesome experience. Something I struggled with for three days was finally solved. Thanks for your magic. 10/10 recommend. Will come back again.",
    name: "dioptanzy",
    title: "Singapore",
  },
  {
    quote:
      "Amazing work! Beautiful website and quick delivery! Sehrish always does the extra mile and goes beyond my expectations. She will recommend what’s best according to what you need, not what you think you need. She knows her things for sure. Looking forward to our next collaboration! Thank you.",
    name: "apalroto",
    title: "Australia",
  },
  {
    quote:
      "Sehrish was a pleasure to work with. She understood the requirements and did exactly what we asked for, she went the extra mile and made sure we were happy. I would highly recommend her, and I will be using her again! Well done Sehrish, you have been a star!",
    name: "jllaniatravelit",
    title: "United Kingdom",
  },
  {
    quote:
      "This is the first time I’m working with her. She is brilliant. Communication is on point. Extremely patient in getting to the bottom of the details and understanding it. Very good with Elementor and WordPress.",
    name: "chitrabharan470",
    title: "India",
  },
  {
    quote:
      "Sehrish is very responsive and she truly tried her best to deliver a result that meets my needs. We had some difficulty understanding each other since my web design skills and computer language are quite limited, but I had a very clear idea of how I wanted my multilingual website to function. Sehrish went out of her way to make me understand what she built and how it functions. Very friendly in her communication. I truly recommend working with her!",
    name: "minkjo",
    title: "Netherlands",
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
