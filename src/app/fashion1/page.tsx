"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  ...Array.from({ length: 13 }, (_, i) => `/Personal_webpage/FASHION/fashion  Brand  Report/${i + 1}.jpg`),
  ...Array.from({ length: 10 }, (_, i) => `/Personal_webpage/FASHION/fashion  Brand  Report/${i + 15}.jpg`)
];

export default function Fashion1() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-8 px-2 md:px-12 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image src="/Personal_webpage/BACKGROUND/3FASHION.jpg" alt="Fashion BG" width={1920} height={1080} className="w-full h-full object-cover" style={{opacity:0.7}} />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Home Link at Top Left */}
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      {/* Title and Subtitle */}
      <div className="w-full max-w-7xl mx-auto text-center mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 mt-4 md:mt-8">Brand Report - DTC Model</h1>
        <div className="text-lg md:text-xl text-white font-light">Beauty Brand- Perfect Diary (2022)</div>
      </div>
      {/* Vertical Scroll Gallery */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center bg-black/60 rounded-2xl shadow-2xl p-4 md:p-12 gap-8">
        {images.map((src, idx) => (
          <div key={src} className="w-full flex items-center justify-center">
            <Image
              src={src}
              alt={`Brand Report ${idx + 1}`}
              width={1000}
              height={1000}
              className="object-contain w-full"
              style={{maxHeight: '1000px'}}
            />
          </div>
        ))}
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/fashion4" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/fashion3" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
}