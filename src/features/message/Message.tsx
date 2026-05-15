'use client'
import { motion } from 'framer-motion';

export const Message = () => {
  return (
    <section className="py-40 px-6 bg-black flex justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="max-w-2xl text-center"
      >
        <p className="text-[#D4AF37] font-serif text-2xl md:text-3xl leading-relaxed italic">
          "Em cada linha deste código, em cada pixel desta tela, existe um pedaço da nossa história. Você é a minha maior inspiração, Kannika."
        </p>
        <div className="mt-8 h-px w-20 bg-[#D4AF37] mx-auto opacity-50" />
      </motion.div>
    </section>
  );
};
