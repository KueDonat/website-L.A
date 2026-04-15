"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaTimes,
  FaSpotify,
  FaFingerprint,
} from "react-icons/fa";
import { IconType } from "react-icons";
import FadeIn from "./FadeIn";

// 1. DATA DETAIL MEMBER
export const MEMBER_DETAILS: Record<
  string,
  {
    banner: string;
    quote: string;
    roles: string[];
    socials: { platform: string; url: string; icon: IconType }[];
  }
> = {
  "763938193418354727": {
    banner:
      "https://wsrv.nl/?url=i.pinimg.com/1200x/1e/e4/ea/1ee4ea2b1be83256014a624d178eddd3.jpg",
    quote: '"No bio yet"',
    roles: ["Leader L.A", "Designer", "Soundman", "Event Organizer"],
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/narrynhh?igsh=MXN4eWw5cXhoaW55NQ==",
        icon: FaInstagram,
      },
    ],
  },
  "1214815892668547105": {
    banner:
      "https://wsrv.nl/?url=i.pinimg.com/originals/53/c8/8c/53c88c1383f3a873273b23a365006197.gif&n=-1",
    quote: '"Cuma manusia yang mencoba di manusiakan"',
    roles: ["CO Leader L.A", "Event Organizer", "Host", "Talent", "Soundman"],
    socials: [
      { platform: "Instagram", url: "#", icon: FaInstagram },
      { platform: "Tiktok", url: "#", icon: FaTiktok },
    ],
  },
  "999264557916762224": {
    banner:
      "https://wsrv.nl/?url=i.pinimg.com/736x/cc/c2/ad/ccc2ad580d01ec22d2b374fb283ed0a9.jpg",
    quote:
      '"Dios siempre está conmigo No siempre culpes a Dios dan al destino, sino intenta evaluarte a ti mismo."',
    roles: ["Manager L.A", "Event Organizer", "Host"],
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/clealilium?igsh=MWVpbGUxcGEwOGl0aA==",
        icon: FaInstagram,
      },
      {
        platform: "Spotify",
        url: "https://open.spotify.com/user/31hcx3lejstgiilmd5kxs5ucftna?si=5A7wdr-ZTACBDjGC-OeTDA",
        icon: FaSpotify,
      },
    ],
  },
  "762016751810117712": {
    banner:
      "https://images.unsplash.com/photo-1649416097303-ddf0c8a68fc3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: '"Born To Work."',
    roles: ["Creative Lead", "Designer", "Host"],
    socials: [
      {
        platform: "Spotify",
        url: "https://open.spotify.com/user/31kmkeruxlbtm2s4kfp6nben3pbq?si=fnRvRpRXQ9yHJFT5UOWIHg",
        icon: FaSpotify,
      },
      {
        platform: "Tiktok",
        url: "https://www.tiktok.com/@fhryz2z?_r=1&_t=ZS-95J9jcXqgvX",
        icon: FaTiktok,
      },
    ],
  },
  "1380038926793703495": {
    banner:
      "https://wsrv.nl/?url=i.pinimg.com/originals/c9/e0/9a/c9e09aed17cef8abb78364a6f19db7ff.gif&n=-1",
    quote: '"a girl who just like hirono."',
    roles: ["Designer", "Soundman", "Event Organizer"],
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/alexandrasradio?igsh=MXUyeGpjcGx4bWZtZg%3D%3D&utm_source=qr",
        icon: FaInstagram,
      },
      {
        platform: "Tiktok",
        url: "https://www.tiktok.com/@alexandras._tea?_r=1&_t=ZS-95J9Wr73MQu",
        icon: FaTiktok,
      },
    ],
  },
  "908159981168251012": {
    banner:
      "https://wsrv.nl/?url=i.pinimg.com/736x/ff/cc/aa/ffccaa15454b09ebc3a40c3be2786fa0.jpg",
    quote: '"Im never following my heart ever again, that organ is f dumb."',
    roles: ["Host", "Talent", "Event Organizer"],
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/byaletaya",
        icon: FaInstagram,
      },
      {
        platform: "Tiktok",
        url: "https://www.tiktok.com/@.aeliee",
        icon: FaTiktok,
      },
    ],
  },
};

interface DiscordUser {
  id: string;
  username: string;
  global_name: string;
  avatar: string;
}

const Pin = ({ color = "#dc2626" }: { color?: string }) => (
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
    <div
      className="w-5 h-5 rounded-full bg-radial from-red-400 via-red-600 to-red-950 border border-black/20"
      style={{ backgroundColor: color }}
    />
    <div className="w-1 h-3 bg-zinc-300 mx-auto -mt-1 rounded-full shadow-inner" />
  </div>
);

const AdhesiveTape = ({ className = "" }: { className?: string }) => (
  <div 
    className={`absolute w-12 h-6 bg-white/20 backdrop-blur-[2px] border border-white/10 shadow-sm mix-blend-overlay rotate-45 ${className}`}
    style={{ 
      backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)',
      maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
    }}
  />
);

const Stamp = ({
  text,
  color = "#991b1b",
  vertical = false,
}: {
  text: string;
  color?: string;
  vertical?: boolean;
}) => (
  <div
    className={`border-4 sm:border-8 border-double px-4 py-1 sm:px-6 sm:py-2 rounded-lg font-black uppercase tracking-[0.2em] transform -rotate-12 opacity-80 mix-blend-multiply flex items-center justify-center whitespace-nowrap ${vertical ? "vertical-rl rotate-180" : ""}`}
    style={{ borderColor: color, color: color }}
  >
    <span
      className={vertical ? "text-5xl sm:text-7xl" : "text-3xl sm:text-5xl"}
    >
      {text}
    </span>
  </div>
);

const InvestigationStrings = () => (
  <svg
    className="absolute inset-0 w-full h-full z-0 opacity-25 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* More organic "web" of investigation lines */}
    <line x1="5%" y1="15%" x2="35%" y2="45%" stroke="#991b1b" strokeWidth="1.5" strokeDasharray="4,2" />
    <line x1="82%" y1="20%" x2="65%" y2="55%" stroke="#991b1b" strokeWidth="1.5" />
    <line x1="12%" y1="75%" x2="42%" y2="58%" stroke="#991b1b" strokeWidth="2" />
    <line x1="88%" y1="80%" x2="68%" y2="52%" stroke="#991b1b" strokeWidth="1.2" strokeDasharray="8,4" />
    <line x1="25%" y1="10%" x2="10%" y2="30%" stroke="#991b1b" strokeWidth="1" />
    <line x1="75%" y1="85%" x2="95%" y2="65%" stroke="#991b1b" strokeWidth="1" />
  </svg>
);

const CrimeSceneMarker = ({
  top,
  left,
  label,
}: {
  top: string;
  left: string;
  label: string;
}) => (
  <div className="absolute z-5 pointer-events-none group" style={{ top, left }}>
    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)] border border-red-900 animate-pulse" />
    <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/70 px-2 py-0.5 border border-red-600/30 text-[8px] sm:text-[9px] font-mono text-white/60 uppercase">
      {label}
    </div>
  </div>
);

export default function Members() {
  const [members, setMembers] = useState<DiscordUser[]>([]);
  const [selectedMember, setSelectedMember] = useState<DiscordUser | null>(
    null,
  );
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setRotations(data.map(() => (Math.random() - 0.5) * 12));
      });
  }, []);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  return (
    <section
      id="member"
      className="py-24 bg-[#1a1110] relative overflow-hidden"
    >
      {/* CORKBOARD TEXTURE */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')]" />

      {/* WOODEN FRAME */}
      <div className="absolute inset-0 border-[20px] sm:border-[40px] border-[#3e2723] shadow-inner pointer-events-none z-10" />
      <div className="absolute inset-0 border-[2px] border-black/50 pointer-events-none z-10" />

        {/* INVESTIGATION DECORATIONS */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <InvestigationStrings />
          <CrimeSceneMarker
            top="18%"
            left="8%"
            label="REF: 34.0522° N, 118.2437° W"
          />
          <CrimeSceneMarker
            top="52%"
            left="88%"
            label="REF: 33.9416° N, 118.4085° W"
          />
          <CrimeSceneMarker
            top="82%"
            left="12%"
            label="REF: 34.0195° N, 118.4912° W"
          />
          <CrimeSceneMarker top="15%" left="75%" label="SECTOR 09" />
          <CrimeSceneMarker top="92%" left="65%" label="CONFIDENTIAL SITE B" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <FadeIn>
          <div className="text-center mb-16 relative flex justify-center">
            {/* CREW TAPE (The strip itself) */}
            <div className="relative inline-block px-12 py-3 bg-[#fdfaf0] shadow-md transform rotate-1 mb-8 border border-black/5">
              {/* ADHESIVE TAPE (The solatip) */}
              <AdhesiveTape className="-top-3 -left-4 rotate-[-35deg] w-16 h-8 opacity-80" />
              <AdhesiveTape className="-bottom-3 -right-4 rotate-[-35deg] w-16 h-8 opacity-80" />
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-[#2c1810] font-sans">
                CREW
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* BACKGROUND BLUEPRINT */}
        <div className="absolute top-20 left-10 w-64 h-80 bg-blue-900/10 -rotate-12 border border-blue-500/20 pointer-events-none backdrop-blur-[1px] hidden lg:block">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 0v40M0 20h40' fill='none' stroke='%23fff' stroke-width='.5'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 items-center justify-center py-20">
          {members.map((user, index) => (
            <FadeIn key={`${user.id}-${index}`}>
              <motion.div
                onClick={() => setSelectedMember(user)}
                whileHover={{
                  rotate: 0,
                  scale: 1.05,
                  zIndex: 50,
                  transition: { duration: 0.3 },
                }}
                style={{ rotate: rotations[index] || 0 }}
                className="relative cursor-pointer group will-change-transform"
              >
                <Pin />

                {/* POLAROID FRAME */}
                <div className="bg-[#fdfaf0] p-4 pb-12 shadow-[5px_10px_20px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(0,0,0,0.05)] border border-[#d4cfc3]">
                  {/* PHOTO AREA */}
                  <div className="relative aspect-square w-full bg-zinc-800 overflow-hidden shadow-inner border border-black/10">
                    <Image
                      src={
                        user.avatar
                          ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`
                          : `https://cdn.discordapp.com/embed/avatars/0.png`
                      }
                      alt={user.username}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60" />
                  </div>

                  {/* CAPTION */}
                  <div className="mt-4 text-center">
                    <h3 className="text-xl md:text-2xl font-black text-[#2c1810] uppercase tracking-tighter line-clamp-1 italic font-sans">
                      {user.global_name || user.username}
                    </h3>
                    <p className="text-zinc-500 text-[10px] font-mono mt-1">
                      REF: {user.id.slice(-6)}
                    </p>
                  </div>
                </div>

                {/* POST-IT DECORATION */}
                {index % 3 === 0 && (
                  <div className="absolute -right-8 -bottom-10 w-24 h-24 bg-yellow-200 shadow-md rotate-12 p-3 text-[10px] text-zinc-700 font-mono hidden sm:block">
                    <p>
                      NOTE: {MEMBER_DETAILS[user.id]?.roles?.[0] || "REDACTED"}
                    </p>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-300 shadow-inner" />
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* DOSSIER MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto overflow-x-hidden bg-[#cbb89d] shadow-[0_30px_60px_rgba(0,0,0,1)] rounded-sm border-l-[20px] sm:border-l-[40px] border-[#a68d6d] p-6 sm:p-12 font-mono text-[#2c1810] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* DOSSIER TEXTURE */}
              <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 hover:bg-black/10 rounded-full transition-colors z-50 text-[#2c1810]/50 hover:text-[#2c1810]"
              >
                <FaTimes size={24} />
              </button>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* LEFT SIDE: PHOTO & STAMPS */}
                <div className="flex flex-col gap-8">
                  <div className="relative inline-block mx-auto md:mx-0">
                    {/* FINGERPRINT SCRAP */}
                    <motion.div
                      initial={{ rotate: -10, x: -20, y: -20, opacity: 0 }}
                      animate={{ rotate: -5, x: 0, y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute -top-12 -left-12 w-32 h-32 bg-[#f5f5f5] shadow-md border border-zinc-200 p-4 z-20 flex flex-col items-center justify-center rotate-[-5deg]"
                    >
                      <FaFingerprint
                        size={48}
                        className="text-zinc-800 opacity-80"
                      />
                      <div className="absolute top-2 right-2 w-6 h-1 bg-zinc-400 rotate-45 shadow-sm" />
                      <p className="text-[8px] mt-2 font-black uppercase text-zinc-500">
                        ID VERIFIED
                      </p>
                    </motion.div>

                    {/* PHOTO */}
                    <div className="bg-[#f0f0f0] p-4 pb-16 shadow-xl border border-zinc-300 transform rotate-2 max-w-[300px]">
                      <div className="relative aspect-square w-full bg-zinc-900 border border-black/10">
                        <Image
                          src={
                            selectedMember.avatar
                              ? `https://cdn.discordapp.com/avatars/${selectedMember.id}/${selectedMember.avatar}.png?size=512`
                              : `https://cdn.discordapp.com/embed/avatars/0.png`
                          }
                          alt="Subject"
                          fill
                          className="object-cover grayscale-[0.3]"
                          unoptimized
                        />
                      </div>
                      <div className="mt-4 border-b border-zinc-400 pb-1">
                        <p className="text-lg font-black tracking-tight">
                          {selectedMember.global_name ||
                            selectedMember.username}
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 space-y-8 flex flex-col items-center md:items-start overflow-hidden">
                      <Stamp text="TOP SECRET" />
                      <Stamp text="CONFIDENTIAL" color="#1e3a8a" />
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: DATA */}
                <div className="flex flex-col gap-8 uppercase">
                  <div className="relative border-2 border-[#2c1810]/20 p-6 pt-10">
                    <div className="absolute -top-6 left-6 bg-[#cbb89d] px-4 py-1 text-2xl font-black border-2 border-[#2c1810]/20">
                      CLASSIFIED
                    </div>

                    <div className="space-y-6 text-sm sm:text-base">
                      <div>
                        <p className="text-[#2c1810]/40 font-bold mb-1 underline">
                          OPERATION:
                        </p>
                        <p className="font-black text-2xl tracking-tighter">
                          L.A Société
                        </p>
                      </div>

                      <div>
                        <p className="text-[#2c1810]/40 font-bold mb-1 underline">
                          SUBJECT NAME:
                        </p>
                        <p className="font-black text-xl">
                          {selectedMember.global_name ||
                            selectedMember.username}{" "}
                          (aka @{selectedMember.username})
                        </p>
                      </div>

                      <div>
                        <p className="text-[#2c1810]/40 font-bold mb-1 underline">
                          DESIGNATION:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {(
                            MEMBER_DETAILS[selectedMember.id]?.roles || [
                              "OPERATIVE",
                            ]
                          ).map((role, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-black/80 text-[#cbb89d] font-black text-xs"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[#2c1810]/40 font-bold mb-1 underline">
                          MOTTO/QUOTE:
                        </p>
                        <p className="italic font-bold leading-relaxed border-l-4 border-black/20 pl-4 py-2 bg-black/5">
                          {MEMBER_DETAILS[selectedMember.id]?.quote ||
                            "MISSION DATA MISSING / REDACTED"}
                        </p>
                      </div>

                      <div className="pt-8 flex flex-col gap-4">
                        <p className="text-[#2c1810]/40 font-bold underline">
                          SOCIAL CHANNELS:
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {(
                            MEMBER_DETAILS[selectedMember.id]?.socials || []
                          ).map((social, i) => (
                            <a
                              key={i}
                              href={social.url}
                              target="_blank"
                              className="flex items-center gap-2 group border border-black/20 px-4 py-2 hover:bg-black hover:text-[#cbb89d] transition-all"
                            >
                              <social.icon />
                              <span className="font-black text-xs">
                                {social.platform}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM DECORATION */}
                  <div className="mt-auto opacity-50 flex items-end justify-between border-t border-black/20 pt-4">
                    <div className="text-[10px] space-y-1">
                      <p>FILE ID: {selectedMember.id}</p>
                      <p>STATUS: ACTIVE / FIELD OPERATIVE</p>
                      <p>LAST UPDATED: 2026-04-15</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VERTICAL CLASSIFIED SIDEBAR STAMP EFFECT */}
              <div className="absolute left-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center opacity-10">
                <div className="transform rotate-180 font-black text-9xl tracking-[0.5em] text-black mix-blend-multiply vertical-rl">
                  CLASSIFIED
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
