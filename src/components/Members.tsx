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
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-sm ${i % 2 === 0 ? "bg-red-600" : "bg-white"} opacity-10`}
                  style={{
                    width: Math.random() * 10 + 5 + "px",
                    height: Math.random() * 10 + 5 + "px",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                  animate={{
                    y: [0, Math.random() * -300 - 100],
                    x: [0, (Math.random() - 0.5) * 100],
                    rotate: [0, Math.random() * 360],
                    opacity: [0, Math.random() * 0.3, 0],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 z-10 pointer-events-none mt-10 md:mt-0"
            >
              {/* THE CARD */}
              <div
                className="relative group perspective-[1000px] pointer-events-auto shrink-0 cursor-pointer"
                onClick={() => setSelectedMember(null)}
              >
                <motion.div
                  animate={{ rotateY: [-3, 3, -3], rotateX: [2, -2, 2] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-[280px] h-[400px] sm:w-[320px] sm:h-[460px] rounded-[1.5rem] bg-[#fdfbf7] shadow-[20px_20px_50px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(0,0,0,0.05)] p-4 flex flex-col"
                >
                  <div className="absolute inset-3 border-[1px] border-black/30 rounded-xl pointer-events-none"></div>
                  <div className="absolute inset-4 border-[2px] border-black/80 rounded-lg pointer-events-none object-none flex flex-col"></div>

                  <div className="absolute top-6 left-6 flex flex-col items-center text-[#900000] z-20">
                    <span className="text-3xl font-black font-serif leading-[0.8] tracking-tighter">
                      {selectedMember.global_name?.[0]?.toUpperCase() ||
                        selectedMember.username?.[0]?.toUpperCase() ||
                        "Q"}
                    </span>
                    <span className="text-3xl leading-[1.2]">♦</span>
                  </div>
                  <div className="absolute bottom-6 right-6 flex flex-col items-center text-[#900000] rotate-180 z-20">
                    <span className="text-3xl font-black font-serif leading-[0.8] tracking-tighter">
                      {selectedMember.global_name?.[0]?.toUpperCase() ||
                        selectedMember.username?.[0]?.toUpperCase() ||
                        "Q"}
                    </span>
                    <span className="text-3xl leading-[1.2]">♦</span>
                  </div>

                  <div className="absolute top-[4.5rem] bottom-[4.5rem] left-10 right-10 border-[2px] border-black/80 overflow-hidden bg-[#1a1a1a]">
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23111'/%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='%23700'/%3E%3Cpath d='M0 -20 L20 0 L0 20 L-20 0 Z' fill='%23700'/%3E%3Cpath d='M40 -20 L60 0 L40 20 L20 0 Z' fill='%23700'/%3E%3Cpath d='M0 20 L20 40 L0 60 L-20 40 Z' fill='%23700'/%3E%3Cpath d='M40 20 L60 40 L40 60 L20 40 Z' fill='%23700'/%3E%3C/svg%3E")`,
                        backgroundSize: "30px 30px",
                      }}
                    ></div>

                    <div className="absolute inset-0 flex items-end justify-center z-0 pt-4">
                      <div className="relative w-full h-[110%]">
                        <Image
                          src={
                            selectedMember.avatar
                              ? `https://cdn.discordapp.com/avatars/${selectedMember.id}/${selectedMember.avatar}.png?size=512`
                              : `https://cdn.discordapp.com/embed/avatars/0.png`
                          }
                          alt="Avatar"
                          fill
                          className="object-cover object-top drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]"
                          sizes="(max-width: 640px) 240px, 320px"
                          unoptimized
                        />
                      </div>
                      <div className="absolute inset-0 bg-[#d9cda7] mix-blend-color z-20 opacity-10 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 pointer-events-none z-30 opacity-40 rounded-[1.5rem]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      mixBlendMode: "multiply",
                    }}
                  ></div>
                </motion.div>
              </div>

              {/* TYPOGRAPHY */}
              <div className="flex flex-col text-center md:text-left pointer-events-auto z-20">
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
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.4em] text-[#e5dfc9] ml-1 mb-[-0.2em] uppercase font-sans">
                        {topName}
                      </h3>
                      <h2 className="text-6xl sm:text-8xl md:text-[7rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f0e6d2] to-[#bcae83] uppercase drop-shadow-[0_0_20px_rgba(188,174,131,0.3)] leading-none filter drop-shadow-lg">
                        {bottomName}
                      </h2>
                    </motion.div>
                  );
                })()}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-6 flex flex-col items-center md:items-start"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-[#900000] to-transparent hidden md:block"></div>
                    <h4 className="text-sm sm:text-lg font-bold tracking-[0.3em] text-[#bcae83] uppercase font-sans">
                      {MEMBER_DETAILS[selectedMember.id]?.roles?.[0] ||
                        "CORE TEAM MEMBER"}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    {(
                      MEMBER_DETAILS[selectedMember.id]?.roles || ["STAFF"]
                    ).map((role, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 border border-[#4a0d0d] bg-[#4a0d0d]/30 text-[#e5dfc9] text-[10px] font-black uppercase tracking-[0.2em] rounded-md shadow-[0_0_10px_rgba(74,13,13,0.3)] backdrop-blur-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="max-w-md mt-6 text-[#9ca3af] italic font-serif text-sm sm:text-base leading-relaxed px-4 md:px-0 bg-black/20 p-4 rounded-xl border-l-2 border-[#900000]">
                    {MEMBER_DETAILS[selectedMember.id]?.quote || '"No bio yet"'}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                    {(MEMBER_DETAILS[selectedMember.id]?.socials || []).map(
                      (social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 border border-[#4a0d0d] rounded-full hover:bg-[#900000]/20 hover:border-[#900000] hover:text-[#e5dfc9] transition-all bg-black/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm group"
                        >
                          <social.icon
                            size={16}
                            className="text-[#bcae83] group-hover:text-[#e5dfc9]"
                          />
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-white">
                            {social.platform}
                          </span>
                        </a>
                      ),
                    )}
                  </div>
                </motion.div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-all z-[9999] bg-black/40 border border-white/20 hover:border-red-500 backdrop-blur-md p-3 rounded-full pointer-events-auto group"
              >
                <FaTimes
                  size={20}
                  className="group-hover:rotate-90 transition-transform"
                />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
