import React from "react";

export default function Fashion2() {
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
            src="/Personal_webpage/FASHION/23SS Shanghai Fashion Week Showroom.png"
            alt="Shanghai Fashion Week Showroom"
            className="w-full max-w-2xl rounded-lg shadow-2xl mb-6 object-cover"
            style={{height: '420px'}}
          />
          <div className="flex gap-4 w-full justify-center">
            <img src="/Fashion- showroom/1.png" alt="showroom1" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion- showroom/2.png" alt="showroom2" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion- showroom/3.png" alt="showroom3" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion- showroom/4.png" alt="showroom4" className="rounded-md object-cover w-40 h-28" />
            <img src="/Fashion- showroom/5.jpg" alt="showroom5" className="rounded-md object-cover w-40 h-28" />
          </div>
          <div className="text-sm text-gray-300 mt-2">5-6张即可</div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-[1.2] flex flex-col justify-start max-w-2xl md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">23SS Shanghai Fashion Week –Trade Show</h1>
          <div className="text-lg mb-2">Blooming Showroom (2022)</div>
          <div className="text-2xl font-semibold mb-6">Assistant to Manager (Brand Promotion & Buyer Relations)</div>
          <p className="mb-8 text-lg md:text-xl leading-relaxed">
            In the SS 2023 Shanghai Fashion Week, I served as a core assistant to the Blooming Showroom Manager for two weeks.
          </p>
          <div className="space-y-8 text-lg md:text-xl">
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Independent Buyer Hosting</span><br/>
              Selected for the core team based on demonstrated emotional intelligence and communication skills; mastered the styles and order details of 28+ designer brands and guided buyers through showroom tours, fittings, and order negotiations.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Precise Matching & Atmosphere Creation</span><br/>
              Quickly assessed buyers&apos; needs to recommend brands that fit their market positioning and aesthetic; used engaging dialogue and thoughtful space presentation to enhance buyer experience and brand favorability.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Efficient Process Coordination</span><br/>
              Coordinated front‑desk buyer reception and designer brand presentations; supported the manager in summarizing order status and buyer feedback to ensure smooth ordering and communication.
            </div>
            <div className="font-bold mt-6">Results</div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              Secured multiple orders and enhanced buyers’ comfort, increasing positive sentiment toward the showroom.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              Expanded exposure for designer brands, leading to additional buyer follow‑ups and collaboration invitations.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              Established long‑term trust with key buyers and brand teams, building a pipeline of high‑quality contacts for future projects.
            </div>
            <div className="font-bold mt-6">Key Strengths</div>
            <div>
              <span className="font-bold">Rapid Trust Building</span><br/>
              Leveraged deep brand insights and emotional guidance to quickly earn buyers’ trust and close orders, converting social adaptability into measurable commercial outcomes.
            </div>
            <div>
              <span className="font-bold">Professional Communication Under Pressure</span><br/>
              Maintained clear, organized brand presentations and negotiation flow in a high‑pressure, information‑dense environment, adeptly handling multiple tasks to ensure each buyer received a premium experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 