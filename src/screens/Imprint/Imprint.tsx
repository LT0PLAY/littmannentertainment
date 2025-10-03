import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Imprint() {
  useEffect(() => {
    document.title = "Imprint • Littmann Entertainment";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-neutral-100 relative">
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20">
        <Link to="/" className="inline-block py-2 px-1 hover:opacity-80 transition-opacity">
          <h1 className="text-xl sm:text-2xl tracking-wider font-light">
            LITTMANN<span className="text-[#BFD9DC]">ENTERTAINMENT</span>GROUP
          </h1>
        </Link>
      </header>

      <div className="relative z-10 px-6 py-24 sm:py-32 max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Imprint</h1>
          <p className="text-neutral-400">Legal Notice</p>
        </div>

        <section className="space-y-8 leading-relaxed text-neutral-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Company Information</h2>
            <p>
              Littmann Entertainment Ltd.<br />
              62 Woodberry Grove<br />
              London, N4 1SN<br />
              United Kingdom
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:hello@littmann-agency.com" className="text-[#BFD9DC] hover:underline">
                hello@littmann-agency.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+447868392193" className="text-[#BFD9DC] hover:underline">
                +44 7868 392193
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Represented by</h2>
            <p>
              Lena Littmann<br />
              (Managing Director)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Disclaimer</h2>
            <p>
              Despite careful control of the content, we assume no liability for the content of
              external links. The operators of linked pages are solely responsible for their
              content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFD9DC] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">UK Disclaimer</h2>
            <p>
              Littmann Entertainment Ltd. is a company registered in England and Wales.
              Company registration number: <em>[add Companies House number]</em>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Credits</h2>
            <p>
              Website created by{" "}
              <a
                href="https://www.munichmotions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFD9DC] hover:underline"
              >
                www.munichmotions.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}