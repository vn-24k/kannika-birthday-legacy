import { Hero } from '@/features/hero/components/Hero';
import { PhotoGallery } from '@/features/gallery/components/PhotoGallery';
import { Message } from '@/features/message/Message';
import { AudioPlayer } from '@/features/audio/AudioPlayer';

export default function Home() {
  return (
    <main className="relative bg-black">
      <AudioPlayer />
      <Hero />
      <Message />
      <PhotoGallery />
      <footer className="py-10 text-center opacity-20">
        <p className="text-[10px] tracking-[0.5em] uppercase text-white">V & K • Forever</p>
      </footer>
    </main>
  );
}
