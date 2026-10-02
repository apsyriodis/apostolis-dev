export const siteConfig = {
  name: "Apostolis Syriodis",
  title: "Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer building SaaS platforms with Laravel, React, MySQL & Docker.",
  accentColor: "#2E7D8F",
  social: {
    email: "apsyriodis@gmail.com",
    linkedin: "https://www.linkedin.com/in/apostolis-syriodis-413a691a7",
    github: "https://github.com/apsyriodis",
    upwork: "https://www.upwork.com/freelancers/apostolis97",
    fiverr: "https://www.fiverr.com/apostolis_",
    koalla: "https://www.koalla.gr/korydallos/top-level-category/apostolis-syriodis",
    partnely: "https://partnely.com/partners/apostolis-syriodis-developer",
  },
  aboutMe:
    "I'm a Senior Full Stack Engineer based in Athens, Greece, with 5+ years of experience building production-grade web applications. I started as a backend developer and gradually expanded into full stack — today I design and ship entire SaaS platforms, from database architecture and REST APIs to React frontends and Docker deployments. I've worked on high-traffic retail systems, multi-tenant B2B platforms, and I've built Eukairon — a multi-tenant SaaS booking platform — using Laravel, React, MySQL, Docker, and Stripe. I care about clean code, solid tests, and shipping features that actually solve business problems.",
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
        "A multi-tenant SaaS platform for online bookings. Handles tenant isolation, recurring reservations, Stripe payments, and full test coverage with PHPUnit and Playwright.",
      link: "/projects/eukairon",
      skills: ["Laravel", "React.js", "MySQL", "Docker", "Stripe"],
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
  education: [
    {
      degree: "Master of Science - MS, Computer Science",
      school: "University of West Attica",
      dateRange: "2015 – 2022",
      achievements: [
        "Thesis: Machine learning model for recommending travel destinations based on attractions and reviews.",
        "Built with Laravel, Python and ML libraries.",
      ],
    },
  ],
  certifications: [
    {
      name: "Building with the Claude API",
      issuer: "Anthropic",
      date: "2025",
      skills: ["Prompt Engineering", "MCP", "Claude API"],
    },
    {
      name: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      date: "2025",
      skills: ["MCP"],
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic",
      date: "2025",
      skills: ["Claude Code"],
    },
    {
      name: "AI Capabilities and Limitations",
      issuer: "Anthropic",
      date: "2025",
      skills: ["AI Fundamentals"],
    },
    {
      name: "Introduction to Agent Skills",
      issuer: "Anthropic",
      date: "2025",
      skills: ["AI Agents"],
    },
    {
      name: "Introduction to Subagents",
      issuer: "Anthropic",
      date: "2025",
      skills: ["AI Agents"],
    },
  ],
  ui: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
    },
    hero: {
      hello: "Hello!",
      im: "I'm",
    },
    sections: {
      aboutMe: "About Me",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      education: "Education",
      contact: "Get in touch",
    },
    contact: {
      intro: "Have a project in mind or want to work together? Drop me a message and I'll get back to you as soon as possible.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      sending: "Sending...",
      success: "✓ Message sent! I'll get back to you soon.",
      errorRequired: "All fields are required.",
      errorInvalidEmail: "Please enter a valid email address.",
      errorGeneric: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Building SaaS platforms from scratch",
      rights: "All rights reserved.",
    },
    privacy: "Privacy Policy",
    privacyLastUpdate: "Last updated: October 2, 2026",
    privacyTitle: "Privacy Policy",
    privacyIntro: "This Privacy Policy explains how Apostolis Syriodis (\"I\", \"me\") collects, uses, and protects your personal information when you visit apostolis.dev.",
    privacySections: [
      {
        title: "1. What data I collect",
        body: "When you use the contact form, I collect: your name, your email address, and the content of your message. I do not use cookies, analytics, or any tracking technology on this website.",
      },
      {
        title: "2. How I use your data",
        body: "I use your data solely to respond to your message. I do not sell, rent, or share your information with third parties for marketing purposes.",
      },
      {
        title: "3. Where your data is stored",
        body: "Contact form submissions are delivered via Resend (resend.com) to my personal email inbox. Resend processes the data only to deliver the email. The website is hosted on Vercel (vercel.com), which may log standard server data (IP address, browser) for security and operational purposes.",
      },
      {
        title: "4. How long I keep your data",
        body: "I keep contact form submissions for as long as needed to respond to your inquiry, and up to 12 months thereafter for reference, unless you request deletion earlier.",
      },
      {
        title: "5. Your rights",
        body: "You have the right to access, correct, or delete your personal data at any time. You also have the right to object to processing or request data portability. To exercise any of these rights, contact me at apsyriodis@gmail.com.",
      },
      {
        title: "6. Third-party services",
        body: "This site uses the following third-party services: Resend (email delivery), Vercel (hosting), Cloudflare (DNS). Each of these has its own privacy policy.",
      },
      {
        title: "7. Changes to this policy",
        body: "I may update this Privacy Policy from time to time. The latest version will always be available at apostolis.dev/privacy.",
      },
      {
        title: "8. Contact",
        body: "For any questions about this Privacy Policy, contact me at apsyriodis@gmail.com.",
      },
    ],
  },
};