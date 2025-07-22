import Link from "next/link";

const kfcImages = [
  "/Film-图片/5-1-1.jpg",
  "/Film-图片/5-1-2.jpg",
  "/Film-图片/5-1-3.jpg",
];
const yiliImages = [
  "/Film-图片/5-2-1.jpg",
  "/Film-图片/5-2-2.jpg",
  "/Film-图片/5-2-3.jpg",
  "/Film-图片/5-2-4.jpg",
  "/Film-图片/5-3-2.png",
];
const lotteryImages = [
  "/Film-图片/5-3-3.jpg",
  "/Film-图片/5-3-4.jpg",
];

export default function Film5() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold tracking-widest mb-8 text-center">Production Assistant - Commercial Advertising Project</h1>
        <div className="flex justify-center mb-8">
          <img
            src="/Film-图片/Assistant5.jpg"
            alt="Commercial Production Assistant Cover"
            className="w-full max-w-xl rounded-lg shadow-2xl object-cover"
          />
        </div>
        {/* KFC Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">KFC China Home Delivery Initiative (2020)</h2>
          <div className="flex flex-col gap-6 items-center">
            {kfcImages.slice(1).map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`KFC ${idx + 1}`}
                className="w-full max-w-xl rounded-lg shadow-lg object-contain bg-black"
              />
            ))}
          </div>
        </div>
        {/* Yili Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Yili QQ Star × United Nations × Chinese Embassy in Kenya Joint Initiative: Africa Wildlife Conservation Public Benefit Campaign (2020)</h2>
          <div className="flex flex-col gap-6 items-center">
            {yiliImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Yili ${idx + 1}`}
                className="w-full max-w-xl rounded-lg shadow-lg object-contain bg-black"
              />
            ))}
          </div>
        </div>
        {/* Lottery Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">China Sports Lottery Promotional Project (2020)</h2>
          <div className="flex flex-col gap-6 items-center">
            {lotteryImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Lottery ${idx + 1}`}
                className="w-full max-w-xl rounded-lg shadow-lg object-contain bg-black"
              />
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