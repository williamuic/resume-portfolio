import Link from "next/link";
import Image from "next/image";

export default function Film3() {
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
        <h1 className="text-3xl font-bold tracking-widest mb-2 text-center">Music Videos</h1>
        <div className="text-lg text-center text-white font-light mb-8">My Dear Art（2022）</div>
        
        
        <div className="mb-12">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="/Film-图片/MV3.jpg"
          >
            <source src="https://dl.dropboxusercontent.com/scl/fi/dseo9d8u46l8i6v0m7qgk/My-Dear-Art-Clip-2022.mov?rlkey=x19jbvips43smxpgabgpu9jyk&raw=1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            In my graduation project, inspired by Chen Li’s “My Dear Art,” I created a ten‑minute music video dedicated to my four years of art study. This two‑minute fantasy interlude, set to my rearranged accompaniment, intertwines visuals with my written narration. The film charts the journey from the passionate obsession upon first encountering beauty, to the realization that beauty, like the wind, cannot be held, and finally to the liberation of burning oneself for one’s passion, achieving spiritual transcendence. This excerpt showcases my command of audiovisual rhythm and atmosphere, as well as my overall coordination skills as both director and editor in thematic interpretation and emotional progression. The film was ultimately awarded Outstanding Graduation Project and selected for the UN·earth Youth Film Exhibition.
          </p>
        </div>
        <div className="flex justify-start mt-8">
          <Image
            src="/Film-图片/MV3-1新.jpg"
            alt="Music Videos Still"
            width={256}
            height={256}
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