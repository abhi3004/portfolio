"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Dither from "./Dither";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import ShinyText from "./Shinytext/ShinyText";
import gsap from "gsap";

export default function HomeSection() {
  const [showButton, setShowButton] = useState(false);
  const underlineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const words = text.querySelectorAll('.animated-word');
    
    // Create highlight elements
    words.forEach((word, index) => {
      const highlight = document.createElement('div');
      highlight.className = `absolute -inset-2 w-0 h-[calc(100%+16px)] ${index === 0 ? 'bg-orange-500' : 'bg-sky-500'} rounded-md -z-10`;
      word.style.position = 'relative';
      word.appendChild(highlight);
    });

    // Animation sequence
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1
    });

    // Animate first word
    tl.to(words[0].querySelector('div'), {
      width: 'calc(100% + 14px)',
      duration: 3,
      ease: 'none'
    })
    .to(words[0].querySelector('div'), {
      width: 0,
      duration: 0.5,
      ease: 'none'
    }, '+=0.5')
    // Animate second word
    .to(words[1].querySelector('div'), {
      width: 'calc(100% + 14px)',
      duration: 3,
      ease: 'none'
    })
    .to(words[1].querySelector('div'), {
      width: 0,
      duration: 0.5,
      ease: 'none'
    }, '+=0.5');

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToExpertise = () => {
    const expertiseSection = document.getElementById('expertise');
    expertiseSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="mx-auto text-center min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Dither background */}
      <div className="absolute inset-0 w-screen h-full left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <Dither enableMouseInteraction={true} waveSpeed={0.05} waveFrequency={3} waveAmplitude={0.3} waveColor={[0.5, 0.5, 0.5]} colorNum={4} pixelSize={2} disableAnimation={false}/>
      </div>
      {/* Content above background */}
      <div className="max-w-4xl mx-auto mt-10 relative z-10 border border-gray-400 rounded-lg p-11 backdrop-blur-md">
        <h1 className="text-[40px] md:text-[5vw] lg:text-[5vw] font-extrabold text-center mb-12 whitespace-nowrap">Abhijeet Pareek</h1>
        <p ref={textRef} className="text-[20px] text-lg mb-8 font-extrabold">
          <span className="animated-word inline-block">Fullstack Developer</span> with an expertise in UI and  <span className="animated-word inline-block">Machine Learning Enthusiast</span> . I build responsive UI and integrate smart ML experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.25)"
            className="block p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow hover:shadow-lg transition"
            icon="/images/terminal-svgrepo-com.svg"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-left">Fullstack Dev Projects</h2>
            <p className="text-sm md:text-base text-left">React, Next.js, MUI, Tailwind UI projects I have built or contributed to.</p>
            <button className="mt-auto flex self-start inline-flex items-center justify-center select-none relative whitespace-nowrap align-middle outline-2 outline-offset-2 outline-transparent leading-[1.2] rounded-xl font-semibold transition-all duration-200 h-8 md:h-10 min-w-10 text-sm md:text-base bg-[linear-gradient(to_bottom,#222222,#111111)] text-white/90 border border-[#222222] px-4 md:px-6 mt-4">View Projects</button>
          </SpotlightCard>
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.25)"
            className="block p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow hover:shadow-lg transition"
            icon="/images/machine-learning-model-svgrepo-com.svg"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-left">Machine Learning Projects</h2>
            <p className="text-sm md:text-base text-left">Projects using TensorFlow, PyTorch, NLP APIs, and data visualization.</p>
            <button className="mt-auto inline-flex items-center justify-center select-none relative whitespace-nowrap align-middle outline-2 outline-offset-2 outline-transparent leading-[1.2] rounded-xl font-semibold transition-all duration-200 h-8 md:h-10 min-w-10 text-sm md:text-base bg-[linear-gradient(to_bottom,#222222,#111111)] text-white/90 border border-[#222222] px-4 md:px-6 mt-4" onClick={() => scrollToExpertise()}>View Projects</button>
          </SpotlightCard>
        </div>
      </div>

      {/* Down Arrow Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ShinyText text={
        <button
          onClick={() => scrollToExpertise()}
          className={`p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-hue-rotate ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          aria-label="Scroll to expertise section"
        >
          <svg
            className="w-8 h-8 text-white transform group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
        }/>
      </div>
    </section>
  );
} 