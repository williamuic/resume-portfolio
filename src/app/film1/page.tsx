import Link from "next/link";

export default function Film1() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Navigation Bar at Top */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-4 mb-8 gap-4">
        <Link href="/film5" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/" className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded transition">Home</Link>
        <Link href="/film2" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold tracking-widest mb-2 text-center">Cultural Heritage Documentary</h1>
        <div className="text-lg text-center text-white font-light mb-8">Nanjing Clay Figure - Clay Whisper（2020）</div>
        <div className="mb-12">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="/Film-图片/Clay Whispers 1.jpg"
          >
            <source src="https://www.dropbox.com/scl/fi/4lmgatiukmmgvip1i60ye/Nanjing-Clay-Figure-Clay-Whisper-2020.mp4?rlkey=k0gvprtgw316p6c6yuphlu4ih&st=wye87viq&raw=1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            In 2020, during my junior‑year documentary course, I initiated and directed a film spotlighting the “Nanjing Clay Figurines” intangible heritage: beginning with online and community research to pinpoint clay sculpture as a local cultural gem; overcoming pandemic and resource constraints by liaising twice with Master Zhu Jiandong—an inheritor based at Chongzheng Academy(Nanjing) and advertising entrepreneur; leading multiple team brainstorms to craft interview guides and narrative structure; and directing on‑site shooting, sound recording, and interviews.
          </p>
        </div>
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/film5" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/film2" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
} 