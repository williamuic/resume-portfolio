import Link from "next/link";

export default function Film1() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-light tracking-widest mb-8 text-center">CLAY WHISPERS</h1>
        
        <div className="mb-12">
          <video 
            controls 
            className="w-full rounded-lg shadow-lg"
            poster="/Personal_webpage/FILM/film 1/Clay Whispers 1-封面.jpg"
          >
            <source src="/Personal_webpage/FILM/film 1/film 1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            [Add your film description here]
          </p>
          
          <h2 className="text-xl font-light tracking-widest">CREDITS</h2>
          <p className="text-lg leading-relaxed">
            [Add credits here]
          </p>
          
          <h2 className="text-xl font-light tracking-widest">DETAILS</h2>
          <p className="text-lg leading-relaxed">
            [Add additional details here]
          </p>
        </div>
      </div>
    </div>
  );
} 