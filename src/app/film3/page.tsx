import Link from "next/link";

export default function Film3() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-light tracking-widest mb-8 text-center">Music Videos</h1>
        <div className="flex justify-center mb-8">
          <img
            src="/Personal_webpage/FILM/MV3.jpg"
            alt="Music Videos Cover"
            className="w-full max-w-xl rounded-lg shadow-2xl object-cover"
          />
        </div>
        <div className="mb-12">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="/Personal_webpage/FILM/MV3.jpg"
          >
            <source src="/Personal_webpage/FILM/film 3 mv.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            In my graduation project, inspired by Chen Li’s “My Dear Art,” I created a ten‑minute music video dedicated to my four years of art study. This two‑minute fantasy interlude, set to my rearranged accompaniment, intertwines visuals with my written narration. The film charts the journey from the passionate obsession upon first encountering beauty, to the realization that beauty, like the wind, cannot be held, and finally to the liberation of burning oneself for one’s passion, achieving spiritual transcendence. This excerpt showcases my command of audiovisual rhythm and atmosphere, as well as my overall coordination skills as both director and editor in thematic interpretation and emotional progression. The film was ultimately awarded Outstanding Graduation Project and selected for the UN·earth Youth Film Exhibition.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src="/Personal_webpage/FILM/MV3-1.jpg"
            alt="Music Videos Still"
            className="w-full max-w-xl rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
} 