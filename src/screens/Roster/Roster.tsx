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
  tiktokUrl: string;
}

const castMembers: CastMember[] = [
  {
    id: 1,
    name: "DulliTV",
    role: "Dominik Henschel",
    description:
      "DulliTV is a digital creator in the comedy space, known for quick wit and a distinctive style that captivates his community. Through creative sketches, sharp observations, and a knack for turning everyday absurdities into laughs, he delivers humor with ease. His content thrives on spontaneity, self-irony, and a direct connection with the audience, creating both authenticity and entertainment.",
    image: "/DulliTV_Wallpaper.webp",
    thumbnail: "/DulliTV.webp",
    linkUrl: "/details/DulliTV",
    tiktokUrl: "https://www.tiktok.com/@dullitv",
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
    tiktokUrl: "https://www.tiktok.com/@arya",
  },
  {
    id: 3,
    name: "MUNICHMOTIONS",
    role: "Andreas Wallner",
    description:
      "Munichmotions is a creative brand from Munich for the world, focusing on visual storytelling and modern media production. With a strong eye for cinematic style, dynamic editing, and impactful visuals, Munichmotions brings stories to life across film, digital content, and social platforms. The work combines technical precision with artistic expression, capturing authentic moments while delivering high-quality, engaging productions.",
    image: "/MunichMotions_Wallpaper.webp",
    thumbnail: "/AndreasWallner.webp",
    linkUrl: "/details/Munichmotions",
    tiktokUrl: "https://linktr.ee/munichmotions?fbclid=PAZXh0bgNhZW0CMTEAAaejAVnXOZXMJO4hQAXhlIwyBUbR0A6iFB7WOoo8uiOipIiwHEehtmPah2QoKA_aem_lbn9d81VTnMZgkThSF_yBg",
  },
  {
    id: 4,
    name: "AND YOU?",
    role: "ARE YOU READY?",
    description:
      "You want to achieve more? Then join the team at LittmannEntertainment! Where creativity meets ambition and ideas turn into reality!",
    image: "/Live_Conzert.webp",
    thumbnail: "/Consultancy.webp",
    linkUrl: "/details/team",
    tiktokUrl: "https://www.tiktok.com/@daenerys",
  },
];

export const Roster = (): JSX.Element => {
  const [selectedMember, setSelectedMember] = useState<CastMember>(castMembers[0]);

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Blurry Background */}
      <div className="absolute inset-0 -z-10" id="background-wrapper">
        <img
          id="background-image"
          src={selectedMember.image}
          alt={`${selectedMember.name} background`}
          className="w-full h-full object-cover blur-2xl scale-110"
        />
        <div className="absolute inset-0 bg-black/60" id="background-overlay" />
      </div>

      {/* Header */}
      <header
        id="header"
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20 bg-gradient-to-b from-black/60 to-transparent"
      >
        <Link to="/" className="inline-block" id="header-link">
          <h1 className="text-xl sm:text-2xl tracking-wider font-light hover:text-[#BFD9DC] transition-colors">
            LITTMANN<span className="text-[#BFD9DC]">ENTERTAINMENT</span>GROUP
          </h1>
        </Link>
      </header>

      <div className="flex h-screen pt-20 relative z-10" id="content-wrapper">
        {/* Left Column - Scrollable Thumbnails */}
        <div
          id="thumbnails"
          className="w-24 sm:w-32 md:w-40 lg:w-48 flex flex-col items-center py-8 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#BFD9DC]/50 scrollbar-track-transparent"
        >
          <div className="flex flex-col gap-6">
            {castMembers.map((member) => (
              <div
                id={`thumbnail-${member.id}`}
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 cursor-pointer"
              >
                {/* Kreis-Thumbnail mit Crop */}
                <div
                  className={`
                    rounded-full overflow-hidden transition-all duration-300 w-full h-[calc(100%-18px)]
                    ${selectedMember.id === member.id
                      ? "ring-4 ring-[#BFD9DC] scale-110 shadow-[0_0_20px_#BFD9DC]"
                      : "ring-2 ring-white/30 hover:ring-[#BFD9DC] hover:scale-105"}
                  `}
                >
                  <img
                    src={member.thumbnail}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Label außerhalb der Rundung, halb überlappend */}
                <div
                  className="
                    absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/4
                    px-2 py-0.5 rounded-full
                    bg-black/70 text-white text-[10px] sm:text-xs whitespace-nowrap
                    pointer-events-none shadow
                  "
                >
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Content Area */}
        <div
          id="details"
          className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-8 gap-8 lg:gap-12 overflow-y-auto"
        >
          {/* Character Image */}
          <div
            className="relative flex-shrink-0 w-full max-w-md lg:max-w-lg"
            id="foreground-image-wrapper"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                id="foreground-image"
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-auto object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-4 bg-[#BFD9DC] opacity-20 blur-3xl rounded-full -z-10" />
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl space-y-6" id="text-content">
            <div className="space-y-2" id="title-role">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {selectedMember.name}
              </h2>
              <p className="text-lg sm:text-xl text-[#BFD9DC] font-light tracking-wide">
                {selectedMember.role}
              </p>
            </div>

            <div className="w-20 h-1 bg-[#BFD9DC] rounded-full" id="divider" />

            <p
              className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
              id="description"
            >
              {selectedMember.description}
            </p>

            {/* TikTok Button */}
            <div className="pt-4" id="button-wrapper">
              <a
                href={selectedMember.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative overflow-hidden rounded-full group"
                id="tiktok-link"
              >
                <Button
                  id="tiktok-button"
                  className="relative bg-[#BFD9DC] text-black rounded-full px-8 sm:px-12 py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold tracking-wider hover:bg-[#a8c5c9] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_#BFD9DC]"
                >
                  MORE →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-8 left-8 z-20" id="back-button-wrapper">
        <Link to="/" className="inline-block" id="back-link">
          <Button
            id="back-button"
            className="bg-black/50 backdrop-blur text-white rounded-full px-6 py-3 h-auto text-sm font-medium tracking-wider hover:bg-black/70 transition-all duration-300 border border-white/20"
          >
            ← BACK
          </Button>
        </Link>
      </div>
    </div>
  );
};