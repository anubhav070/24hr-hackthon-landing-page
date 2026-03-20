import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* 1. BACKGROUND: DEMOGORGON IMAGE */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://i.pinimg.com/1200x/33/8f/e6/338fe62c5313d544476be48408e3e6fb.jpg" 
          alt="The Demogorgon" 
          className="w-full h-full object-cover opacity-50 grayscale-0" // Opacity badha di aur grayscale hata diya
          initial={{ scale: 1.1, filter: "brightness(0.5)" }}
          animate={{ scale: 1, filter: "brightness(0.7)" }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Cinematic Gradient Overlay - Taaki text read ho sake */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
      </div>

      {/* 2. MAIN CONTENT: TITLE & STRANGER VIBE */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Top Bar (Stranger Things Style) */}
          <div className="w-[85%] h-[4px] bg-red-600 mb-2 shadow-[0_0_20px_#f00] mx-auto" />
          
          <h1 
            className="text-7xl md:text-[9rem] font-black uppercase text-center leading-none tracking-tight"
            style={{ 
              fontFamily: "'Benguiat', serif", 
              color: "transparent",
              WebkitTextStroke: "2px #B20600",
              textShadow: "0 0 100px #B20600, 0 0 70px #B20600"
            }}
          >
            UPSIDE DOWN
          </h1>

          <motion.h2 
            className="text-5xl md:text-7xl font-light tracking-[1.5em] text-red-600 mb-12 ml-[1.5em]"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          >
            CODEX
          </motion.h2>

          {/* Bottom Bars */}
          <div className="flex justify-between w-[90%] mx-auto mt-2">
            <div className="h-[4px] bg-red-600 w-[28%] shadow-[0_0_10px_#f00]" />
            <div className="h-[4px] bg-red-600 w-[28%] shadow-[0_0_10px_#f00]" />
          </div>
        </motion.div>

        {/* Neural Thinking Section */}
        <motion.div className="mt-14 mb-14 relative inline-block group">
          <div className="bg-red-900/10 border border-red-600/30 px-8 py-4 rounded-sm backdrop-blur-sm relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-red-600/5"
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-2xl md:text-3xl font-mono text-red-500 tracking-widest uppercase">
              24H Simulation // <span className="text-white">Neural Override</span>
            </span>
          </div>
        </motion.div>

        {/* 4. Action: The Hellfire Club Button */}
        <div className="relative flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1, letterSpacing: "4px", boxShadow: "0 0 40px rgba(178, 6, 0, 0.8)" }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-700 hover:bg-red-600 text-white px-16 py-5 text-2xl font-bold uppercase tracking-widest transition-all border-b-4 border-red-900 shadow-[0_0_30px_rgba(178,6,0,0.4)]"
          >
            Initiate Sequence
          </motion.button>
          
          {/* Subtle Vines crawling beneath button */}
          <div className="absolute top-full mt-2 w-48 h-10 opacity-40">
            <svg viewBox="0 0 100 20" className="w-full h-full">
              <path d="M0 5 Q25 15 50 5 T100 5" stroke="#4E0000" strokeWidth="2" fill="none" />
              <path d="M10 10 Q35 0 60 10 T90 10" stroke="#B20600" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* 5. Floating Spores (Red Dust) */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-600 rounded-full z-10"
          initial={{ x: Math.random() * 2000, y: Math.random() * 1000 }}
          animate={{
            y: [0, -200, 0],
            x: [0, (Math.random() - 0.5) * 100, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{ filter: "blur(1.5px)" }}
        />
      ))}
    </section>
  );
}