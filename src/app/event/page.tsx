"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const theaterImages = [
  "/EVENT/1/1.jpg",
  "/EVENT/1/2.jpg",
  "/EVENT/1/3.jpg",
  "/EVENT/1/4.jpg",
  "/EVENT/1/5.jpg",
  "/EVENT/1/6.jpg",
  "/EVENT/1/7.png",
];

const graduationImages = [
  "/EVENT/2/1.jpg",
  "/EVENT/2/2.jpg",
  "/EVENT/2/3.jpg",
  "/EVENT/2/4.jpg",
  "/EVENT/2/5.jpg",
  "/EVENT/2/6.jpg",
  "/EVENT/2/7.jpg",
  "/EVENT/2/8.jpg",
  "/EVENT/2/9.jpg",
];

const starvoiceImages = [
  "/EVENT/3/1.jpg",
  "/EVENT/3/2.jpg",
  "/EVENT/3/3.jpg",
  "/EVENT/3/4.jpg",
  "/EVENT/3/5.jpg",
];

const jinlingImages = [
  "/EVENT/4/1.png",
  "/EVENT/4/2.jpg",
  "/EVENT/4/3.jpg",
  "/EVENT/4/定帧.jpg",
];

export default function Event() {
  const [currentTheaterImage, setCurrentTheaterImage] = useState(theaterImages[0]);
  const [currentGraduationImage, setCurrentGraduationImage] = useState(graduationImages[0]);
  const [currentStarvoiceImage, setCurrentStarvoiceImage] = useState(starvoiceImages[0]);
  const [currentJinlingImage, setCurrentJinlingImage] = useState(jinlingImages[0]);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl font-bold tracking-widest mb-4 text-center">EVENT PORTFOLIO</h1>
        <div className="text-lg text-center text-white font-light mb-12">Production & Direction Experience</div>
        
        {/* On-campus Theater Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">On-campus –1,000-seat Theater (2018–2021)</h2>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">President of the Student Union Arts Division; overall lead for faculty-level cultural events, including gala nights, film roadshows, and academic talks.</p>
          <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={currentTheaterImage}
              alt="Theater Main Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {theaterImages.map((src, idx) => (
              <div
                key={src}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  currentTheaterImage === src 
                    ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/20' 
                    : 'shadow-md hover:shadow-xl hover:shadow-white/10'
                }`}
                onClick={() => setCurrentTheaterImage(src)}
              >
                <Image
                  src={src}
                  alt={`Theater ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Oriental Zen Graduation Gala Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Oriental Zen-Brand Graduation Gala (2021)</h2>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">Chief Director & On-site Execution Lead</p>
          <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={currentGraduationImage}
              alt="Graduation Gala Main Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {graduationImages.map((src, idx) => (
              <div
                key={src}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  currentGraduationImage === src 
                    ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/20' 
                    : 'shadow-md hover:shadow-xl hover:shadow-white/10'
                }`}
                onClick={() => setCurrentGraduationImage(src)}
              >
                <Image
                  src={src}
                  alt={`Graduation ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* STARVOICE Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">STARVOICE –Children's Singing Showcase (2020)</h2>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">Video Console Operator</p>
          <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={currentStarvoiceImage}
              alt="STARVOICE Main Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {starvoiceImages.map((src, idx) => (
              <div
                key={src}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  currentStarvoiceImage === src 
                    ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/20' 
                    : 'shadow-md hover:shadow-xl hover:shadow-white/10'
                }`}
                onClick={() => setCurrentStarvoiceImage(src)}
              >
                <Image
                  src={src}
                  alt={`STARVOICE ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Nanjing Jinling Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Nanjing Jinling Experimental Primary School Performance –Nanjing Poly Grand Theatre (2021)</h2>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">Member of the directing team; responsible for pre-event coordination and backstage execution.</p>
          <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={currentJinlingImage}
              alt="Jinling Performance Main Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {jinlingImages.map((src, idx) => (
              <div
                key={src}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  currentJinlingImage === src 
                    ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/20' 
                    : 'shadow-md hover:shadow-xl hover:shadow-white/10'
                }`}
                onClick={() => setCurrentJinlingImage(src)}
              >
                <Image
                  src={src}
                  alt={`Jinling ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}