import {
  Code2,
  Globe,
  Blocks,
  Rocket,
  Github,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Sehrish Anam",
  role: "Senior Full-Stack & WordPress Developer",
  email: "sehrishanam1@gmail.com",
  phone: "+92 300 0000000",
  location: "Faisalabad, Pakistan",
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

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  href?: string;
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
    category: "Published WordPress.org plugin · 2026",
    tags: ["Plugins", "WordPress"],
    href: "https://github.com/Nuvora",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Nuvora Timeline for Elementor",
    category: "Elementor widget plugin · 2025",
    tags: ["Plugins", "WordPress"],
    href: "https://github.com/Nuvora",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Nuvora AIO Blocks",
    category: "Gutenberg block toolkit · 2025",
    tags: ["Plugins", "WordPress"],
    href: "https://github.com/Nuvora",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "iSky9 — Cloud & Cybersecurity",
    category: "Custom WordPress website · 2025",
    tags: ["WordPress", "Web"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Avento App",
    category: "MERN web application · 2024",
    tags: ["MERN", "Web"],
    href: "https://github.com/sehrishanam1/avento-app",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Employee Management System",
    category: "MERN dashboard with RBAC · 2025",
    tags: ["MERN", "Web"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
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
