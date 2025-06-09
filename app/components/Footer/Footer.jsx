import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-white/50 text-sm">
          © {currentYear} Abhijeet Pareek. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 