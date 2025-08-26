import React from 'react';
import type { LifestyleItem } from '../types';

const mockLifestyleItems: LifestyleItem[] = [
  { id: 1, category: 'Coffee Spot', name: 'The Daily Grind', image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop', description: 'Perfect for remote work and meetings.', details: 'Free WiFi, Power Outlets, 25 Members' },
  { id: 2, category: 'Sports Group', name: 'Tech Industry Soccer League', image: 'https://picsum.photos/seed/sg1/400/300', description: 'Join fellow tech professionals on the field.', details: 'Weekly Games, 120+ Members, All Skill Levels' },
  { id: 3, category: 'Competition', name: 'Annual Hackathon for Charity', image: 'https://picsum.photos/seed/c1/400/300', description: 'Code for a cause and win amazing prizes.', details: 'Live Event, 50+ Teams, $10k Charity Prize' },
];

const LifestyleCard: React.FC<{ item: LifestyleItem }> = ({ item }) => {
    const categoryColor = {
        'Coffee Spot': 'bg-yellow-500/20 text-yellow-300',
        'Sports Group': 'bg-green-500/20 text-green-300',
        'Competition': 'bg-purple-500/20 text-purple-300',
    }[item.category];

    return (
        <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 group">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-5">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColor}`}>{item.category}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                <p className="mt-3 text-xs text-orange-400 font-semibold tracking-wider">{item.details}</p>
            </div>
        </div>
    );
}

export const CorporateLifestyle: React.FC = () => {
  return (
    <section id="lifestyle" className="py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Corporate Lifestyle</h2>
      <p className="text-slate-300 text-center mb-8">Work-life balance is key. Discover events and places to connect.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockLifestyleItems.map(item => (
          <LifestyleCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};