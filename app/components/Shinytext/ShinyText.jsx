"use client";

import React from "react";

export default function ShinyText({ children, className = "" }) {
  return (
    <>
      <span
        className={className}
        style={{
          backgroundImage: "linear-gradient(90deg, #ffffff, #8be9fd, #ffffff)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          backgroundSize: "200% 100%",
          animation: "shiny 3s linear infinite",
          display: "inline-block",
        }}
      >
        {children}
      </span>

      <style jsx>{`
        @keyframes shiny {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };