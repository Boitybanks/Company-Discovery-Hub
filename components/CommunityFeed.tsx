import React from 'react';
import type { Post } from '../types';
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, ShareIcon } from './Icons';

const mockPosts: Post[] = [
  { id: 1, author: 'Sarah Day', authorAvatar: 'https://picsum.photos/seed/u1/50', content: 'Just landed my dream job at Innovate Inc.! So excited to start this new chapter. A huge thank you to this community for the support and resources! 🚀', timestamp: '2h ago', likes: 128, comments: 15 },
  { id: 2, author: 'John Smith', authorAvatar: 'https://picsum.photos/seed/u2/50', content: 'What are your favorite tools for remote collaboration? Looking for recommendations for my team at GreenScape.', timestamp: '5h ago', likes: 45, comments: 22 },
  { id: 3, author: 'Maria Garcia', authorAvatar: 'https://picsum.photos/seed/u3/50', content: 'Career tip of the day: Never underestimate the power of a well-crafted cover letter. It\'s your chance to tell your story beyond the resume. #careeradvice #jobsearch', timestamp: '1d ago', likes: 256, comments: 34 },
];

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
    <div className="bg-white/5 backdrop-blur-md rounded-lg p-5 shadow-lg border border-white/10">
        <div className="flex items-center mb-4">
            <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold text-white">{post.author}</p>
                <p className="text-xs text-slate-400">{post.timestamp}</p>
            </div>
        </div>
        <p className="text-slate-200 mb-4">{post.content}</p>
        <div className="flex justify-between items-center pt-3 border-t border-white/10">
            <button className="flex items-center space-x-2 text-slate-400 rounded-full px-3 py-1.5 hover:bg-red-500/10 hover:text-red-500 transition-all duration-200">
                <HeartIcon className="w-5 h-5" />
                <span className="text-sm font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-slate-400 rounded-full px-3 py-1.5 hover:bg-sky-500/10 hover:text-sky-400 transition-all duration-200">
                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                <span className="text-sm font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-slate-400 rounded-full px-3 py-1.5 hover:bg-green-500/10 hover:text-green-400 transition-all duration-200">
                <ShareIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Share</span>
            </button>
        </div>
    </div>
);

export const CommunityFeed: React.FC = () => {
  return (
    <section id="community" className="py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Community Feed</h2>
      <p className="text-slate-300 text-center mb-8">Connect, share, and learn with your peers.</p>
      
      <div className="max-w-2xl mx-auto space-y-6">
        {mockPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};