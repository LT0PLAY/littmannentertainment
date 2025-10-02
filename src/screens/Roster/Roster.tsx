import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

interface CastMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  thumbnail: string;
  linkUrl: string;
}

const castMembers: CastMember[] = [
  {
    id: 1,
    name: "LENA",
    role: "Hand of the Queen",
    description:
      "LENS Lannister ist das jüngste Kind von Lord Tywin Lannister und jüngerer Bruder von Cersei und Jaime. Ein scharfer Verstand und unerschütterlicher Wille helfen ihm, Vorurteile zu überwinden.",
    image: "/LenaLittmann.webp",
    thumbnail: "/AboutMe.webp",
    linkUrl: "/details/tyrion",
  },
  {
    id: 2,
    name: "Arya Stark",
    role: "Faceless Assassin",
    description:
      "Die jüngste Tochter von Eddard Stark hat sich von einem rebellischen Mädchen zu einer der gefährlichsten Kämpferinnen entwickelt. Ihre Reise führte sie durch Kontinente und Kulturen.",
    image: "/Artist.webp",
    thumbnail: "/AboutUs.webp",
    linkUrl: "/details/arya",
  },
  {
    id: 3,
    name: "Jon Snow",
    role: "King in the North",
    description:
      "Als vermeintlicher Bastard von Ned Stark aufgewachsen, entdeckt Jon seine wahre Herkunft und kämpft für das Überleben der Menschheit gegen die größte Bedrohung aus dem Norden.",
    image: "/Concert.webp",
    thumbnail: "/Artist.webp",
    linkUrl: "/details/jon",
  },
  {
    id: 4,
    name: "Daenerys Targaryen",
    role: "Mother of Dragons",
    description:
      "Die letzte Überlebende des Hauses Targaryen kämpft sich von der Verbannung zurück zur Macht. Mit drei Drachen und einer wachsenden Armee will sie den Eisernen Thron zurückerobern.",
    image: "/Live_Conzert.webp",
    thumbnail: "/Consultancy.webp",
    linkUrl: "/details/daenerys",
  },
];

export const Roster = (): JSX.Element => {
  const [selectedMember, setSelectedMember] = useState<CastMember>(castMembers[0]);

  return (
    <div
      className="relative w-full min-h-screen text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      }}
    >
      {/* Dark textured overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20 bg-gradient-to-b from-black/60 to-transparent">
        <Link to="/" className="inline-block">
          <h1 className="text-xl sm:text-2xl tracking-wider font-light hover:text-[#BFD9DC] transition-colors">
            LITTMANN<span className="text-[#BFD9DC]">ENTERTAINMENT</span>GROUP
          </h1>
        </Link>
      </header>

      <div className="flex h-screen pt-20 relative z-10">
        {/* Left Column - Scrollable Thumbnails */}
        <div className="w-24 sm:w-32 md:w-40 lg:w-48 flex flex-col items-center py-8 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#BFD9DC]/50 scrollbar-track-transparent">
          <div className="flex flex-col gap-4 sm:gap-6">
            {castMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`
                  rounded-full overflow-hidden cursor-pointer transition-all duration-300
                  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                  ${
                    selectedMember.id === member.id
                      ? "ring-4 ring-[#BFD9DC] scale-110 shadow-[0_0_20px_#BFD9DC]"
                      : "ring-2 ring-white/30 hover:ring-[#BFD9DC] hover:scale-105"
                  }
                `}
              >
                <img
                  src={member.thumbnail}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-8 gap-8 lg:gap-12 overflow-y-auto">
          {/* Character Image */}
          <div className="relative flex-shrink-0 w-full max-w-md lg:max-w-lg">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-auto object-cover transition-all duration-500"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-[#BFD9DC] opacity-20 blur-3xl rounded-full -z-10" />
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {selectedMember.name}
              </h2>
              <p className="text-lg sm:text-xl text-[#BFD9DC] font-light tracking-wide">
                {selectedMember.role}
              </p>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-[#BFD9DC] rounded-full" />

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              {selectedMember.description}
            </p>

            {/* Button */}
            <div className="pt-4">
              <Link
                to={selectedMember.linkUrl}
                className="inline-block relative overflow-hidden rounded-full group"
              >
                <Button className="relative bg-[#BFD9DC] text-black rounded-full px-8 sm:px-12 py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold tracking-wider hover:bg-[#a8c5c9] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_#BFD9DC]">
                  Mehr erfahren →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-8 left-8 z-20">
        <Link to="/" className="inline-block">
          <Button className="bg-black/50 backdrop-blur text-white rounded-full px-6 py-3 h-auto text-sm font-medium tracking-wider hover:bg-black/70 transition-all duration-300 border border-white/20">
            ← Zurück
          </Button>
        </Link>
      </div>
    </div>
  );
};