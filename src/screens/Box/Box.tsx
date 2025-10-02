import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

interface ProductButton {
  label: string;
  url: string;
  external?: boolean;
}

interface Product {
  id: number;
  title: string;
  description: React.ReactNode | string;
  image: string;
  background: string;
  thumbnail: string;
  instagram: string;
  buttons: ProductButton[];
}

const products: Product[] = [
  {
    id: 1,
    title: "ABOUT US",
    description: (
      <div className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify space-y-6">
        <div>
          <h3 className="text-[#BFD9DC] font-semibold mb-2">At Littmann Entertainment</h3>
          <p>
            we specialise in artist management and a suite of premium services and expertise
            designed to build and elevate careers.
          </p>
          <p>
            With a deep understanding of the industry’s fast pace and unique demands, we offer
            expert support in brand building, story telling, strategic marketing, promotion and
            legal consultancy.
          </p>
        </div>

        <div>
          <h3 className="text-[#BFD9DC] font-semibold mb-2">WHAT WE DO</h3>
          <p>
            Our artist management division is the heartbeat of what we do. We work closely with
            artists to shape their careers with intention and impact. From contract negotiations and
            brand partnerships, to tour coordination, public relations, legal oversight, and
            long-term career strategy, our team ensures every detail is handled—professionally and
            personally. We act as advocates, advisors, and connectors, empowering talent to focus on
            their craft while we build the framework for sustained success.
          </p>
        </div>
      </div>
    ),
    image: "/LittmannEntertainmant.webp",
    background: "/Concert.webp",
    thumbnail: "/AboutUs.webp",
    instagram: "https://instagram.com",
    buttons: [
      { label: "OUR STORY →", url: "/story", external: false },
      { label: "KEINE AHNUNG →", url: "/contact", external: false },
    ],
  },
  {
    id: 2,
    title: "ABOUT ME",
    description: (
      <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
        With nearly a decade of hands-on experience in the live music and entertainment industry,{" "}
        <strong>Lena</strong> has worked with some of the biggest names in the business –
        <strong> The Red Hot Chili Peppers</strong>, <strong>Tom Jones</strong>,{" "}
        <strong>Shania Twain</strong>, and high-profile productions like the{" "}
        <strong>MTV Awards</strong> and collaborations involving <strong>Quentin Tarantino</strong>{" "}
        and the <strong>Bon Jovi family</strong>, to name a few.
        <br />
        <br />
        From national productions to international touring,
        <br />
        <br />
        Lena’s career has been built on <strong>precision</strong>, <strong>discretion</strong>, and
        deep industry insight. Her background spans from <strong>artist liaison</strong>,{" "}
        <strong>tour logistics</strong>, and high-level <strong>event coordination</strong> – making
        her uniquely positioned to lead <strong>Littmann Entertainment</strong> with both heart and
        strategy.
      </p>
    ),
    image: "/LenaLittmann.webp",
    background: "/Live_Conzert.webp",
    thumbnail: "/AboutMe.webp",
    instagram: "https://www.instagram.com/littmannentertainment/",
    buttons: [
      { label: "ABOUT ME →", url: "/about", external: false },
      {
        label: "INSTAGRAM →",
        url: "https://www.instagram.com/littmannentertainment/",
        external: true,
      },
    ],
  },
  {
    id: 3,
    title: "ARTIST MANAGEMENT & AGENCY",
    description: "We represent and support international artists across genres.",
    // Tipp: besser Datei in public/ auf z. B. /triplea-lena.webp umbenennen
    image: "/TripleA%20LENA.webp",
    background: "/TripleA.webp",
    thumbnail: "/Artist.webp",
    instagram: "https://instagram.com/newwaive",
    buttons: [
      { label: "ROSTER →", url: "/roster", external: false },
      { label: "Instagram →", url: "https://instagram.com/newwaive", external: true },
    ],
  },
  {
    id: 4,
    title: "CONSULTANCY",
    description: "Expert advice in live entertainment, logistics, and production.",
    image: "/Licenses.webp",
    background: "/Consultancy_Littmann.webp",
    thumbnail: "/Consultancy.webp",
    instagram: "https://instagram.com/basante",
    buttons: [
      { label: "SERVICES →", url: "/consultancy", external: false },
      { label: "GET IN TOUCH→", url: "/contact", external: false },
    ],
  },
];

export const Box = (): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animations-Flags
  const [firstOpenInProgress, setFirstOpenInProgress] = useState(false);
  const [firstOpenDone, setFirstOpenDone] = useState(false);
  const [nudgeTick, setNudgeTick] = useState(0);

  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const isHoveringMenu = useRef<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const xFromRight = window.innerWidth - e.clientX;
    if (isHoveringMenu.current) return;

    if (xFromRight <= 150) {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
      if (!isMenuOpen && !openTimer.current) {
        openTimer.current = window.setTimeout(() => {
          if (!firstOpenDone && !firstOpenInProgress) {
            setFirstOpenInProgress(true);
          } else {
            setIsMenuOpen(true);
          }
          openTimer.current = null;
        }, 120);
      }
    } else if (xFromRight > 250) {
      if (openTimer.current) {
        window.clearTimeout(openTimer.current);
        openTimer.current = null;
      }
      if (isMenuOpen && !closeTimer.current) {
        closeTimer.current = window.setTimeout(() => {
          if (!isHoveringMenu.current) setIsMenuOpen(false);
          closeTimer.current = null;
        }, 500);
      }
    }
  };

  // Periodischer subtiler Nudge, wenn geschlossen & unberührt
  useEffect(() => {
    if (isMenuOpen || isHoveringMenu.current) return;
    const delay = Math.floor(6000 + Math.random() * 3000);
    const t = window.setTimeout(() => setNudgeTick((x) => x + 1), delay);
    return () => window.clearTimeout(t);
  }, [isMenuOpen, nudgeTick]);

  useEffect(() => {
    return () => {
      if (openTimer.current) window.clearTimeout(openTimer.current);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen text-white overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${selectedProduct.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Styles für Animationen */}
      <style>{`
        @keyframes menuTeaseCycle {
          0%, 70%, 100% { transform: translateX(92%); }
          8%            { transform: translateX(90%); }
          16%           { transform: translateX(86%); }
          24%           { transform: translateX(89%); }
          32%           { transform: translateX(87.5%); }
          40%           { transform: translateX(92%); }
        }
        @keyframes menuNudgeOnce {
          0%   { transform: translateX(92%); }
          20%  { transform: translateX(88.5%); }
          40%  { transform: translateX(91%); }
          60%  { transform: translateX(89.5%); }
          100% { transform: translateX(92%); }
        }
        @keyframes menuFirstApproach {
          0%   { transform: translateX(92%); }
          25%  { transform: translateX(86%); }
          55%  { transform: translateX(-3%); }
          75%  { transform: translateX(1.5%); }
          100% { transform: translateX(0%); }
        }
        .menu--tease { animation: menuTeaseCycle 7s cubic-bezier(0.25, 0.1, 0.25, 1) infinite; }
        .menu--nudge { animation: menuNudgeOnce 1.8s cubic-bezier(0.22, 1, 0.36, 1) 1; }
        .menu--firstOpen { animation: menuFirstApproach 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      {/* Overlay blockiert keine Klicks */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
        <h1 className="text-xl sm:text-2xl tracking-wider font-light">
          LITTMANN<span className="text-[#BFD9DC]">ENTERTAINMENT</span>GROUP
        </h1>
      </header>

      <div className="flex h-full relative z-10">
        {/* Linke Spalte */}
        <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-end">
          <div className="flex flex-col max-h-[85vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#BFD9DC]/70 scrollbar-track-transparent">
            <h2 className="text-xl sm:text-2xl font-light mb-4">{selectedProduct.title}</h2>
            {selectedProduct.description}
            <div className="flex gap-2 sm:gap-4 mt-6 flex-wrap">
              {selectedProduct.buttons.map((btn, i) =>
                btn.external ? (
                  <a
                    key={i}
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-full"
                  >
                    <Button className="relative bg-[#BFD9DC] text-black rounded-full px-4 sm:px-8 py-2 sm:py-3 h-auto text-sm sm:text-base font-medium tracking-wider hover:bg-[#a8c5c9] transition-all duration-300">
                      {btn.label}
                    </Button>
                  </a>
                ) : (
                  <Link key={i} to={btn.url} className="relative overflow-hidden rounded-full">
                    <Button className="relative bg-[#BFD9DC] text-black rounded-full px-4 sm:px-8 py-2 sm:py-3 h-auto text-sm sm:text-base font-medium tracking-wider hover:bg-[#a8c5c9] transition-all duration-300">
                      {btn.label}
                    </Button>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Rechte Fläche */}
        <div className="flex-1 relative">
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#BFD9DC] opacity-20 blur-3xl pointer-events-none" />
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/4 h-[60%] sm:h-[70%] md:h-[80%] lg:h-[90%] object-cover z-0 transition-opacity duration-300"
          />
        </div>

        {/* Menü */}
        <div
          className={[
            "menu-panel fixed right-0 top-0 h-full",
            "w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px]",
            "bg-[#252525]/90 backdrop-blur p-6 sm:p-8 md:p-10 lg:p-12",
            "flex flex-col justify-between z-40",
            firstOpenInProgress ? "transition-none" : "transition-transform duration-[900ms] ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-[92%]",
            !isMenuOpen && !firstOpenInProgress && !isHoveringMenu.current ? "will-change-transform" : "",
            !isMenuOpen && !firstOpenInProgress && !isHoveringMenu.current && nudgeTick ? "menu--nudge" : "",
            !isMenuOpen && !firstOpenDone && !firstOpenInProgress ? "menu--tease" : "",
            firstOpenInProgress ? "menu--firstOpen" : "",
          ].join(" ")}
          onAnimationEnd={(e) => {
            if (firstOpenInProgress && e.animationName === "menuFirstApproach") {
              setFirstOpenInProgress(false);
              setFirstOpenDone(true);
              setIsMenuOpen(true);
            }
          }}
          onMouseEnter={() => {
            isHoveringMenu.current = true;
            if (closeTimer.current) {
              window.clearTimeout(closeTimer.current);
              closeTimer.current = null;
            }
            if (!firstOpenInProgress) setIsMenuOpen(true);
          }}
          onMouseLeave={() => {
            isHoveringMenu.current = false;
            if (!closeTimer.current) {
              closeTimer.current = window.setTimeout(() => {
                if (!isHoveringMenu.current) setIsMenuOpen(false);
                closeTimer.current = null;
              }, 500);
            }
          }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl tracking-wider font-light mb-3 sm:mb-4 text-center">
              LITTMANN<span className="text-[#BFD9DC]"> INFOS</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-center">
              © Copyright | LITTMANN-ENTERTAINMENT | All Rights Reserved
            </p>

            <div className="flex justify-center gap-4 mb-6">
              <Link to="/privacy-policy" className="relative overflow-hidden rounded-full inline-block">
                <Button className="relative bg-[#BFD9DC] text-black rounded-full px-6 sm:px-8 py-2 sm:py-3 h-auto text-sm sm:text-base font-medium tracking-wider hover:bg-[#a8c5c9] transition-all duration-300">
                  Privacy Policy
                </Button>
              </Link>
              <Link to="/imprint" className="relative overflow-hidden rounded-full inline-block">
                <Button className="relative bg-[#BFD9DC] text-black rounded-full px-6 sm:px-8 py-2 sm:py-3 h-auto text-sm sm:text-base font-medium tracking-wider hover:bg-[#a8c5c9] transition-all duration-300">
                  Imprint
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 shadow-none hover:shadow-[0_0_25px_#BFD9DC]"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                  />
                </div>
              ))}
            </div>

            <Link to="/contact" className="block w-full">
              <Button className="w-full relative bg-[#BFD9DC] text-black px-6 py-2 sm:py-3 h-auto text-sm sm:text-base font-medium tracking-wider hover:bg-[#a8c5c9] transition-all duration-300 rounded-none">
                Kontakt
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};