export const siteConfig = {
  name: "Αποστόλης Συριώδης",
  title: "Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer με 5+ χρόνια εμπειρίας. Χτίζω SaaS πλατφόρμες με Laravel, React, MySQL & Docker.",
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
    "Είμαι Senior Full Stack Engineer με έδρα την Αθήνα και 5+ χρόνια εμπειρίας στην κατασκευή production-grade web εφαρμογών. Ξεκίνησα ως backend developer και σταδιακά επεκτάθηκα σε full stack — σήμερα σχεδιάζω και παραδίδω ολόκληρες SaaS πλατφόρμες, από αρχιτεκτονική βάσης δεδομένων και REST APIs μέχρι React frontends και Docker deployments. Έχω δουλέψει σε high-traffic retail συστήματα, multi-tenant B2B πλατφόρμες, και έχω χτίσει το Eukairon — μια multi-tenant SaaS πλατφόρμα κρατήσεων — με Laravel, React, MySQL, Docker και Stripe. Με νοιάζει ο καθαρός κώδικας, τα σωστά tests, και το να παραδίδω features που λύνουν πραγματικά επιχειρηματικά προβλήματα.",
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
        "Μια multi-tenant SaaS πλατφόρμα online κρατήσεων. Διαχειρίζεται tenant isolation, επαναλαμβανόμενες κρατήσεις, Stripe payments, και πλήρη test coverage με PHPUnit και Playwright.",
      link: "/el/projects/eukairon",
      skills: ["Laravel", "React.js", "MySQL", "Docker", "Stripe"],
    },
  ],
  experience: [
    {
      company: "Tekmon",
      title: "Senior Backend Engineer",
      dateRange: "2025 – Σήμερα",
      bullets: [
        "Ανάπτυξη και συντήρηση multi-tenant B2B SaaS πλατφόρμας που χρησιμοποιείται από enterprise πελάτες.",
        "Κατασκευή REST APIs και ενσωμάτωση εξωτερικών συστημάτων (συμπεριλαμβανομένου του SAP) στην πλατφόρμα.",
        "Βελτιστοποίηση απόδοσης βάσης δεδομένων και refactoring legacy κώδικα για καλύτερη συντηρησιμότητα.",
      ],
    },
    {
      company: "Σκλαβενίτης",
      title: "Full Stack Developer",
      dateRange: "2023 – 2025",
      bullets: [
        "Εργασία σε high-traffic retail web εφαρμογές που εξυπηρετούν εκατομμύρια requests.",
        "Βελτιστοποίηση database queries και caching layers, μειώνοντας τους χρόνους φόρτωσης.",
        "Συνεργασία με cross-functional ομάδες για παράδοση features σε στενά deadlines.",
      ],
    },
    {
      company: "Green Projects",
      title: "Software Developer",
      dateRange: "2021 – 2023",
      bullets: [
        "Κατασκευή backend services στο πλαίσιο microservices αρχιτεκτονικής.",
        "Σχεδιασμός και κατανάλωση REST APIs για εσωτερικές και εξωτερικές ενσωματώσεις.",
        "Containerization services με Docker για συνεπή deployments.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science - MS, Computer Science",
      school: "Πανεπιστήμιο Δυτικής Αττικής",
      dateRange: "2015 – 2022",
      achievements: [
        "Διπλωματική: Μοντέλο μηχανικής μάθησης για σύσταση ταξιδιωτικών προορισμών βάσει αξιοθέατων και κριτικών.",
        "Υλοποίηση με Laravel, Python και ML libraries.",
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
      about: "Σχετικά",
      projects: "Έργα",
      experience: "Εμπειρία",
      education: "Εκπαίδευση",
    },
    hero: {
      hello: "Γεια σας!",
      im: "Είμαι ο",
    },
    sections: {
      aboutMe: "Σχετικά με εμένα",
      projects: "Έργα",
      experience: "Εμπειρία",
      certifications: "Πιστοποιήσεις",
      education: "Εκπαίδευση",
      contact: "Επικοινωνία",
    },
    contact: {
      intro: "Έχετε κάποιο project στο μυαλό σας ή θέλετε να συνεργαστούμε; Στείλτε μου μήνυμα και θα σας απαντήσω το συντομότερο δυνατό.",
      name: "Όνομα",
      namePlaceholder: "Το όνομά σας",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Μήνυμα",
      messagePlaceholder: "Πείτε μου για το project σας...",
      send: "Αποστολή",
      sending: "Αποστολή...",
      success: "✓ Το μήνυμα στάλθηκε! Θα σας απαντήσω σύντομα.",
      errorRequired: "Όλα τα πεδία είναι υποχρεωτικά.",
      errorInvalidEmail: "Παρακαλώ εισάγετε ένα έγκυρο email.",
      errorGeneric: "Κάτι πήγε λάθος. Παρακαλώ δοκιμάστε ξανά.",
    },
    footer: {
      tagline: "Χτίζω SaaS πλατφόρμες από το μηδέν",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
    },
    privacy: "Πολιτική Απορρήτου",
    privacyLastUpdate: "Τελευταία ενημέρωση: 2 Οκτωβρίου 2026",
    privacyTitle: "Πολιτική Απορρήτου",
    privacyIntro: "Η παρούσα Πολιτική Απορρήτου εξηγεί πώς ο Αποστόλης Συριώδης (\"εγώ\") συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σας δεδομένα όταν επισκέπτεστε το apostolis.dev.",
    privacySections: [
      {
        title: "1. Ποια δεδομένα συλλέγω",
        body: "Όταν χρησιμοποιείτε τη φόρμα επικοινωνίας, συλλέγω: το όνομά σας, τη διεύθυνση email σας, και το περιεχόμενο του μηνύματός σας. Δεν χρησιμοποιώ cookies, analytics, ή οποιαδήποτε τεχνολογία tracking σε αυτόν τον ιστότοπο.",
      },
      {
        title: "2. Πώς χρησιμοποιώ τα δεδομένα σας",
        body: "Χρησιμοποιώ τα δεδομένα σας αποκλειστικά για να απαντήσω στο μήνυμά σας. Δεν πωλώ, νοικιάζω, ή μοιράζομαι τις πληροφορίες σας με τρίτους για σκοπούς marketing.",
      },
      {
        title: "3. Πού αποθηκεύονται τα δεδομένα σας",
        body: "Οι υποβολές της φόρμας επικοινωνίας παραδίδονται μέσω του Resend (resend.com) στο προσωπικό μου inbox email. Το Resend επεξεργάζεται τα δεδομένα μόνο για την παράδοση του email. Ο ιστότοπος φιλοξενείται στο Vercel (vercel.com), το οποίο μπορεί να καταγράφει τυπικά δεδομένα server (IP address, browser) για λόγους ασφαλείας και λειτουργίας.",
      },
      {
        title: "4. Πόσο καιρό διατηρώ τα δεδομένα σας",
        body: "Διατηρώ τις υποβολές της φόρμας επικοινωνίας για όσο χρειάζεται για να απαντήσω στο αίτημά σας, και έως 12 μήνες μετά για αναφορά, εκτός αν ζητήσετε διαγραφή νωρίτερα.",
      },
      {
        title: "5. Τα δικαιώματά σας",
        body: "Έχετε το δικαίωμα πρόσβασης, διόρθωσης, ή διαγραφής των προσωπικών σας δεδομένων ανά πάσα στιγμή. Έχετε επίσης το δικαίωμα εναντίωσης στην επεξεργασία ή αίτησης φορητότητας δεδομένων. Για να ασκήσετε οποιοδήποτε από αυτά τα δικαιώματα, επικοινωνήστε μαζί μου στο apsyriodis@gmail.com.",
      },
      {
        title: "6. Υπηρεσίες τρίτων",
        body: "Αυτός ο ιστότοπος χρησιμοποιεί τις εξής υπηρεσίες τρίτων: Resend (παράδοση email), Vercel (φιλοξενία), Cloudflare (DNS). Κάθε μία έχει τη δική της πολιτική απορρήτου.",
      },
      {
        title: "7. Αλλαγές στην παρούσα πολιτική",
        body: "Μπορεί να ενημερώνω αυτή την Πολιτική Απορρήτου κατά καιρούς. Η τελευταία έκδοση θα είναι πάντα διαθέσιμη στο apostolis.dev/el/privacy.",
      },
      {
        title: "8. Επικοινωνία",
        body: "Για ερωτήσεις σχετικά με αυτή την Πολιτική Απορρήτου, επικοινωνήστε μαζί μου στο apsyriodis@gmail.com.",
      },
    ],
  },
};