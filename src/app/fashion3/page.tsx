import React from "react";

export default function Fashion3() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-8 px-2 md:px-12 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img src="/Personal_webpage/BACKGROUND/3FASHION.jpg" alt="Fashion BG" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="w-full max-w-7xl bg-black/70 rounded-xl shadow-2xl p-4 md:p-16 flex flex-col md:flex-row gap-14 md:gap-24 items-start">
        {/* Left: Images */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/Personal_webpage/FASHION/25SS London Fashion Week.jpg"
            alt="London Fashion Week Backstage"
            className="w-full max-w-2xl rounded-lg shadow-2xl mb-6 object-cover"
            style={{height: '420px'}}
          />
          <div className="flex gap-4 w-full justify-center">
            <img src="/Fashion -London fashion week/1.jpg" alt="london1" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion -London fashion week/2.jpg" alt="london2" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion -London fashion week/3.jpg" alt="london3" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion -London fashion week/4.jpg" alt="london4" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion -London fashion week/5.jpg" alt="london5" className="rounded-md object-cover w-40 h-28" />
          </div>
          <div className="text-sm text-gray-300 mt-2">5-6张即可</div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-[1.2] flex flex-col justify-start max-w-2xl md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">25SS London Fashion Week Runway</h1>
          <div className="text-lg mb-2">Helen Anthony (2024)</div>
          <div className="text-2xl font-semibold mb-6">Styling Intern</div>
          <p className="mb-8 text-lg md:text-xl leading-relaxed">
            During the 2025 SS London Fashion Week, I was selected to join the backstage visual styling team of emerging luxury brand <b>Helen Anthony</b> for nearly one week.
          </p>
          <div className="space-y-8 text-lg md:text-xl">
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