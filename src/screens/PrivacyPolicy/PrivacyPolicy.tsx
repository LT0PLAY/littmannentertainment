import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy • Littmann Entertainment";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-neutral-100 relative">
      {/* Overlay blockiert keine Klicks */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Header mit Home-Link */}
      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20">
        <Link to="/" className="inline-block py-2 px-1 hover:opacity-80 transition-opacity">
          <h1 className="text-xl sm:text-2xl tracking-wider font-light cursor-pointer">
            LITTMANN<span className="text-[#BFD9DC]">ENTERTAINMENT</span>GROUP
          </h1>
        </Link>
      </header>

      <div className="relative z-10 px-6 py-24 sm:py-32 max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Privacy Policy</h2>
          <p className="text-neutral-400">Effective date: 30 August 2025</p>
        </div>

        {/* Sections */}
        <section className="space-y-10 leading-relaxed text-neutral-300">
          <div>
            <h3 className="text-2xl font-semibold text-white">1. Overview</h3>
            <p>
              We take the protection of your personal data very seriously. Your personal data is
              treated confidentially and in accordance with the statutory data protection
              regulations (in particular the EU General Data Protection Regulation – GDPR) and this
              Privacy Policy. This document explains what data we collect, how we use it, and what
              rights you have.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">2. Data Controller</h3>
            <p>
              Littmann Entertainment Ltd.<br />
              (business name – please adjust if needed)<br />
              London, United Kingdom<br />
              Email: [your email address]<br />
              Phone: [your phone number]
            </p>
            <p className="mt-2">
              As our website is primarily operated in Germany, you may contact us in German or
              English at any time.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">3. Hosting</h3>
            <p>
              Our website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              When you visit our website, Vercel automatically collects certain data (“server log
              files”), including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address (stored in anonymized form)</li>
            </ul>
            <p className="mt-2">
              This data cannot be directly linked to specific individuals and is used solely to
              ensure the secure and stable operation of the website. No merging with other data
              sources takes place.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art. 6(1)(f) GDPR – our legitimate interest in ensuring
              technical stability and security of the website.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">4. Additional Data We Collect</h3>
            <p>We only store personal data if you actively provide it to us, for example:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Contact form submissions</li>
              <li>Email inquiries</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">5. Purpose of Data Processing</h3>
            <p>We process your data for the following purposes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Providing and securing the website</li>
              <li>Responding to inquiries</li>
              <li>Statistical analysis and optimization of our services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">6. Data Retention & Deletion</h3>
            <p>
              Personal data is stored only as long as necessary to fulfill the stated purposes or as
              required by law. You may request the deletion of your data at any time, provided there
              are no statutory retention obligations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">7. Your Rights under GDPR</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access (Art. 15 GDPR)</li>
              <li>Rectification (Art. 16 GDPR)</li>
              <li>Erasure / “Right to be forgotten” (Art. 17 GDPR)</li>
              <li>Restriction of processing (Art. 18 GDPR)</li>
              <li>Data portability (Art. 20 GDPR)</li>
              <li>Objection to processing (Art. 21 GDPR)</li>
              <li>Withdrawal of consent (Art. 7(3) GDPR)</li>
            </ul>
            <p className="mt-2">
              Please contact us via the details provided above. You also have the right to lodge a
              complaint with a data protection authority, typically the authority of your place of
              residence in Germany/EU.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">8. SSL/TLS Encryption</h3>
            <p>
              For security reasons, this website uses HTTPS encryption. You can recognize encrypted
              connections by the lock symbol in your browser’s address bar.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">9. Cookies</h3>
            <p>We use cookies to provide essential website functions and improve the user experience.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Essential cookies:</strong> necessary for technical operation (legal basis:
                Art. 6(1)(f) GDPR).
              </li>
              <li>
                <strong>Analytics/Marketing cookies:</strong> used only with your explicit consent
                (via our cookie banner).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">10. Google Analytics</h3>
            <p>
              This website uses Google Analytics, a web analytics service provided by Google LLC,
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
            <p className="mt-2">
              Google sets cookies (e.g., _ga, _gid) to analyze user behavior. IP addresses are
              processed only in anonymized form.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art. 6(1)(a) GDPR – your consent via our cookie banner.
            </p>
            <p className="mt-2">
              You may prevent data collection by adjusting your browser settings or using the Google
              Analytics Opt-Out Add-on.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">11. Social Media & Embedded Content</h3>
            <p>
              Our website may include content from third-party providers (e.g., Instagram, YouTube).
              Such integrations only become active after your consent and may set their own cookies
              and process personal data.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">12. International Data Transfers</h3>
            <p>
              Since our hosting provider (Vercel) and some services (e.g., Google) are based in the
              USA, data may be transferred to third countries outside the EU. Such transfers are
              carried out based on the EU Commission’s Standard Contractual Clauses (SCCs) and only
              to the extent necessary for the provision of our services.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">13. Updates to this Privacy Policy</h3>
            <p>
              We reserve the right to update this Privacy Policy from time to time. The latest
              version is always available on this page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}