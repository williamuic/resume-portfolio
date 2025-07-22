import Link from "next/link";

export default function Film3() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold tracking-widest mb-2 text-center">Music Videos</h1>
        <div className="text-lg text-center text-white font-light mb-8">My Dear Art（2022）</div>
        <div className="mb-12">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="/Film-图片/MV3.jpg"
          >
            <source src="" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center text-red-500">The video for "My Dear Art" is currently unavailable. Please provide a new link.</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            In my graduation project, inspired by Chen Li’s “My Dear Art,” I created a ten‑minute music video dedicated to my four years of art study.
          </p>
        </div>
        <div className="flex justify-start mt-8">
          <img
            src="/Film-图片/MV3-1.jpg"
            alt="Music Videos Still"
            className="w-64 max-w-full rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/film2" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/film4" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
} 