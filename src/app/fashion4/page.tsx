"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const smallImages = [
  "/Fashion-Popup store/1.jpg",
  "/Fashion-Popup store/2.jpg",
  "/Fashion-Popup store/3.png",
  "/Fashion-Popup store/4.jpg",
];

export default function Fashion4() {
  const [mainImg, setMainImg] = useState("/Fashion-Popup store/1.jpg");

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
      
      {/* Fashion Navigation Bar */}
      <Link href="/#fashion" className="fixed top-20 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Fashion
      </Link>
      {/* Title and Subtitle */}
      <div className="w-full max-w-7xl mx-auto text-center mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 mt-4 md:mt-8">Luxury Pop-Up Loro Piana</h1>
        <div className="text-lg md:text-xl text-white font-light">Loro Piana - Shenzhen, China (2023)</div>
        <div className="text-lg md:text-xl text-white font-semibold mb-2">Sales Assistant</div>
      </div>
      {/* Content: Left image, right text */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start bg-black/60 rounded-2xl shadow-2xl p-4 md:p-12">
        {/* Left: Images */}
        <div className="flex flex-col items-center md:w-[520px] w-full flex-shrink-0">
          <div className="bg-black rounded-xl shadow-2xl mb-4 flex items-center justify-center" style={{ width: "100%", maxWidth: 480, height: 480 }}>
            <Image
              src={mainImg}
              alt="China Luxury Pop-up Main"
              width={480}
              height={480}
              className="object-contain w-full h-full rounded-xl"
              style={{ maxWidth: 480, maxHeight: 480 }}
            />
          </div>
          <div className="flex gap-3 w-full justify-center">
            {smallImages.map((src, idx) => (
              <div key={src} className="bg-black rounded-md flex items-center justify-center" style={{ width: 80, height: 80, flex: "0 0 auto" }}>
                <Image
                  src={src}
                  alt={`popup${idx+1}`}
                  width={80}
                  height={80}
                  className={`object-contain w-full h-full cursor-pointer border-2 transition-all duration-200 rounded-md ${mainImg === src ? "border-pink-300" : "border-transparent"}`}
                  onClick={() => setMainImg(src)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 text-white text-sm md:text-base md:pl-8 mt-8 md:mt-0" style={{minWidth: 0}}>
          <p className="mb-4 leading-relaxed">
            At a Loro&nbsp;Piana Summer Resort pop‑up in Shenzhen’s luxury district, I worked as a Sales Assistant for two months, serving a high‑net‑worth clientele.
          </p>
          <div className="space-y-4">
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Inventory Management & Visual Merchandising</span><br/>
              Managed daily restocking, packaging, logistics, and window/shelf displays; adapted layouts on the fly to reflect brand aesthetics and ensure each piece was shown at its best.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Front‑Line Client Service</span><br/>
              Proactively welcomed VIP guests, accurately gauged their needs, and highlighted fabric craftsmanship and design features; delivered personalized support throughout fitting, selection, and purchase.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Agile Problem‑Solving & Team Collaboration</span><br/>
              Coordinated restocking and guided customers to fitting rooms during peak periods; communicated live with the sales team and relayed client feedback to optimize on‑site sales strategies.
            </div>
          </div>
          <p className="mt-6 leading-relaxed">
            In this pop‑up Sales Assistant role, I not only developed a keen intuition for luxury quality and meticulous attention to detail, but also—through high‑end client engagement, visual merchandising, and rapid multitasking—honed my service instinct, aesthetic insight, adaptability, and premium‑level communication skills, building rich experience and confidence for future high‑end projects.
          </p>
        </div>
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/fashion2" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/fashion1" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
}