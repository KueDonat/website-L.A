"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CollaborationModal({ isOpen, onClose }: CollaborationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FUNGSI KETIKA FORM DIKIRIM
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Matikan redirect bawaan browser
    
    // Ambil semua data dari kolom formulir
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Kirim data secara gaib tanpa reload (no-cors)
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfCA6z6EgoVEvkmFaQfLxOE_gLEgISn4wl8xchGtwqubFVtxg/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
    .then(() => {
      setIsSubmitted(true); // Pindah ke tampilan centang hijau
      setTimeout(() => {
        onClose(); // Tutup pop-up
        setIsSubmitted(false); // Reset kembali
      }, 4000);
    })
    .catch((error) => console.error("Error submitting form", error));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
          />

          {/* Modal Box */}
          <div className="fixed inset-0 flex items-center justify-center z-[10000] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-[#050505]/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.15)] relative pointer-events-auto overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors z-20 cursor-pointer"
              >
                <FaTimes size={18} />
              </button>

              {/* Header */}
              <div className="mb-6 relative z-10">
                <h3 className="text-xl md:text-2xl font-serif italic text-white mb-1.5 leading-tight">
                  Partner with <span className="text-blue-500 font-bold not-italic">L.A</span>
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                  Ceritakan ide kolaborasi eksklusifmu, dan biarkan tim ahli kami mewujudkannya.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                  className="flex flex-col items-center justify-center py-10 text-center relative z-10"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <FaPaperPlane className="text-green-500 text-3xl" />
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-3 tracking-wide">Terkirim!</h4>
                  <p className="text-gray-400 text-sm max-w-[80%] mx-auto leading-relaxed">
                    Kami akan meninjau prospek ini dan menghubungi Anda secepatnya.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* FORM INPUTS */}
                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-4 relative z-10"
                  >
                    <div>
                      <label className="block text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1.5 ml-1">Komunitas / Klien</label>
                      <input 
                        type="text" 
                        name="entry.1886450165"
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                        placeholder="Contoh: Dandelion ID"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1.5 ml-1">Kontak Person (Email/Discord)</label>
                      <input 
                        type="text" 
                        name="entry.996536454"
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all"
                        placeholder="Tulis username atau email aktif"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1.5 ml-1">Tipe Kolaborasi</label>
                      <div className="relative">
                        <select 
                          name="entry.1701288874"
                          className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Event Organizer Penuh">Event Organizer Keseluruhan</option>
                          <option value="Sewa Talent (MC/Host)">Undang Talent (MC/Host)</option>
                          <option value="Media Partner">Media Partner</option>
                          <option value="Lainnya">Lainnya / Custom Event</option>
                        </select>
                        {/* Custom Arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1.5 ml-1">Deskripsi Singkat</label>
                      <textarea 
                        name="entry.1785858440"
                        required 
                        rows={2}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all resize-none"
                        placeholder="Ceritakan rencana tanggal acara atau detail lainnya..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full mt-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black tracking-[0.2em] uppercase text-[10px] py-3.5 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      Kirim Pengajuan
                    </button>
                  </form>
                </>
              )}

              {/* Decorator background Effect */}
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-600/15 blur-[80px] rounded-full pointer-events-none z-[0] mix-blend-screen"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-blue-400/10 blur-[60px] rounded-full pointer-events-none z-[0]"></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
