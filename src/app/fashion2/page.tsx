import React from "react";

export default function Fashion2() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-8 px-2 md:px-12" style={{background: 'rgba(0,0,0,0.85)'}}>
      <div className="w-full max-w-6xl bg-black/80 rounded-xl shadow-xl p-6 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Left: Images */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/Personal_webpage/FASHION/23SS Shanghai Fashion Week Showroom.png"
            alt="Shanghai Fashion Week Showroom"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">23SS Shanghai Fashion Week –Trade Show</h1>
          <div className="text-lg mb-2">Blooming Showroom (2022)</div>
          <div className="text-xl font-semibold mb-4">Assistant to Manager (Brand Promotion & Buyer Relations)</div>
          <p className="mb-6 text-base md:text-lg leading-relaxed">
            In the SS 2023 Shanghai Fashion Week, I served as a core assistant to the Blooming Showroom Manager for two weeks.
          </p>
          <div className="space-y-6 text-base md:text-lg">
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Independent Buyer Hosting</span><br/>
              Selected for the core team based on demonstrated emotional intelligence and communication skills; mastered the styles and order details of 28+ designer brands and guided buyers through showroom tours, fittings, and order negotiations.
            </div>
            <div>
              <span className="inline-block w-4 text-pink-200 align-top">●</span>
              <span className="font-bold">Precise Matching & Atmosphere Creation</span><br/>
              Quickly assessed buyers' needs to recommend brands that fit their market positioning and aesthetic; used engaging dialogue and thoughtful space presentation to enhance buyer experience and brand favorability.
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