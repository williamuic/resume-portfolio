"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Image src="/Personal_webpage/BACKGROUND/3FASHION.jpg" alt="Fashion BG" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Home Link at Top Left */}
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      {/* Title and Subtitle */}
      <div className="w-full max-w-7xl mx-auto text-center mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 mt-4 md:mt-8">25SS London Fashion Week Runway</h1>
        <div className="text-lg md:text-xl text-white font-light">Helen Anthony (2024)</div>
        <div className="text-lg md:text-xl text-white font-semibold mb-2">Styling Intern</div>
      </div>
      {/* Content: Left image, right text */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start bg-black/60 rounded-2xl shadow-2xl p-4 md:p-12">
        {/* Left: Images */}
        <div className="flex flex-col items-center md:w-[520px] w-full flex-shrink-0">
          <div className="bg-black rounded-xl shadow-2xl mb-4 flex items-center justify-center" style={{ width: "100%", maxWidth: 480, height: 320 }}>
            <Image
              src={mainImg}
              alt="London Fashion Week Main"
              width={480}
              height={320}
              className="object-contain w-full h-full"
              style={{ maxWidth: 480, maxHeight: 320 }}
            />
          </div>
          <div className="flex gap-3 w-full justify-center">
            {smallImages.map((src, idx) => (
              <div key={src} className="bg-black rounded-md flex items-center justify-center" style={{ width: 80, height: 60, flex: "0 0 auto" }}>
                <Image
                  src={src}
                  alt={`london${idx+1}`}
                  width={80}
                  height={60}
                  className={`object-contain w-full h-full cursor-pointer border-2 transition-all duration-200 ${mainImg === src ? "border-pink-300" : "border-transparent"}`}
                  onClick={() => setMainImg(src)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 text-white text-sm md:text-base md:pl-8 mt-8 md:mt-0" style={{minWidth: 0}}>
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
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/fashion1" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/fashion2" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
}