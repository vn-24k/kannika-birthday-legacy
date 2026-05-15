'use client'
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--romance)_0%,_transparent_20%)] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-accent tracking-[0.2em] uppercase text-sm mb-4">19 June • Special Edition</h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
          Kannika
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light italic"
        >
          "In every universe, I would find you. In this one, I celebrate you."
        </motion.p>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 p-4 border-t border-b border-accent/30"
        >
          <p className="text-accent text-xl font-medium text-white">สุขสันต์วันเกิดครับที่รัก</p>
          <p className="text-[10px] text-gray-500 uppercase mt-2">Happy Birthday, my love</p>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};
