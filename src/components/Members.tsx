"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaTimes,
  FaSpotify,
} from "react-icons/fa";
import FadeIn from "./FadeIn";

// 1. DATA DETAIL MEMBER
export const MEMBER_DETAILS: Record<
  string,
  {
    banner: string;
    quote: string;
    roles: string[];
    socials: { platform: string; url: string; icon: any }[];
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
      // {
      //   platform: "Tiktok",
      //   url: "https://www.tiktok.com/@alexandras._tea?_r=1&_t=ZS-95J9Wr73MQu",
      //   icon: FaTiktok,
      // },
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
      '"Dios siempre está conmigo No siempre culpes a Dios y al destino, sino intenta evaluarte a ti mismo."',
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
      // { platform: "Instagram", url: "", icon: FaInstagram },
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

export default function Members() {
  const [members, setMembers] = useState<DiscordUser[]>([]);
  const [selectedMember, setSelectedMember] = useState<DiscordUser | null>(
    null,
  );

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <section id="member" className="py-32 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
              Our Core Team
            </h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((user, index) => (
            <FadeIn key={`${user.id}-${index}`}>
              <div
                onClick={() => setSelectedMember(user)}
                className="group relative bg-gradient-to-b from-zinc-900/50 to-[#0a0a0a] border border-white/10 hover:border-gold-500/50 rounded-[2rem] cursor-pointer hover:shadow-[0_15px_50px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* BANNER BACKGROUND */}
                <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={
                      MEMBER_DETAILS[user.id]?.banner ||
                      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400"
                    }
                    alt="Banner"
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1614850523296-d8c1af93d400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] translate-y-1"></div>
                </div>

                <div className="pt-16 pb-8 px-6 flex flex-col items-center relative z-10">
                  {/* AVATAR DENGAN ANIMASI ELEVATE */}
                  <div className="relative w-28 h-28 mb-5 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full border border-gold-500/40 group-hover:border-gold-500 transition-all duration-700 overflow-hidden">
                      <Image
                        src={
                          user.avatar
                            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                            : `https://cdn.discordapp.com/embed/avatars/0.png`
                        }
                        alt={user.username}
                        fill
                        sizes="112px"
                        className="rounded-full object-cover p-1"
                      />
                    </div>
                  </div>

                  {/* NAMA GLOBAL */}
                  <h3 className="text-2xl font-black text-white italic drop-shadow-md group-hover:text-gold-500 transition-colors duration-300 text-center uppercase tracking-tight">
                    {user.global_name || user.username}
                  </h3>

                  {/* USERNAME & PRIMARY ROLE */}
                  <div className="flex flex-col items-center gap-1.5 mt-1.5 mb-6">
                    <p className="text-gray-400 text-xs font-medium lowercase">
                      @{user.username}
                    </p>
                    <span className="px-3 py-1 mt-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-gray-300 tracking-widest uppercase group-hover:border-gold-500/30 transition-colors">
                      {MEMBER_DETAILS[user.id]?.roles?.[0] || "Core Team"}
                    </span>
                  </div>

                  {/* VIEW PROFILE BUTTON */}
                  <div className="w-full flex justify-center">
                    <div className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gold-500/30 bg-gradient-to-r from-gold-500/5 to-transparent text-gold-500 text-[10px] tracking-[0.2em] uppercase font-black opacity-80 group-hover:opacity-100 group-hover:bg-gold-500/10 group-hover:border-gold-500/60 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500">
                      <span>View Profile</span>
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pb-20 md:pb-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            >
              {/* FALLING CARDS PARALLAX EFFECT */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    rotate: [0, 180, 360],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-12 h-16 border border-white/20 rounded-sm bg-gradient-to-br from-zinc-800 to-black"></div>
                </motion.div>
              ))}

              {/* FLOATING PARTICLES */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${i % 2 === 0 ? "bg-red-500" : "bg-gold-500"} blur-[1px] opacity-20`}
                  style={{
                    width: Math.random() * 4 + 2 + "px",
                    height: Math.random() * 4 + 2 + "px",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * -500 - 100],
                    x: [0, (Math.random() - 0.5) * 200],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 z-10 pointer-events-none mt-10 md:mt-0"
            >
              {/* THE PREMIUM CARD DESIGN */}
              <div
                className="relative group perspective-[1500px] pointer-events-auto shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  animate={{
                    rotateY: [-5, 5, -5],
                    rotateX: [3, -3, 3],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-[300px] h-[440px] sm:w-[350px] sm:h-[500px] rounded-[2rem] bg-[#fdfaf0] shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(0,0,0,0.1)] p-5 flex flex-col border-[2px] border-[#d4af37]/20"
                >
                  {/* CARD TEXTURE OVERLAY */}
                  <div
                    className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none rounded-[2rem]"
                    style={{
                      backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")`,
                    }}
                  ></div>

                  {/* DOUBLE INNER BORDER */}
                  <div className="absolute inset-4 border-[1.5px] border-[#900000]/30 rounded-[1.5rem] pointer-events-none"></div>
                  <div className="absolute inset-5 border-[2.5px] border-[#1a1110] rounded-[1.2rem] pointer-events-none"></div>

                  {/* CARD RANK & SUIT (TOP LEFT) */}
                  <div className="absolute top-8 left-8 flex flex-col items-center text-[#900000] z-20">
                    <span className="text-4xl font-black font-serif leading-none tracking-tighter drop-shadow-sm uppercase">
                      {(() => {
                        const roles =
                          MEMBER_DETAILS[selectedMember.id]?.roles || [];
                        if (roles.some((r) => r.includes("Leader"))) return "A";
                        if (roles.some((r) => r.includes("CO Leader")))
                          return "K";
                        if (roles.some((r) => r.includes("Manager")))
                          return "Q";
                        return "J";
                      })()}
                    </span>
                    <span className="text-3xl mt-[-2px] drop-shadow-sm">♦</span>
                  </div>

                  {/* CARD RANK & SUIT (BOTTOM RIGHT) */}
                  <div className="absolute bottom-8 right-8 flex flex-col items-center text-[#900000] rotate-180 z-20">
                    <span className="text-4xl font-black font-serif leading-none tracking-tighter drop-shadow-sm uppercase">
                      {(() => {
                        const roles =
                          MEMBER_DETAILS[selectedMember.id]?.roles || [];
                        if (roles.some((r) => r.includes("Leader"))) return "A";
                        if (roles.some((r) => r.includes("CO Leader")))
                          return "K";
                        if (roles.some((r) => r.includes("Manager")))
                          return "Q";
                        return "J";
                      })()}
                    </span>
                    <span className="text-3xl mt-[-2px] drop-shadow-sm">♦</span>
                  </div>

                  {/* INNER PORTRAIT FRAME */}
                  <div className="absolute top-[5rem] bottom-[5rem] left-12 right-12 border-[3px] border-[#1a1110] overflow-hidden bg-[#0a0a0a] shadow-inner group">
                    {/* HARLEQUIN DIAMOND PATTERN */}
                    <div
                      className="absolute inset-0 z-0 opacity-80"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='%23111'/%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='%23800'/%3E%3Cpath d='M0 -30 L30 0 L0 30 L-30 0 Z' fill='%23800'/%3E%3Cpath d='M60 -30 L90 0 L60 30 L30 0 Z' fill='%23800'/%3E%3Cpath d='M0 30 L30 60 L0 90 L-30 60 Z' fill='%23800'/%3E%3Cpath d='M60 30 L90 60 L60 90 L30 60 Z' fill='%23800'/%3E%3C/svg%3E")`,
                        backgroundSize: "40px 40px",
                      }}
                    ></div>

                    {/* VIGNETTE ON PATTERN */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] z-[1]"></div>

                    {/* AVATAR HERO IMAGE */}
                    <div className="absolute inset-0 flex items-end justify-center z-[2] pt-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="relative w-full h-[120%]">
                        <Image
                          src={
                            selectedMember.avatar
                              ? `https://cdn.discordapp.com/avatars/${selectedMember.id}/${selectedMember.avatar}.png?size=512`
                              : `https://cdn.discordapp.com/embed/avatars/0.png`
                          }
                          alt="Avatar"
                          fill
                          className="object-cover object-top filter brightness-110 contrast-110 drop-shadow-[0_20px_30px_rgba(0,0,0,1)] grayscale-[0.2]"
                          sizes="(max-width: 640px) 240px, 320px"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* FILM GRAIN & NOISE ON AVATAR */}
                    <div
                      className="absolute inset-0 z-[3] opacity-30 pointer-events-none mix-blend-overlay"
                      style={{
                        backgroundImage: `url("https://www.transparenttextures.com/patterns/micro-carbon.png")`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[2] opacity-60"></div>
                  </div>

                  {/* CARD SHINE ANIMATION */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-1/2 bg-white/20 -skew-x-12 blur-3xl z-40"
                  ></motion.div>
                </motion.div>
              </div>

              {/* PREMIUM TYPOGRAPHY & DETAILS */}
              <div className="flex flex-col text-center md:text-left pointer-events-auto z-20 max-w-xl">
                {(() => {
                  const nameParts = (
                    selectedMember.global_name || selectedMember.username
                  ).split(" ");
                  const topName =
                    nameParts.length > 1
                      ? nameParts.slice(0, -1).join(" ")
                      : nameParts[0];
                  const bottomName =
                    nameParts.length > 1
                      ? nameParts[nameParts.length - 1]
                      : "MEMBER";

                  return (
                    <div className="relative">
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative"
                      >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.5em] text-[#e5dfc9]/60 ml-2 mb-[-0.2em] uppercase font-serif italic">
                          {topName}
                        </h3>
                        <h2 className="text-7xl sm:text-9xl md:text-[8.5rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f0e6d2] to-[#bcae83] uppercase leading-[0.85] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                          {bottomName}
                        </h2>
                      </motion.div>
                    </div>
                  );
                })()}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-10 flex flex-col items-center md:items-start"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-[#900000] to-transparent"></div>
                    <h4 className="text-lg sm:text-2xl font-bold tracking-[0.4em] text-[#d4af37] uppercase font-sans drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                      {MEMBER_DETAILS[selectedMember.id]?.roles?.[0] ||
                        "LEGENDARY MEMBER"}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                    {(
                      MEMBER_DETAILS[selectedMember.id]?.roles || ["STAFF"]
                    ).map((role, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 border border-[#900000]/50 bg-[#4a0d0d]/40 text-[#f0e6d2] text-[11px] font-black uppercase tracking-[0.25em] rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] backdrop-blur-md"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-8 p-6 bg-black/40 rounded-2xl border-l-[4px] border-[#900000] backdrop-blur-sm max-w-md group">
                    <div className="absolute top-[-10px] left-4 text-4xl text-[#900000] opacity-50 font-serif">
                      “
                    </div>
                    <p className="text-[#d1d5db] italic font-serif text-base sm:text-lg leading-relaxed relative z-10 px-2 lg:px-4">
                      {MEMBER_DETAILS[selectedMember.id]?.quote ||
                        "A phantom in the wires, a master of the game."}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                    {(MEMBER_DETAILS[selectedMember.id]?.socials || []).map(
                      (social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-6 py-3 border border-[#d4af37]/30 rounded-xl hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all bg-zinc-900/80 backdrop-blur-sm group"
                        >
                          <social.icon
                            size={18}
                            className="text-[#d4af37] group-hover:scale-110 transition-transform"
                          />
                          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
                            {social.platform}
                          </span>
                        </a>
                      ),
                    )}
                  </div>
                </motion.div>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedMember(null)}
                className="fixed top-6 right-6 sm:top-10 sm:right-10 text-white/40 hover:text-white transition-all z-[9999] bg-black/60 border border-white/10 hover:border-red-600/50 backdrop-blur-xl p-4 rounded-full pointer-events-auto group shadow-2xl"
              >
                <FaTimes
                  size={24}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
