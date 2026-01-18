import Link from "next/link";

export const metadata = {
  title: "Terms of Service – Camille Fénéon",
  description: "Terms of Service for Camille Fénéon's website",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9f6] to-[#f5f3ef]">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:p-12">
          <h1 className="mb-8 text-4xl font-light text-[#2c2c2c] lg:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms of Service
          </h1>
          <div className="mb-6 text-sm text-[#4a4a4a]">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>

          <div className="prose prose-sm max-w-none space-y-6 text-base font-light leading-relaxed text-[#4a4a4a]">
            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily access the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                3. Disclaimer
              </h2>
              <p>
                The materials on this website are provided on an "as is" basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                4. Limitations
              </h2>
              <p>
                In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if I or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on this website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on its website are accurate, complete, or current. I may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                6. Links
              </h2>
              <p>
                I have not reviewed all of the sites linked to this website and am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                7. Modifications
              </h2>
              <p>
                I may revise these Terms of Service at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of France and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-[#2c2c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                9. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact me at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:cfeneon@gmail.com" className="text-[#c9a961] hover:underline">cfeneon@gmail.com</a>
                <br />
                <strong>Phone:</strong> +33752072618 (mobile, France)
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

