"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaTimes,
  FaSpotify,
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
    banner: "https://wsrv.nl/?url=i.pinimg.com/1200x/1e/e4/ea/1ee4ea2b1be83256014a624d178eddd3.jpg",
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
    banner: "https://wsrv.nl/?url=i.pinimg.com/originals/53/c8/8c/53c88c1383f3a873273b23a365006197.gif&n=-1",
    quote: '"Cuma manusia yang mencoba di manusiakan"',
    roles: ["CO Leader L.A", "Event Organizer", "Host", "Talent", "Soundman"],
    socials: [
      { platform: "Instagram", url: "#", icon: FaInstagram },
      { platform: "Tiktok", url: "#", icon: FaTiktok },
    ],
  },
  "999264557916762224": {
    banner: "https://wsrv.nl/?url=i.pinimg.com/736x/cc/c2/ad/ccc2ad580d01ec22d2b374fb283ed0a9.jpg",
    quote: '"Dios siempre está conmigo No siempre culpes a Dios y al destino, sino intenta evaluarte a ti mismo."',
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
    banner: "https://images.unsplash.com/photo-1649416097303-ddf0c8a68fc3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    banner: "https://wsrv.nl/?url=i.pinimg.com/originals/c9/e0/9a/c9e09aed17cef8abb78364a6f19db7ff.gif&n=-1",
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
    banner: "https://wsrv.nl/?url=i.pinimg.com/736x/ff/cc/aa/ffccaa15454b09ebc3a40c3be2786fa0.jpg",
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
  const [selectedMember, setSelectedMember] = useState<DiscordUser | null>(null);
  const [bgParticles, setBgParticles] = useState<{left: string, top: string, duration: number}[]>([]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));

    setBgParticles([...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 10,
    })));
  }, []);

  return (
    <section id="member" className="py-32 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white text-center">
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
                className="group relative bg-linear-to-b from-zinc-900/50 to-[#0a0a0a] border border-white/10 hover:border-gold-500/50 rounded-[2rem] cursor-pointer hover:shadow-[0_15px_50px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden"
              >
                {/* BANNER */}
                <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={MEMBER_DETAILS[user.id]?.banner || "https://images.unsplash.com/photo-1614850523296-d8c1af93d400"}
                    alt="Banner"
                    fill
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a0a0a] translate-y-1"></div>
                </div>

                <div className="pt-16 pb-8 px-6 flex flex-col items-center relative z-10">
                  <div className="relative w-28 h-28 mb-5 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full border border-gold-500/40 group-hover:border-gold-500 transition-all duration-700 overflow-hidden">
                      <Image
                        src={user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : `https://cdn.discordapp.com/embed/avatars/0.png`}
                        alt={user.username}
                        fill
                        sizes="112px"
                        className="rounded-full object-cover p-1"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white italic drop-shadow-md group-hover:text-gold-500 transition-colors duration-300 text-center uppercase tracking-tight">
                    {user.global_name || user.username}
                  </h3>

                  <div className="flex flex-col items-center gap-1.5 mt-1.5 mb-6">
                    <p className="text-gray-400 text-xs font-medium lowercase">@{user.username}</p>
                    <span className="px-3 py-1 mt-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-gray-300 tracking-widest uppercase group-hover:border-gold-500/30 transition-colors">
                      {MEMBER_DETAILS[user.id]?.roles?.[0] || "Core Team"}
                    </span>
                  </div>

                  <div className="w-full flex justify-center">
                    <div className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gold-500/30 bg-linear-to-r from-gold-500/5 to-transparent text-gold-500 text-[10px] tracking-[0.2em] uppercase font-black opacity-80 group-hover:opacity-100 group-hover:bg-gold-500/10 group-hover:border-gold-500/60 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500">
                      <span>View Profile</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-sm"
          >
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            >
              {bgParticles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none opacity-5 md:opacity-10"
                  style={{ left: particle.left, top: particle.top }}
                  animate={{ y: [0, -60, 0], rotate: [0, 90, 180] }}
                  transition={{ duration: particle.duration, repeat: Infinity }}
                >
                  <div className="w-12 h-20 md:w-16 md:h-24 border border-white/10 rounded-md bg-zinc-900 shadow-2xl"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* CONTENT WRAPPER */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 z-10 pointer-events-none py-10"
            >
              {/* THE CARD */}
              <div className="relative group perspective-[1200px] pointer-events-auto shrink-0 mb-4 md:mb-0" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  animate={{
                    rotateY: [-3, 3, -3],
                    rotateX: [1, -1, 1],
                    y: [0, -15, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-[240px] h-[340px] sm:w-[320px] sm:h-[460px] rounded-[1.8rem] bg-[#fdfaf0] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_0_50px_rgba(188,174,131,0.15)] p-4 sm:p-5 flex flex-col border border-[#d4af37]/10"
                >
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none rounded-[1.8rem] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
                  <div className="absolute inset-3 sm:inset-4 border border-[#900000]/20 rounded-[1.5rem] pointer-events-none"></div>
                  <div className="absolute inset-4 sm:inset-5 border-[2px] border-[#1a1110] rounded-[1.2rem] pointer-events-none"></div>

                  {/* RANK TOP LEFT */}
                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex flex-col items-center text-[#900000] z-20 scale-90 sm:scale-100">
                    <span className="text-2xl sm:text-3xl font-black font-serif leading-none uppercase">
                      {(() => {
                        const roles = MEMBER_DETAILS[selectedMember.id]?.roles || [];
                        if (roles.some(r => r.includes("Leader"))) return "A";
                        if (roles.some(r => r.includes("CO Leader"))) return "K";
                        if (roles.some(r => r.includes("Manager"))) return "Q";
                        return "J";
                      })()}
                    </span>
                    <span className="text-xl sm:text-2xl mt-0.5">♦</span>
                  </div>

                  {/* RANK BOTTOM RIGHT */}
                  <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex flex-col items-center text-[#900000] rotate-180 z-20 scale-90 sm:scale-100">
                    <span className="text-2xl sm:text-3xl font-black font-serif leading-none uppercase">
                      {(() => {
                        const roles = MEMBER_DETAILS[selectedMember.id]?.roles || [];
                        if (roles.some(r => r.includes("Leader"))) return "A";
                        if (roles.some(r => r.includes("CO Leader"))) return "K";
                        if (roles.some(r => r.includes("Manager"))) return "Q";
                        return "J";
                      })()}
                    </span>
                    <span className="text-xl sm:text-2xl mt-0.5">♦</span>
                  </div>

                  <div className="absolute top-[3.5rem] bottom-[3.5rem] sm:top-[4.5rem] sm:bottom-[4.5rem] left-8 sm:left-10 right-8 sm:right-10 border-[3px] border-[#1a1110] overflow-hidden bg-[#050505]">
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='%23600'/%3E%3C/svg%3E")`, backgroundSize: "30px 30px" }}></div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 flex items-end justify-center pt-6">
                      <div className="relative w-full h-[120%] -mb-4">
                        <Image
                          src={selectedMember.avatar ? `https://cdn.discordapp.com/avatars/${selectedMember.id}/${selectedMember.avatar}.png?size=512` : `https://cdn.discordapp.com/embed/avatars/0.png`}
                          alt="Avatar" fill className="object-cover object-top drop-shadow-[0_20px_40px_rgba(0,0,0,1)] grayscale-[0.1]" sizes="300px" unoptimized
                        />
                      </div>
                    </div>
                  </div>
                  <motion.div animate={{ x: ["-150%", "150%"] }} transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }} className="absolute inset-0 w-1/3 bg-white/10 -skew-x-12 blur-2xl pointer-events-none" />
                </motion.div>
              </div>

              {/* INFORMATION SIDE */}
              <div className="flex flex-col text-center md:text-left pointer-events-auto z-20 max-w-xl w-full px-4">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-transparent bg-clip-text bg-linear-to-b from-white via-[#f0e6d2] to-[#bcae83] uppercase leading-tight drop-shadow-2xl">
                      {selectedMember.global_name || selectedMember.username}
                    </h2>
                    <p className="text-[#900000] font-sans font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mt-1 flex items-center justify-center md:justify-start gap-2">
                      <span className="w-8 h-px bg-[#900000]/40"></span>
                      @{selectedMember.username}
                    </p>
                  </div>

                  <div className="mb-8 md:mb-10">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {(MEMBER_DETAILS[selectedMember.id]?.roles || ["Member"]).map((role, i) => (
                        <span key={i} className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] shadow-lg border backdrop-blur-md transition-all ${i === 0 ? "bg-[#900000]/20 border-[#900000]/40 text-[#fdfaf0] scale-105 sm:scale-110 mr-1 sm:mr-2" : "bg-white/5 border-white/10 text-gray-400"}`}>
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 md:mb-10 relative group">
                    <div className="p-4 sm:p-6 bg-[#0a0a0a]/60 border-l-[3px] border-[#d4af37] rounded-r-2xl shadow-xl backdrop-blur-sm">
                      <p className="text-gray-300 italic font-serif text-base sm:text-lg leading-relaxed">
                        {MEMBER_DETAILS[selectedMember.id]?.quote || "The silent strategist of Los Angeles."}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                    {(MEMBER_DETAILS[selectedMember.id]?.socials || []).map((social, i) => (
                      <a key={i} href={social.url} target="_blank" rel="noreferrer" className="group flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 border border-white/10 rounded-xl bg-white/5 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all font-sans">
                        <social.icon size={16} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-white/70 group-hover:text-white">
                          {social.platform}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CLOSE BUTTON */}
              <button onClick={() => setSelectedMember(null)} className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-10 lg:right-10 text-white/30 hover:text-white bg-black/40 sm:bg-white/5 hover:bg-white/10 p-3 sm:p-4 rounded-full border border-white/10 hover:border-white/30 transition-all z-[10000] group shadow-2xl pointer-events-auto">
                <FaTimes size={18} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </section>
  );
}
