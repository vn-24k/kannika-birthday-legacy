'use client'
import { motion } from 'framer-motion';

const images = [
  { id: 1, url: '/images/kannika-1.jpg', title: 'O teu sorriso' },
  { id: 2, url: '/images/kannika-2.jpg', title: 'Nossos momentos' },
  { id: 3, url: '/images/kannika-3.jpg', title: 'Beleza Pura' },
  { id: 4, url: '/images/kannika-4.jpg', title: 'A melhor parte de mim' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export const PhotoGallery = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-accent uppercase tracking-widest text-sm mb-2">Momentos</h3>
        <h2 className="text-4xl font-light text-white">Memórias Guardadas</h2>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
      >
        {images.map((img) => (
          <motion.div 
            key={img.id}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg border border-accent/20 bg-neutral-900"
          >
            <img 
              src={img.url} 
              alt={img.title}
              className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/500x700?text=Foto+Aqui'; }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-[10px] text-accent uppercase tracking-tighter">{img.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
