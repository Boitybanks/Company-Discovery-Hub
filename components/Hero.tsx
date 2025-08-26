import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        src="https://assets.mixkit.co/videos/preview/mixkit-a-meeting-of-a-successful-team-4040-large.mp4"
        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Where Ambition Meets Opportunity
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
          Discover a new era of professional networking. Connect with visionary companies and build a career that truly inspires you.
        </p>
        <div className="mt-12">
           <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg">
              Get Started
           </button>
           <p className="mt-3 text-sm text-gray-400">Join the future of professional networking</p>
        </div>
      </div>
    </div>
  );
};