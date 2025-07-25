"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Combine all event images from all projects
const allEventImages = [
  // Theater images
  "/EVENT/1/1.jpg",
  "/EVENT/1/2.jpg",
  "/EVENT/1/3.jpg",
  "/EVENT/1/4.jpg",
  "/EVENT/1/5.jpg",
  "/EVENT/1/6.jpg",
  "/EVENT/1/7.png",
  // Graduation images
  "/EVENT/2/1.jpg",
  "/EVENT/2/2.jpg",
  "/EVENT/2/3.jpg",
  "/EVENT/2/4.jpg",
  "/EVENT/2/5.jpg",
  "/EVENT/2/6.jpg",
  "/EVENT/2/7.jpg",
  "/EVENT/2/8.jpg",
  "/EVENT/2/9.jpg",
  // STARVOICE images
  "/EVENT/3/1.jpg",
  "/EVENT/3/2.jpg",
  "/EVENT/3/3.jpg",
  "/EVENT/3/4.jpg",
  "/EVENT/3/5.jpg",
  // Jinling images
  "/EVENT/4/1.png",
  "/EVENT/4/2.jpg",
  "/EVENT/4/3.jpg",
  "/EVENT/4/定帧.jpg",
];

export default function Event() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setEnlargedImage(imageSrc);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-4xl font-bold tracking-widest mb-12 text-center">EVENT</h1>
        
        {/* All Event Images in One Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {allEventImages.map((src, idx) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-white/10 hover:scale-105"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Event ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeEnlargedImage}
        >
          <div className="relative max-w-5xl max-h-full">
            <Image
              src={enlargedImage}
              alt="Enlarged Event Image"
              width={1200}
              height={900}
              className="object-contain w-full h-full rounded-lg"
            />
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}