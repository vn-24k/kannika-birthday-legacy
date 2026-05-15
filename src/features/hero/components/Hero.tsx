'use client'
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Luz de Fundo Pulsante */}
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-9xl font-extralight text-white uppercase mb-6">
            Kannika
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-12 bg-accent" />
          <p className="text-accent font-mono text-xs uppercase tracking-[0.5em]">
            Legacy of Love
          </p>
          <div className="h-[1px] w-12 bg-accent" />
        </motion.div>
      </div>

      {/* Petals Simulation - Gerado via CSS */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="petal text-accent/40"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}
        >
          🌸
        </div>
      ))}
    </section>
  );
};
