import { motion } from "framer-motion";
import { Brain, Radio, Smartphone, Network, Sword } from "lucide-react";

const tracks = [
  {
    id: 1,
    name: "The Eleven Track",
    domain: "AI",
    vibe: "Mind over Matter",
    icon: Brain,
    description: "Harness the power of artificial intelligence",
    color: "#B20600",
  },
  {
    id: 2,
    name: "The Dustin Track",
    domain: "Web Dev",
    vibe: "Architecting the Frequency",
    icon: Radio,
    description: "Build the web infrastructure",
    color: "#FF0000",
  },
  {
    id: 3,
    name: "The Lucas Track",
    domain: "Android",
    vibe: "Mobile Transmissions",
    icon: Smartphone,
    description: "Create powerful mobile applications",
    color: "#B20600",
  },
  {
    id: 4,
    name: "The Will Track",
    domain: "ML",
    vibe: "Decoding the Shadow",
    icon: Network,
    description: "Uncover patterns in the data",
    color: "#8B0000",
  },
  {
    id: 5,
    name: "The Hellfire Track",
    domain: "Custom",
    vibe: "The Ultimate Quest",
    icon: Sword,
    description: "Forge your own path",
    color: "#FF0000",
  },
];

export function TracksSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-[#050505] overflow-hidden">
      
      {/* 1. Section Title - Clean White + Subtle Glow */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-5xl md:text-7xl mb-4 tracking-wider leading-tight font-normal"
          style={{
            fontFamily: "'Nosifer', cursive",
            color: "#FFFFFF",
            textShadow: "0 0 8px rgba(178, 6, 0, 0.8), 0 0 20px rgba(178, 6, 0, 0.4)",
          }}
        >
          THE CHOSEN PARTY
        </h2>
        <p 
          className="text-sm md:text-base text-gray-400 tracking-[0.3em] uppercase" 
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Select your domain. <span className="text-red-600">Choose your destiny.</span>
        </p>
      </motion.div>

      {/* 2. Tracks Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {tracks.map((track, index) => (
          <motion.div
            key={track.id}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Card Container */}
            <motion.div
              className="relative bg-black/40 border border-red-900/30 rounded-sm p-8 h-full overflow-hidden cursor-pointer backdrop-blur-sm"
              whileHover={{
                borderColor: "#FF0000",
                backgroundColor: "rgba(10, 10, 10, 0.8)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Character Icon - Clean */}
              <div className="relative mb-8 text-center">
                <motion.div 
                  className="w-16 h-16 mx-auto relative flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <track.icon
                    size={48}
                    style={{
                      color: "#FFFFFF",
                      filter: `drop-shadow(0 0 8px ${track.color})`,
                    }}
                  />
                  {track.id === 1 && (
                    <motion.div 
                      className="absolute top-[90%] left-1/2 w-[1px] bg-red-600"
                      animate={{ height: [0, 20, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Track Name - Clean & Sharp */}
              <h3
                className="text-3xl mb-4 text-center tracking-wide font-normal"
                style={{
                  fontFamily: "'Creepster', cursive",
                  color: "#FFFFFF",
                  textShadow: `0 0 10px ${track.color}`,
                }}
              >
                {track.name}
              </h3>

              {/* Domain Badge - Minimalist */}
              <div className="flex justify-center mb-6">
                <span
                  className="px-4 py-1 border border-red-900/50 bg-red-950/20 rounded-full text-[10px] tracking-[0.2em] uppercase text-gray-300 font-mono"
                >
                  {track.domain}
                </span>
              </div>

              {/* Vibe Quote - High Contrast */}
              <p
                className="text-center text-white/90 italic mb-4 text-xs tracking-widest leading-relaxed"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                "{track.vibe}"
              </p>

              {/* Description - Clean Gray */}
              <p className="text-center text-gray-500 text-[11px] leading-relaxed font-normal px-2">
                {track.description}
              </p>

              {/* Minimal Border Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-900/50" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-red-900/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-red-900/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-900/50" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 3. Subtle Spores */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-red-800 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}