"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-[#050505] text-white overflow-hidden relative">
      {/* AMBIENT BACKGROUND GLOWS (Optimized Blur) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
          
          {/* ELEGANT GLOWING DIVIDER (Desktop Only) */}
          <div className="hidden lg:flex absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-0 justify-center items-center">
            {/* Core bright light in the middle of line */}
            <div className="absolute w-[2px] h-48 bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
          </div>

          {/* SISI KIRI: LOGO */}
          <FadeIn>
            <div className="relative group w-full flex flex-col items-center lg:items-start pl-0 lg:pl-4">
              {/* Softened glow for efficiency */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-blue-600/5 rounded-full blur-[80px] group-hover:bg-blue-600/10 transition-all duration-700 pointer-events-none"></div>
              
              {/* LOGO pengganti Headline dengan animasi melayang */}
              <motion.div 
                className="relative w-full h-[300px] md:h-[450px]"
                animate={{ y: [0, -10, 0] }} // Subtler float
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/logo.png" 
                  alt="L.A Société Visual" 
                  fill
                  className="object-contain drop-shadow-[0_10px_40px_rgba(59,130,246,0.3)] filter brightness-110"
                />
              </motion.div>

              {/* Garis Aksen & Teks "Established" */}
              <div className="mt-8 md:mt-12 flex items-center gap-6">
                <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <p className="text-blue-400 tracking-[0.4em] uppercase text-xs font-black opacity-80 group-hover:opacity-100 transition-opacity">
                  Established 2025
                </p>
                <div className="h-[1px] w-8 bg-gradient-to-l from-blue-500 to-transparent lg:hidden"></div>
              </div>
            </div>
          </FadeIn>

          {/* SISI KANAN: Teks Deskripsi (DIROMBAK JADI KARTU ELEGAN) */}
          <FadeIn>
            <div className="space-y-6">
              
              {/* KARTU 1 (Headline & Misi) - Optimized Blur */}
              <div className="bg-gradient-to-br from-[#0a0a0a]/90 to-[#0a0a0a]/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group will-change-transform">
                {/* Glow pojok atas */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none"></div>
                
                <h3 className="text-white font-serif text-3xl md:text-4xl mb-6 italic tracking-tight drop-shadow-md">
                  Profesionalitas &<br/>Kreativitas.
                </h3>
                <p className="text-gray-200 leading-loose text-base md:text-lg font-medium relative z-10">
                  <strong className="text-blue-400 font-black text-xl tracking-wider mr-1">L.A</strong> 
                  adalah Event Organizer berbasis Discord yang mengedepankan profesionalitas, kreativitas, dan kualitas dalam setiap penyelenggaraan acara. Kami telah dipercaya oleh berbagai komunitas untuk mengelola event di server mereka—mulai dari skala kecil hingga komunitas besar dengan ribuan member.
                </p>
              </div>
              
              {/* KARTU 2 (Visi & Pelaksanaan) - Optimized Blur */}
              <div className="bg-[#0a0a0a]/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-lg hover:bg-[#0a0a0a]/60 transition-colors duration-500 will-change-transform">
                <p className="text-gray-300 leading-loose text-base md:text-lg font-medium pr-0 md:pr-4">
                  Dengan pengalaman yang terus berkembang, <strong className="text-white tracking-widest font-black">L.A</strong> mampu menghadirkan konsep event yang fleksibel dan relevan, mulai dari hiburan, talkshow, hingga kolaborasi komunitas. Setiap event dirancang secara terstruktur dengan eksekusi yang rapi, memastikan pengalaman yang menarik dan berkesan bagi seluruh peserta.
                </p>
              </div>

              {/* KARTU 3 (Quote Komitmen) */}
              <div className="relative mt-8">
                {/* Glow Outer Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-500/5 to-blue-500/20 rounded-[2rem] blur-md opacity-50"></div>
                
                <div className="bg-gradient-to-r from-[#0a0a0a] to-[#121212] p-8 md:p-10 border border-blue-500/30 rounded-[2rem] italic relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.05)]">
                  {/* Dekorasi Garis Kiri */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                  
                  <p className="text-blue-400 leading-loose text-base md:text-lg font-light relative z-10">
                    &quot;Sebagai partner event Anda, <strong className="font-bold tracking-wider">L.A</strong> berkomitmen untuk menghadirkan standar profesional dalam setiap detail, membantu komunitas Anda tumbuh, lebih aktif, dan semakin hidup melalui event yang berkualitas.&quot;
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}