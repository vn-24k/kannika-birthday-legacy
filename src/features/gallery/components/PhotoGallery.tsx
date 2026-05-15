'use client'
import { motion } from 'framer-motion';

const images = [
  { id: 1, url: 'https://images2.imgbox.com/71/34/8N7jR4Hl_o.jpg', title: 'Eternal Moment' },
  { id: 2, url: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000', title: 'Thailand Spirit' },
  { id: 3, url: 'https://images2.imgbox.com/39/2e/xO4bBvO6_o.jpg', title: 'Pure Soul' },
  { id: 4, url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000', title: 'Golden Grace' },
];

export const PhotoGallery = () => {
  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {images.map((img) => (
          <motion.div 
            key={img.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900"
          >
            <img 
              src={img.url} 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
            <p className="absolute bottom-8 left-8 text-accent font-light tracking-widest uppercase text-xs">
              {img.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
