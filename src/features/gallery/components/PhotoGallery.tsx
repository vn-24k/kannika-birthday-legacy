'use client'
import { motion } from 'framer-motion';

const images = [
  { url: 'https://images2.imgbox.com/71/34/8N7jR4Hl_o.jpg', tag: 'Nós' },
  { url: 'https://images2.imgbox.com/39/2e/xO4bBvO6_o.jpg', tag: 'Você' },
];

export const PhotoGallery = () => {
  return (
    <section className="py-32 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-none"
          >
            <div className="absolute -inset-2 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-duration-500" />
            <div className="relative aspect-[4/5] overflow-hidden border border-white/5">
              <img 
                src={img.url} 
                className="object-cover w-full h-full sepia-[0.3] brightness-90 group-hover:sepia-0 group-hover:brightness-110 transition-all duration-700" 
              />
            </div>
            <p className="mt-4 font-mono text-[10px] text-accent tracking-[0.4em] uppercase">
              {img.tag}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
