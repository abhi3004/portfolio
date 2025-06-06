import React from "react";
import Link from "next/link";
import Dither from "./Dither";
import RotatingText from "./RotatingText/RotatingText";

export default function HomeSection() {
  return (
    <section id="home" className="mx-auto text-center md:min-h-screen md:flex md:flex-col md:justify-center relative overflow-hidden">
      {/* Dither background */}
      <div className="absolute inset-0 w-screen h-full left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <Dither />
      </div>
      {/* Content above background */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-[6vw] font-extrabold text-center mb-12 whitespace-nowrap">Abhijeet Pareek</h1>
        <p className="text-lg mb-8">
          Frontend Developer & Machine Learning Enthusiast. I build responsive UI and integrate smart ML experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/projects/frontend"
            className="block p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Frontend Projects</h2>
            <p>React, Next.js, MUI, Tailwind UI projects I have built or contributed to.</p>
          </Link>

          <Link
            href="/projects/ml"
            className="block p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Machine Learning Projects</h2>
            <p>Projects using TensorFlow, PyTorch, NLP APIs, and data visualization.</p>
          </Link>
        </div>
      </div>
    </section>
  );
} 