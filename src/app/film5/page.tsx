import Link from "next/link";

// Generate all image paths from 5-1-1.jpg to 5-3-4.jpg
const images: string[] = [];
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 4; j++) {
    images.push(`/Film-图片/5-${i}-${j}.jpg`);
  }
}

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
        <div className="flex flex-col gap-8 items-center">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Commercial Assistant ${idx + 1}`}
              className="w-full max-w-xl rounded-lg shadow-lg object-contain bg-black"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 