"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react"; // Tambahkan useState
import Navbar from "@/components/Navbar";
import AnimatedTitle from "@/components/AnimatedTitle";
import FadeIn from "@/components/FadeIn";
import About from "@/components/About";
import Members from "@/components/Members";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import NetworkParticles from "@/components/NetworkParticles";

export default function Home() {
  const [mounted, setMounted] = useState(false); // State untuk cek sudah di browser atau belum
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const spotlightY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    setMounted(true); // Set true setelah komponen muncul di browser
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative bg-black overflow-x-hidden">
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <Navbar />
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center relative px-6 text-white overflow-hidden bg-[#020202]"
      >
        {/* SPOTLIGHT MOUSE */}
        <motion.div
          className="absolute z-[2] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
          style={{ x: spotlightX, y: spotlightY, left: -300, top: -300 }}
        />

        {/* EFEK GRID FUTURISTIK & GLOW BESAR DI TENGAH */}
        <div className="absolute inset-0 bg-[#050505] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

        {/* GLOW DEEP BLUE DI TENGAH */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-[100%] pointer-events-none z-[1]"></div>

        {/* NETWORK / DNA PARTICLES */}
        {mounted && <NetworkParticles />}

        {/* EFEK ORBITAL GLOW YANG MANIS (Menggantikan Logo Besarnya) */}
        {mounted && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] aspect-square pointer-events-none z-[0] flex items-center justify-center">
            {/* Bola Biru */}
            <motion.div 
              animate={{ 
                x: [0, 60, 0, -60, 0],
                y: [0, -60, 60, 40, 0],
                scale: [1, 1.2, 1, 0.9, 1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen"
            />
            {/* Bola Emas (Aksen Mewah) */}
            <motion.div 
              animate={{ 
                x: [0, -80, 0, 80, 0],
                y: [0, 50, -50, -40, 0],
                scale: [0.9, 1, 1.3, 1, 0.9]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute w-[250px] h-[250px] bg-gold-500/15 blur-[100px] rounded-full mix-blend-screen"
            />
            {/* Cincin Futuristik Abstrak */}
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-100 h-100 border border-blue-500/10 rounded-full"
            />
            <motion.div 
              animate={{ 
                rotate: -360,
                scale: [1.1, 1, 1.1]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-125 h-125 border border-gold-500/5 rounded-full"
            />
          </div>
        )}

        {/* CONTENT UTAMA */}
        <div className="z-10 flex flex-col items-center text-center space-y-6 relative mt-10">
          
          <div className="scale-110 md:scale-150 relative">
            {/* Dekorasi Garis Kiri & Kanan */}
            <div className="absolute top-1/2 -left-20 md:-left-32 w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-blue-500/50 hidden sm:block"></div>
            <div className="absolute top-1/2 -right-20 md:-right-32 w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-blue-500/50 hidden sm:block"></div>
            
            <AnimatedTitle text="L.A SOCIÉTÉ" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-4 mt-6"
          >
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <p className="text-blue-300 tracking-[0.4em] md:tracking-[0.8em] uppercase text-[9px] md:text-[11px] font-semibold drop-shadow-lg">
              Profesionalitas • Kreativitas • Kualitas
            </p>
          </motion.div>
          
          {/* TOMBOL CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 pointer-events-auto"
          >
            <button 
              onClick={() => {
                const target = document.querySelector("#projects");
                if(target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              Explore Portfolio
            </button>
            <button 
              onClick={() => {
                const target = document.querySelector("#member");
                if(target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-transparent border border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 text-white text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 rounded-sm hover:scale-105"
            >
              View Members
            </button>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[8px] tracking-[0.6em] uppercase font-bold text-blue-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent shadow-[0_0_10px_rgba(37,99,235,0.8)]"
          />
        </motion.div>
      </section>
      <About />
      <Members />
      <Project />
      <Contact />
      <footer className="py-12 border-t border-white/5 text-center text-gray-700 text-[9px] tracking-[0.6em] uppercase relative z-10">
        &copy; 2024 L.A Société • Premium Event Solution
      </footer>
    </main>
  );
}
