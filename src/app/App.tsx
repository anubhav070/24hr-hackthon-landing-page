import { useState, useEffect } from "react";
import { IntroAnimation } from "./components/IntroAnimation";
import { HeroSection } from "./components/HeroSection";
import { TracksSection } from "./components/TracksSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { TimelineSection } from "./components/TimelineSection";
import { SponsorsSection } from "./components/SponsorsSection";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Prevent scrolling during intro
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Intro Animation */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Main Content */}
      {!showIntro && (
        <div className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Tracks Section */}
          <TracksSection />

          {/* Registration Section */}
          <RegistrationSection />

          {/* Timeline Section */}
          <TimelineSection />

          {/* Sponsors Section */}
          <SponsorsSection />

          {/* Footer */}
          <footer className="relative py-12 px-4 border-t-2 border-[#4E0000]">
            <div className="max-w-6xl mx-auto text-center">
              <p
                className="text-[#B20600] mb-2 text-xl tracking-widest"
                style={{
                  fontFamily: "'Creepster', cursive",
                  textShadow: "0 0 10px #B20600",
                }}
              >
                See you in the Upside Down
              </p>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                © 2026 Upside Down Codex. All dimensions reserved.
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
