import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [showBats, setShowBats] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowBats(true), 500);
    setTimeout(() => onComplete(), 4000);
  }, [onComplete]);

  // Generate bat positions
  const bats = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100 - 50,
    startY: Math.random() * 50 + 50,
    delay: Math.random() * 0.5,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Red Portal Crack */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative">
          <motion.div
            className="w-1 h-96 bg-[#B20600]"
            style={{
              boxShadow: "0 0 40px #B20600, 0 0 80px #B20600",
            }}
            initial={{ height: 0 }}
            animate={{ height: "24rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-1 bg-[#B20600]"
            style={{
              boxShadow: "0 0 40px #B20600, 0 0 80px #B20600",
            }}
            initial={{ width: 0 }}
            animate={{ width: "24rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Swarm of Bats */}
      {showBats &&
        bats.map((bat) => (
          <motion.div
            key={bat.id}
            className="absolute"
            initial={{
              x: `${bat.startX}vw`,
              y: `${bat.startY}vh`,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: ["0vw", `${(Math.random() - 0.5) * 20}vw`, "50vw"],
              y: ["100vh", `${50 + Math.random() * 20}vh`, "-10vh"],
              scale: [0, 1.5, 2],
              opacity: [0, 1, 0],
              rotate: [0, Math.random() * 360, Math.random() * 720],
            }}
            transition={{
              duration: 2.5,
              delay: bat.delay,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_8px_rgba(178,6,0,0.8)]"
            >
              <path
                d="M20 5L15 15L10 10L5 15L0 10V20L5 25L10 20L15 25L20 28L25 25L30 20L35 25L40 20V10L35 15L30 10L25 15L20 5Z"
                fill="#1a1a1a"
                stroke="#B20600"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}

      {/* Pulsing Red Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-[#B20600]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0.2, 0] }}
        transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
      />
    </motion.div>
  );
}
