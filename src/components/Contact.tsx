"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#050505] text-white relative overflow-hidden"
    >
      {/* Background Ambient Glow (Optimized) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white drop-shadow-lg">
              Get In Touch
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-6 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT: INFO */}
          <FadeIn>
            <div className="flex flex-col justify-center h-full space-y-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  Let's Build <br /> The Future
                </h3>
                <p className="text-gray-400 font-light leading-relaxed max-w-md">
                  Have a question, collaboration idea, or want to join L.A?
                  Reach out to us. We are always looking for visionary talents
                  and great opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {/* <a href="#" className="flex items-center gap-5 group w-fit">
                  <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                    <FaDiscord
                      size={20}
                      className="text-gray-400 group-hover:text-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">
                      Discord
                    </p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      Join Our Server
                    </p>
                  </div>
                </a> */}

                <a href="#" className="flex items-center gap-5 group w-fit">
                  <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                    <FaInstagram
                      size={20}
                      className="text-gray-400 group-hover:text-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">
                      Instagram
                    </p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      @societe__la
                    </p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-5 group w-fit">
                  <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                    <FaEnvelope
                      size={20}
                      className="text-gray-400 group-hover:text-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">
                      Email
                    </p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      lesambassadeursz@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: FORM */}
          <FadeIn>
            <div className="bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-2xl relative group will-change-transform">
              {/* Form border glow hover effect */}
              <div className="absolute inset-0 rounded-[2rem] border border-blue-500/0 group-hover:border-blue-500/30 transition-colors duration-700 pointer-events-none"></div>

              <form
                className="flex flex-col gap-6 relative z-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form is disabled for Demo!");
                }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-blue-400 font-black pl-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-blue-400 font-black pl-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-blue-400 font-black pl-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you have in mind..."
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-gradient-to-r from-zinc-900 to-[#0a0a0a] border border-blue-500/30 text-blue-400 font-black tracking-[0.2em] uppercase text-xs py-5 rounded-xl hover:bg-blue-600/10 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-x-1">
                    Send Message
                  </span>
                  <svg
                    className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300"
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

                  {/* Kilat menyapu efek cahaya */}
                  <div className="absolute inset-0 w-[50px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200px] group-hover/btn:translate-x-[500px] transition-transform duration-1000 ease-in-out skew-x-[30deg]"></div>
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
