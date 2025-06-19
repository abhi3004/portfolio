"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    slug: "ayoconnect",
    role: "Senior Software Engineer IV",
    company: "Ayoconnect",
    period: "2023 - Present",
    logo: "/images/Ayoconnect-logo.svg",
    logoColor: "#00D4FF",
    bannerImage: "/images/Ayoconnect-logo.svg",
    description: "Led frontend development for enterprise applications using React, Next.js, and TypeScript.",
    longDescription: `As a Senior Software Engineer IV at Ayoconnect, I lead the frontend development team in building scalable and high-performance enterprise applications. My role involves architecting complex solutions, mentoring junior developers, and implementing best practices across the development lifecycle.

Key Responsibilities:
• Led a team of 5+ frontend developers in building enterprise-grade applications
• Architected and implemented micro-frontend architecture using Module Federation
• Established CI/CD pipelines reducing deployment time by 60%
• Implemented comprehensive testing strategies with 90%+ code coverage
• Mentored junior developers and conducted code reviews

Major Projects:
• Payment Gateway Integration: Built a robust payment processing system handling 1M+ transactions daily
• Admin Dashboard: Developed a comprehensive admin panel with real-time analytics and reporting
• Mobile-First Web App: Created responsive web applications optimized for mobile devices
• API Gateway: Designed and implemented a centralized API management system

Technical Achievements:
• Reduced bundle size by 40% through code splitting and lazy loading
• Improved application performance by 50% through optimization techniques
• Implemented TypeScript across all projects for better type safety
• Established design system and component library for consistency`,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Redis", "Docker", "AWS"],
    projects: [
      {
        name: "Payment Gateway System",
        description: "Built a comprehensive payment processing system with real-time transaction monitoring",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
      },
      {
        name: "Admin Dashboard",
        description: "Developed an analytics dashboard with real-time data visualization",
        technologies: ["Next.js", "D3.js", "Chart.js", "TypeScript"]
      },
      {
        name: "Mobile Web App",
        description: "Created responsive web applications optimized for mobile devices",
        technologies: ["React", "Tailwind CSS", "PWA", "Service Workers"]
      }
    ],
    achievements: [
      "Reduced bundle size by 40% through code splitting and lazy loading",
      "Improved application performance by 50% through optimization techniques",
      "Mentored 3 junior developers to senior level",
      "Established CI/CD pipelines reducing deployment time by 60%"
    ],
    companyUrl: "https://ayoconnect.com"
  },
  {
    id: 2,
    slug: "deqode",
    role: "Senior Solution Engineer",
    company: "Deqode",
    period: "2020 - 2023",
    logo: "/images/deqode-simple.svg",
    logoColor: "#FF6B35",
    bannerImage: "/images/deqode-simple.svg",
    description: "Developed and maintained web applications using MERN stack with real-time features.",
    longDescription: `As a Senior Solution Engineer at Deqode, I specialized in building scalable web applications using the MERN stack and implementing real-time features. I worked closely with clients to understand their requirements and delivered custom solutions that exceeded expectations.

Key Responsibilities:
• Developed full-stack web applications using MERN stack
• Implemented real-time features using WebSocket and Socket.io
• Optimized database queries and improved application performance
• Collaborated with cross-functional teams to deliver client solutions
• Provided technical consultation and architecture recommendations

Major Projects:
• E-commerce Platform: Built a complete e-commerce solution with real-time inventory management
• Real-time Chat Application: Developed a chat system with file sharing and user presence
• Analytics Dashboard: Created data visualization dashboards with real-time updates
• API Development: Designed and implemented RESTful APIs for various client projects

Technical Achievements:
• Implemented WebSocket connections for real-time data synchronization
• Optimized MongoDB queries reducing response time by 70%
• Built reusable component libraries for faster development
• Established coding standards and best practices for the team`,
    technologies: ["Python", "MongoDB", "Express", "React", "Node.js", "Socket.io", "Redis", "Docker", "AWS"],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built a complete e-commerce solution with real-time inventory and order management",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
      },
      {
        name: "Real-time Chat App",
        description: "Developed a chat application with file sharing and user presence indicators",
        technologies: ["React", "Socket.io", "Express", "MongoDB"]
      },
      {
        name: "Analytics Dashboard",
        description: "Created data visualization dashboards with real-time updates",
        technologies: ["React", "D3.js", "Node.js", "MongoDB"]
      }
    ],
    achievements: [
      "Optimized MongoDB queries reducing response time by 70%",
      "Implemented WebSocket connections for real-time data synchronization",
      "Built reusable component libraries for faster development",
      "Delivered 15+ client projects on time and within budget"
    ],
    companyUrl: "https://deqode.com"
  },
  {
    id: 3,
    slug: "digital-agency",
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    logo: "/images/terminal-svgrepo-com.svg",
    logoColor: "#00D4FF",
    bannerImage: "/images/terminal-svgrepo-com.svg",
    description: "Created responsive and interactive web interfaces with pixel-perfect designs.",
    longDescription: `As a Frontend Developer at Digital Agency, I focused on creating beautiful, responsive, and interactive web interfaces. I worked closely with designers to implement pixel-perfect designs and ensured optimal user experience across all devices.

Key Responsibilities:
• Developed responsive web interfaces using modern CSS and JavaScript
• Collaborated with designers to implement pixel-perfect designs
• Optimized websites for performance and SEO
• Ensured cross-browser compatibility and accessibility
• Maintained and updated existing client websites

Major Projects:
• Corporate Websites: Built responsive corporate websites for various clients
• Landing Pages: Created high-converting landing pages with A/B testing
• E-commerce Sites: Developed custom e-commerce solutions
• Portfolio Websites: Designed and developed portfolio websites for creative professionals

Technical Achievements:
• Improved website loading speed by 60% through optimization
• Implemented responsive design patterns for mobile-first approach
• Created reusable CSS frameworks for consistent styling
• Achieved 100% cross-browser compatibility across major browsers`,
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap", "WordPress", "PHP"],
    projects: [
      {
        name: "Corporate Website",
        description: "Built responsive corporate websites for various industry clients",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
      },
      {
        name: "E-commerce Site",
        description: "Developed custom e-commerce solutions with payment integration",
        technologies: ["WordPress", "PHP", "JavaScript", "CSS3"]
      },
      {
        name: "Portfolio Website",
        description: "Created portfolio websites for creative professionals",
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"]
      }
    ],
    achievements: [
      "Improved website loading speed by 60% through optimization",
      "Implemented responsive design patterns for mobile-first approach",
      "Created reusable CSS frameworks for consistent styling",
      "Delivered 25+ client projects with 100% satisfaction rate"
    ],
    companyUrl: "#"
  }
];

export default function ExperiencePage() {
  const params = useParams();
  const experience = experiences.find(exp => exp.slug === params.slug);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen relative">
      {/* Custom Blurred Blob Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="blur opacity-80" style={{position: 'absolute', inset: 0, filter: 'blur(100px)', zIndex: 0}}>
          <div className="blob" style={{width: '100vw', height: '100vh', background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 50%, #00d2ff 100%)', clipPath: 'polygon(65% 5%, 11% 0%, 83% 83%, 70% 97%, 72% 63%, 55% 6%, 42% 94%, 44% 1%, 76% 27%, 99% 47%, 78% 36%, 14% 63%, 2% 27%, 84% 27%, 83% 60%, 68% 62%, 53% 68%, 89% 60%, 18% 84%, 87% 56%)'}} />
        </div>
      </div>
      {/* Banner Image */}
      <div className="relative h-[60vh] w-full z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="h-24 w-auto mx-auto mb-6 filter brightness-0 invert"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {experience.role}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-2">
              {experience.company}
            </p>
            <p className="text-lg text-white/60">
              {experience.period}
            </p>
          </div>
        </div>
      </div>
      {/* Content in Glassmorphism Box */}
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-20">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Breadcrumb and Back Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-white/70">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <Link href="/#experience" className="hover:text-white transition-colors">
                Experience
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="text-white">{experience.company}</span>
            </div>
            <Link
              href="/#experience"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Experience
            </Link>
          </div>

          <div className="prose prose-invert max-w-none">
            {/* Technologies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Role Overview</h2>
              <div className="whitespace-pre-line text-white/80 leading-relaxed">
                {experience.longDescription}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Projects</h2>
              <div className="grid gap-6">
                {experience.projects.map((project, index) => (
                  <div key={index} className="p-6 rounded-lg bg-white/5 border border-white/10">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Link */}
            {experience.companyUrl && experience.companyUrl !== "#" && (
              <div className="mt-12">
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Visit {experience.company}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
