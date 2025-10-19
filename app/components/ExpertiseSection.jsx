"use client";
import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal/ScrollReveal";
const expertise = [
  {
    title: "Software\nDevelopment",
    highlight: "Software",
    underline: "bg-pink-500",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" className="mb-4"><path d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z" transform="translate(-2 -2)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
    ),
    desc: (
      <>
        <span className="text-xs text-gray-400">&lt;h3&gt;</span>
        <div className="border-l border-gray-600 pl-3 my-2 text-sm font-mono text-gray-200">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
          </ScrollReveal>
        </div>
        <span className="text-xs text-gray-400">&lt;/h3&gt;</span>
      </>
    ),
  },
  {
    title: "Frontend Dev\nReact, NextJS",
    highlight: "Frontend Dev",
    underline: "bg-blue-500",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44.964" viewBox="0 0 40 44.964" className="mb-4"><path d="M21.087,20.97a4.015,4.015,0,1,0,5.485,1.469A4.015,4.015,0,0,0,21.087,20.97Zm18,4.356q-.4-.452-.834-.906.307-.322.594-.644c3.61-4.056,5.134-8.124,3.722-10.57-1.354-2.345-5.381-3.044-10.422-2.063q-.745.146-1.482.329-.141-.486-.3-.967C28.65,5.351,25.887,2,23.064,2c-2.708,0-5.325,3.141-6.994,8q-.246.719-.456,1.449-.493-.121-.989-.223c-5.319-1.092-9.6-.373-11.013,2.074-1.351,2.347.062,6.182,3.436,10.054q.5.575,1.032,1.124c-.417.429-.812.859-1.18,1.285-3.293,3.817-4.625,7.59-3.276,9.927,1.393,2.413,5.617,3.2,10.758,2.191q.625-.124,1.243-.279.226.79.5,1.567c1.662,4.76,4.264,7.8,6.963,7.8,2.786,0,5.58-3.266,7.272-8.226.134-.392.26-.8.38-1.218q.8.2,1.607.353c4.954.937,8.886.2,10.232-2.138,1.39-2.415-.043-6.466-3.495-10.408ZM5.276,14.257c.867-1.506,4.369-2.094,8.961-1.151q.44.091.9.2a46.005,46.005,0,0,0-.947,6.02,46.956,46.956,0,0,0-4.73,3.807q-.493-.51-.96-1.045h0C5.6,18.773,4.462,15.671,5.276,14.257Zm8.738,12.878c-1.148-.869-2.215-1.76-3.183-2.655.968-.89,2.035-1.777,3.18-2.644q-.062,1.325-.061,2.651t.064,2.648Zm0,8.859a16.269,16.269,0,0,1-5.935.209,3.97,3.97,0,0,1-2.79-1.476c-.818-1.418.251-4.447,3.067-7.712q.531-.614,1.1-1.2a46.066,46.066,0,0,0,4.737,3.822,46.768,46.768,0,0,0,.958,6.1q-.564.141-1.135.254ZM29.977,17.92q-1.131-.713-2.29-1.38-1.141-.656-2.308-1.264c1.333-.561,2.644-1.039,3.909-1.429a40.955,40.955,0,0,1,.69,4.073Zm-12.092-7.3c1.43-4.162,3.547-6.7,5.179-6.7,1.738,0,4,2.739,5.473,7.189q.144.435.272.875a46.038,46.038,0,0,0-5.681,2.183,45.1,45.1,0,0,0-5.663-2.208Q17.659,11.286,17.886,10.622Zm-.9,3.2a41.159,41.159,0,0,1,3.889,1.443q-2.362,1.219-4.6,2.656C16.452,16.488,16.692,15.114,16.986,13.823Zm-.711,17.223q1.117.715,2.267,1.378,1.173.675,2.377,1.294A40.909,40.909,0,0,1,17,35.212C16.7,33.9,16.457,32.505,16.275,31.046ZM28.54,38.117a16.267,16.267,0,0,1-2.783,5.245h0a3.97,3.97,0,0,1-2.672,1.679c-1.637,0-3.727-2.439-5.148-6.509q-.251-.722-.462-1.457a45.207,45.207,0,0,0,5.686-2.27,46.762,46.762,0,0,0,5.727,2.2q-.16.56-.347,1.111Zm.814-2.977c-1.28-.4-2.609-.882-3.962-1.451q1.144-.6,2.3-1.271,1.191-.687,2.32-1.409a40.811,40.811,0,0,1-.663,4.132Zm1-10.662q0,2.048-.128,4.093c-1.108.75-2.277,1.482-3.494,2.184s-2.412,1.342-3.59,1.924q-1.859-.891-3.646-1.92T16.028,28.58q-.155-2.044-.156-4.1h0q0-2.05.153-4.1c1.107-.756,2.268-1.488,3.468-2.181s2.421-1.336,3.63-1.917q1.836.892,3.606,1.912t3.482,2.155q.147,2.056.147,4.118Zm2.151-11.45c4.319-.84,7.576-.275,8.392,1.138.869,1.505-.377,4.83-3.493,8.333h0q-.258.29-.536.582a45.1,45.1,0,0,0-4.82-3.795,45.055,45.055,0,0,0-.912-5.955q.7-.172,1.369-.3Zm-.292,8.733a40.837,40.837,0,0,1,3.285,2.67,40.735,40.735,0,0,1-3.275,2.716q.052-1.335.051-2.672,0-1.358-.062-2.715Zm8.7,13.014c-.817,1.419-3.974,2.011-8.211,1.209q-.728-.137-1.494-.327a45.12,45.12,0,0,0,.871-6.029,44.826,44.826,0,0,0,4.8-3.858q.4.412.755.82h0a16.264,16.264,0,0,1,3.154,5.031,3.969,3.969,0,0,1,.121,3.153Z" transform="translate(-3.104 -2)" fill="#fff"></path></svg>
    ),
    desc: (
      <>
        <span className="text-xs text-gray-400">&lt;h3&gt;</span>
        <div className="border-l border-gray-600 pl-3 my-2 text-sm font-mono text-gray-200">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
          </ScrollReveal>
        </div>
        <span className="text-xs text-gray-400">&lt;/h3&gt;</span>
      </>
    ),
  },
  {
    title: "Flutter Dev\nAndroid, iOS",
    highlight: "Flutter Dev",
    underline: "bg-orange-500",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="46.769" viewBox="0 0 38 46.769" className="mb-4"><path d="M39.275,46.769h-13.7a.972.972,0,0,1-.69-.286L12.86,34.4a.976.976,0,0,1,0-1.376L24.886,20.964a.981.981,0,0,1,.692-.288h13.7a.974.974,0,0,1,.692,1.66L28.645,33.712,39.967,45.1a.977.977,0,0,1-.692,1.664Zm-13.3-1.949H36.932L26.579,34.4a.974.974,0,0,1,0-1.374l10.351-10.4H25.981L14.926,33.712ZM10.1,31.269a.972.972,0,0,1-.69-.286l-6.875-6.91a.976.976,0,0,1,0-1.376L24.86.286a.977.977,0,0,1,.894-.265H39.246a.974.974,0,0,1,.692,1.66l-29.147,29.3A.976.976,0,0,1,10.1,31.269ZM4.6,23.384l5.5,5.528L36.9,1.97H25.932Z" transform="translate(-2.25 0)" fill="#fff"></path></svg>
    ),
    desc: (
      <>
        <span className="text-xs text-gray-400">&lt;h3&gt;</span>
        <div className="border-l border-gray-600 pl-3 my-2 text-sm font-mono text-gray-200">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
          </ScrollReveal>
        </div>
        <span className="text-xs text-gray-400">&lt;/h3&gt;</span>
      </>
    ),
  },
];

const technologies = [
  { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { title: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { title: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { title: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { title: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { title: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { title: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { title: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { title: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function ExpertiseSection() {
  const [showButton, setShowButton] = useState(false);
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="expertise" className="p-20 max-w-6xl mx-auto px-2 md:min-h-screen md:flex md:flex-col md:justify-center">
      <h2 className="mt-auto text-5xl font-extrabold text-center mb-12">My Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {expertise.map((item, idx) => (
          <div
            key={idx}
            className="bg-transparent border-2 border-gray-500 p-8 flex flex-col items-start shadow-md min-h-[340px] relative"
          >
            {item.svg}
            <div className="mb-2">
              <span className="font-extrabold text-2xl text-white relative">
                {/* Highlighted and underlined part */}
                <span className="relative">
                  {item.title.split("\n")[0].includes(item.highlight) ? (
                    <>
                      <span>{item.highlight}</span>
                      <span
                        className={`absolute left-0 right-0 -bottom-1 h-1 ${item.underline} rounded`}
                        style={{ zIndex: 0 }}
                      ></span>
                    </>
                  ) : (
                    item.title.split("\n")[0]
                  )}
                </span>
                {/* Rest of the title */}
                {item.title.split("\n")[0].includes(item.highlight)
                  ? <span className="ml-2">{item.title.split("\n")[0].replace(item.highlight, "")}</span>
                  : null}
              </span>
              <br />
              <span className="font-extrabold text-2xl text-white">
                {item.title.split("\n")[1]}
              </span>
            </div>
            {item.desc}
          </div>
        ))}
      </div>
      {/* Technology Carousel */}
      {/* <div className="mt-16 mb-8">
        <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center min-w-[80px]">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-sm mt-2 text-gray-300">{tech.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="justify-center flex mt-12 mb-8">
        <button
          onClick={() => scrollToWork()}
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
      </div>
    </section>
  );
} 