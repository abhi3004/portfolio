"use client";
import React, { useState } from "react";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import Link from "next/link";

const items = [
  { content: <img src="/images/tensorflow.png" style={{boxShadow: '0 0 32px 8px rgb(231, 157, 29), 0 0 64px 16px rgba(242, 106, 27, 0.67)'}} alt="Heatmap" className="w-full h-full object-cover" /> },
  { content: <img src="/images/puppeteer.png" style={{boxShadow: '0 0 32px 8px rgb(243, 253, 238), 0 0 64px 16px rgba(246, 31, 23, 0.67)'}} alt="Heatmap" className="w-full h-full object-cover" /> },
  { content: <img src="/images/chat.png" style={{boxShadow: '0 0 32px 8px #2563eb, 0 0 64px 16px #2563ebaa'}} alt="Heatmap" className="w-full h-full object-cover" /> },
  { content: <img src="/images/whiteboard.png" style={{boxShadow: '0 0 32px 8px rgb(53, 223, 238), 0 0 64px 16px rgba(183, 255, 255, 0.67)'}} alt="Heatmap" className="w-full h-full object-cover" /> },
];

const projects = [
  {
    id: 1,
    title: "Heatmap",
    category: "Data Visualization",
    image: "/images/puppeteer.png",
    description: "Interactive heatmap visualization"
  },
  {
    id: 2,
    title: "Whiteboard",
    category: "Web Development",
    image: "/images/whiteboard.png",
    description: "Real-time collaborative whiteboard"
  },
  {
    id: 3,
    title: "Chat App",
    category: "Web Development",
    image: "/images/chat.png",
    description: "Real-time chat application"
  }
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const onFilterClick = (filter) => {
    if (filter === activeFilter) return;
    setActiveFilter(filter);
    const projectsContainer = document.getElementById("projects");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
    window.scrollBy(0, 10, { behavior: "smooth" });
  }

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="max-w-6xl mx-auto mt-[125px] mb-20 px-2 md:min-h-[100vh] md:flex md:flex-col md:justify-center pt-32 md:pt-0">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-[60%] p-4">
          <h1 className="text-[60px] md:text-[150px] font-extrabold text-left">My Work</h1>
          <p className="text-left font-extrabold text-2xl">
            Deployed scalable fintech, event and food delivery web and hybrid mobile apps using React SPA and PWA.
            Collaborated in multiple projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
          </p>
        </div>

        <div
          className="bg-neutral-700
           h-px w-full my-4
           lg:h-auto lg:w-px lg:my-0 lg:mx-4"
        ></div>

        <div className="w-full lg:w-[40%]">
          <div className="w-full max-w-xl h-[80vh] max-h-[80vh] min-h-[350px] lg:h-[80vh] lg:w-[660px] rotate-x-10 ml-0 lg:ml-10 border-[2px] border-black bg-zinc-700 overflow-hidden flex flex-col lg:flex-row relative bg-transparent border border-[#392e4e] rounded-[20px] justify-center items-center mt-4 p-4">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                transform: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'scale(0.45) rotate(20deg)' : 'scale(1) rotate(20deg)',
                transformOrigin: '65.7% 52.3%'
              }}
            >
            {/* <CardSwap
              cardDistance={100}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3 className="flex items-center gap-2 p-2">
                  <FaNpm />
                  Heatmap
                </h3>
                <div style={{ boxShadow: '0 0 32px 8px #e11d48, 0 0 64px 16px #e11d48aa' }} className="rounded-xl overflow-hidden">
                  <img src="/images/tensorflow.png" alt="Heatmap" className="w-full h-full object-cover" />
                </div>
              </Card>
              <Card>
                <h3 className="flex items-center gap-2 p-2">
                  <SlPencil />
                  Whiteboard
                </h3><div style={{ boxShadow: '0 0 32px 8px #2563eb, 0 0 64px 16px #2563ebaa' }} className="rounded-xl overflow-hidden">
                  <img src="/images/whiteboard.png" alt="Whiteboard" className="w-full h-full object-cover" />
                </div>
              </Card>
              <Card>
                <h3 className="flex items-center gap-2 p-2">
                  <FaNpm />
                  Heatmap
                </h3><div style={{ boxShadow: '0 0 32px 8px #a21caf, 0 0 64px 16px #a21cafaa' }} className="rounded-xl overflow-hidden">
                  <img src="/images/chat.png" alt="Chat App" className="w-full h-full object-cover" />
                </div>
              </Card>
            </CardSwap> */}
            <InfiniteScroll autoplayDirection="up" autoplaySpeed={1.5} items={items} autoplay tiltDirection="right" />
            <InfiniteScroll autoplayDirection="down" autoplaySpeed={2} items={items} autoplay tiltDirection="right" />
            <InfiniteScroll autoplayDirection="up" autoplaySpeed={3.5} items={items} autoplay tiltDirection="right" />
            </div>
          </div>
        </div>

      </div>

      {/* Filter Section */}
      <div id="projects" className="mt-16 flex flex-col items-center">
        <div className="flex gap-4 mb-8">
          {["All", "Data Visualization", "Web Development"].map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterClick(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.title.toLowerCase()}`}
              className="group relative overflow-hidden rounded-xl bg-white/5 p-4 hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm">{project.description}</p>
              <div className="mt-4">
                <span className="text-xs px-3 py-1 rounded-full bg-white/10">
                  {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 