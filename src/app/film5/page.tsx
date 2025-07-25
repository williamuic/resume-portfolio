"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const kfcImages = [
  "/Film-图片/5-1-1.jpg",
  "/Film-图片/5-1-2.jpg",
  "/Film-图片/5-1-3.jpg",
  "/Film-图片/5-1-4.jpg",
];
const yiliImages = [
  "/Film-图片/5-2-1.jpg",
  "/Film-图片/5-2-2.jpg",
  "/Film-图片/5-2-3.jpg",
  "/Film-图片/5-2-4.jpg",
];
const lotteryImages = [
  "/Film-图片/5-3-1.jpg",
  "/Film-图片/5-3-2.png",
  "/Film-图片/5-3-3.jpg",
  "/Film-图片/5-3-4.jpg",
];

export default function Film5() {
  const [currentKfcImage, setCurrentKfcImage] = useState(kfcImages[0]);
  const [currentYiliImage, setCurrentYiliImage] = useState(yiliImages[0]);
  const [currentLotteryImage, setCurrentLotteryImage] = useState(lotteryImages[0]);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      
      {/* Film Navigation Bar */}
      <Link href="/#film" className="fixed top-20 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Film
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold tracking-widest mb-2 text-center">Commercial Advertising Project</h1>
        <div className="text-base text-center text-white font-light mb-8">Production Assistant</div>
        {/* KFC Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-left">KFC China Home Delivery Initiative (2020)</h2>
          <div className="relative w-full aspect-[16/9] max-h-[400px] rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={currentKfcImage}
              alt="KFC Main Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {kfcImages.map((src, idx) => (
              <div
                key={src}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  currentKfcImage === src 
                    ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/20' 
                    : 'shadow-md hover:shadow-xl hover:shadow-white/10'
                }`}
                onClick={() => setCurrentKfcImage(src)}
              >
                <Image
                  src={src}
                  alt={`KFC ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Yili Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-left">Yili QQ Star × United Nations × Chinese Embassy in Kenya Joint Initiative: Africa Wildlife Conservation Public Benefit Campaign (2020)</h2>
          <div className="relative w-full aspect-[16/9] max-h-[400px] rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={currentYiliImage}
              alt="Yili Main Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {yiliImages.map((src, idx) => (
              <div
                key={src}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  currentYiliImage === src 
                    ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/20' 
                    : 'shadow-md hover:shadow-xl hover:shadow-white/10'
                }`}
                onClick={() => setCurrentYiliImage(src)}
              >
                <Image
                  src={src}
                  alt={`Yili ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Lottery Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-left">China Sports Lottery Promotional Project (2020)</h2>
          <div className="relative w-full aspect-[16/9] max-h-[400px] rounded-xl shadow-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900 to-black">
            <Image
              src={currentLotteryImage}
              alt="Lottery Main Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {lotteryImages.map((src, idx) => (
              <div
                key={src}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ${
                  currentLotteryImage === src 
                    ? 'ring-2 ring-pink-500 shadow-lg shadow-pink-500/20' 
                    : 'shadow-md hover:shadow-xl hover:shadow-white/10'
                }`}
                onClick={() => setCurrentLotteryImage(src)}
              >
                <Image
                  src={src}
                  alt={`Lottery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/film4" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/film1" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
}