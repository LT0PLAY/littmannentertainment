import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy • Littmann Entertainment";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-neutral-100 relative">
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20">
        <Link to="/" className="inline-block py-2 px-1 hover:opacity-80 transition-opacity">
          <h1 className="text-xl sm:text-2xl tracking-wider font-light cursor-pointer">
            LITTMANN<span className="text-[#BFD9DC]">ENTERTAINMENT</span>GROUP
          </h1>
        </Link>
      </header>

      <div className="relative z-10 px-6 py-24 sm:py-32 max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Privacy Policy</h2>
          <p className="text-neutral-400">Effective date: 30 August 2025</p>
        </div>

        <section className="space-y-10 leading-relaxed text-neutral-300">
          <div>
            <h3 className="text-2xl font-semibold text-white">1. Overview</h3>
            <p>
              We protect personal data in line with the EU General Data Protection Regulation (GDPR),
              the UK GDPR and the UK Data Protection Act 2018. This notice explains what we collect,
              how we use it, and your rights.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">2. Data Controller</h3>
            <p>
              Littmann Entertainment Ltd.<br />
              62 Woodberry Grove<br />
              London, N4 1SN<br />
              United Kingdom<br />
              Email: <a href="mailto:hello@littmann-agency.com" className="underline">hello@littmann-agency.com</a><br />
              Phone: <a href="tel:(+44) 07868392193" className="underline">(+44) 07868 392193</a>
            </p>
            <p className="mt-2">You may contact us in English or German.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">2a. EU/EEA Representative (Art. 27 GDPR)</h3>
            <p>
              If we offer services to individuals in the EU/EEA and have no EU establishment, we appoint an EU representative:
            </p>
            <p className="mt-2">
              <em>Representative name, address, email (to be inserted)</em>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">3. Hosting</h3>
            <p>
              Our website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              When you visit our website, Vercel may process “server log files”, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address (stored or truncated in anonymized form where possible)</li>
            </ul>
            <p className="mt-2">
              Purpose: secure and stable operation. No merging with other data sources.
              <br />
              <strong>Legal basis:</strong> Art. 6(1)(f) GDPR / UK GDPR (legitimate interests).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">4. Additional Data We Collect</h3>
            <p>We process personal data only if you provide it to us, e.g.:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Contact form submissions (name, email, message)</li>
              <li>Email inquiries</li>
              <li>Client/artist management data for agency and management services (contact, contractual and billing data)</li>
            </ul>
            <p className="mt-2">
              <strong>Legal bases:</strong> Art. 6(1)(b) GDPR (contract), Art. 6(1)(f) GDPR (legitimate interest in service delivery and communications), and Art. 6(1)(c) GDPR (legal obligations, e.g. tax retention).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">5. Purpose of Processing</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Providing and securing the website</li>
              <li>Responding to inquiries and managing client/artist relationships</li>
              <li>Statistical analysis and service optimization (with consent where required)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">6. Data Retention & Deletion</h3>
            <p>
              We store personal data only as long as necessary for the stated purposes or as required by law.
              You may request deletion unless statutory retention applies (e.g. tax law).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">7. Your Rights</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access (Art. 15)</li>
              <li>Rectification (Art. 16)</li>
              <li>Erasure (Art. 17)</li>
              <li>Restriction (Art. 18)</li>
              <li>Data portability (Art. 20)</li>
              <li>Objection (Art. 21)</li>
              <li>Withdraw consent (Art. 7(3))</li>
            </ul>
            <p className="mt-2">
              Contact: <a href="mailto:hello@littmann-agency.com" className="underline">hello@littmann-agency.com</a>.
              You can complain to your local EU/EEA authority or the UK Information Commissioner’s Office (ICO).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">8. SSL/TLS Encryption</h3>
            <p>We use HTTPS. Look for the lock icon in your browser.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">9. Cookies & Consent</h3>
            <p>
              We use cookies and similar technologies. Non-essential tools run only with your consent via our
              consent banner (Google Consent Mode v2 supported).
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Essential:</strong> technical operation (Art. 6(1)(f) GDPR).</li>
              <li><strong>Analytics/Marketing:</strong> only with consent (Art. 6(1)(a) GDPR).</li>
            </ul>
            <p className="mt-2">
              <Link to="/privacy-settings" className="underline">Manage cookie preferences</Link>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">10. Google Analytics</h3>
            <p>
              We use Google Analytics (Google LLC). Cookies such as _ga and _gid may be set. IP addresses are processed in anonymized form.
              <br />
              <strong>Legal basis:</strong> consent (Art. 6(1)(a) GDPR).
            </p>
            <p className="mt-2">
              You can withdraw consent any time in the cookie settings. For more control, use browser settings or Google’s opt-out tools where available.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">11. Social Media & Embedded Content</h3>
            <p>
              We may embed third-party content (e.g., YouTube, Instagram). These providers may set cookies and process personal data after your consent.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">12. International Data Transfers</h3>
            <p>
              Where data is transferred to countries outside the EU/EEA or the UK, we rely on appropriate safeguards,
              including adequacy decisions (e.g., EU-U.S. Data Privacy Framework for eligible U.S. providers) and
              Standard Contractual Clauses where required.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">13. Processors & Agreements</h3>
            <p>
              We use vetted processors under Art. 28 GDPR, including our hosting provider (Vercel). Processing is governed by data processing agreements.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">14. Supervisory Authorities</h3>
            <p>
              UK: Information Commissioner’s Office (ICO). EU/EEA: your local data protection authority of residence or workplace.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">15. Updates</h3>
            <p>
              We may update this notice from time to time. The latest version is available on this page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}