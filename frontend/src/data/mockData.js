// Mock data for ACENCIA website replica
// This file contains all the mock data used throughout the application

export const companyInfo = {
  name: "ACENCIA GmbH",
  tagline: "WIR MACHEN bAV EINFACH",
  description: "Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge",
  location: "Hackenheim, Deutschland",
  ceo: "Uwe Weimert",
  founded: "1993",
  employees: "50+",
  experience: "30+ Jahre"
};

export const heroSection = {
  title: "Wir machen bAV einfach!",
  subtitle: "Als echter Partner machen wir die betriebliche Vorsorge zum Highlight für Personalabteilung und Mitarbeitende.",
  ctaText: "Jetzt Termin vereinbaren",
  videoPlaceholder: true
};

export const processSteps = [
  {
    title: "Rechtliche Prüfung",
    subtitle: "& Einrichtung bAV",
    description: "Unter Berücksichtigung aller rechtlichen Aspekte ermitteln wir unabhängig das optimale Vorsorgemodell für Unternehmen und Mitarbeitende - individuell zugeschnitten mit innovativen Produktoptionen.",
    icon: "CheckCircle"
  },
  {
    title: "Digitale bAV-Verwaltung",
    subtitle: "& laufender Support", 
    description: "Wir richten Ihre bAV-Verwaltung ein, digitalisieren und automatisieren Ihre Prozesse, unabhängig davon ob Sie bereits eine bAV eingerichtet haben oder dies erst planen. Sie unser persönlicher Support proaktiv.",
    icon: "Settings"
  },
  {
    title: "Mitarbeiterkommunikation",
    subtitle: "& (digitale) Beratung",
    description: "Wir unterstützen Sie bei der bAV-Kommunikation an Ihre Mitarbeitenden durch moderne Informationsmaßnahmen. Auf Wunsch bieten wir individuelle Beratung - digital oder vor Ort.",
    icon: "Users"
  }
];

export const customerSegments = [
  {
    title: "Start-up",
    description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen",
    icon: "Home"
  },
  {
    title: "Mittelstand", 
    description: "Bewährte Konzepte für etablierte mittelständische Betriebe",
    icon: "Building"
  },
  {
    title: "Konzern",
    description: "Komplexe Lösungen für große Unternehmensstrukturen", 
    icon: "Building2"
  }
];

export const companyValues = [
  {
    title: "Partnerschaft",
    description: "Wir verstehen uns als echter Partner unserer Kunden und begleiten sie langfristig.",
    icon: "Users"
  },
  {
    title: "Expertise",
    description: "Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge sprechen für sich.",
    icon: "Award"
  },
  {
    title: "Innovation", 
    description: "Wir digitalisieren und automatisieren Prozesse für maximale Effizienz.",
    icon: "Lightbulb"
  },
  {
    title: "Sicherheit",
    description: "Rechtssichere und compliance-konforme Abwicklung ist unser Standard.",
    icon: "Shield"
  }
];

export const companyStats = {
  experience: "30+ Jahre",
  satisfiedCustomers: "500+", 
  employeesManaged: "50.000+"
};

export const contactInfo = {
  email: "info@acencia.de",
  phone: "+49 (0) 6701 123456",
  address: "ACENCIA GmbH\nHackenheim, Deutschland",
  hours: "Mo-Fr: 8:00-18:00 Uhr\nSa: 9:00-13:00 Uhr"
};

export const navigationLinks = [
  { text: "Über uns", path: "/ueber-uns" },
  { text: "Kontakt", path: "/kontakt" },
  { text: "Login Portal", external: true, url: "https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/" }
];

export const footerLinks = {
  legal: [
    { text: "Datenschutzerklärung", path: "/datenschutz" },
    { text: "Impressum", path: "/impressum" },
    { text: "AGB", path: "/agb" }
  ],
  services: [
    "Rechtliche Prüfung & Einrichtung",
    "Digitale bAV-Verwaltung", 
    "Mitarbeiterkommunikation",
    "Persönliche Beratung"
  ]
};

// External URLs
export const externalUrls = {
  appointmentBooking: "https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/",
  originalWebsite: "https://www.acencia.de/"
};