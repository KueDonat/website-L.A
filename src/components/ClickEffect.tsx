"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClickEffect() {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Simpan koordinat klik
      setClicks((prev) => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
    };
    window.addEventListener("mousedown", handleGlobalClick);
    return () => window.removeEventListener("mousedown", handleGlobalClick);
  }, []);

  // Hapus data klik setelah animasi selesai agar tidak membebani memori
  useEffect(() => {
    if (clicks.length > 0) {
      const timer = setTimeout(() => {
        setClicks((prev) => prev.slice(1));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [clicks]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: click.x,
              top: click.y,
              width: 15,
              height: 15,
              borderRadius: "50%",
              border: "1px solid rgba(59, 130, 246, 0.6)", // Biru senada logo
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}