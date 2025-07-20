import Link from "next/link";

export default function Film4() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-light tracking-widest mb-8 text-center">Brand Films x Xinhua New Agency</h1>
        <div className="flex justify-center mb-8">
          <img
            src="/Film-图片/Xinhua 4.png"
            alt="Brand Films x Xinhua New Agency Cover"
            className="w-full max-w-xl rounded-lg shadow-2xl object-cover"
          />
        </div>
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
            During my internship at the Jiangsu Center of Xinhua News Agency&apos;s News Information Center, I leveraged my video production expertise to create two high‑quality video ringback tones for Hengshun Vinegar. One of them, titled &quot;Hengshun Promotional Film: Industrial Heritage – The &apos;Living Fossil&apos; of Vinegar Brewing,&quot; highlights the brand&apos;s century‑old history and the cultural essence of its brewing craft, and was provided to Hengshun Vinegar for new‑media brand promotion.
          </p>
        </div>
      </div>
    </div>
  );
} 