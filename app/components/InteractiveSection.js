"use client"

import React from "react";
import RotatingText from "./RotatingText/RotatingText.jsx";
import CardSwap, { Card } from "./CardSwap/CardSwap.jsx";
import ProfileCard from "./profile/Profilecardcomponent.jsx";

export default function InteractiveSection() {

  return (
    <>
      <RotatingText
        texts={['React', 'Bits', 'Is', 'Cool!']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
      <div style={{ height: '600px' }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
      <div className="flex h-screen w-full">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="text-white p-6 rounded">
            <ProfileCard
              name="Abhijeet Pareek"
              title="Software Engineer"
              handle="abhi3004"
              status="Online"
              contactText="Contact Me"
              avatarUrl="images/Subject.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
      </div>
    </>
  );
} 