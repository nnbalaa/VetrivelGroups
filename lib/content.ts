// Central content store for Vetrivel Groups site.
// Keeping copy here (rather than scattered through components) makes it easy
// to update site-wide facts — stats, contact details, nav — in one place.

export const site = {
  name: "Vetrivel Groups",
  tagline: "Driving Innovation. Delivering Excellence. Creating Value.",
  description:
    "Vetrivel Groups is a diversified Chennai-based enterprise delivering engineering solutions, manufacturing excellence, hospitality services, event management, and creative expertise across India.",
  url: "https://www.vetrivelgroups.in",
  founded: 2020,
  founder: {
    name: "Sukumar S",
    title: "Founder & CEO",
    bio: "Sukumar S founded Vetrivel Groups in 2020 with a vision to build a disciplined enterprise that delivers excellence across engineering, technology, hospitality, and creative services. Under his leadership, the group has grown into a diversified organisation serving businesses and institutions across multiple industries.",
    quote:
      "We started Vetrivel with a single principle — do the work properly, every time. Whether it is a vending machine, a circuit board, a wedding, or a hospital meal, the standard is the same. That is what we promise our customers and our people.",
  },
  contact: {
    addressLines: [
      "8A Devi Karumari Amman Nagar",
      "Vijayanagar, Velachery",
      "Chennai 600042",
    ],
    email: "sukumar@vetrivelgroups.in",
    careersEmail: "careers@vetrivelgroups.in",
    phone: "+91 73584 07487",
    phoneHref: "+917358407487",
    hours: "Mon–Sat · 9:30 AM – 6:30 PM IST",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "2020", label: "Year Founded" },
  { value: "50+", label: "Professionals" },
  { value: "5", label: "Business Divisions" },
  { value: "200+", label: "Clients Served" },
] as const;

export const trustStrip = [
  "Founded in 2020",
  "5 Business Divisions",
  "50+ Professionals",
  "Chennai Headquarters",
  "Pan-India Service Network",
] as const;

export type DivisionId =
  | "vending"
  | "electronics"
  | "photography"
  | "events"
  | "catering";

export interface Division {
  id: DivisionId;
  number: string;
  name: string;
  shortName: string;
  contactLabel: string;
  icon: "Coffee" | "CircuitBoard" | "Camera" | "Sparkles" | "UtensilsCrossed";
  overview: string;
  tagline: string;
  services: string[];
  benefits: string[];
  galleryCategory: string;
}

export const divisions: Division[] = [
  {
    id: "vending",
    number: "01",
    name: "Coffee & Tea Vending Machine Manufacturing",
    shortName: "Vending Manufacturing",
    contactLabel: "Coffee & Tea Vending Machines",
    icon: "Coffee",
    overview:
      "We design and manufacture premium coffee and tea vending machines for corporate offices, institutions, and public spaces, backed by a nationwide service network for installation, AMC, and spare parts support.",
    tagline: "End-to-end vending solutions — built, installed, and supported in-house.",
    services: ["Manufacturing", "Installation", "Maintenance", "AMC Services", "Spare Parts Support"],
    benefits: [
      "In-house manufacturing means faster turnaround and tighter quality control",
      "Pan-India installation and AMC network keeps machines running reliably",
      "Genuine spare parts support extends machine lifespan",
    ],
    galleryCategory: "Vending Manufacturing",
  },
  {
    id: "electronics",
    number: "02",
    name: "PCB Design & Electronics Development",
    shortName: "Electronics Development",
    contactLabel: "PCB Design & Electronics",
    icon: "CircuitBoard",
    overview:
      "A dedicated electronics team delivering PCB layout, prototyping, embedded firmware, and full product development for startups and industrial clients alike.",
    tagline: "From schematic to shipped product — electronics R&D with conviction.",
    services: ["PCB Layout Design", "Prototype Development", "Embedded Systems", "Product Development", "Electronics Consulting"],
    benefits: [
      "One team carries a product from concept through to manufacture",
      "Embedded firmware expertise alongside hardware design",
      "Engineering judgment shaped by real industrial deployments",
    ],
    galleryCategory: "Embedded Prototype",
  },
  {
    id: "photography",
    number: "03",
    name: "Professional Photography",
    shortName: "Professional Photography",
    contactLabel: "Professional Photography",
    icon: "Camera",
    overview:
      "Editorial-grade photography for corporates, events, products, and commercial campaigns — produced by a team that understands narrative as much as composition.",
    tagline: "A storytelling lens for brands, products, and people.",
    services: ["Corporate Photography", "Event Photography", "Commercial Photography", "Product Photography"],
    benefits: [
      "Editorial sensibility brought to commercial briefs",
      "One point of contact from shoot planning to final delivery",
      "Fast turnaround for time-sensitive campaigns",
    ],
    galleryCategory: "Brand Campaign Shoot",
  },
  {
    id: "events",
    number: "04",
    name: "Event Management",
    shortName: "Event Management",
    contactLabel: "Event Management",
    icon: "Sparkles",
    overview:
      "Conferences, product launches, exhibitions, and milestone celebrations — planned, produced, and managed end-to-end with creative direction and operational rigor.",
    tagline: "Memorable moments, flawlessly executed at any scale.",
    services: ["Corporate Events", "Product Launches", "Weddings & Celebrations", "Conferences", "Exhibitions"],
    benefits: [
      "Single team handles creative direction and on-ground execution",
      "Proven at both intimate and large-scale formats",
      "Vendor and venue relationships built over years of delivery",
    ],
    galleryCategory: "Corporate Conference",
  },
  {
    id: "catering",
    number: "05",
    name: "Hospital Catering Services",
    shortName: "Hospital Catering",
    contactLabel: "Hospital Catering Services",
    icon: "UtensilsCrossed",
    overview:
      "Specialist patient meal services and staff cafeteria management — dietitian-supervised, bulk-capable, and built around hygiene and consistency.",
    tagline: "Nutrition-led catering for hospitals and large institutions.",
    services: ["Patient Meals", "Nutrition-Based Meal Planning", "Staff Cafeteria Management", "Bulk Catering Services"],
    benefits: [
      "Dietitian-supervised menus tailored to patient needs",
      "Consistent hygiene standards across multi-site operations",
      "Bulk-capable kitchens built for institutional reliability",
    ],
    galleryCategory: "Hospital Cafeteria",
  },
];

export const timeline = [
  {
    year: "2020",
    title: "Founded in Chennai",
    description:
      "Sukumar S establishes Vetrivel Groups with a vision for a multi-disciplinary Indian business house.",
  },
  {
    year: "2021",
    title: "Manufacturing Expansion",
    description:
      "Launch of in-house coffee and tea vending machine production with a pan-India service network.",
  },
  {
    year: "2022",
    title: "Electronics Division",
    description:
      "Dedicated PCB design and embedded systems division established to serve industrial clients.",
  },
  {
    year: "2023",
    title: "Hospitality Growth",
    description:
      "Hospital catering services scaled to multi-site operations with dietitian-supervised programs.",
  },
  {
    year: "2024",
    title: "Diversified Operations",
    description:
      "Photography and event management verticals launched, completing the five-division group.",
  },
] as const;

export const coreValues = [
  {
    title: "Integrity",
    description: "We do what we say, and we say what is true — with clients, partners, and each other.",
  },
  {
    title: "Excellence",
    description: "Every division is held to the same standard, regardless of the scale of the work.",
  },
  {
    title: "Innovation",
    description: "We invest in better methods and tools rather than settling for the familiar ones.",
  },
  {
    title: "Accountability",
    description: "Small, accountable teams own outcomes from commitment through delivery.",
  },
  {
    title: "Customer Commitment",
    description: "We build long-term partnerships, not one-off transactions.",
  },
] as const;

export interface ClientLogo {
  name: string;
  logo: string;
}

export const trustedClients: ClientLogo[] = [
  { name: "Anabond", logo: "/images/clients/anabond.png" },
  { name: "Billroth Hospitals", logo: "/images/clients/billroth.png" },
  { name: "Kauvery Hospital", logo: "/images/clients/kauvery.png" },
  { name: "Ravel", logo: "/images/clients/ravel.png" },
  { name: "Skill-Lync", logo: "/images/clients/skill-lync.png" },
];

export const whyChooseUs = [
  {
    title: "Diversified Strength",
    description: "Five active business verticals operating under one disciplined leadership.",
    icon: "Building2",
  },
  {
    title: "Quality Discipline",
    description: "Documented processes, accountable teams, and measurable service standards.",
    icon: "ShieldCheck",
  },
  {
    title: "50+ Specialists",
    description: "Engineers, chefs, photographers, and producers — all in-house.",
    icon: "Users",
  },
  {
    title: "Customer Focus",
    description: "Long-term partnerships rather than one-off transactions.",
    icon: "Medal",
  },
] as const;

export interface GalleryItem {
  category: string;
  division: string;
  icon: Division["icon"];
}

export const galleryItems: GalleryItem[] = [
  { category: "Vending Manufacturing", division: "Engineering", icon: "Coffee" },
  { category: "Corporate Conference", division: "Events", icon: "Sparkles" },
  { category: "Brand Campaign Shoot", division: "Photography", icon: "Camera" },
  { category: "Embedded Prototype", division: "Electronics", icon: "CircuitBoard" },
  { category: "Hospital Cafeteria", division: "Catering", icon: "UtensilsCrossed" },
  { category: "Product Photography", division: "Photography", icon: "Camera" },
  { category: "Product Launch", division: "Events", icon: "Sparkles" },
  { category: "On-site Installation", division: "Service", icon: "Coffee" },
  { category: "Patient Meal Service", division: "Catering", icon: "UtensilsCrossed" },
];

export const galleryNotice =
  "Project visuals and case studies are currently being curated. Additional work samples will be published as projects are completed and approved for public release.";

export const careerBenefits = [
  {
    title: "Real Ownership",
    description: "Small, accountable teams with visible impact on real customers.",
    icon: "Briefcase",
  },
  {
    title: "Learn Across Disciplines",
    description: "Move between divisions and stretch your craft over time.",
    icon: "GraduationCap",
  },
  {
    title: "People-First Culture",
    description: "Stable employment, fair pay, and a leadership team you can talk to.",
    icon: "Heart",
  },
] as const;

export interface OpenPosition {
  title: string;
  category: string;
  experience: string;
  type: string;
  location: string;
}

export const openPositions: OpenPosition[] = [
  { title: "PCB Design Engineer", category: "Electronics", experience: "2–5 Years Experience", type: "Full-time", location: "Chennai" },
  { title: "Mechanical Production Engineer", category: "Engineering", experience: "2–4 Years Experience", type: "Full-time", location: "Chennai" },
  { title: "Event Producer", category: "Operations", experience: "2–6 Years Experience", type: "Full-time", location: "Chennai" },
  { title: "Catering Operations Lead", category: "Hospitality", experience: "3–6 Years Experience", type: "Full-time", location: "Chennai" },
  { title: "Photographer / Cinematographer", category: "Photography", experience: "1–4 Years Experience", type: "Full-time / Freelance", location: "Chennai" },
  { title: "Field Service Technician", category: "Engineering", experience: "1–5 Years Experience", type: "Full-time", location: "Pan-India" },
];

export const lifeAtVetrivel = [
  {
    title: "Learn by Doing",
    description: "Work directly with leadership and clients. Take real responsibility from day one.",
  },
  {
    title: "Cross-Division Exposure",
    description: "Engineering, hospitality, events, and creative services under one group.",
  },
  {
    title: "Ownership Mindset",
    description: "Small teams. Big trust. Your ideas turn into real outcomes.",
  },
] as const;

export const teamTestimonials = [
  {
    quote:
      "Working across engineering and events projects accelerated my learning and helped me discover what I enjoy most.",
    name: "Aravind R.",
    role: "Production Engineer",
  },
  {
    quote:
      "The leadership team is accessible and decisions are made quickly. It's a place where good ideas get backed.",
    name: "Nandhini K.",
    role: "Event Producer",
  },
  {
    quote:
      "The culture is supportive and people care about doing the work properly, every single time.",
    name: "Vignesh S.",
    role: "Field Service Technician",
  },
] as const;

export const hiringProcess = [
  { step: 1, title: "Application Review", description: "2–3 business days" },
  { step: 2, title: "Initial Discussion", description: "30-minute conversation" },
  { step: 3, title: "Technical / Functional Assessment", description: "Role-specific evaluation" },
  { step: 4, title: "Final Interview", description: "Meet the team" },
  { step: 5, title: "Offer & Onboarding", description: "Welcome to the team!" },
] as const;

export const contactDivisionOptions = [
  "General Enquiry",
  "Coffee & Tea Vending Machines",
  "PCB Design & Electronics",
  "Professional Photography",
  "Event Management",
  "Hospital Catering Services",
  "Careers",
  "Partnership Opportunities",
] as const;
