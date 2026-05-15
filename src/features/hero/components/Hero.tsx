'use client'
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-neutral-900">
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
      <div className="relative z-10 text-center">
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-5xl font-light tracking-tighter text-white">
          Kannika & <span className="text-[#D4AF37]">Vinícius</span>
        </motion.h1>
      </div>
    </section>
  );
};
