import { motion } from "motion/react";
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
    color: "#8B0000",
  },
  {
    id: 3,
    name: "The Lucas Track",
    domain: "Android",
    vibe: "Mobile Transmissions",
    icon: Smartphone,
    description: "Create powerful mobile applications",
    color: "#6B0000",
  },
  {
    id: 4,
    name: "The Will Track",
    domain: "ML",
    vibe: "Decoding the Shadow",
    icon: Network,
    description: "Uncover patterns in the data",
    color: "#5B0000",
  },
  {
    id: 5,
    name: "The Hellfire Track",
    domain: "Custom",
    vibe: "The Ultimate Quest",
    icon: Sword,
    description: "Forge your own path",
    color: "#B20600",
  },
];

export function TracksSection() {
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
          THE CHOSEN PARTY
        </h2>
        <p className="text-xl text-gray-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Select your domain. Choose your destiny.
        </p>
      </motion.div>

      {/* Tracks Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="relative bg-[#0a0a0a] border-2 border-[#4E0000] rounded-lg p-8 h-full overflow-hidden cursor-pointer"
              whileHover={{
                borderColor: track.color,
                boxShadow: `0 0 40px ${track.color}40`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing Background Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${track.color}, transparent)`,
                }}
              />

              {/* Character Silhouette */}
              <div className="relative mb-6">
                <motion.div
                  className="w-20 h-20 mx-auto relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with glow */}
                  <div
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(circle, ${track.color} 0%, transparent 70%)`,
                      filter: "blur(10px)",
                    }}
                  />
                  <track.icon
                    className="w-full h-full relative z-10"
                    style={{
                      color: track.color,
                      filter: `drop-shadow(0 0 8px ${track.color})`,
                    }}
                  />

                  {/* Special effect for Eleven Track (blood drip) */}
                  {track.id === 1 && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-1 bg-[#B20600] rounded-full"
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: 30, opacity: 0.8 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        boxShadow: "0 0 10px #B20600",
                      }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Track Name */}
              <h3
                className="text-2xl mb-2 text-center tracking-wide"
                style={{
                  fontFamily: "'Creepster', cursive",
                  color: track.color,
                  textShadow: `0 0 10px ${track.color}`,
                }}
              >
                {track.name}
              </h3>

              {/* Domain Badge */}
              <div className="flex justify-center mb-4">
                <span
                  className="px-4 py-1 border rounded-full text-sm tracking-wider"
                  style={{
                    borderColor: track.color,
                    color: track.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    boxShadow: `0 0 10px ${track.color}40`,
                  }}
                >
                  {track.domain}
                </span>
              </div>

              {/* Vibe Quote */}
              <p
                className="text-center text-gray-400 italic mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                "{track.vibe}"
              </p>

              {/* Description */}
              <p className="text-center text-gray-500 text-sm">{track.description}</p>

              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  border: `1px solid ${track.color}`,
                  opacity: 0,
                }}
                whileHover={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 opacity-50" style={{ borderColor: track.color }} />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-50" style={{ borderColor: track.color }} />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-50" style={{ borderColor: track.color }} />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 opacity-50" style={{ borderColor: track.color }} />
            </motion.div>

            {/* Floating spores around card */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: track.color,
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                  filter: "blur(1px)",
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Background Spores */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#4E0000] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}
