"use client";
import React, { useState } from "react";
import CardSwap, { Card } from "./CardSwap/CardSwap";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";

const items = [
  { content: "Text Item 1" },
  { content: <p>Paragraph Item 2</p> },
  { content: "Text Item 3" },
  { content: <img src="/images/whiteboard.png" alt="Heatmap" className="w-full h-full object-cover" /> },
  { content: "Text Item 5" },
  { content: <img src="/images/puppeteer.png" alt="Heatmap" className="w-full h-full object-cover" /> },
  { content: "Text Item 7" },
  { content: <p>Paragraph Item 8</p> },
  { content: "Text Item 9" },
  { content: <p>Paragraph Item 10</p> },
  { content: "Text Item 11" },
  { content: <p>Paragraph Item 12</p> },
  { content: "Text Item 13" },
  { content: <p>Paragraph Item 14</p> },
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

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="max-w-6xl mx-auto mt-[125px] mb-20 px-2 md:min-h-[100vh] md:flex md:flex-col md:justify-center pt-32 md:pt-0">
      <div class="flex flex-col lg:flex-row items-stretch">
        <div class="w-full lg:w-[60%] p-4">
          <h1 className="text-[60px] md:text-[150px] font-extrabold text-left">My Work</h1>
          <p className="text-left font-extrabold text-2xl">
            Deployed scalable fintech, event and food delivery web and hybrid mobile apps using React SPA and PWA.
            Collaborated in multiple projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
          </p>
        </div>

        <div
          class="bg-neutral-700
           h-px w-full my-4
           lg:h-auto lg:w-px lg:my-0 lg:mx-4"
        ></div>

        <div class="w-full lg:w-[40%]">
          <div className="h-[80vh] w-[550px] ml-10 overflow-hidden flex flex-col lg:flex-row relative bg-transparent border border-[#392e4e] rounded-[20px] justify-center items-center w-full mt-4 p-4">
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <h3><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-cuv99z" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>Heatmap</h3>
                  <div style={{ boxShadow: '0 0 32px 8px #e11d48, 0 0 64px 16px #e11d48aa' }} className="rounded-xl overflow-hidden">
                    <img src="/images/puppeteer.png" alt="Heatmap" className="w-full h-full object-cover" />
                  </div>
                </Card>
                <Card>
                  <h3><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-cuv99z" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>Whiteboard</h3>
                  <div style={{ boxShadow: '0 0 32px 8px #2563eb, 0 0 64px 16px #2563ebaa' }} className="rounded-xl overflow-hidden">
                    <img src="/images/whiteboard.png" alt="Whiteboard" className="w-full h-full object-cover" />
                  </div>
                </Card>
                <Card>
                  <h3><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-cuv99z" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>Card 3</h3>
                  <div style={{ boxShadow: '0 0 32px 8px #a21caf, 0 0 64px 16px #a21cafaa' }} className="rounded-xl overflow-hidden">
                    <img src="/images/chat.png" alt="Chat App" className="w-full h-full object-cover" />
                  </div>
                </Card>
              </CardSwap>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mt-16 flex flex-col items-center">
        <div className="flex gap-4 mb-8">
          {["All", "Data Visualization", "Web Development"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
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
            <div
              key={project.id}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 