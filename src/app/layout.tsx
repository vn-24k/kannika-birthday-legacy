import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Camada de Partículas */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse" />
        </div>
        {children}
      </body>
    </html>
  );
}
