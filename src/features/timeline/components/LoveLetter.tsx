'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 flex flex-col items-center justify-center bg-black">
      {!isOpen ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 border border-accent text-accent tracking-[0.3em] uppercase text-xs hover:bg-accent hover:text-black transition-all duration-500"
        >
          Open Private Message
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto px-6 text-center"
          >
            <p className="text-accent text-xl mb-6 font-medium italic">แด่กรรณิกาที่รัก (To my dear Kannika),</p>
            <div className="space-y-6 text-gray-300 leading-relaxed font-light">
              <p>
                Desde que você entrou na minha vida, cada dia parece um 19 de Junho. 
                Sua força, sua doçura e a forma como você vê o mundo me inspiram a ser um homem melhor.
              </p>
              <p>
                Mesmo com a distância ou qualquer desafio, meu coração fala a sua língua. 
                Você não é apenas minha namorada; você é minha melhor escolha, todos os dias.
              </p>
              <p className="text-white font-medium">
                คุณคือสิ่งที่ดีที่สุดที่เคยเกิดขึ้นในชีวิตผม <br/>
                (Você é a melhor coisa que já aconteceu na minha vida).
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12"
            >
              <p className="text-accent tracking-widest text-xs uppercase">Forever Yours, Vinicius</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};
