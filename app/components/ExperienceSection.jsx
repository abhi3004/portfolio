import React from "react";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer IV",
    company: "Ayoconnect",
    period: "2023 - Present",
    description: "Led frontend development for enterprise applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    role: "Senior Solution Engineer",
    company: "Deqode",
    period: "2020 - 2023",
    description: "Developed and maintained web applications using MERN stack. Implemented real-time features using WebSocket and optimized database queries.",
    technologies: ["Python", "MongoDB", "Express", "React", "Node.js"]
  },
  {
    id: 3,
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
          <p className="text-left font-extrabold text-2xl">
            Over 5 years of experience in web development, focusing on creating scalable and user-friendly applications.
          </p>
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