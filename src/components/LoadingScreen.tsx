"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tunggu sampai seluruh document (gambar, fonts, dll) selesai di-load
    const handleLoad = () => {
      // Tambahkan sedikit delay agar efek terasa dan mencegah flicker jika load terlalu cepat
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Cegah scroll ketika sedang loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020202]"
        >
          {/* Efek Particle Background (Optional tapi keren) */}
          <div className="absolute inset-0 bg-[#050505] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50"></div>

          {/* Animasi Tengah */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center p-10"
          >
            {/* Bola Glow Biru & Kuning keemasan mengikuti aksen web */}
            <div className="absolute w-[150px] h-[150px] bg-blue-600/30 blur-[60px] rounded-full mix-blend-screen" />
            <div className="absolute w-[100px] h-[100px] bg-yellow-600/20 blur-[50px] rounded-full mix-blend-screen" />
            
            <span className="relative z-10 text-white text-sm md:text-base tracking-[0.4em] uppercase font-black drop-shadow-md">
              L.A Société
            </span>
          </motion.div>

          {/* Loading Bar yang dinamis */}
          <div className="mt-4 w-48 md:w-64 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            />
          </div>
          
          <motion.p 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 text-[9px] md:text-[10px] text-blue-300 tracking-[0.4em] uppercase font-medium"
          >
            Preparing Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
