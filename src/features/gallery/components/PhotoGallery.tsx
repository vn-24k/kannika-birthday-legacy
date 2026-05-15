'use client'
import { motion } from 'framer-motion';

const images = [
  { id: 1, url: 'https://images2.imgbox.com/71/34/8N7jR4Hl_o.jpg', title: 'Nós Dois' },
  { id: 2, url: 'https://images2.imgbox.com/39/2e/xO4bBvO6_o.jpg', title: 'Tua Beleza' },
  { id: 3, url: 'https://images2.imgbox.com/71/34/8N7jR4Hl_o.jpg', title: 'Nossos Momentos' },
  { id: 4, url: 'https://images2.imgbox.com/39/2e/xO4bBvO6_o.jpg', title: 'Minha Inspiração' },
];

export const PhotoGallery = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {images.map((img) => (
          <motion.div 
            key={img.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10"
          >
            <img 
              src={img.url} 
              alt={img.title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 text-accent font-mono text-[10px] tracking-[0.2em] uppercase">
              {img.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
