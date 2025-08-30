import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Imprint() {
  useEffect(() => {
    document.title = "Imprint • Littmann Entertainment";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-neutral-100 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Header mit Home-Link – wie auf den anderen Seiten */}
      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl sm:text-2xl tracking-wider font-light cursor-pointer">
            LITTMANN<span className="text-[#BFD9DC]">ENTERTAINMENT</span>GROUP
          </h1>
        </Link>
      </header>

      <div className="relative z-10 px-6 py-24 sm:py-32 max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <header className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">Imprint</h2>
          <p className="text-neutral-400">Legal Notice</p>
        </header>

        {/* Content */}
        <section className="space-y-8 leading-relaxed text-neutral-300">
          <div>
            <h3 className="text-2xl font-semibold text-white">Company Information</h3>
            <p>
              Littmann Entertainment Ltd.<br />
              Woodberry Down<br />
              London, United Kingdom
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">Contact</h3>
            <p>
              Email: contact@littmann-entertainment.com<br />
              Phone: +44&nbsp;[your phone number]
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">Represented by</h3>
            <p>
              Lena Littmann<br />
              (Managing Director)
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">Disclaimer</h3>
            <p>
              Despite careful control of the content, we assume no liability for the content of
              external links. The operators of linked pages are solely responsible for their content.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">EU Dispute Resolution</h3>
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
        </section>
      </div>
    </main>
  );
}