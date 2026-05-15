'use client'
export const PhotoGallery = () => {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-accent mb-10 uppercase tracking-widest text-xs">Nossos Momentos</h2>
      <div className="flex flex-col items-center gap-10 px-6">
        <img src="/images/foto_casal_1.jpg" className="max-w-full rounded-lg border border-white/10 shadow-2xl" />
        <img src="/images/foto_sozinha_1.jpg" className="max-w-full rounded-lg border border-white/10 shadow-2xl" />
      </div>
    </section>
  );
};
