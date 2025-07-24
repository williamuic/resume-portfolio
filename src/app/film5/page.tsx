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
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold tracking-widest mb-2 text-center">Commercial Advertising Project</h1>
        <div className="text-base text-center text-white font-light mb-8">Production Assistant</div>
        {/* KFC Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">KFC China Home Delivery Initiative (2020)</h2>
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden mb-8">
            <Image
              src={currentKfcImage}
              alt="KFC Main Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kfcImages.map((src, idx) => (
              <div
                key={src}
                className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setCurrentKfcImage(src)}
              >
                <Image
                  src={src}
                  alt={`KFC ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Yili Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Yili QQ Star × United Nations × Chinese Embassy in Kenya Joint Initiative: Africa Wildlife Conservation Public Benefit Campaign (2020)</h2>
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden mb-8">
            <Image
              src={currentYiliImage}
              alt="Yili Main Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {yiliImages.map((src, idx) => (
              <div
                key={src}
                className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setCurrentYiliImage(src)}
              >
                <Image
                  src={src}
                  alt={`Yili ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lottery Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">China Sports Lottery Promotional Project (2020)</h2>
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden mb-8">
            <Image
              src={currentLotteryImage}
              alt="Lottery Main Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lotteryImages.map((src, idx) => (
              <div
                key={src}
                className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setCurrentLotteryImage(src)}
              >
                <Image
                  src={src}
                  alt={`Lottery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
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