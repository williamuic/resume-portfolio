import React from "react";

export default function Fashion3() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-8 px-2 md:px-12" style={{background: 'rgba(0,0,0,0.85)'}}>
      <div className="w-full max-w-6xl bg-black/80 rounded-xl shadow-xl p-6 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Left: Images */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/Personal_webpage/FASHION/25SS London Fashion Week.jpg"
            alt="London Fashion Week Backstage"
            className="w-full max-w-md rounded-lg shadow-lg mb-4 object-cover"
            style={{height: '340px'}}
          />
          <div className="flex gap-3 w-full justify-center">
            <img src="https://placehold.co/120x80" alt="placeholder1" className="rounded-md object-cover" />
            <img src="https://placehold.co/120x80" alt="placeholder2" className="rounded-md object-cover" />
            <img src="https://placehold.co/120x80" alt="placeholder3" className="rounded-md object-cover" />
            <img src="https://placehold.co/120x80" alt="placeholder4" className="rounded-md object-cover" />
          </div>
          <div className="text-sm text-gray-300 mt-2">5-6张即可</div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-[1.2] flex flex-col justify-start">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">25SS London Fashion Week Runway</h1>
          <div className="text-lg mb-2">Helen Anthony (2024)</div>
          <div className="text-xl font-semibold mb-4">Styling Intern</div>
          <p className="mb-6 text-base md:text-lg leading-relaxed">
            During the 2025 SS London Fashion Week, I was selected to join the backstage visual styling team of emerging luxury brand <b>Helen Anthony</b> for nearly one week.
          </p>
          <div className="space-y-6 text-base md:text-lg">
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Styling & Brand Collaboration</span><br/>
              Curated sunglasses, footwear and bags in line with the designer’s vision; liaised with local London brands to secure rental pieces and ensure all accessories arrived on time.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Workflow Optimization</span><br/>
              Identified that model‑direction signage was insufficiently visible, swiftly designed and deployed updated signs before casting, significantly improving back‑of‑house flow.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Cross‑Cultural Communication & Photography</span><br/>
              Worked entirely in English to communicate smoothly with international models and colleagues; captured styling, fittings, runway preparations, and behind‑the‑scenes footage to enrich the brand’s visual assets.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Results & Impact</span><br/>
              The designer adopted my accessory selections and signage improvements on the spot, resulting in a smoother show day with fewer model delays or positioning errors. My photos and videos were used in Helen Anthony’s social media and subsequent promotions, and I established lasting connections with international models and styling teams—expanding the brand’s talent network and collaboration opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 