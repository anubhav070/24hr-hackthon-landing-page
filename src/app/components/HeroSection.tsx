import { motion } from "framer-motion"; // motion/react se better compatibility ke liye

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* 1. Background: The Mind Flayer Shadow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-25"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
          filter: ["blur(4px)", "blur(2px)", "blur(4px)"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 800 600" fill="none" className="w-full h-full">
          <path
            d="M400 50 L350 150 L300 200 L250 300 L200 400 L150 500 L100 550 L50 600 M400 50 L450 150 L500 200 L550 300 L600 400 L650 500 L700 550 L750 600 M400 50 L400 200 L380 300 L400 400 L400 600"
            stroke="#B20600" strokeWidth="10" strokeLinecap="round" opacity="0.4"
          />
          {/* Tentacles with Shiver Effect */}
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={i}
              d={`M400 200 Q${350 + i * 50} ${300 + i * 20} ${300 + i * 40} 600`}
              stroke="#6E0000" strokeWidth="3" fill="none"
              animate={{ d: [`M400 200 Q${350 + i * 50} 300 ${300 + i * 40} 600`, `M400 200 Q${380 + i * 50} 320 ${310 + i * 40} 600`] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </svg>
      </motion.div>

      {/* 2. Character: The Breathing Demogorgon (Left Side) */}
      <motion.div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 opacity-60 hidden lg:block"
        animate={{ rotate: [-5, 5, -5], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="70" fill="#0a0a0a" stroke="#B20600" strokeWidth="2" />
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={i}
              x1="100" y1="100"
              x2={100 + 80 * Math.cos((i * 36 * Math.PI) / 180)}
              y2={100 + 80 * Math.sin((i * 36 * Math.PI) / 180)}
              stroke="#B20600" strokeWidth="5"
              animate={{ strokeWidth: [3, 8, 3], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
          <circle cx="100" cy="100" r="25" fill="#000" stroke="#ff0000" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* 3. Main Content: Title & Intellect Vibe */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none mb-2 italic"
            style={{ color: "#fff", textShadow: "4px 4px 0px #B20600, -2px -2px 0px #4E0000" }}>
            UPSIDE DOWN
          </h1>
          <motion.h2 
            className="text-5xl md:text-7xl font-light tracking-[1.5em] text-red-600 mb-12 ml-[1.5em]"
            animate={{ opacity: [1, 0.5, 1], scale: [1, 1.02, 1] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          >
            CODEX
          </motion.h2>
        </motion.div>

        {/* Neural Thinking Section (Stronger Thinking Replacement) */}
        <motion.div className="mb-14 relative inline-block group">
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
          
          {/* Animated Brain Waves (SVG Lines) */}
          <svg className="absolute -top-10 left-0 w-full h-20 opacity-30">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                d={`M 0 ${10 + i * 5} Q 50 ${-10 + i * 10} 100 ${10 + i * 5} T 200 ${10 + i * 5}`}
                stroke="#B20600" fill="none" strokeWidth="1"
                animate={{ pathOffset: [0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </svg>
        </motion.div>

        {/* 4. Action: The Hellfire Club Button */}
        <div className="relative flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1, letterSpacing: "4px" }}
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
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-600 rounded-full"
          initial={{ x: Math.random() * 2000, y: Math.random() * 1000 }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{ filter: "blur(1px)" }}
        />
      ))}
    </section>
  );
}