// app/page.tsx
"use client";

import Link from "next/link";
import Header from "../components/Header";
import TravelMap from "../components/TravelMap";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomePage() {
  const { language, t } = useLanguage();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Camille Fénéon",
    jobTitle: "Guest Experience & Operations Specialist",
    description:
      "Guest Experience Specialist for luxury villas, boutique hotels and premium short-term rentals. Combining elegant hospitality codes with real-world operational skills.",
    email: "cfeneon@gmail.com",
    telephone: "+33752072618",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "HEC Montréal",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Queensland",
      },
    ],
    knowsLanguage: ["French", "English", "Spanish"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Guest Experience Specialist",
      occupationLocation: {
        "@type": "City",
        name: "Paris",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div id="top" className="min-h-screen">
        <Header />

      <main className="overflow-hidden">
        {/* HERO SECTION - Modern & Dynamic */}
        <section className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8 lg:pt-32 lg:pb-28">
          <div className="mx-auto max-w-4xl">
            <div className="animate-fade-in text-left">
              <p className="mb-6 text-center text-sm font-light uppercase tracking-[0.3em] text-[#c9a961]">
                {t("hero.subtitle")}
              </p>
              <h1 className="mb-8 text-left text-2xl font-light leading-relaxed text-[#2c2c2c] lg:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                <ul className="space-y-2 text-left">
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>{t("hero.item1")}</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      {t("hero.item1Desc")}
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>{t("hero.item2")}</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      {t("hero.item2Desc")}
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>{t("hero.item3")}</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      {t("hero.item3Desc")}
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>{t("hero.item4")}</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      {t("hero.item4Desc")}
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>{t("hero.item5")}</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      {t("hero.item5Desc")}
                      </div>
                    </div>
                  </li>
                </ul>
              </h1>
             
              <div className="flex flex-wrap justify-center gap-4 mt-16">
                <a
                  href="#services"
                  className="group relative overflow-hidden rounded-sm bg-transparent border border-[#c9a961] px-8 py-3 text-sm font-light uppercase tracking-wider text-[#4a4a4a] transition-all duration-300 hover:bg-[#c9a961] hover:text-white hover:shadow-lg"
                >
                  <span className="relative z-10">{t("hero.viewServices")}</span>
                </a>
                <a
                  href="#contact"
                  className="group rounded-sm border border-[#c9a961] bg-transparent px-8 py-3 text-sm font-light uppercase tracking-wider text-[#4a4a4a] transition-all duration-300 hover:bg-[#c9a961] hover:text-white"
                >
                  {t("hero.contactMe")}
                </a>
                <a
                  href="/ResumeH-CamilleFeneon.pdf"
                  className="group rounded-sm border border-[#c9a961] bg-transparent px-6 py-3 text-xs font-light uppercase tracking-wider text-[#4a4a4a] backdrop-blur-sm transition-all duration-300 hover:bg-[#c9a961] hover:text-white"
                >
                  {t("hero.downloadCV")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SNAPSHOT CARD - Elegant floating card */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="card-hover animate-fade-in rounded-lg border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:p-12">
              <h2 className="mb-6 text-center text-2xl font-light text-[#c9a961]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t("snapshot.title")}
              </h2>
              <div className="grid gap-4 text-sm font-light text-[#4a4a4a] md:grid-cols-2 md:items-center">
                <div className="space-y-3 md:pt-6">
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◆</span>
                    <span>{t("snapshot.education1")}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◆</span>
                    <span>{t("snapshot.education2")}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◆</span>
                    <span>{t("snapshot.education3")}</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">●</span>
                    <span>{t("snapshot.experience1")}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">■</span>
                    <span>{t("snapshot.experience2")}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">▲</span>
                    <span>{t("snapshot.experience3")}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◉</span>
                    <span>{t("snapshot.languages")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* CORE STRENGTHS SECTION */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-light text-[#2c2c2c] lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t("about.title")}
              </h2>
              <div className="mx-auto h-[1px] w-24 bg-[#c9a961]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  {t("about.strength1")}
                </p>
              </div>
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  {t("about.strength2")}
                </p>
              </div>
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  {t("about.strength3")}
                </p>
              </div>
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  {t("about.strength4")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-light text-[#2c2c2c] lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t("experience.title")}
              </h2>
              <div className="mx-auto h-[1px] w-24 bg-[#c9a961]"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: t("experience.duckTitle"),
                  period: t("experience.duckPeriod"),
                  items: [
                    t("experience.duck1"),
                    t("experience.duck2"),
                    t("experience.duck3"),
                    t("experience.duck4"),
                  ],
                },
                {
                  title: t("experience.fireTitle"),
                  period: t("experience.firePeriod"),
                  items: [
                    t("experience.fire1"),
                    t("experience.fire2"),
                    t("experience.fire3"),
                    t("experience.fire4"),
                  ],
                },
                {
                  title: t("experience.hospitalityTitle"),
                  period: t("experience.hospitalityPeriod"),
                  items: [
                    t("experience.hospitality1"),
                    t("experience.hospitality2"),
                    t("experience.hospitality3"),
                  ],
                },
                {
                  title: t("experience.tinyTitle"),
                  period: t("experience.tinyPeriod"),
                  items: [
                    t("experience.tiny1"),
                    t("experience.tiny2"),
                    t("experience.tiny3"),
                  ],
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className="card-hover animate-fade-in rounded-lg border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className="mb-2 text-lg font-medium text-[#2c2c2c]">{exp.title}</h3>
                  <p className="mb-4 text-xs font-light uppercase tracking-wider text-[#c9a961]">{exp.period}</p>
                  <ul className="space-y-2 text-sm font-light leading-relaxed text-[#4a4a4a]">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#c9a961]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* SERVICES SECTION */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-light text-[#2c2c2c] lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t("services.title")}
              </h2>
              <p className="mx-auto max-w-2xl text-base font-light text-[#4a4a4a]">
                {t("services.subtitle")}
              </p>
              <div className="mx-auto mt-4 h-[1px] w-24 bg-[#c9a961]"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: t("services.guestTitle"),
                  items: [
                    t("services.guest1"),
                    t("services.guest2"),
                    t("services.guest3"),
                    t("services.guest4"),
                  ],
                },
                {
                  title: t("services.propertyTitle"),
                  items: [
                    t("services.property1"),
                    t("services.property2"),
                    t("services.property3"),
                    t("services.property4"),
                  ],
                },
                {
                  title: t("services.digitalTitle"),
                  items: [
                    t("services.digital1"),
                    t("services.digital2"),
                    t("services.digital3"),
                    t("services.digital4"),
                  ],
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="card-hover animate-fade-in rounded-lg border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <h3 className="mb-6 text-xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <ul className="space-y-3 text-sm font-light leading-relaxed text-[#4a4a4a]">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#c9a961]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* TRAVEL SECTION */}
        <section id="travel" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-light text-[#2c2c2c] lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t("travel.title")}
              </h2>
              <div className="mx-auto h-[1px] w-24 bg-[#c9a961]"></div>
            </div>
            <div>
              <div className="card-hover rounded-lg border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:p-12">
                <TravelMap />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* CONTACT SECTION */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-32 pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="card-hover rounded-lg border border-stone-200 bg-white/80 p-12 shadow-sm backdrop-blur-sm lg:p-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-4xl font-light text-[#2c2c2c] lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t("contact.title")}
                </h2>
                <div className="mx-auto h-[1px] w-24 bg-[#c9a961]"></div>
              </div>
              <div className="space-y-6 text-center">
                <p className="text-base font-light leading-relaxed text-[#4a4a4a]">
                  {t("contact.text1")}{" "}
                  <span className="font-medium text-[#2c2c2c]">
                     {t("contact.text1Highlight")}
                  </span>.
                </p>
                <p className="text-base font-light leading-relaxed text-[#4a4a4a]">
                  {t("contact.text2")}
                </p>
                <div className="space-y-4 pt-6">
                  <p className="text-sm font-light text-[#4a4a4a]">
                    <span className="text-[#c9a961]">📧</span> {t("contact.email")}{" "}
                    <a href="mailto:cfeneon@gmail.com" className="font-medium text-[#2c2c2c] hover:text-[#c9a961] transition-colors">
                     cfeneon@gmail.com
                    </a>
                  </p>
                  <p className="text-sm font-light text-[#4a4a4a]">
                    <span className="text-[#c9a961]">📱</span> {t("contact.phone")}{" "}
                    <span className="font-medium text-[#2c2c2c]">+33752072618 (France)</span>
                  </p>
                  <p className="text-sm font-light text-[#4a4a4a]">
                    <span className="text-[#c9a961]">📍</span> {t("contact.location")}{" "}
                    <span className="font-medium text-[#2c2c2c]">{t("contact.locationText")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-white/50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-xs font-light text-[#4a4a4a]">
              {t("footer.copyright").replace("{year}", new Date().getFullYear().toString())}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-light text-[#4a4a4a]">
              <Link href="/privacy-policy" className="hover:text-[#c9a961] transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#c9a961] transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
