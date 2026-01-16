// app/page.tsx
import Link from "next/link";
import Header from "../components/Header";
import TravelMap from "../components/TravelMap";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Camille Fénéon",
    jobTitle: "Guest Experience & Operations Specialist",
    description:
      "Guest Experience Specialist for luxury villas, boutique hotels and premium short-term rentals. Combining elegant hospitality codes with real-world operational skills.",
    email: "cfeneon@gmail.com",
    telephone: "+61412852387",
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
                Hospitality · On-site Operations 
              </p>
              <h1 className="mb-8 text-left text-2xl font-light leading-relaxed text-[#2c2c2c] lg:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                <ul className="space-y-2 text-left">
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>Guest care & experience improvement</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      Attentive to detail and naturally empathetic, I can anticipate guests’ needs and adapt seamlessly to social conventions and expectations.
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>Property care and daily oversight</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      Highly organised and hands-on when needed, I combine a background in information technology and project management with real on-site experience. I have independently built a temporary accommodation, including basic plumbing and utilities, while coordinating professional contractors for a larger construction project. This allows me to structure workflows, anticipate issues, and communicate clearly with tradespeople, while fully respecting technical boundaries.
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>Coordination of services and suppliers</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      For nearly a decade, I was the sole administrator of a business combining production and retail. I coordinated suppliers across multiple sectors — including chemical, food and perfumery industries — and ensured smooth alignment between sourcing, production and distribution. This experience has given me a structured, realistic approach to coordination, grounded in day-to-day operational constraints.
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>Building trusted relationships with guests, owners and partners</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      Personable and approachable, I take accountability seriously and invest time and consistency in building trust. Strong emotional intelligence allows me to read situations and people accurately — knowing when to listen, when to contribute and when to take responsibility. My experience working in demanding environments, including as a volunteer firefighter within close-knit teams, has reinforced my ability to earn respect through reliability, sound judgement and calm communication.
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <div className="flex items-start gap-4 cursor-pointer">
                      <span className="text-[#c9a961] mt-1 transition-transform duration-300 ease-in-out inline-block group-hover:rotate-90">{'>'}</span>
                      <span>Identifying and supporting new business opportunities</span>
                    </div>
                    <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-96">
                      <div className="mt-3 -ml-6 -mr-6 px-6 py-4 text-base font-light leading-relaxed text-[#4a4a4a]">
                      Extensive international travel and long-term stays across multiple continents have exposed me to a wide range of hospitality models, operational standards and ways of working. Combined with an entrepreneurial background, this enables me to identify relevant opportunities for improvement or development and to support them pragmatically — assessing feasibility, aligning initiatives with local realities and coordinating implementation on site.
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
                  <span className="relative z-10">View Services</span>
                </a>
                <a
                  href="#contact"
                  className="group rounded-sm border border-[#c9a961] bg-transparent px-8 py-3 text-sm font-light uppercase tracking-wider text-[#4a4a4a] transition-all duration-300 hover:bg-[#c9a961] hover:text-white"
                >
                  Contact Me
                </a>
                <a
                  href="/Camille-Resume.pdf"
                  className="group rounded-sm border border-[#c9a961] bg-transparent px-6 py-3 text-xs font-light uppercase tracking-wider text-[#4a4a4a] backdrop-blur-sm transition-all duration-300 hover:bg-[#c9a961] hover:text-white"
                >
                  Download CV
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
                Snapshot
              </h2>
              <div className="grid gap-4 text-sm font-light text-[#4a4a4a] md:grid-cols-2 md:items-center">
                <div className="space-y-3 md:pt-6">
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◆</span>
                    <span>Baccalauréat scientifique, France</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◆</span>
                    <span>BBA – HEC Montréal, trilingual (French, English, Spanish), major in IT</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◆</span>
                    <span>Master in Information Technology – University of Queensland, Australia</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">●</span>
                    <span>Volunteer firefighter (NSW, Advanced Firefighter, first aid, heavy vehicle licence)</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">■</span>
                    <span>Founder & manager – Duck Distilling, alcohol essence (production, logistics, customer relations, marketing)</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">▲</span>
                    <span>Built an off-grid tiny home alone in the Australian bush</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#c9a961] text-lg">◉</span>
                    <span>French · English · Spanish</span>
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
                Core Strengths
              </h2>
              <div className="mx-auto h-[1px] w-24 bg-[#c9a961]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  <span className="font-medium text-[#2c2c2c]">
                    Real-world resilience,
                  </span>
                  developed through direct involvement in {" "}
                  <span className="font-medium text-[#2c2c2c]">
                    fires, floods, storms and accidents
                  </span>
                  , remaining calm and effective in demanding situations.
                </p>
              </div>
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  <span className="font-medium text-[#2c2c2c]">
                    Organisation, logistics and planning
                  </span>
                  , including{" "}
                  <span className="font-medium text-[#2c2c2c]">
                    stock management
                  </span>{" "}
                  and day-to-day operational coordination.
                </p>
              </div>
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  <span className="font-medium text-[#2c2c2c]">
                  Adaptive communication skills,
                  </span>{" "}
                  adjusting communication style with judgement and sensitivity to suit different situations and contexts. </p>
              </div>
              <div className="card-hover rounded-lg border border-[#c9a961] bg-white/80 p-8 shadow-lg backdrop-blur-sm aspect-square flex items-center">
                <p className="text-sm text-slate-700 md:text-base">
                  <span className="font-medium text-[#2c2c2c]">
                    Practical and technical confidence
                  </span>
                  , comfortable with{" "}
                  <span className="font-medium text-[#2c2c2c]">
                    tools, basic plumbing and electrical work
                  </span>
                  , as well as{" "}
                  <span className="font-medium text-[#2c2c2c]">
                    IT and back-office systems
                  </span>
                  .
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
                Selected Experience
              </h2>
              <div className="mx-auto h-[1px] w-24 bg-[#c9a961]"></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Duck Distilling · Australia",
                  period: "2016 – 2025 · Founder & manager",
                  items: [
                    "Created and ran a small spirits/essence of whisky business.",
                    "Managed production, admin, logistics, customer relations and marketing.",
                    "Built a client database and automated invoicing (MS Access).",
                    "Food Coordinator Certificate.",
                  ],
                },
                {
                  title: "NSW Rural Fire Service · Australia",
                  period: "2019 – 2025 · Volunteer firefighter",
                  items: [
                    "Advanced Firefighter certification, first aid, heavy vehicle licence.",
                    "Interventions on bushfires, floods, car accidents and cyclones.",
                    "Equipment Officer, then Training Officer for volunteers.",
                    "Learned the absolute importance of clear communication and adapting messages to different skill levels.",
                  ],
                },
                {
                  title: "Hospitality · Canada & Spain",
                  period: "2009 – 2014 · Waitress & bartender",
                  items: [
                    "Service in busy restaurants and bars in Madrid and Montréal.",
                    "Customer care, cash handling, team coordination.",
                    "Experience with international guests and cultures.",
                  ],
                },
                {
                  title: "Tiny home project · Australian bush",
                  period: "Solo off-grid build",
                  items: [
                    "Designed and built a tiny home in the bush, off-grid.",
                    "Worked alone with tools, basic plumbing and electricity.",
                    "Demonstrated autonomy, perseverance and problem-solving.",
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
                What I Can Do
              </h2>
              <p className="mx-auto max-w-2xl text-base font-light text-[#4a4a4a]">
                For your property or hospitality business
              </p>
              <div className="mx-auto mt-4 h-[1px] w-24 bg-[#c9a961]"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Guest Experience",
                  items: [
                    "Warm, discreet welcome and check-in/out",
                    "Coordination with drivers, activities, restaurants",
                    "Handling special requests and VIP expectations",
                    "Clear communication with owners or managers",
                  ],
                },
                {
                  title: "Property & Logistics",
                  items: [
                    "Planning arrivals, departures and cleaning",
                    "Basic troubleshooting and coordination with contractors",
                    "Stock management (amenities, welcome items, bar, etc.)",
                    "Practical mindset and no fear of tools or 'getting hands dirty'",
                  ],
                },
                {
                  title: "Back-office & Digital",
                  items: [
                    "Managing listings and calendars (Airbnb / similar)",
                    "Simple website and content updates",
                    "Basic databases, invoices and reports",
                    "Communication in French, English and Spanish",
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
                Travel & Life Path
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
                  Contact
                </h2>
                <div className="mx-auto h-[1px] w-24 bg-[#c9a961]"></div>
              </div>
              <div className="space-y-6 text-center">
                <p className="text-base font-light leading-relaxed text-[#4a4a4a]">
                  I am currently exploring opportunities in{" "}
                  <span className="font-medium text-[#2c2c2c]">
                     villas, hotels, ecolodges, short-term rentals.
                  </span>.
                </p>
                <p className="text-base font-light leading-relaxed text-[#4a4a4a]">
                  For CV, references or a video call, feel free to reach out:
                </p>
                <div className="space-y-4 pt-6">
                  <p className="text-sm font-light text-[#4a4a4a]">
                    <span className="text-[#c9a961]">📧</span> Email:{" "}
                    <a href="mailto:your.email@example.com" className="font-medium text-[#2c2c2c] hover:text-[#c9a961] transition-colors">
                     cfeneon@gmail.com
                    </a>
                  </p>
                  <p className="text-sm font-light text-[#4a4a4a]">
                    <span className="text-[#c9a961]">📱</span> Phone:{" "}
                    <span className="font-medium text-[#2c2c2c]">+61412852387 (WHatsApp / Signal) +33752072618 (mobile, France)</span>
                  </p>
                  <p className="text-sm font-light text-[#4a4a4a]">
                    <span className="text-[#c9a961]">📍</span> Based in:{" "}
                    <span className="font-medium text-[#2c2c2c]">Paris · available to relocate anywhere</span>
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
              © {new Date().getFullYear()} Camille Fénéon. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-light text-[#4a4a4a]">
              <Link href="/privacy-policy" className="hover:text-[#c9a961] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#c9a961] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
