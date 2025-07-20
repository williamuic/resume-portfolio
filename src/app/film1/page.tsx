import Link from "next/link";

export default function Film1() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="fixed top-8 left-8 z-20 text-white text-lg font-light tracking-widest hover:underline">
        Home
      </Link>
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-light tracking-widest mb-8 text-center">CLAY WHISPERS</h1>
        <div className="flex justify-center mb-8">
          <img
            src="/Personal_webpage/FILM/film 1/Clay Whispers 1-封面.jpg"
            alt="Clay Whispers Cover"
            className="w-full max-w-xl rounded-lg shadow-2xl object-cover"
          />
        </div>
        <div className="mb-12">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="/Personal_webpage/FILM/film 1/Clay Whispers 1-封面.jpg"
          >
            <source src="https://www.dropbox.com/scl/fi/4lmgatiukmmgvip1i60ye/Nanjing-Clay-Figure-Clay-Whisper-2020.mp4?rlkey=k0gvprtgw316p6c6yuphlu4ih&st=wye87viq&raw=1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl font-light tracking-widest">DESCRIPTION</h2>
          <p className="text-lg leading-relaxed">
            In 2020, during my junior‑year documentary course, I initiated and directed a film spotlighting the “Nanjing Clay Figurines” intangible heritage: beginning with online and community research to pinpoint clay sculpture as a local cultural gem; overcoming pandemic and resource constraints by liaising twice with Master Zhu Jiandong—an inheritor based at Chongzheng Academy(Nanjing) and advertising entrepreneur; leading multiple team brainstorms to craft interview guides and narrative structure; and directing on‑site shooting, sound recording, and interviews. The finished documentary won First Prize at the National Literary & Artistic Creation Festival and was archived by the Nanjing Intangible Heritage Institution, vividly portraying the artisans' craftsmanship, cultural warmth, and the challenges of passing heritage to younger generations.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li><b>Topic Selection & Feasibility Assessment:</b> Conducted dual‑channel research (online and community) to confirm “Nanjing Clay Figurines” as the documentary subject.</li>
            <li><b>Resource Integration & Coordination:</b> Secured filming permissions and in‑depth interviews with two heritage masters and institutions.</li>
            <li><b>Team Leadership & Narrative Development:</b> Facilitated brainstorming sessions, defined team roles, and guided on‑site shooting and editing direction.</li>
            <li><b>Outcomes & Impact:</b> Awarded First Prize nationally and archived by Chongzheng Academy, elevating the project' s visibility and cultural significance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 