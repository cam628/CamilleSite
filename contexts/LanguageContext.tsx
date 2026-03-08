"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "en" || savedLang === "fr") {
      setLanguageState(savedLang);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "fr") {
        setLanguageState("fr");
      }
    }
  }, []);

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translations = language === "fr" ? translationsFr : translationsEn;
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Translation objects
const translationsEn: Record<string, any> = {
  nav: {
    about: "About",
    experience: "Experience",
    services: "Services",
    travel: "Travel",
    contact: "Contact",
  },
  hero: {
    subtitle: "Hospitality · On-site Operations",
    item1: "Guest care & experience improvement",
    item1Desc: "Attentive to detail and naturally empathetic, I can anticipate guests' needs and adapt seamlessly to social conventions and expectations.",
    item2: "Property care and daily oversight",
    item2Desc: "Highly organised and hands-on when needed, I combine a background in information technology and project management with real on-site experience. I have independently built a temporary accommodation, including basic plumbing and utilities, while coordinating professional contractors for a larger construction project. This allows me to structure workflows, anticipate issues, and communicate clearly with tradespeople, while fully respecting technical boundaries.",
    item3: "Coordination of services and suppliers",
    item3Desc: "For nearly a decade, I was the sole administrator of a business combining production and retail. I coordinated suppliers across multiple sectors — including chemical, food and perfumery industries — and ensured smooth alignment between sourcing, production and distribution. This experience has given me a structured, realistic approach to coordination, grounded in day-to-day operational constraints.",
    item4: "Building trusted relationships with guests, owners and partners",
    item4Desc: "Personable and approachable, I take accountability seriously and invest time and consistency in building trust. Strong emotional intelligence allows me to read situations and people accurately — knowing when to listen, when to contribute and when to take responsibility. My experience working in demanding environments, including as a volunteer firefighter within close-knit teams, has reinforced my ability to earn respect through reliability, sound judgement and calm communication.",
    item5: "Identifying and supporting new business opportunities",
    item5Desc: "Extensive international travel and long-term stays across multiple continents have exposed me to a wide range of hospitality models, operational standards and ways of working. Combined with an entrepreneurial background, this enables me to identify relevant opportunities for improvement or development and to support them pragmatically — assessing feasibility, aligning initiatives with local realities and coordinating implementation on site.",
    viewServices: "View Services",
    contactMe: "Contact Me",
    downloadCV: "Download Resume",
  },
  snapshot: {
    title: "Snapshot",
    education1: "Baccalauréat scientifique, France",
    education2: "BBA – HEC Montréal, trilingual (French, English, Spanish), major in IT",
    education3: "Master in Information Technology – University of Queensland, Australia",
    experience1: "Volunteer firefighter (NSW, Advanced Firefighter, first aid, heavy vehicle licence)",
    experience2: "Founder & manager – Duck Distilling, alcohol essence (production, logistics, customer relations, marketing)",
    experience3: "Built an off-grid tiny home alone in the Australian bush",
    languages: "French · English · Spanish",
  },
  about: {
    title: "Core Strengths",
    strength1: "Real-world resilience, developed through direct involvement in fires, floods, storms and accidents, remaining calm and effective in demanding situations.",
    strength2: "Organisation, logistics and planning, including stock management and day-to-day operational coordination.",
    strength3: "Adaptive communication skills, adjusting communication style with judgement and sensitivity to suit different situations and contexts.",
    strength4: "Practical and technical confidence, comfortable with tools, basic plumbing and electrical work, as well as IT and back-office systems.",
  },
  experience: {
    title: "Selected Experience",
    duckTitle: "Duck Distilling · Australia",
    duckPeriod: "2016 – 2025 · Founder & manager",
    duck1: "Created and ran a small spirits/essence of whisky business.",
    duck2: "Managed production, admin, logistics, customer relations and marketing.",
    duck3: "Built a client database and automated invoicing (MS Access).",
    duck4: "Food Coordinator Certificate.",
    fireTitle: "NSW Rural Fire Service · Australia",
    firePeriod: "2019 – 2025 · Volunteer firefighter",
    fire1: "Advanced Firefighter certification, first aid, heavy vehicle licence.",
    fire2: "Interventions on bushfires, floods, car accidents and cyclones.",
    fire3: "Equipment Officer, then Training Officer for volunteers.",
    fire4: "Learned the absolute importance of clear communication and adapting messages to different skill levels.",
    hospitalityTitle: "Hospitality · Canada & Spain",
    hospitalityPeriod: "2009 – 2014 · Waitress & bartender",
    hospitality1: "Service in busy restaurants and bars in Madrid and Montréal.",
    hospitality2: "Customer care, cash handling, team coordination.",
    hospitality3: "Experience with international guests and cultures.",
    tinyTitle: "Tiny home project · Australian bush",
    tinyPeriod: "Solo off-grid build",
    tiny1: "Designed and built a tiny home in the bush, off-grid.",
    tiny2: "Worked alone with tools, basic plumbing and electricity.",
    tiny3: "Demonstrated autonomy, perseverance and problem-solving.",
  },
  services: {
    title: "What I Can Do",
    subtitle: "For your property or hospitality business",
    guestTitle: "Guest Experience",
    guest1: "Warm, discreet welcome and check-in/out",
    guest2: "Coordination with drivers, activities, restaurants",
    guest3: "Handling special requests and VIP expectations",
    guest4: "Clear communication with owners or managers",
    propertyTitle: "Property & Logistics",
    property1: "Planning arrivals, departures and cleaning",
    property2: "Basic troubleshooting and coordination with contractors",
    property3: "Stock management (amenities, welcome items, bar, etc.)",
    property4: "Practical mindset and no fear of tools or 'getting hands dirty'",
    digitalTitle: "Back-office & Digital",
    digital1: "Managing listings and calendars (Airbnb / similar)",
    digital2: "Simple website and content updates",
    digital3: "Basic databases, invoices and reports",
    digital4: "Communication in French, English and Spanish",
  },
  travel: {
    title: "Travel & Life Path",
    mapNote: "Yellow markers indicate places I travelled to for discovery, while orange markers represent places where I lived.",
  },
  contact: {
    title: "Contact",
    text1: "I am currently exploring opportunities in",
    text1Highlight: "villas, hotels, ecolodges, short-term rentals",
    text2: "For resume, references or a video call, feel free to reach out:",
    email: "Email:",
    phone: "Phone:",
    location: "Based in:",
    locationText: "Paris · available to relocate anywhere",
  },
  footer: {
    copyright: "© {year} Camille Fénéon. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    // Add more privacy policy translations as needed
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated:",
    backToHome: "← Back to Home",
    // Add more terms translations as needed
  },
  travelMap: {
    france: "Country of origin; formative years and education, building strong cultural fluency, discretion and social awareness.",
    montrealStudy: "BBA at HEC Montréal (trilingual) with an IT specialisation.",
    montrealWork: "Service industry work in bars and at the university.",
    montrealLife: "AIESEC member.",
    toronto: "TOEFL preparation course focused on advanced academic and professional English.",
    madrid: "Hospitality work in an Irish pub, covering bar service, food service and venue upkeep in a high-traffic environment.",
    laPlata: "Volunteer work with a non-profit organisation, providing administrative support and coordinating donation campaigns.",
    burkina: "Supported teachers in a school for children with physical and intellectual disabilities.",
    brisbane: "Studied a Master in Information Technology at the University of Queensland.",
    brisbaneEnt: "Built and tested an early business venture, gaining hands-on experience in operations, execution and resilience.",
    mullumbimby: "Founder and manager of Duck Distilling, producing and distributing whisky essences for the homebrew industry.",
    mullumbimbyFire: "Volunteer firefighter with the NSW Rural Fire Service; operational response to fires, floods, storms and road accidents, including training and equipment roles.",
    usa: "Travel across both coasts, observing varied hospitality standards and service cultures.",
    yucatan: "Travel experience.",
    belize: "Travel experience.",
    dublin: "Travel experience.",
    islay: "Travel experience.",
    prague: "Travel experience.",
    italy: "Travel experience.",
    greece: "Travel experience.",
    ibiza: "Nature-focused travel away from nightlife.",
    morocco: "Multi-city travel across Morocco.",
    tanzania: "Travel experience.",
    senegal: "Travel experience.",
    egypt: "Travel experience.",
    doha: "Travel experience.",
    beijing: "Travel experience.",
    thailand: "Travel experience.",
    laos: "Travel experience.",
    myanmar: "Travel experience.",
    bali: "Travel experience.",
    kualaLumpur: "Travel experience.",
    bundaberg: "Domestic travel.",
    penguin: "Domestic travel.",
    moree: "Outback travel experience.",
  },
};

const translationsFr: Record<string, any> = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    services: "Services",
    travel: "Voyages",
    contact: "Contact",
  },
  hero: {
    subtitle: "Hospitalité · Opérations sur site",

item1: "Expérience voyageurs et qualité d’accueil",
item1Desc: "Attentive aux détails et dotée d’une réelle sensibilité relationnelle, je sais anticiper les besoins des voyageurs et m’adapter avec aisance aux différents contextes et attentes. J’accorde une importance particulière à la qualité de l’accueil et à la fluidité de l’expérience sur place.",

item2: "Gestion et supervision quotidienne des biens",
item2Desc: "Organisée et pragmatique, je combine une formation en technologies de l’information et en gestion de projet avec une expérience concrète sur le terrain. J’ai notamment conçu et réalisé un hébergement temporaire en autonomie (plomberie et installations de base), tout en coordonnant des artisans pour un projet de construction plus conséquent. Cette expérience me permet de structurer les opérations, d’anticiper les imprévus et de dialoguer efficacement avec les intervenants techniques, dans le respect des contraintes métier.",

item3: "Coordination des prestataires et fournisseurs",
item3Desc: "Pendant près de dix ans, j’ai assuré seule la gestion administrative et opérationnelle d’une entreprise combinant production et vente. J’ai coordonné des fournisseurs issus de secteurs variés — chimie, agroalimentaire, parfumerie — en garantissant la cohérence entre approvisionnement, production et distribution. Cette expérience m’a permis de développer une approche rigoureuse et réaliste de la coordination, ancrée dans les contraintes du quotidien.",

item4: "Relation de confiance avec voyageurs, propriétaires et partenaires",
item4Desc: "Accessible et fiable, je prends mes responsabilités avec sérieux et constance. Mon intelligence relationnelle me permet d’analyser rapidement les situations, d’ajuster ma communication et d’intervenir avec discernement. Mon engagement en tant que pompière volontaire, au sein d’équipes soudées et exigeantes, a renforcé mon sens des priorités, ma capacité à garder mon calme et à instaurer une confiance durable.",

item5: "Contribution au développement de l’activité",
item5Desc: "Mes expériences internationales et mes séjours prolongés sur plusieurs continents m’ont exposée à différents modèles d’hospitalité et d’organisation. Associée à mon parcours entrepreneurial, cette ouverture me permet d’identifier des axes d’amélioration concrets, d’en évaluer la faisabilité et d’accompagner leur mise en œuvre de manière pragmatique et structurée.",

viewServices: "Voir les services",
contactMe: "Me contacter",
downloadCV: "Télécharger le CV",

  },
  snapshot: {
    title: "Aperçu",

    education1: "Baccalauréat scientifique – France",
    education2: "BBA – HEC Montréal (programme trilingue : français, anglais, espagnol), spécialisation en technologies de l’information",
    education3: "Master en technologies de l’information – University of Queensland, Australie",
    
    experience1: "Sapeur-pompier volontaire (NSW Rural Fire Service) – niveau Advanced Firefighter, premiers secours, permis poids lourd",
    experience2: "Fondatrice et responsable d’activité – Duck Distilling (production, logistique, gestion fournisseurs, relation client, marketing)",
    experience3: "Conception et construction autonome d’un hébergement off-grid en Australie",
    
    languages: "Français · Anglais · Espagnol",
    
  },
  about: {
    title: "Forces clés",

    strength1: "Résilience éprouvée sur le terrain, développée lors d’interventions en situation d’urgence (incendies, inondations, tempêtes, accidents), avec une capacité à rester calme, lucide et efficace sous pression.",
    
    strength2: "Sens de l’organisation et coordination opérationnelle : gestion des priorités, logistique, suivi des stocks et structuration des tâches au quotidien.",
    
    strength3: "Communication adaptative et intelligence relationnelle, avec la capacité d’ajuster mon approche selon les interlocuteurs et les contextes.",
    
    strength4: "Aisance technique et autonomie pratique : outils, plomberie et électricité de base, ainsi que maîtrise des systèmes informatiques et outils de gestion.",
     },
  experience: {
    title: "Expériences sélectionnées",

    duckTitle: "Duck Distilling · Australie",
    duckPeriod: "2016 – 2025 · Fondatrice et responsable d’activité",
    duck1: "Création et développement d’une entreprise spécialisée dans la production.",
    duck2: "Pilotage de la production, de l’administration, de la logistique, de la relation client et du marketing.",
    duck3: "Création d’une base de données clients et automatisation de la facturation (MS Access).",
    duck4: "Certification Responsable Sécurité Alimentaire.",
    
    fireTitle: "NSW Rural Fire Service · Australie",
    firePeriod: "2019 – 2025 · Sapeur-pompier volontaire",
    fire1: "Qualification Advanced Firefighter, premiers secours et permis poids lourd.",
    fire2: "Interventions sur feux de brousse, inondations, accidents de la route et cyclones.",
    fire3: "Responsable matériel, puis responsable formation au sein de la brigade.",
    fire4: "Développement d’une communication claire et adaptée à des niveaux de compétences variés.",
    
    hospitalityTitle: "Hospitalité · Canada et Espagne",
    hospitalityPeriod: "2009 – 2014 · Service en salle et bar",
    hospitality1: "Expérience en restaurants et bars à fort volume à Madrid et Montréal.",
    hospitality2: "Accueil et service clients, gestion de caisse et coordination en équipe.",
    hospitality3: "Travail dans des environnements multiculturels exigeants.",
    
    tinyTitle: "Projet d’hébergement autonome · Australie",
    tinyPeriod: "Conception et réalisation en autonomie",
    tiny1: "Conception et construction d’un hébergement off-grid en milieu isolé.",
    tiny2: "Réalisation des installations de base (plomberie, électricité simple) et travail en autonomie avec outillage.",
    tiny3: "Illustration concrète d’autonomie, de persévérance et de capacité à résoudre des problèmes sur le terrain.",
    
  },
  services: {
    title: "Ce que je peux apporter",
    subtitle: "Pour votre propriété ou votre activité d’hospitalité",
  
    guestTitle: "Expérience voyageurs",
    guest1: "Accueil soigné et discret, gestion des arrivées et départs",
    guest2: "Coordination avec chauffeurs, activités et restaurants",
    guest3: "Gestion des demandes spécifiques et attentes particulières",
    guest4: "Communication claire et régulière avec propriétaires ou gestionnaires",
  
    propertyTitle: "Gestion opérationnelle et logistique",
    property1: "Organisation des arrivées, départs et planning de ménage",
    property2: "Petits dépannages et coordination des intervenants techniques",
    property3: "Suivi des stocks (équipements, produits d’accueil, bar, etc.)",
    property4: "Approche pratique et engagement sur le terrain si nécessaire",
  
    digitalTitle: "Back-office et outils numériques",
    digital1: "Gestion des annonces et calendriers (Airbnb et plateformes similaires)",
    digital2: "Mises à jour simples de sites web et contenus",
    digital3: "Suivi administratif : bases de données, facturation et reporting",
    digital4: "Communication professionnelle en français, anglais et espagnol",
  },
  
  travel: {
    title: "Parcours international",
    mapNote: "Les marqueurs jaunes indiquent les lieux visités, les marqueurs orange les lieux de résidence prolongée.",
  },
  
  contact: {
    title: "Contact",
    text1: "Je suis actuellement à la recherche d’opportunités au sein de",
    text1Highlight: "villas, hôtels, écolodges ou structures de location courte durée",
    text2: "Pour recevoir mon CV, des références ou organiser un échange en visio :",
    email: "Email :",
    phone: "Téléphone :",
    location: "Localisation :",
    locationText: "Basée à Paris · mobile et ouverte à une relocalisation",
  
  
  },
  footer: {
    copyright: "© {year} Camille Fénéon. Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
  },
  privacy: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour :",
  },
  terms: {
    title: "Conditions d'Utilisation",
    lastUpdated: "Dernière mise à jour :",
    backToHome: "← Retour à l'Accueil",
  },
  travelMap: {



        france: "Pays d’origine. Parcours scolaire et universitaire, développement d’une forte aisance culturelle, d’un sens de la discrétion et d’une conscience sociale affirmée.",
      
        montrealStudy: "BBA à HEC Montréal (programme trilingue) avec spécialisation en technologies de l’information.",
        montrealWork: "Expérience dans le secteur des services, en bars et au sein de l’université.",
        montrealLife: "Engagement au sein d’AIESEC.",
      
        toronto: "Préparation au TOEFL, avec un focus sur l’anglais académique et professionnel avancé.",
      
        madrid: "Expérience en hospitalité dans un pub irlandais : service au bar, en salle et gestion d’un environnement à fort volume.",
      
        laPlata: "Mission au sein d’une organisation à but non lucratif : soutien administratif et coordination de campagnes de dons.",
      
        burkina: "Appui aux enseignants dans une école accueillant des enfants en situation de handicap physique et intellectuel.",
      
        brisbane: "Master en technologies de l’information – University of Queensland.",
        brisbaneEnt: "Création et expérimentation d’un premier projet entrepreneurial, avec apprentissage concret des opérations et de la résilience.",
      
        mullumbimby: "Fondatrice et responsable de Duck Distilling : production et distribution dans le secteur des spiritueux.",
        mullumbimbyFire: "Sapeur-pompier volontaire (NSW Rural Fire Service) : interventions sur incendies, inondations et accidents, avec responsabilités en matériel et formation.",
      
        usa: "Voyage sur les deux côtes, observation de différents standards d’hospitalité et cultures de service.",
      
        yucatan: "Voyage et découverte culturelle.",
        belize: "Voyage.",
        dublin: "Voyage.",
        islay: "Voyage.",
        prague: "Voyage.",
        italy: "Voyage.",
        greece: "Voyage.",
        ibiza: "Séjour axé sur la nature, en dehors des circuits festifs.",
        morocco: "Voyage itinérant à travers plusieurs villes.",
        tanzania: "Voyage.",
        senegal: "Voyage.",
        egypt: "Voyage.",
        doha: "Voyage.",
        beijing: "Voyage.",
        thailand: "Voyage.",
        laos: "Voyage.",
        myanmar: "Voyage.",
        bali: "Voyage.",
        kualaLumpur: "Voyage.",
        bundaberg: "Voyage domestique en Australie.",
        penguin: "Voyage domestique en Australie.",
        moree: "Expérience de voyage en zone rurale australienne (outback).",
      
      
  
  
  },
};

