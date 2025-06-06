import React from "react";
import ExpertiseSection from "./components/ExpertiseSection";
import WorkSection from "./components/WorkSection";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-800 text-gray-100 bg-graph">
      <HomeSection />
      <ExpertiseSection />
      <WorkSection />
    </main>
  );
}
