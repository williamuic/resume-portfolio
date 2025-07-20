"use client";
import React, { useState } from "react";

const smallImages = [
  "/Fashion -London fashion week/1.jpg",
  "/Fashion -London fashion week/2.jpg",
  "/Fashion -London fashion week/3.jpg",
  "/Fashion -London fashion week/4.jpg",
  "/Fashion -London fashion week/5.jpg",
];

export default function Fashion3() {
  const [mainImg, setMainImg] = useState("/Personal_webpage/FASHION/25SS London Fashion Week.jpg");

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-8 px-2 md:px-12 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img src="/Personal_webpage/BACKGROUND/3FASHION.jpg" alt="Fashion BG" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Title and Subtitle */}
      <div className="w-full max-w-7xl mx-auto text-center mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 mt-4 md:mt-8">25SS London Fashion Week Runway</h1>
        <div className="text-lg md:text-xl text-white font-light">Helen Anthony (2024)</div>
        <div className="text-lg md:text-xl text-white font-semibold mb-2">Styling Intern</div>
      </div>
      {/* Main Image (full width) */}
      <div className="w-full max-w-4xl mx-auto bg-black rounded-xl shadow-2xl flex items-center justify-center mb-4" style={{height: '420px'}}>
        <img
          src={mainImg}
          alt="London Fashion Week Main"
          className="object-contain w-full h-full"
          style={{maxHeight: 420}}
        />
      </div>
      {/* Small Images Carousel */}
      <div className="w-full max-w-4xl mx-auto overflow-x-auto flex gap-4 mb-8 pb-2" style={{ WebkitOverflowScrolling: "touch" }}>
        {smallImages.map((src, idx) => (
          <div key={src} className="bg-black rounded-md flex items-center justify-center" style={{ width: 120, height: 80, flex: "0 0 auto" }}>
            <img
              src={src}
              alt={`london${idx+1}`}
              className={`object-contain w-full h-full cursor-pointer border-2 transition-all duration-200 ${mainImg === src ? "border-pink-300" : "border-transparent"}`}
              onClick={() => setMainImg(src)}
            />
          </div>
        ))}
      </div>
      {/* Text Content (full width) */}
      <div className="w-full max-w-4xl mx-auto text-white text-sm md:text-base mt-8" style={{zIndex: 1}}>
        <p className="mb-4 leading-relaxed">
          During the 2025 SS London Fashion Week, I was selected to join the backstage visual styling team of emerging luxury brand <b>Helen Anthony</b> for nearly one week.
        </p>
        <div className="space-y-4">
          <div>
            <span className="inline-block w-4 text-pink-200 align-top">●</span>
            <span className="text-base md:text-lg font-bold">Styling & Brand Collaboration</span><br/>
            Curated sunglasses, footwear and bags in line with the designer’s vision; liaised with local London brands to secure rental pieces and ensure all accessories arrived on time.
          </div>
          <div>
            <span className="inline-block w-4 text-pink-200 align-top">●</span>
            <span className="text-base md:text-lg font-bold">Workflow Optimization</span><br/>
            Identified that model‑direction signage was insufficiently visible, swiftly designed and deployed updated signs before casting, significantly improving back‑of‑house flow.
          </div>
          <div>
            <span className="inline-block w-4 text-pink-200 align-top">●</span>
            <span className="text-base md:text-lg font-bold">Cross‑Cultural Communication & Photography</span><br/>
            Worked entirely in English to communicate smoothly with international models and colleagues; captured styling, fittings, runway preparations, and behind‑the‑scenes footage to enrich the brand’s visual assets.
          </div>
          <div>
            <span className="inline-block w-4 text-pink-200 align-top">●</span>
            <span className="text-base md:text-lg font-bold">Results & Impact</span><br/>
            The designer adopted my accessory selections and signage improvements on the spot, resulting in a smoother show day with fewer model delays or positioning errors. My photos and videos were used in Helen Anthony’s social media and subsequent promotions, and I established lasting connections with international models and styling teams—expanding the brand’s talent network and collaboration opportunities.
          </div>
        </div>
      </div>
    </div>
  );
} 