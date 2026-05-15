import { Hero } from '@/features/hero/components/Hero';
import { PhotoGallery } from '@/features/gallery/components/PhotoGallery';
import { Countdown } from '@/features/timeline/components/Countdown';
import { LoveLetter } from '@/features/timeline/components/LoveLetter';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Countdown />
      <PhotoGallery />
      <LoveLetter />
      
      <section className="py-20 text-center border-t border-accent/10">
        <p className="text-gray-600 text-[10px] tracking-widest uppercase font-mono mb-4">
          Project: Kannika Birthday Legacy | v1.0.0 Stable
        </p>
        <p className="text-accent/50 text-[8px]">ENGINEERED WITH LOVE BY VINICIUS</p>
      </section>
    </main>
  );
}
