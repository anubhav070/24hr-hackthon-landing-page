import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Clock, Coffee, Zap, Trophy } from "lucide-react";

const events = [
  {
    time: "08:00 AM",
    title: "THE BREACH",
    description: "Portal opens. Registration begins.",
    icon: Zap,
  },
  {
    time: "09:00 AM",
    title: "THE OPENING CEREMONY",
    description: "Gather the party. Instructions revealed.",
    icon: Clock,
  },
  {
    time: "12:00 PM",
    title: "FUELING",
    description: "Sustenance for the journey ahead.",
    icon: Coffee,
  },
  {
    time: "04:00 PM",
    title: "THE DEEP DIVE",
    description: "Midpoint check. Stay vigilant.",
    icon: Zap,
  },
  {
    time: "08:00 PM",
    title: "THE FINAL STAND",
    description: "Submit your creation. The gate closes.",
    icon: Trophy,
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clockRotation = useTransform(scrollYProgress, [0, 1], [0, -720]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-20 px-4">
      {/* Section Title */}
      <motion.div
        className="text-center mb-20"
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
          VECNA'S CLOCK
        </h2>
        <p className="text-xl text-gray-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Time runs differently in the Upside Down
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Grandfather Clock */}
          <div className="lg:sticky lg:top-32 flex-shrink-0">
            <motion.div
              className="relative w-64 h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Clock Body */}
              <div
                className="absolute inset-0 border-4 border-[#B20600] rounded-lg bg-[#0a0a0a]"
                style={{
                  boxShadow: "0 0 40px rgba(178, 6, 0, 0.4), inset 0 0 30px rgba(0,0,0,0.8)",
                }}
              >
                {/* Clock Face */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-4 border-[#4E0000] bg-black flex items-center justify-center">
                  {/* Clock Numbers */}
                  {[12, 3, 6, 9].map((num, i) => {
                    const angle = (i * 90 - 90) * (Math.PI / 180);
                    const x = 50 + 45 * Math.cos(angle);
                    const y = 50 + 45 * Math.sin(angle);
                    return (
                      <span
                        key={num}
                        className="absolute text-[#B20600] font-bold"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {num}
                      </span>
                    );
                  })}

                  {/* Hour Hand (rotates counter-clockwise) */}
                  <motion.div
                    className="absolute w-1 h-12 bg-[#B20600] origin-bottom rounded-full"
                    style={{
                      bottom: "50%",
                      left: "50%",
                      marginLeft: "-2px",
                      rotate: clockRotation,
                      boxShadow: "0 0 10px #B20600",
                    }}
                  />

                  {/* Minute Hand (rotates counter-clockwise faster) */}
                  <motion.div
                    className="absolute w-0.5 h-16 bg-[#4E0000] origin-bottom rounded-full"
                    style={{
                      bottom: "50%",
                      left: "50%",
                      marginLeft: "-1px",
                      rotate: useTransform(clockRotation, (r) => r * 2),
                      boxShadow: "0 0 8px #4E0000",
                    }}
                  />

                  {/* Center dot */}
                  <div className="absolute w-3 h-3 bg-[#B20600] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Clock Pendulum */}
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2"
                  animate={{
                    rotate: [-15, 15, -15],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformOrigin: "top center",
                  }}
                >
                  <div className="w-1 h-20 bg-[#4E0000]" />
                  <div
                    className="w-6 h-6 bg-[#B20600] rounded-full mx-auto"
                    style={{ boxShadow: "0 0 15px #B20600" }}
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-2 left-2 right-2 h-8 border-2 border-[#4E0000] rounded" />
                <div className="absolute bottom-2 left-2 right-2 h-12 border-2 border-[#4E0000] rounded" />
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(178, 6, 0, 0.3)",
                    "0 0 40px rgba(178, 6, 0, 0.5)",
                    "0 0 20px rgba(178, 6, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Timeline Events */}
          <div className="flex-1 space-y-8 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#B20600] to-transparent" />

            {events.map((event, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon */}
                <motion.div
                  className="absolute left-0 w-16 h-16 rounded-full border-4 border-[#B20600] bg-[#0a0a0a] flex items-center justify-center"
                  style={{
                    boxShadow: "0 0 20px rgba(178, 6, 0, 0.5)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(178, 6, 0, 0.8)",
                  }}
                >
                  <event.icon className="w-8 h-8 text-[#B20600]" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="bg-[#0a0a0a] border-2 border-[#4E0000] rounded-lg p-6 hover:border-[#B20600] transition-colors"
                  whileHover={{
                    boxShadow: "0 0 30px rgba(178, 6, 0, 0.3)",
                  }}
                >
                  {/* Time */}
                  <div
                    className="text-[#B20600] mb-2 tracking-wider"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1.2rem",
                      textShadow: "0 0 10px #B20600",
                    }}
                  >
                    {event.time}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl mb-2 tracking-wide"
                    style={{
                      fontFamily: "'Creepster', cursive",
                      color: "#B20600",
                    }}
                  >
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400">{event.description}</p>

                  {/* Decorative corner */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#B20600] opacity-50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#B20600] opacity-50" />
                </motion.div>

                {/* Connecting line from icon to card */}
                <div className="absolute left-16 top-8 w-4 h-0.5 bg-[#4E0000]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#B20600] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}
