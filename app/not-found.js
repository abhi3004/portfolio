"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 relative overflow-hidden">
      {/* Blurred Blob Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="blur opacity-80" style={{position: 'absolute', inset: 0, filter: 'blur(100px)', zIndex: 0}}>
          <div className="blob" style={{width: '100vw', height: '100vh', background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 50%, #00d2ff 100%)', clipPath: 'polygon(65% 5%, 11% 0%, 83% 83%, 70% 97%, 72% 63%, 55% 6%, 42% 94%, 44% 1%, 76% 27%, 99% 47%, 78% 36%, 14% 63%, 2% 27%, 84% 27%, 83% 60%, 68% 62%, 53% 68%, 89% 60%, 18% 84%, 87% 56%)'}} />
        </div>
      </div>
      <div className="relative z-10 max-w-lg w-full mx-auto p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl flex flex-col items-center text-center">
        <div className="text-7xl md:text-9xl font-extrabold text-white/80 mb-4 select-none drop-shadow-lg">404</div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">Page Not Found</div>
        <div className="text-lg text-white/70 mb-8">Sorry, the page you are looking for does not exist or has been moved.</div>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-colors duration-300 font-semibold text-lg shadow">
        Return Home
        </Link>
      </div>
    </div>
  );
} 