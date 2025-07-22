import Link from "next/link";

export default function Film2() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold tracking-widest mb-2 text-center">Brand Ad Films</h1>
        <div className="text-lg text-center text-white font-light mb-8">Blispring– Instantly fresh! Ready for flavor emergencies（2021）</div>
        <div className="mb-12">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="/Film-图片/Ad 2.jpg"
          >
            <source src="https://www.dropbox.com/scl/fi/nag3lqbqqf43fgs2miukp/Blispring-Instantly-fresh-Ready-for-flavor-emergencies-2021.mp4?rlkey=4how96wfy29c3vj00bgknaarv&st=no2ew4cs&raw=1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            In the 2021 National College Students Advertising Festival, I served as director, leading a four‑person team to create a Blispring toothpaste commercial: from story ideation and scriptwriting to on‑set shooting and post‑production oversight, we prioritized “idea first” to drive cost efficiency—delivering a high‑impact narrative with precise editing and drum‑beat‑synchronized pacing within a minimal‑budget, single‑location setup.
          </p>
        </div>
        <div className="flex justify-start mt-8">
          <Image
            src="/Film-图片/Ad2-1.png"
            alt="Brand Ad Films Still"
            width={256}
            height={256}
            className="w-64 max-w-full rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>
      {/* Navigation Bar at Bottom */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto mt-8">
        <Link href="/film1" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Previous</Link>
        <Link href="/film3" className="text-white bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded transition">Next</Link>
      </div>
    </div>
  );
} 