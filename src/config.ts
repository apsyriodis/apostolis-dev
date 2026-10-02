export const siteConfig = {
  name: "Apostolos Syriodis",
  title: "Senior Full Stack Developer",
    description:
    "Senior Full Stack Developer with 5+ years of experience in Laravel, PHP, React.js, and MySQL. I build SaaS platforms, REST APIs, and ERP integrations (SAP) from scratch.",
  accentColor: "#2E7D8F",
  social: {
    email: "apsyriodis@gmail.com",
    linkedin: "https://www.linkedin.com/in/apostolos-syriodis-413a691a7",
    github: "https://github.com/apsyriodis",
    upwork: "https://www.upwork.com/freelancers/apostolos97",
    fiverr: "https://www.fiverr.com/apostolis_",
    koalla: "https://www.koalla.gr/korydallos/top-level-category/apostolos-syriodis",
    partnely: "https://partnely.com/partners/apostolis-syriodis-developer",
  },
  aboutMe:
    "I'm a Senior Full Stack Developer based in Athens, Greece, with 5+ years of experience building production-grade web applications. I started as a backend developer and gradually expanded into full stack — today I design and ship entire SaaS platforms, from database architecture and REST APIs to React frontends and Docker deployments. I've worked on high-traffic retail systems, multi-tenant B2B platforms, and I've built Eukairon — a multi-tenant SaaS booking platform — from scratch using Laravel, React, MySQL, Docker, and Stripe. I care about clean code, solid tests, and shipping features that actually solve business problems.",
  skills: [
    "Laravel",
    "PHP",
    "React.js",
    "MySQL",
    "Docker",
    "REST APIs",
    "SaaS Architecture",
    "Multi-tenant Systems",
    "SAP Integrations",
    "Stripe",
    "Playwright",
    "PHPUnit",
  ],
  projects: [
    {
      name: "Eukairon",
      description:
        "A multi-tenant SaaS platform for online bookings, built from scratch. Handles tenant isolation, recurring reservations, Stripe payments, and full test coverage with PHPUnit and Playwright.",
      link: "https://eukairon.gr",
      skills: ["Laravel", "React.js", "MySQL", "Docker", "Stripe"],
    },
    {
      name: "Tekmon",
      description:
        "Multi-tenant B2B SaaS platform. Worked on core features, tenant management, and integrations with external enterprise systems.",
      link: "https://www.tekmon.com",
      skills: ["Laravel", "PHP", "MySQL", "REST APIs"],
    },
    {
      name: "Sklavenitis",
      description:
        "High-traffic retail web applications for one of the largest supermarket chains in Greece. Focused on performance, reliability, and integration with internal systems.",
      link: "https://www.sklavenitis.gr/",
      skills: ["PHP", "Laravel", "MySQL", "Performance"],
    },
    {
      name: "Green Projects",
      description:
        "Microservices-based platform handling data from multiple sources. Designed and implemented backend services and APIs.",
      link: "https://green-projects.gr/",
      skills: ["PHP", "Microservices", "REST APIs", "Docker"],
    },
  ],
  experience: [
    {
      company: "Tekmon",
      title: "Senior Backend Developer",
      dateRange: "2025 – Present",
      bullets: [
        "Developed and maintained a multi-tenant B2B SaaS platform used by enterprise customers.",
        "Built REST APIs and integrated external systems (including SAP) into the platform.",
        "Improved database performance and refactored legacy code for better maintainability.",
      ],
    },
    {
      company: "Sklavenitis",
      title: "Full Stack Developer",
      dateRange: "2023 – 2025",
      bullets: [
        "Worked on high-traffic retail web applications serving millions of requests.",
        "Optimized database queries and caching layers, reducing page load times.",
        "Collaborated with cross-functional teams to deliver features on tight deadlines.",
      ],
    },
    {
      company: "Green Projects",
      title: "Software Developer",
      dateRange: "2021 – 2023",
      bullets: [
        "Built backend services as part of a microservices architecture.",
        "Designed and consumed REST APIs for internal and external integrations.",
        "Containerized services with Docker for consistent deployments.",
      ],
    },
  ],
};