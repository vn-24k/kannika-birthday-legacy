'use client'
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Cinematográfico */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay loop muted playsInline
          className="object-cover w-full h-full opacity-40"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-lanterns-at-night-in-the-sky-34533-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent font-mono tracking-[0.5em] text-sm mb-4 uppercase"
        >
          สุขสันต์วันเกิด (Happy Birthday)
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-light text-white tracking-tighter"
        >
          Kannika <span className="text-accent italic">Legacy</span>
        </motion.h1>
      </div>
    </section>
  );
};
