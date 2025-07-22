import Link from "next/link";
import Image from "next/image";

export default function Film4() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold tracking-widest mb-2 text-center">Hengshun Vinegar × Xinhua News Agency</h1>
        <div className="text-lg text-center text-white font-light mb-8">Video Ringback Tone Campaign Film (2020)</div>
        <div className="mb-12">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="/Film-图片/Xinhua 4.png"
          >
            <source src="https://www.dropbox.com/scl/fi/7nltq2wm9cxiwcuv0c6ld/Hengshun-Film-Industrial-Heritage-The-Living-Fossil-of-Vinegar-Brewing-2020.mp4?rlkey=hf3zbe60z6uw331yom4v6ntc1&st=rnxnbay6&raw=1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            During my internship at the Jiangsu Center of Xinhua News Agency&apos;s News Information Center, I leveraged my video production expertise to create two high‑quality video ringback tones for Hengshun Vinegar.
          </p>
        </div>
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="fixed bottom-8 left-8 right-8 flex justify-between items-center w-full max-w-2xl mx-auto">
        <Link href="/film3" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/film5" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
}