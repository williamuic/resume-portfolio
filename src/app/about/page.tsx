import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        HOME
      </Link>
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none" style={{background: "url('/Personal_webpage/BACKGROUND/2ABOUT.jpg') center/cover no-repeat"}} />
      <main className="relative z-10 max-w-3xl w-full mx-auto bg-black/70 rounded-xl p-8 shadow-2xl backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-center mb-2" style={{letterSpacing: '0.1em'}}>– Eri Zhang <span className="font-sans text-pink-200 text-2xl align-top">(EH‑ree)</span></h1>
        <div className="h-1 w-16 bg-pink-300 mx-auto my-6 rounded-full" />
        <section className="text-lg md:text-xl font-light leading-relaxed space-y-6 font-sans">
          <p>I&apos;m a creative professional working at the intersection of fashion, film and off-line events.</p>
          <p>With a dual foundation in cinematic storytelling and global brand management, I bridge creative vision and commercial impact for luxury brands. I hold a BA in Film Directing (minor in Event Planning) from Communication University of China, Nanjing, and an MA in Luxury Brand Management (with Merit) from Goldsmiths, University of London. By fusing narrative-driven film techniques with data‑informed, omnichannel marketing strategies, I help brands forge emotional connections and achieve sustainable growth in the digital age.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Award‑Winning Film Director</b><br/>Wrote and directed multiple documentaries and branded shorts, winning three national film competition awards for my ability to translate brand values into compelling visual stories.</li>
            <li><b>High‑Net‑Worth Event Design</b><br/>Conceptualized and delivered 30+ large‑scale events and industry showcases—including a bespoke production at Nanjing Poly Theater and backstage activations at London Fashion Week—managing end‑to‑end guest experiences that resonate emotionally.</li>
            <li><b>Front‑Line Luxury Retail Experience</b><br/>Served as a core promotions assistant at the Loro Piana Pop‑up in Shenzhen and the Blooming Showroom in Shanghai, honing top-tier service etiquette and multitasking skills to drive both sales and brand advocacy.</li>
            <li><b>Fashion Insight & Integrated Model</b><br/>My MA thesis, &quot;The Social Media Word‑of‑Mouth Effect of Luxury Pop‑Ups,” revealed that over 60% of purchase decisions are driven by social buzz. I validated a &quot;Online Hype + Offline Experience + UGC Engagement” framework to activate and engage Gen Z luxury consumers.</li>
          </ul>
          <p className="text-pink-200 font-semibold">Expertise: Brand Communication · Creative Campaigns · Film Production · Experiential Marketing</p>
          <p>I&apos;m eager to join a luxury or fashion brand team in film production, brand marketing, creative planning, or communications management—to craft and share the next great brand story.</p>
        </section>
      </main>
    </div>
  );
} 
