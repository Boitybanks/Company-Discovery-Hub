import React, { useState } from 'react';
import { ForumPost, ForumChannel } from '../types';
import { IconWrapper, ChatBubbleLeftRightIcon, ArrowUpIcon, ChatBubbleOvalLeftIcon } from './Icons';

const mockForumPosts: ForumPost[] = [
    {
        id: 1,
        channel: 'Career Crossroads',
        title: 'Offer from stable corporate vs. risky high-growth startup?',
        content: 'I\'m a mid-level software engineer with 5 YOE. I have two offers on the table. One is from a large, stable bank with great benefits and a clear career ladder. The other is from a Series B startup with amazing tech, a huge potential equity upside, but obviously much more risk. The pay is comparable. What would you do?',
        author: { name: 'DevInDilemma', anonymous: true },
        timestamp: '3 hours ago',
        upvotes: 128,
        replies: [],
        isTrending: true,
    },
    {
        id: 2,
        channel: 'Interview Intel',
        title: 'Deep Dive: Final Round PM Interview at Discovery',
        content: 'Just finished my final round for a Product Manager role. The case study was intense: "Propose a new feature for the Vitality app to improve user engagement in the 18-25 demographic." Be prepared to talk about monetization, KPIs, and go-to-market strategy. The panel was sharp but fair.',
        author: { name: 'Sarah J.', anonymous: false, avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
        timestamp: '1 day ago',
        upvotes: 95,
        replies: [],
    },
    {
        id: 3,
        channel: 'Side Hustle Showcase',
        title: 'Showcase: I built an AI resume tailor for specific job descriptions',
        content: 'Hey everyone, for the past 3 months I\'ve been working on a tool that takes your resume and a job description, and suggests specific keywords and bullet points to add. It uses the Gemini API. Would love to get some beta testers and feedback!',
        author: { name: 'CodePreneur', anonymous: false, avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
        timestamp: '5 days ago',
        upvotes: 210,
        replies: [],
        isTrending: true,
    },
     {
        id: 4,
        channel: 'Industry Deep Dives',
        title: 'Impact of Green Hydrogen on the Mining Sector in SA',
        content: 'With Sasol and Anglo American both investing heavily in green hydrogen, what are the real-world implications for engineering and logistics careers in the mining sector over the next 10 years? Are universities adapting their curriculum fast enough?',
        author: { name: 'MiningMaven', anonymous: false, avatarUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop' },
        timestamp: '2 days ago',
        upvotes: 72,
        replies: [],
    }
];

const channels: ForumChannel[] = ['Career Crossroads', 'Interview Intel', 'Side Hustle Showcase', 'Industry Deep Dives'];

const PostCard: React.FC<{ post: ForumPost; onUpvote: (id: number) => void; isUpvoted: boolean }> = ({ post, onUpvote, isUpvoted }) => (
    <div className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-700/50 flex flex-col h-full hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group">
        <div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getChannelColor(post.channel)}`}>{post.channel}</span>
            <h3 className="text-xl font-bold text-white mt-3 mb-2 group-hover:text-purple-300 transition-colors">{post.title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">{post.content}</p>
        </div>
        
        <div className="flex-grow" />

        <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
                {post.author.anonymous ? (
                     <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                     </div>
                ) : (
                    <img src={post.author.avatarUrl} alt={post.author.name} className="w-6 h-6 rounded-full object-cover" />
                )}
                <span className="font-semibold text-slate-300">{post.author.anonymous ? 'Anonymous' : post.author.name}</span>
            </div>

            <div className="flex items-center space-x-4 text-slate-400">
                <button
                    onClick={() => onUpvote(post.id)}
                    className={`flex items-center space-x-1.5 font-bold rounded-md p-1 -m-1 transition-colors duration-200 ${isUpvoted ? 'text-purple-400' : 'text-slate-400 hover:text-white'}`}
                    aria-label={`Upvote post titled ${post.title}`}
                >
                    <ArrowUpIcon className={`w-4 h-4 transition-transform duration-200 ${isUpvoted ? 'scale-125' : ''}`} />
                    <span>{post.upvotes}</span>
                </button>
                <div className="flex items-center space-x-1.5">
                    <ChatBubbleOvalLeftIcon className="w-4 h-4"/>
                    <span>{post.replies.length}</span>
                </div>
            </div>
        </div>
    </div>
);

const getChannelColor = (channel: ForumChannel) => {
    switch (channel) {
        case 'Career Crossroads': return 'bg-purple-900/50 text-purple-300';
        case 'Interview Intel': return 'bg-blue-900/50 text-blue-300';
        case 'Side Hustle Showcase': return 'bg-amber-900/50 text-amber-300';
        case 'Industry Deep Dives': return 'bg-green-900/50 text-green-300';
        default: return 'bg-gray-700 text-gray-300';
    }
}

export const ForumHub: React.FC = () => {
    const [activeChannel, setActiveChannel] = useState<ForumChannel | 'Trending'>('Trending');
    const [posts, setPosts] = useState<ForumPost[]>(mockForumPosts);
    const [upvotedPostIds, setUpvotedPostIds] = useState<Set<number>>(new Set());

    const handleUpvote = (postId: number) => {
        const newUpvotedIds = new Set(upvotedPostIds);
        const postIndex = posts.findIndex(p => p.id === postId);
        if (postIndex === -1) return;

        const updatedPosts = [...posts];
        const postToUpdate = { ...updatedPosts[postIndex] };

        if (newUpvotedIds.has(postId)) {
            // Already upvoted, so un-upvote
            newUpvotedIds.delete(postId);
            postToUpdate.upvotes -= 1;
        } else {
            // Not upvoted, so upvote
            newUpvotedIds.add(postId);
            postToUpdate.upvotes += 1;
        }

        updatedPosts[postIndex] = postToUpdate;
        setPosts(updatedPosts);
        setUpvotedPostIds(newUpvotedIds);
    };

    const filteredPosts = posts.filter(post => {
        if (activeChannel === 'Trending') return post.isTrending;
        return post.channel === activeChannel;
    });

    return (
        <section id="forum-hub">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <IconWrapper icon={<ChatBubbleLeftRightIcon className="w-6 h-6 text-orange-400" />} className="bg-orange-900/40" />
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        The Professional Hub
                    </h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                   A community-driven space for advice, insights, and collaboration. Ask questions, share knowledge, and grow together.
                </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
                 <div className="flex flex-wrap justify-center gap-2 mb-8">
                     <button
                        onClick={() => setActiveChannel('Trending')}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition ${activeChannel === 'Trending' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                    >
                        🔥 Trending
                    </button>
                    {channels.map(channel => (
                        <button
                            key={channel}
                            onClick={() => setActiveChannel(channel)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition ${activeChannel === channel ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                        >
                            {channel}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map(post => <PostCard key={post.id} post={post} onUpvote={handleUpvote} isUpvoted={upvotedPostIds.has(post.id)} />)}
                </div>
            </div>
        </section>
    );
};