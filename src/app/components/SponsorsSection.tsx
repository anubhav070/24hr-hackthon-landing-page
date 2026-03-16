import { motion } from "motion/react";
import { FileText, Lock } from "lucide-react";
import { useState } from "react";

const sponsors = [
  { id: 1, name: "Sponsor Alpha", tier: "CLASSIFIED", level: "PLATINUM" },
  { id: 2, name: "Sponsor Beta", tier: "TOP SECRET", level: "GOLD" },
  { id: 3, name: "Sponsor Gamma", tier: "RESTRICTED", level: "SILVER" },
  { id: 4, name: "Sponsor Delta", tier: "CONFIDENTIAL", level: "BRONZE" },
  { id: 5, name: "Sponsor Epsilon", tier: "CLASSIFIED", level: "PARTNER" },
  { id: 6, name: "Sponsor Zeta", tier: "TOP SECRET", level: "PARTNER" },
];

export function SponsorsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen py-20 px-4">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-6xl md:text-7xl mb-4 tracking-wider"
          style={{
            fontFamily: "'Nosifer', cursive",
            textShadow: "0 0 20px #B20600, 0 0 40px #4E0000",
          }}
        >
          HAWKINS
        </h2>
        <h3
          className="text-5xl md:text-6xl mb-4 tracking-widest"
          style={{
            fontFamily: "'Nosifer', cursive",
            color: "#B20600",
            textShadow: "0 0 15px #B20600",
          }}
        >
          NATIONAL LAB
        </h3>
        <p className="text-xl text-gray-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Our research partners
        </p>
      </motion.div>

      {/* Lab Floor Effect */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(178, 6, 0, 0.2) 25%, rgba(178, 6, 0, 0.2) 26%, transparent 27%, transparent 74%, rgba(178, 6, 0, 0.2) 75%, rgba(178, 6, 0, 0.2) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(178, 6, 0, 0.2) 25%, rgba(178, 6, 0, 0.2) 26%, transparent 27%, transparent 74%, rgba(178, 6, 0, 0.2) 75%, rgba(178, 6, 0, 0.2) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Sponsors Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.id}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setHoveredId(sponsor.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            {/* File Container */}
            <motion.div
              className="relative bg-[#0a0a0a] border-2 border-[#4E0000] rounded-lg p-6 cursor-pointer overflow-hidden"
              whileHover={{
                borderColor: "#B20600",
                boxShadow: "0 0 30px rgba(178, 6, 0, 0.3)",
              }}
            >
              {/* Top Secret Stamp */}
              <div className="absolute top-2 right-2 rotate-12 opacity-50">
                <div
                  className="border-4 border-[#B20600] rounded px-3 py-1 text-xs tracking-widest"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#B20600",
                    fontWeight: "bold",
                  }}
                >
                  {sponsor.tier}
                </div>
              </div>

              {/* File Icon */}
              <motion.div
                className="flex items-center justify-center mb-6 relative"
                animate={{
                  scale: hoveredId === sponsor.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <FileText
                  className="w-20 h-20 text-[#B20600]"
                  style={{ filter: "drop-shadow(0 0 10px #B20600)" }}
                />
                
                {/* Lock icon when not hovered */}
                <motion.div
                  className="absolute"
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: hoveredId === sponsor.id ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Lock className="w-10 h-10 text-[#4E0000]" />
                </motion.div>
              </motion.div>

              {/* File Opens - Reveal Content */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredId === sponsor.id ? 1 : 0.5,
                  y: hoveredId === sponsor.id ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Level Badge */}
                <div className="mb-4">
                  <span
                    className="inline-block px-4 py-1 border-2 rounded-full text-sm tracking-wider"
                    style={{
                      borderColor: "#B20600",
                      color: "#B20600",
                      fontFamily: "'JetBrains Mono', monospace",
                      boxShadow: hoveredId === sponsor.id ? "0 0 15px rgba(178, 6, 0, 0.5)" : "none",
                    }}
                  >
                    {sponsor.level}
                  </span>
                </div>

                {/* Sponsor Name */}
                <h3
                  className="text-2xl mb-2 tracking-wide"
                  style={{
                    fontFamily: "'Creepster', cursive",
                    color: hoveredId === sponsor.id ? "#B20600" : "#4E0000",
                    textShadow: hoveredId === sponsor.id ? "0 0 10px #B20600" : "none",
                    transition: "all 0.3s",
                  }}
                >
                  {sponsor.name}
                </h3>

                {/* Redacted Text Effect */}
                <div className="space-y-2 mt-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-2 rounded"
                      style={{
                        background: hoveredId === sponsor.id ? "#4E0000" : "#1a1a1a",
                        width: `${60 + Math.random() * 40}%`,
                        margin: "0 auto",
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Barcode at bottom */}
              <div className="mt-6 flex justify-center gap-1">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#4E0000]"
                    style={{
                      height: `${12 + Math.random() * 12}px`,
                    }}
                  />
                ))}
              </div>

              {/* Lab ID Number */}
              <div
                className="text-center mt-2 text-xs text-[#4E0000] tracking-widest"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                LAB-ID: {String(sponsor.id).padStart(4, "0")}
              </div>

              {/* Corner clips (like files) */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-[#050505] border-r-transparent" />
            </motion.div>

            {/* Scattered papers effect when hovered */}
            {hoveredId === sponsor.id && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full border-2 border-[#4E0000] rounded-lg pointer-events-none"
                    initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
                    animate={{
                      opacity: 0.3,
                      x: (i - 1) * 8,
                      y: (i - 1) * 8,
                      rotate: (i - 1) * 3,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      zIndex: -1,
                      background: "#0a0a0a",
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Red Spores floating */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#B20600] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * -30],
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom Warning Tape */}
      <div className="mt-20">
        <motion.div
          className="w-full h-12 relative overflow-hidden"
          style={{
            background: "repeating-linear-gradient(45deg, #B20600, #B20600 20px, #1a1a1a 20px, #1a1a1a 40px)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 text-center flex items-center justify-center text-black font-bold tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ⚠️ RESTRICTED AREA - AUTHORIZED PERSONNEL ONLY ⚠️ RESTRICTED AREA - AUTHORIZED PERSONNEL ONLY ⚠️
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
