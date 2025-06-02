import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-800 text-gray-100 p-8 bg-graph">
<section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Abhijeet Pareek</h1>
        <p className="text-lg mb-8">
          Frontend Developer & Machine Learning Enthusiast. I build responsive UI and integrate smart ML experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/projects/frontend"
            className="block p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Frontend Projects</h2>
            <p>React, Next.js, MUI, Tailwind UI projects I've built or contributed to.</p>
          </Link>

          <Link
            href="/projects/ml"
            className="block p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Machine Learning Projects</h2>
            <p>Projects using TensorFlow, PyTorch, NLP APIs, and data visualization.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
