"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const projects = [
  { 
    id: 1,
    title: "Heatmap",
    category: "Data Visualization",
    image: "/images/puppeteer.png",
    bannerImage: "/images/tensorflow.png",
    description: "Interactive heatmap visualization",
    longDescription: `A sophisticated data visualization project that transforms complex datasets into intuitive heatmap representations. 
    Built using TensorFlow and modern web technologies, this project enables users to analyze and understand patterns in large datasets through an interactive interface.
    
    Key features include:
    - Real-time data processing and visualization
    - Interactive zoom and pan capabilities
    - Custom color mapping and intensity scaling
    - Export functionality for reports and presentations
    - Responsive design for all device sizes`,
    technologies: ["TensorFlow", "React", "D3.js", "Python", "WebGL"],
    githubUrl: "https://github.com/abhi3004/heatmap-project",
    liveUrl: "https://heatmap-demo.com"
  },
  { 
    id: 2,
    title: "Whiteboard",
    category: "Web Development",
    image: "/images/whiteboard.png",
    bannerImage: "/images/whiteboard.png",
    description: "Real-time collaborative whiteboard",
    longDescription: `A real-time collaborative whiteboard application that enables teams to work together seamlessly, regardless of their location.
    Built with WebSocket technology and modern frontend frameworks, this project brings the experience of physical whiteboarding to the digital world.
    
    Key features include:
    - Real-time collaboration with multiple users
    - Drawing tools and shapes
    - Text input and formatting
    - File sharing and export
    - User presence indicators`,
    technologies: ["React", "Socket.io", "Canvas API", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/abhi3004/whiteboard",
    liveUrl: "https://whiteboard-5e4cf.web.app/"
  },
  { 
    id: 3,
    title: "Chat App",
    category: "Web Development",
    image: "/images/chat.png",
    bannerImage: "/images/chat.png",
    description: "Real-time chat application",
    longDescription: `A modern real-time chat application that combines the best features of popular messaging platforms with a unique twist.
    Built with performance and user experience in mind, this project demonstrates advanced web development techniques.
    
    Key features include:
    - Real-time messaging with WebSocket
    - Message encryption
    - File sharing
    - User presence
    - Message reactions and threads`,
    technologies: ["Next.js", "WebSocket", "Tailwind CSS", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/abhi3004/chat-app",
    liveUrl: "https://chat-demo.com"
  }
];

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find(p => p.title.toLowerCase() === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      {/* Banner Image */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <img
          src={project.bannerImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/70 text-sm mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb and Back Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link href="/#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-white">{project.title}</span>
          </div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="flex gap-4 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="whitespace-pre-line text-white/80 leading-relaxed">
            {project.longDescription}
          </div>

          <div className="mt-12 flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
} 