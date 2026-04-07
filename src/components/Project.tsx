"use client";

import { FaMicrophoneAlt, FaUsers, FaBroadcastTower } from "react-icons/fa";
import FadeIn from "./FadeIn";

// DATA PROJECT (SILAKAN DIGANTI SRC GAMBARNYA NANTI JIKA SCREENSHOT SUDAH DISIMPAN DI FOLDER PUBLIC)
const PROJECT_DATA = [
  {
    id: 1,
    serverName: "GANG DESA",
    eventName: "RADIO DESA: Obrolan Masyarakat",
    description:
      "Program talkshow rutin dengan audiens ekstensif (100+ member) membahas berbagai topik hangat seputar dinamika komunitas di dalam server.",
    audience: "100+",
    type: "Radio Station",
    imageFallback: "/projects/gangdesa.jpg",
  },
  {
    id: 2,
    serverName: "Dandelion",
    eventName: 'De Talk: "Online Temenan, Offline Canggung?"',
    description:
      "Sesi deep-talk interaktif eksklusif bersama puluhan member komunitas Dandelion yang membahas secara tuntas fenomena pertemanan maya.",
    audience: "40+",
    type: "Podcast",
    imageFallback: "/projects/online_temenan.jpg",
  },
  {
    id: 3,
    serverName: "Moonochie",
    eventName: "Ramoon (Radio Moonochie)",
    description:
      "Podcast eksklusif untuk komunitas Moonochie di mana diskusi tentang menyeritakan hal - hal PDKT dan percintaan.",
    audience: "50+",
    type: "Podcast",
    imageFallback: "/projects/RAMOON(1).jpg",
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-32 bg-[#050505] text-white relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white drop-shadow-md">
              Event <span className="text-blue-500">Portfolio</span>
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-6 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <p className="mt-6 text-gray-400 font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Momen luar biasa saat{" "}
              <strong className="text-blue-400">L.A</strong> mengambil alih
              panggung-panggung besar di puluhan server komunitas Discord,
              menghadirkan hiburan yang terstruktur dan berkualitas.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROJECT_DATA.map((project) => (
            <FadeIn key={project.id}>
              <div className="group bg-gradient-to-b from-[#0a0a0a]/80 to-[#050505] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] transition-all duration-500 cursor-pointer h-full flex flex-col relative">
                {/* Visual Image Wrapper */}
                <div className="relative h-60 w-full overflow-hidden bg-[#111]">
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.imageFallback}
                    alt={project.eventName}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Badge Tipe Event */}
                  <div className="absolute top-4 right-4 z-20 bg-[#050505]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
                    <FaBroadcastTower className="text-blue-400 text-xs" />
                    <span className="text-[10px] text-gray-200 font-bold uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Info Text Content */}
                <div className="p-8 flex flex-col flex-grow relative z-20">
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                    SERVER: {project.serverName}
                  </p>
                  <h3 className="text-white text-2xl font-serif italic mb-4 leading-tight group-hover:text-blue-400 transition-colors drop-shadow-md">
                    {project.eventName}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light flex-grow">
                    {project.description}
                  </p>

                  {/* Footer Status Card */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <FaMicrophoneAlt className="text-blue-500/70" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Live Viewers
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/5 border border-blue-500/20 px-3 py-1.5 rounded-full group-hover:border-blue-500/80 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                      <FaUsers className="text-blue-400 text-xs transition-colors" />
                      <span className="text-[11px] font-black text-blue-400 transition-colors tracking-wider">
                        {project.audience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ambient Glow di ujung card */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 blur-[40px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
