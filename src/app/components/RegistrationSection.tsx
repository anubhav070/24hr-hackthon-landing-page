import { motion } from "motion/react";
import { useState } from "react";
import { Headphones } from "lucide-react";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    track: "",
    team: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Glitch effect
    setTimeout(() => {
      alert("Gateway Initiated! Welcome to the Upside Down...");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="relative min-h-screen py-20 px-4 flex items-center justify-center">
      {/* Cracked Wall Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, transparent 0%, #0a0a0a 20%, #0a0a0a 80%, transparent 100%),
              repeating-linear-gradient(0deg, #1a1a1a 0px, #0a0a0a 2px, #1a1a1a 4px)
            `,
          }}
        />
        
        {/* Red light crack effect */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full"
          style={{
            background: "linear-gradient(180deg, #B20600 0%, transparent 50%, #B20600 100%)",
            boxShadow: "0 0 40px #B20600, 0 0 80px #4E0000",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              "0 0 40px #B20600, 0 0 80px #4E0000",
              "0 0 60px #B20600, 0 0 120px #4E0000",
              "0 0 40px #B20600, 0 0 80px #4E0000",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Horizontal crack */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-1"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #B20600 50%, transparent 100%)",
            boxShadow: "0 0 30px #B20600",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2
              className="text-6xl md:text-7xl mb-4 tracking-wider"
              style={{
                fontFamily: "'Nosifer', cursive",
                textShadow: "0 0 20px #B20600, 0 0 40px #4E0000",
              }}
            >
              CREEL HOUSE
            </h2>
            <h3
              className="text-3xl md:text-4xl mb-2 tracking-widest"
              style={{
                fontFamily: "'Creepster', cursive",
                color: "#B20600",
                textShadow: "0 0 15px #B20600",
              }}
            >
              TERMINAL
            </h3>
            <p className="text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Initialize your gateway to the event
            </p>
          </div>

          {/* Main Form Container */}
          <div className="relative bg-black border-4 border-[#B20600] rounded-lg p-8 md:p-12 shadow-[0_0_50px_rgba(178,6,0,0.3)]">
            {/* CRT Screen Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                background: "repeating-linear-gradient(0deg, transparent 0px, rgba(178, 6, 0, 0.03) 2px, transparent 4px)",
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
              }}
            />

            <div className="flex flex-col md:flex-row gap-8">
              {/* Max Silhouette with Walkman */}
              <motion.div
                className="hidden md:flex items-center justify-center md:w-1/3"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-48 h-64">
                  <svg viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Max silhouette */}
                    <ellipse cx="75" cy="40" rx="25" ry="30" fill="#1a1a1a" stroke="#B20600" strokeWidth="2" />
                    <rect x="60" y="65" width="30" height="50" fill="#1a1a1a" stroke="#B20600" strokeWidth="2" />
                    <line x1="60" y1="80" x2="40" y2="100" stroke="#B20600" strokeWidth="2" />
                    <line x1="90" y1="80" x2="110" y2="100" stroke="#B20600" strokeWidth="2" />
                    <rect x="60" y="115" width="12" height="50" fill="#1a1a1a" stroke="#B20600" strokeWidth="2" />
                    <rect x="78" y="115" width="12" height="50" fill="#1a1a1a" stroke="#B20600" strokeWidth="2" />
                    
                    {/* Walkman */}
                    <rect x="55" y="120" width="40" height="25" rx="3" fill="#4E0000" stroke="#B20600" strokeWidth="2" />
                    <motion.circle
                      cx="65"
                      cy="132"
                      r="5"
                      fill="#B20600"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </svg>
                  <Headphones className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 text-[#B20600]" style={{ filter: "drop-shadow(0 0 10px #B20600)" }} />
                </div>
              </motion.div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex-1 space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    className="block mb-2 tracking-wider"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#B20600",
                      textShadow: "0 0 10px #B20600",
                    }}
                  >
                    &gt; NAME_
                  </label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0a0a] border-2 border-[#4E0000] rounded px-4 py-3 text-[#B20600] focus:border-[#B20600] focus:outline-none transition-colors"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                    placeholder="Enter designation..."
                    required
                    whileFocus={{
                      borderColor: "#B20600",
                      boxShadow: "0 0 20px rgba(178, 6, 0, 0.3), inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    className="block mb-2 tracking-wider"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#B20600",
                      textShadow: "0 0 10px #B20600",
                    }}
                  >
                    &gt; EMAIL_
                  </label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0a0a] border-2 border-[#4E0000] rounded px-4 py-3 text-[#B20600] focus:border-[#B20600] focus:outline-none transition-colors"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                    placeholder="Enter transmission ID..."
                    required
                    whileFocus={{
                      borderColor: "#B20600",
                      boxShadow: "0 0 20px rgba(178, 6, 0, 0.3), inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

                {/* Track Selection */}
                <div>
                  <label
                    className="block mb-2 tracking-wider"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#B20600",
                      textShadow: "0 0 10px #B20600",
                    }}
                  >
                    &gt; SELECT_TRACK_
                  </label>
                  <motion.select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-[#0a0a0a] border-2 border-[#4E0000] rounded px-4 py-3 text-[#B20600] focus:border-[#B20600] focus:outline-none transition-colors cursor-pointer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                    required
                    whileFocus={{
                      borderColor: "#B20600",
                      boxShadow: "0 0 20px rgba(178, 6, 0, 0.3), inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  >
                    <option value="">Choose your path...</option>
                    <option value="ai">The Eleven Track (AI)</option>
                    <option value="web">The Dustin Track (Web Dev)</option>
                    <option value="android">The Lucas Track (Android)</option>
                    <option value="ml">The Will Track (ML)</option>
                    <option value="custom">The Hellfire Track (Custom)</option>
                  </motion.select>
                </div>

                {/* Team Name */}
                <div>
                  <label
                    className="block mb-2 tracking-wider"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#B20600",
                      textShadow: "0 0 10px #B20600",
                    }}
                  >
                    &gt; PARTY_NAME_
                  </label>
                  <motion.input
                    type="text"
                    value={formData.team}
                    onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                    className="w-full bg-[#0a0a0a] border-2 border-[#4E0000] rounded px-4 py-3 text-[#B20600] focus:border-[#B20600] focus:outline-none transition-colors"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                    placeholder="Enter party designation..."
                    required
                    whileFocus={{
                      borderColor: "#B20600",
                      boxShadow: "0 0 20px rgba(178, 6, 0, 0.3), inset 0 2px 10px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full py-4 text-xl tracking-widest relative overflow-hidden"
                  style={{
                    fontFamily: "'Creepster', cursive",
                    background: "linear-gradient(180deg, #B20600 0%, #4E0000 100%)",
                    border: "3px solid #B20600",
                    boxShadow: "0 0 30px rgba(178, 6, 0, 0.5)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 50px rgba(178, 6, 0, 0.8)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "BREACHING..." : "INITIATE GATEWAY"}
                  
                  {/* Glitch effect on submission */}
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-[#B20600]"
                      animate={{
                        opacity: [0, 1, 0, 1, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        times: [0, 0.2, 0.4, 0.6, 1],
                      }}
                    />
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Dust Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#B20600] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, -(20 + Math.random() * 30)],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </section>
  );
}
