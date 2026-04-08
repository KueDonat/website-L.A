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
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xl overflow-hidden"
            >
              {/* EFEK PARTIKEL BINTANG/SNOW (NO PLUGIN NATIVE FRAMER) */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  style={{
                    width: Math.random() * 3 + 1 + "px",
                    height: Math.random() * 3 + 1 + "px",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * -200 - 100],
                    x: [0, (Math.random() - 0.5) * 100],
                    opacity: [0, Math.random() * 0.5 + 0.3, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -20 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-[360px] bg-[#0a0a0a]/80 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] backdrop-blur-3xl z-10 group"
            >
              {/* INNER GLOW */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>

              {/* SCANLINE EFFECT */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(59,130,246,0.03),rgba(255,255,255,0.01),rgba(59,130,246,0.03))] z-[60] bg-[length:100%_2px,3px_100%] opacity-20"></div>

              {/* BANNER */}
              <div className="relative h-32 w-full overflow-hidden bg-zinc-900">
                <img
                  src={
                    MEMBER_DETAILS[selectedMember.id]?.banner ||
                    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400"
                  }
                  alt="Banner"
                  className="w-full h-full object-cover brightness-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-all z-[70] bg-black/40 border border-white/10 hover:border-white/30 backdrop-blur-md p-1.5 rounded-full"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* CONTENT AREA */}
              <div className="px-6 pb-8 -mt-12 relative z-[65]">
                {/* AVATAR DENGAN RING ANIMASI */}
                <div className="relative w-24 h-24 mx-auto md:mx-0 flex justify-center items-center group-hover:scale-105 transition-transform duration-500">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-blue-600 via-blue-900 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                  ></motion.div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#0a0a0a] bg-[#0a0a0a]"></div>

                  <div className="relative w-[88px] h-[88px]">
                    <Image
                      src={
                        selectedMember.avatar
                          ? `https://cdn.discordapp.com/avatars/${selectedMember.id}/${selectedMember.avatar}.png`
                          : `https://cdn.discordapp.com/embed/avatars/0.png`
                      }
                      alt="Avatar"
                      fill
                      className="rounded-full object-cover relative z-10"
                      sizes="88px"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center md:text-left px-2">
                  {/* Nama Global (Besar) */}
                  <h3 className="text-3xl font-black tracking-tight text-white italic leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    {selectedMember.global_name || selectedMember.username}
                  </h3>

                  {/* USERNAME DISCORD ASLI */}
                  <p className="font-sans text-[13px] text-blue-400 font-medium tracking-normal mt-0.5 lowercase drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
                    @{selectedMember.username}
                  </p>

                  {/* QUOTE MINI */}
                  <div className="mt-5 p-4 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl relative overflow-hidden group/quote">
                    <div className="absolute top-[-50%] right-[-10%] w-16 h-16 bg-blue-500/20 blur-[20px] rounded-full group-hover/quote:bg-blue-500/40 transition-all duration-500"></div>
                    <p className="text-[12px] text-gray-300 font-light leading-relaxed italic relative z-10">
                      {MEMBER_DETAILS[selectedMember.id]?.quote ||
                        '"System operative active."'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    {(
                      MEMBER_DETAILS[selectedMember.id]?.roles || ["STAFF"]
                    ).map((role, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-blue-500/30 text-blue-400 text-[8px] font-black uppercase tracking-[0.2em] rounded-md bg-gradient-to-r from-blue-500/10 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.1)]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {(MEMBER_DETAILS[selectedMember.id]?.socials || []).map(
                      (social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-col items-center justify-center py-2.5 border border-white/10 rounded-xl hover:bg-gradient-to-b hover:from-blue-500/10 hover:to-transparent hover:border-blue-500/30 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 group/social bg-black/40"
                        >
                          <social.icon
                            size={16}
                            className="group-hover/social:scale-110 group-hover/social:-translate-y-0.5 transition-transform duration-300 mb-1.5 opacity-70 group-hover/social:opacity-100 text-gray-400 group-hover/social:text-blue-400"
                          />
                          <span className="text-[8px] font-bold tracking-widest uppercase opacity-70 group-hover/social:opacity-100 text-gray-300 group-hover/social:text-blue-400">
                            {social.platform}
                          </span>
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
