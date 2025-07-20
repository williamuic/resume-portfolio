"use client";
import React from "react";

const images = Array.from({ length: 24 }, (_, i) => `/Personal_webpage/FASHION/fashion  Brand  Report/${i + 1}.jpg`);

export default function Fashion1() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-8 px-2 md:px-12 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img src="/Personal_webpage/BACKGROUND/3FASHION.jpg" alt="Fashion BG" className="w-full h-full object-cover" style={{opacity:0.7}} />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Title */}
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 mt-4 md:mt-8">Brand Report-DTC Model（2022）</h1>
      </div>
      {/* Vertical Scroll Gallery */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center bg-black/60 rounded-2xl shadow-2xl p-4 md:p-12 gap-8">
        {images.map((src, idx) => (
          <div key={src} className="w-full flex items-center justify-center">
            <img
              src={src}
              alt={`Brand Report ${idx + 1}`}
              className="object-contain w-full"
              style={{maxHeight: '1000px'}}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 