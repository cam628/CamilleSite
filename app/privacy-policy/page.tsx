import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – Camille Fénéon",
  description: "Privacy Policy for Camille Fénéon's website",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9f6] to-[#f5f3ef]">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:p-12">
          <h1 className="mb-8 text-4xl font-light text-[#2c2c2c] lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy Policy
          </h1>
          <div className="mb-6 text-sm text-[#4a4a4a]">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>

          <div className="prose prose-sm max-w-none space-y-6 text-base font-light leading-relaxed text-[#4a4a4a]">
            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                1. Introduction
              </h2>
              <p>
                This Privacy Policy describes how Camille Fénéon ("I", "me", or "my") collects, uses, and shares your personal information when you visit my website (the "Service").
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                2. Information I Collect
              </h2>
              <p>
                When you visit my website, I may collect certain information automatically, including:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>IP address</li>
                <li>Referring website addresses</li>
              </ul>
              <p className="mt-4">
                If you contact me via email or phone, I will collect the information you provide, such as your name, email address, phone number, and any message content.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                3. How I Use Your Information
              </h2>
              <p>I use the information I collect to:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Respond to your inquiries and requests</li>
                <li>Provide, maintain, and improve my website</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                4. Information Sharing
              </h2>
              <p>
                I do not sell, trade, or rent your personal information to third parties. I may share your information only in the following circumstances:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect my rights and safety</li>
                <li>With service providers who assist in operating my website (who are bound by confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                My website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but this may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                6. Data Security
              </h2>
              <p>
                I implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and I cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                7. Your Rights
              </h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                8. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                9. Children's Privacy
              </h2>
              <p>
                My website is not intended for children under the age of 16. I do not knowingly collect personal information from children under 16.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                10. Changes to This Privacy Policy
              </h2>
              <p>
                I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                11. Contact Me
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact me at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:cfeneon@gmail.com" className="text-[#c9a961] hover:underline">cfeneon@gmail.com</a>
                <br />
                <strong>Phone:</strong> +61412852387 (WhatsApp / Signal) or +33752072618 (mobile, France)
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-stone-200 pt-8">
            <Link href="/" className="text-sm font-light text-[#c9a961] hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

