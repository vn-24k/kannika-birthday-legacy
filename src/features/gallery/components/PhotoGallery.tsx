'use client'
import { motion } from 'framer-motion';

const images = [
  { id: 1, url: '/images/foto_casal_1.jpg', title: 'Nós Dois' },
  { id: 2, url: '/images/foto_sozinha_1.jpg', title: 'Tua Beleza' },
  { id: 3, url: '/images/foto_casal_2.jpg', title: 'Nossos Momentos' },
  { id: 4, url: '/images/foto_sozinha_2.jpg', title: 'Minha Inspiração' },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const PhotoGallery = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {images.map((img) => (
          <motion.div 
            key={img.id}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg border border-accent/10 shadow-2xl shadow-accent/5"
          >
            <img 
              src={img.url} 
              alt={img.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <p className="absolute bottom-6 left-6 text-accent font-mono text-[10px] tracking-[0.3em] uppercase">
              {img.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};