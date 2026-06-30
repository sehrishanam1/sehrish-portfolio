import {
  Code2,
  Globe,
  Blocks,
  Rocket,
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
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://sehrish-portfolio.vercel.app",
  bio: "Senior full-stack developer with 8+ years building production web apps across the MERN stack and WordPress — custom themes, published plugins, REST APIs, and SEO/performance work that ships fast and ranks well.",
};

export const SOCIALS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: "https://github.com/sehrishanam1", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
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
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Students Trained" },
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
    title: "WordPress Development",
    description:
      "Custom themes, plugins and REST APIs — pixel-perfect, mobile-responsive and built to WordPress coding standards.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Full-Stack (MERN)",
    description:
      "End-to-end web apps with React, Node.js, Express and MongoDB — Redux state, JWT auth and real-time dashboards.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Plugins & Widgets",
    description:
      "Published WordPress.org plugins, Elementor widgets and Gutenberg blocks — reusable, dependency-free and well-documented.",
    icon: Blocks,
  },
  {
    number: "04",
    title: "SEO & Performance",
    description:
      "Core Web Vitals tuning, lazy loading and on-page SEO that cut load times 40%+ and drive first-page Google rankings.",
    icon: Rocket,
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  tags: string[];
  image: string;
  description: string[];
  skills: string[];
  gallery: string[];
  links?: ProjectLink[];
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
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    description: [
      "A lightweight WordPress plugin that adds an estimated reading time and a smooth scroll-progress bar to any post — published and listed on the official WordPress.org plugin directory.",
      "It ships with an AI-assisted time override so authors can fine-tune estimates, plus full styling controls, making it drop-in friendly for any theme without touching code.",
    ],
    skills: ["PHP", "WordPress Plugin API", "JavaScript", "CSS3", "AI Integration"],
    links: [{ label: "View on GitHub", href: "https://github.com/Nuvora" }],
    gallery: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 2,
    title: "Nuvora Timeline for Elementor",
    category: "Published Elementor Widget Plugin",
    year: "2025",
    tags: ["Plugins", "WordPress"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    description: [
      "A published Elementor widget that adds fully customizable animated timelines — vertical or horizontal — to any WordPress site built with Elementor.",
      "It includes 3 ready-made color schemes, scroll-triggered animations and unlimited items via repeater fields, giving content teams a polished storytelling component with zero code.",
    ],
    skills: ["PHP", "Elementor Widget API", "JavaScript", "CSS3", "Repeater Fields"],
    links: [{ label: "View on GitHub", href: "https://github.com/Nuvora" }],
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    title: "Nuvora AIO Blocks",
    category: "Published Gutenberg Block Toolkit",
    year: "2025",
    tags: ["Plugins", "WordPress"],
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    description: [
      "An all-in-one Gutenberg toolkit packing 6 custom blocks — Counter, Pricing Table, Testimonial Carousel, Tabs, Icon Box and Slider — each with multiple styles and a live editor preview.",
      "Built dependency-free with no page builder required, it gives site owners professional layout building blocks straight inside the native WordPress block editor.",
    ],
    skills: ["PHP", "WordPress Block Editor API", "React", "JavaScript", "SCSS"],
    links: [{ label: "View on GitHub", href: "https://github.com/Nuvora" }],
    gallery: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
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
