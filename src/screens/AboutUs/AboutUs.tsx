import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

interface Card {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  description: string;
  items: string[];
  backgroundImage: string;
  longDescription: string;
}

const cards: Card[] = [
  {
    title: "DAS TEAM",
    subtitle: "GEMEINSAM MEHR",

    icon: "🎵",
    description: "WERDE TEIL DAVON",
    items: ["ERFAHRE MEHR"],
    backgroundImage: "/Clara.jpg",
    longDescription: "Entdecken Sie unsere innovative Kollektion von Rucksäcken und Schmuck. Jedes Stück vereint modernste Technologie mit zeitlosem Design. Unsere Produkte sind nicht nur funktional, sondern auch ein Statement für zukunftsweisendes Design."
  },
  {
    title: "STUDIO",
    subtitle: "DREYMAST",
    color: "from-red-400 to-red-600",
    icon: "🎨",
    description: "UNSER PARTNER",
    items: ["ERFAHRE MEHR"],
    backgroundImage: "/images/card2.jpg",
    longDescription: "Unser neuronales Netzwerk verbindet Kunst und Technologie. Wir schaffen abstrakte Designs, die von künstlicher Intelligenz inspiriert sind und neue Perspektiven in der digitalen Kunst eröffnen."
  },
  {
    title: "MUNICHMOTIONS",
    subtitle: "UNSERE VIDEOPRODUKTION",
    color: "from-gray-800 to-black",
    icon: "💫",
    description: "TOOLS",
    items: ["ERFAHRE MEHR"],
    backgroundImage: "/images/card3.jpg",
    longDescription: "MUNICHMOTIONS IST UNSER EXKLUSIVER PARTNER, WENN ES UM VISUELLES STORYTELLING AUF HÖCHSTEM NIVEAU GEHT.\n\nMIT KREATIVEM FEINGEFÜHL, TECHNISCHEM KNOW-HOW UND EINEM UNVERWECHSELBAREN, CINEASTISCHEN STIL DEFINIERT MUNICHMOTIONS DIE FILMPRODUKTION NEU. JEDE PRODUKTION IST MAßGESCHNEIDERT AUF DIE MARKE – MODERN, EMOTIONAL UND WIRKUNGSVOLL."
  }
];

export const AboutUs = (): JSX.Element => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="fixed inset-0 bg-black text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 p-8 z-50 flex justify-between items-center">
        <Link to="/" className="inline-block">
          <h1 className="text-2xl tracking-wider font-light">
            LITTMANN<span className="text-[#b44af9]">ENTERTAINMENT</span>GROUP
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-2xl">≡</span>
        </div>
      </header>

      <div className="flex h-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative transition-all duration-700 ease-in-out cursor-pointer overflow-hidden ${
              expandedCard === null ? 'w-1/3' :
              expandedCard === index ? 'w-3/4' : 'w-[12.5%]'
            }`}
            onClick={() => handleCardClick(index)}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{
                backgroundImage: `url(${card.backgroundImage})`
              }}
            />
            
            {/* Gradient Overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-b ${card.color} opacity-90 transition-all duration-500`}
            />

            {/* Content */}
            <div className="relative h-full p-4 sm:p-8 md:p-12 flex flex-col">
              <div className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 ${
                expandedCard === index ? 'translate-y-0 opacity-100' : 
                expandedCard !== null ? 'translate-y-8 opacity-0' : ''
              }`}>
                <div className="text-xs sm:text-sm uppercase tracking-wider mb-2">{card.description}</div>
                <h2 className="text-base sm:text-lg md:text-xl font-light mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{card.title}</h2>
                <p className="text-sm sm:text-base md:text-lg mb-8">{card.subtitle}</p>
                
                {/* Extended Description - Only visible when expanded */}
                <div className={`max-w-2xl transition-all duration-1000 ${
                  expandedCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p className={`text-sm sm:text-base md:text-lg leading-relaxed mb-8 transition-all duration-1000 ease-in-out transform ${
                    expandedCard === index ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 -translate-y-4'
                  }`}>
                    {card.longDescription}
                  </p>
                </div>
              </div>

              <div className={`absolute bottom-4 sm:bottom-8 md:bottom-12 left-4 sm:left-8 md:left-12 transition-all duration-1000 ${
                expandedCard === index ? 'opacity-100 translate-y-0' : 
                expandedCard !== null ? 'opacity-0 translate-y-8' : ''
              }`}>
                <Button className="bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-8 sm:mb-12 transition-transform duration-300">
                  {expandedCard === index ? '×' : '▶'}
                </Button>

                <div className="space-y-2">
                  {card.items.map((item, i) => (
                    <div key={i} className="text-xs sm:text-sm uppercase tracking-wider">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};