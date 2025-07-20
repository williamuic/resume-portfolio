import Link from "next/link";

const imageFiles = [
  "5-1-1.jpg",
  "5-1-2.jpg",
  "5-1-3.jpg",
  "5-2-1.jpg",
  "5-2-2.jpg",
  "5-2-3.jpg",
  "5-2-4.jpg",
  "5-3-2.png",
  "5-3-3.jpg",
  "5-3-4.jpg",
];

export default function Film5() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-light tracking-widest mb-8 text-center">Commercial Production Assistant</h1>
        <div className="flex justify-center mb-8">
          <img
            src="/Film-图片/Assistant5.jpg"
            alt="Commercial Production Assistant Cover"
            className="w-full max-w-xl rounded-lg shadow-2xl object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {imageFiles.map((file, idx) => (
            <div key={file} className="bg-black rounded-xl shadow-lg flex items-center justify-center p-2">
              <img
                src={`/Film-图片/${file}`}
                alt={`Commercial Assistant ${idx + 1}`}
                className="w-full h-auto max-h-[420px] rounded-lg object-contain bg-black"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 