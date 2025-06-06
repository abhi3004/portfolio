import React from "react";
import CardSwap, {Card} from "./CardSwap/CardSwap";

export default function WorkSection() {
  return (
    <section id="work" className="max-w-6xl mx-auto mt-[125px] mb-20 px-2 md:min-h-[200vh] md:flex md:flex-col md:justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Title */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-[6vw] font-extrabold md:text-5xl font-extrabold text-left">My Work</h2>
        </div>
        {/* CardSwap */}
        <div className="flex justify-center md:justify-end">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-cuv99z" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>Heatmap</h3>
            <div style={{boxShadow: '0 0 32px 8px #e11d48, 0 0 64px 16px #e11d48aa'}} className="rounded-xl overflow-hidden">
              <img src="/images/puppeteer.png" alt="Heatmap" className="w-full h-full object-cover" />
            </div>
          </Card>
          <Card>
            <h3><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-cuv99z" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>Whiteboard</h3>
            <div style={{boxShadow: '0 0 32px 8px #2563eb, 0 0 64px 16px #2563ebaa'}} className="rounded-xl overflow-hidden">
              <img src="/images/whiteboard.png" alt="Whiteboard" className="w-full h-full object-cover" />
            </div>
          </Card>
          <Card>
            <h3><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" focusable="false" className="chakra-icon css-cuv99z" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>Card 3</h3>
            <div style={{boxShadow: '0 0 32px 8px #a21caf, 0 0 64px 16px #a21cafaa'}} className="rounded-xl overflow-hidden">
              <img src="/images/chat.png" alt="Chat App" className="w-full h-full object-cover" />
            </div>
          </Card>
        </CardSwap>
        </div>
      </div>
    </section>
  );
} 