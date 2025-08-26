
import React, { useState, useEffect, useCallback } from 'react';
import type { Company } from '../types';
import { XMarkIcon } from './Icons';

interface StoryViewerProps {
  company: Company;
  onClose: () => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({ company, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const stories = company.stories;

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % stories.length);
  }, [stories.length]);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + stories.length) % stories.length);
  };
  
  useEffect(() => {
    setProgress(0);
    const storyDuration = stories[currentIndex]?.duration ?? 5; // 5 seconds default
    
    let startTime: number;
    const frame = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const newProgress = Math.min(100, (elapsed / (storyDuration * 1000)) * 100);
        setProgress(newProgress);

        if(newProgress < 100) {
            animationFrameId = requestAnimationFrame(frame);
        } else {
            goToNext();
        }
    };
    
    let animationFrameId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animationFrameId);

  }, [currentIndex, stories, goToNext]);


  if (!stories || stories.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in" onMouseDown={onClose}>
      <div className="relative w-full max-w-md h-[80vh] bg-slate-900 rounded-xl shadow-2xl flex flex-col overflow-hidden" onMouseDown={e => e.stopPropagation()}>
        {/* Progress Bars */}
        <div className="absolute top-2 left-2 right-2 flex space-x-1 p-2">
            {stories.map((_, index) => (
                <div key={index} className="flex-1 h-1 bg-white/30 rounded-full">
                    <div 
                        className="h-full bg-white rounded-full"
                        style={{ width: `${index === currentIndex ? progress : (index < currentIndex ? 100 : 0)}%` }}
                    />
                </div>
            ))}
        </div>
        
        {/* Header */}
        <div className="absolute top-6 left-4 right-4 flex items-center justify-between p-2">
            <div className="flex items-center space-x-2">
                <img src={company.logo} alt={company.name} className="w-8 h-8 rounded-full"/>
                <span className="text-white text-sm font-bold">{company.name}</span>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
                <XMarkIcon className="w-6 h-6" />
            </button>
        </div>

        {/* Story Content */}
        <div className="flex-1 flex items-center justify-center mt-12">
           <img src={stories[currentIndex].url} alt={`Story ${currentIndex + 1}`} className="max-h-full max-w-full object-contain" />
        </div>
        
        {/* Navigation */}
        <div className="absolute inset-0 flex justify-between">
            <div className="w-1/3 h-full cursor-pointer" onClick={goToPrev}></div>
            <div className="w-1/3 h-full cursor-pointer" onClick={goToNext}></div>
        </div>

      </div>
      {/* Fix: Removed unsupported `jsx` prop from the style tag. This is not a Next.js project. */}
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};
