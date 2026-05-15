'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2024-06-19T00:00:00'); // Ajuste o ano se necessário

    const timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 flex flex-col items-center justify-center bg-black border-y border-accent/5">
      <h3 className="text-accent text-[10px] tracking-[0.4em] uppercase mb-10">Counting the seconds to celebrate you</h3>
      <div className="flex gap-8 md:gap-16">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold text-white">{value}</span>
            <span className="text-[10px] uppercase tracking-widest text-accent/60 mt-2">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
