"use client";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import CollaborationModal from "./CollaborationModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [flash, setFlash] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setIsMounted(true); // Set true saat komponen masuk ke browser
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "MEMBER", id: "member" },
    { name: "PROJECT", id: "projects" },
    { name: "CONTACT", id: "contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    // PENGAMAN: Jangan jalankan kalau router/lenis belum siap
    if (!isMounted || !lenis) return;

    setFlash(true);
    setTimeout(() => setFlash(false), 600);

    if (id === "home") {
      lenis.scrollTo(0);
    } else {
      const target = document.querySelector(`#${id}`);
      if (target) {
        lenis.scrollTo(target, { offset: -80 });
      }
    }
  };

  // Jangan render konten Navbar yang interaktif sebelum mounted untuk menghindari Hydration Error
  if (!isMounted) return null; 

  return (
    <>
      <nav className={`fixed top-0 w-full z-[999] transition-all duration-700 ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl" 
          : "bg-transparent py-8"
      }`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          
          <button 
            onClick={(e) => handleScrollTo(e, "home")}
            className="text-2xl font-black tracking-tighter cursor-pointer group"
          >
            <span className="text-white group-hover:text-blue-500 transition-colors uppercase">L.A </span>
            <span className="text-[#D4AF37] uppercase">Société</span>
          </button>

          <div className="hidden md:flex items-center space-x-12 text-white">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-[11px] font-bold tracking-[0.4em] text-white/70 hover:text-white transition-all cursor-pointer relative group/item"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover/item:w-full"></span>
              </button>
            ))}
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border border-blue-500/50 text-[10px] tracking-[0.3em] font-bold text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 rounded-sm cursor-pointer"
            >
              COLLABORATE
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-[1000] pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            style={{ 
              top: isScrolled ? "64px" : "96px"
            }}
          />
        )}
      </AnimatePresence>

      <CollaborationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}