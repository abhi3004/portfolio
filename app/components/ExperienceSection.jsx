import React from "react";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    slug: "ayoconnect",
    role: "Senior Software Engineer IV",
    company: "Ayoconnect",
    period: "2023 - Present",
    description: "Led fullstack development for enterprise applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    logo: "/images/Ayoconnect-logo.svg",
    logoColor: "#00D4FF", // Orange color for Ayoconnect
    url: "https://ayoconnect.com"
  },
  {
    id: 2,
    slug: "deqode",
    role: "Senior Solution Engineer",
    company: "Deqode",
    period: "2020 - 2023",
    description: "Developed and maintained web applications using MERN stack. Implemented real-time features using WebSocket and optimized database queries.",
    technologies: ["Python", "MongoDB", "Express", "React", "Node.js"],
    logo: "/images/deqode-simple.svg",
    logoColor: "#FF6B35" // Blue color for Deqode
  },
  {
    id: 3,
    slug: "digital-agency",
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Created responsive and interactive web interfaces. Collaborated with designers to implement pixel-perfect designs.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto mt-[125px] mb-20 px-2 md:min-h-[100vh] md:flex md:flex-col md:justify-center pt-32 md:pt-0">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-[60%] p-4">
          <h1 className="text-[60px] md:text-[100px] font-extrabold text-left">Experience</h1>
          <p className="text-left font-extrabold text-2xl mb-8">
            Over 4 years of experience in web development, focusing on creating scalable and user-friendly applications.
          </p>
          
          {/* Company Logos Glassmorphic Box */}
          <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
            {/* Shiny border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-xl font-bold mb-4 text-white/90">Companies I've Worked With</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {experiences.filter(exp => exp.logo).map((experience) => (
                <Link 
                  key={experience.id} 
                  href={`/experience/${experience.slug}`}
                  className="relative group"
                  style={{
                    '--logo-color': experience.logoColor
                  }}
                >
                  {/* Shiny border around logo */}
                  <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-transparent via-[var(--logo-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-[var(--logo-color)]/50 transition-all duration-300">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-12 w-auto object-contain transition-all duration-300"
                      style={{
                        filter: experience.logo.includes('.svg') ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-700 h-px w-full my-4 lg:h-auto lg:w-px lg:my-0 lg:mx-4"></div>

        <div className="w-full lg:w-[40%] p-4">
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative pl-8 border-l-2 border-neutral-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">{experience.role}</h3>
                  <p className="text-white/70">{experience.company}</p>
                  <p className="text-sm text-white/50">{experience.period}</p>
                </div>
                <p className="text-white/80 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 