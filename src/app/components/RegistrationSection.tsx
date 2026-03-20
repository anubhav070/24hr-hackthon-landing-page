import { motion } from "framer-motion";
import { useState } from "react";
import { CreditCard, Zap, QrCode, Users, Terminal, ShieldAlert } from "lucide-react";

export function RegistrationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GOOGLE FORM LINKING LOGIC
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/[YOUR-FORM-ID]/formResponse";

  return (
    <section className="relative min-h-screen bg-[#050505] py-10 md:py-20 px-4 overflow-hidden">
      
      {/* 1. VECNA BACKGROUND (Full Cinematic) */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
        <img 
          src="https://i0.wp.com/screenagewasteland.com/wp-content/uploads/2020/06/monsters-demigorgon.jpg?resize=730%2C635&ssl=1" 
          alt="Vecna Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12">
        
        {/* 2. LEFT SIDE: PROTOCOL & QR (Responsive Stack) */}
        <div className="lg:w-1/3 space-y-6 order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <h3 className="text-white text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4"
                 style={{ textShadow: "0 0 10px #f00" }}>
               The Protocol
             </h3>
             <div className="mt-4 space-y-3 font-mono text-[11px] md:text-xs text-gray-300">
               <p className="border-l-2 border-red-600 pl-3 uppercase tracking-tighter">{" > "} EXACTLY 4 MEMBERS PER TEAM</p>
               <p className="border-l-2 border-red-600 pl-3 uppercase tracking-tighter">{" > "} ₹500 REGISTRATION FEE</p>
               <p className="border-l-2 border-red-600 pl-3 uppercase tracking-tighter">{" > "} 24H NON-STOP CODING</p>
               
               <div className="bg-red-950/20 border border-red-600/30 p-3 rounded-sm mt-2">
                 <p className="text-white font-bold mb-1 uppercase tracking-widest text-[10px] flex items-center gap-1.5 font-mono">
                   <ShieldAlert size={14} className="text-red-500"/> Domain Flexibility
                 </p>
                 <p className="text-gray-400 italic text-[10px] leading-relaxed">
                   "Initial track is for planning only. You can change your final project domain on the event day."
                 </p>
               </div>

               <p className="border-l-2 border-red-600 pl-3 text-red-500 animate-pulse mt-4 uppercase font-bold">
                 {" > "} PS REVEAL: 10:00 AM (7TH APRIL)
               </p>
             </div>
          </motion.div>

          {/* QR CODE CARD */}
          <div className="bg-white/5 border-2 border-dashed border-red-600 p-6 flex flex-col items-center gap-4 text-center backdrop-blur-md rounded">
            <QrCode className="text-red-600" size={32} />
            <div className="w-40 h-40 bg-white p-2 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=anubhavpratap886@okaxis&pn=Anubhav&am=500" 
                  alt="Payment QR" 
                  className="w-full h-full"
                />
            </div>
            <p className="text-white font-bold text-lg tracking-tighter italic">FEE: ₹500 / TEAM</p>
            <div className="bg-red-600/20 text-red-400 border border-red-900 px-4 py-1.5 text-[10px] font-mono tracking-tighter">
                UPI ID: anubhavpratap886@okaxis
            </div>
          </div>

          <a href="#" className="flex items-center justify-center gap-3 bg-red-900/20 border border-red-600 p-4 hover:bg-red-600 hover:text-white transition-all group">
            <Zap className="text-red-600 group-hover:text-white" />
            <span className="font-bold uppercase tracking-widest text-sm text-white italic">Join WhatsApp Group</span>
          </a>
        </div>

        {/* 3. RIGHT SIDE: THE FORM (Polished for Mobile) */}
        <motion.div 
          className="lg:w-2/3 bg-black/80 border-2 border-white/20 p-6 md:p-12 shadow-[0_0_50px_rgba(178,6,0,0.4)] order-1 lg:order-2 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* UPDATED TITLE: REGISTRATIONS (Fixed Width) */}
          <div className="text-center mb-10 md:mb-14 w-full px-1 overflow-hidden">
            <motion.h2
              className="inline-block w-full whitespace-nowrap leading-none italic tracking-tighter md:tracking-normal"
              style={{
                fontFamily: "'Nosifer', cursive",
                textShadow: "0 0 15px #B20600, 0 0 30px #4E0000",
                fontSize: "clamp(1.2rem, 5.5vw, 4.5rem)", // Font size adjusted for "REGISTRATIONS"
                color: "white"
              }}
            >
              REGISTRATION
            </motion.h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-6 shadow-[0_0_10px_#f00]" />
          </div>

          <form className="space-y-6 md:space-y-8" action={GOOGLE_FORM_ACTION_URL} method="POST" target="_blank">
            {/* Header Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="entry.TEAM_NAME" className="w-full bg-transparent border-b-2 border-gray-800 p-3 outline-none focus:border-red-600 text-white font-mono text-sm transition-all" placeholder="TEAM NAME" required />
              <input name="entry.EMAIL" className="w-full bg-transparent border-b-2 border-gray-800 p-3 outline-none focus:border-red-600 text-white font-mono text-sm transition-all" placeholder="LEADER EMAIL" type="email" required />
            </div>

            {/* Members List (1 col mobile, 2 col desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[1, 2, 3, 4].map(num => (
                 <div key={num} className="bg-red-950/10 p-4 border border-red-900/30 backdrop-blur-sm rounded-sm">
                   <p className="text-[10px] text-red-500 mb-2 font-bold uppercase tracking-widest italic font-mono flex items-center gap-1.5">
                     <Users size={12}/> SUBJECT {num}
                   </p>
                   <input name={`entry.M${num}_NAME`} className="w-full bg-transparent border-b border-red-900/50 p-2 text-sm text-white outline-none mb-3 focus:border-red-600 transition-colors font-mono" placeholder="Full Name" required />
                   <input name={`entry.M${num}_PHONE`} className="w-full bg-transparent border-b border-red-900/50 p-2 text-sm text-white outline-none focus:border-red-600 transition-colors font-mono" placeholder="WhatsApp No" required />
                 </div>
               ))}
            </div>

            {/* PAYMENT BOX */}
            <div className="bg-white/5 border-2 border-dashed border-red-600 p-6 md:p-8 flex flex-col items-center gap-4 text-center">
               <label className="text-white font-mono text-[10px] md:text-xs uppercase flex items-center gap-2 tracking-widest italic">
                 <CreditCard size={16} className="text-red-600"/> Transaction ID Required
               </label>
               <input name="entry.TXN_ID" className="w-full max-w-sm bg-black border border-white/20 p-3 md:p-4 text-center text-white font-mono tracking-[0.2em] md:tracking-[0.5em] text-lg md:text-2xl outline-none focus:border-red-600 uppercase" placeholder="TXN ID" required />
            </div>

            {/* FINAL BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black hover:bg-red-600 hover:text-white py-4 md:py-6 font-black text-xl md:text-3xl uppercase border-b-8 border-gray-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-4 italic"
            >
              <Terminal size={24} /> INITIATE BREACH
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}