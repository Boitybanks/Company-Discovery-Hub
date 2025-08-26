import React from 'react';
import { CoffeeSpot, SportsGroup, Competition, RecentBattle } from '../types';
import { IconWrapper, CoffeeIcon, SoccerBallIcon, TrophyIcon } from './Icons';

const mockCoffeeSpots: CoffeeSpot[] = [
    { id: 1, name: 'The Business Bean', location: 'Sandton City Centre', description: 'Where tech execs meet over artisan cappuccinos. Great tech, power outlets at every table.', tags: { hot: true }, features: ['Free WiFi', 'Power Outlets', 'Quiet Zone'], checkedIn: 82, cta: { text: 'Visit', link: '#', type: 'secondary'} },
    { id: 2, name: 'Network Café', location: 'Cape Town Waterfront', description: 'Finance professionals\' favorite. Known for networking events and excellent espresso.', tags: { trending: true }, features: ['Events', 'Networking', 'Premium Coffee'], checkedIn: 0, event: { name: 'Networking event', time: 'Thu 7PM'}, cta: { text: 'RSVP', link: '#', type: 'secondary'} },
    { id: 3, name: 'Executive Grind', location: 'Johannesburg CBD', description: 'Premium coffee experience for C-suite execs. Private meeting pods available.', tags: { vip: true }, features: ['Private Pods', 'Premium', 'C-Suite'], checkedIn: 0, rating: 4.9, cta: { text: 'Book Pod', link: '#', type: 'primary' } },
];

const mockSportsGroups: SportsGroup[] = [
    { id: 1, name: 'Tech vs Finance Soccer League', details: 'Weekly matches • Saturdays 2PM', description: 'Competitive 7v7 league where tech companies battle it out with finance firms. Great networking on the field!', tags: ['Soccer', 'Tech', 'Finance', 'League'], status: { active: true } },
    { id: 2, name: 'Cape Town Padel Professionals', details: 'Mixed industry • Thursdays 6PM', description: 'Padel courts where lawyers, doctors, consultants and entrepreneurs compete. Post-game networking drinks!', tags: ['Padel', 'Legal', 'Medical', 'Social'], status: { premium: true } },
];

const mockCompetition: Competition = {
    id: 1,
    tag: 'LIVE NEXT WEEK',
    title: 'Discovery vs Momentum',
    subtitle: 'Epic Padel Championship Battle',
    teamA: { name: 'Discovery Health', tagline: 'Defending Champions', logoInitial: 'D', registered: 32, bgColor: 'bg-green-500' },
    teamB: { name: 'Momentum', tagline: 'Rising Challengers', logoInitial: 'M', registered: 28, bgColor: 'bg-blue-500' },
    matchDetails: { date: 'Saturday, 30 August 2025', location: 'Virgin Active Padel Courts, Sandton', details: 'Best of 7 matches', prize: 'Winner takes R50k for charity' }
};

const mockRecentBattles: RecentBattle[] = [
    { id: 1, matchup: 'Standard Bank vs Absa', sport: 'Tennis', winner: 'Standard Bank Won', score: '4-2', time: 'Last Friday' },
    { id: 2, matchup: 'Shoprite vs Woolworths', sport: 'Soccer', winner: 'Woolworths Won', score: '3-1', time: 'Last Wednesday' },
    { id: 3, matchup: 'MTN vs Vodacom', sport: 'Padel', winner: 'MTN Won', score: '5-3', time: 'Last Monday' },
];


const Tag: React.FC<{ text: string, className: string}> = ({ text, className }) => <span className={`text-xs font-bold px-3 py-1 rounded-full ${className}`}>{text}</span>;
const FeaturePill: React.FC<{ text: string }> = ({ text }) => <span className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1.5 rounded-full">{text}</span>;

const CoffeeSpotCard: React.FC<{ spot: CoffeeSpot }> = ({ spot }) => {
    return (
        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700/60 h-full flex flex-col">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white">{spot.name}</h3>
                {spot.tags.hot && <Tag text="Hot Spot" className="bg-orange-900/50 text-orange-300" />}
                {spot.tags.trending && <Tag text="Trending" className="bg-green-900/50 text-green-300" />}
                {spot.tags.vip && <Tag text="VIP" className="bg-purple-900/50 text-purple-300" />}
            </div>
            <p className="text-sm text-gray-400 mt-1">{spot.location}</p>
            <p className="text-sm text-gray-300 my-4 flex-grow">{spot.description}</p>
            <div className="flex flex-wrap gap-2">
                {spot.features.map(f => <FeaturePill key={f} text={f} />)}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center">
                <div>
                    {spot.checkedIn > 0 && <p className="text-sm font-semibold text-gray-300">{spot.checkedIn} professionals checked in today</p>}
                    {spot.rating && <p className="text-sm font-semibold text-gray-300">{spot.rating}/5 rating</p>}
                    {spot.event && <p className="text-sm font-semibold text-indigo-400">{spot.event.name} &middot; {spot.event.time}</p>}
                </div>
                <a href={spot.cta.link} className={`font-bold text-sm px-5 py-2.5 rounded-lg transition-colors ${spot.cta.type === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'text-indigo-400 hover:bg-indigo-900/30'}`}>{spot.cta.text}</a>
            </div>
        </div>
    );
};

const SportsGroupCard: React.FC<{ group: SportsGroup }> = ({ group }) => {
    return (
        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700/60">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white">{group.name}</h3>
                {group.status.active && <Tag text="Active" className="bg-green-900/50 text-green-300" />}
                {group.status.premium && <Tag text="Premium" className="bg-amber-900/50 text-amber-300" />}
            </div>
            <p className="text-sm text-gray-400 mt-1">{group.details}</p>
            <p className="text-sm text-gray-300 my-4">{group.description}</p>
            <div className="flex flex-wrap gap-2">
                {group.tags.map(t => <span key={t} className="text-sm font-semibold text-teal-300 bg-teal-900/50 px-3 py-1 rounded-md"># {t}</span>)}
            </div>
        </div>
    );
}

const CompetitionCard: React.FC<{ comp: Competition }> = ({ comp }) => {
    const TeamDisplay: React.FC<{team: Competition['teamA']}> = ({team}) => (
        <div className="flex flex-col items-center text-center">
            <div className={`w-20 h-20 rounded-full ${team.bgColor} flex items-center justify-center text-white text-4xl font-black mb-3`}>{team.logoInitial}</div>
            <h4 className="font-bold text-white">{team.name}</h4>
            <p className="text-sm text-gray-400">{team.tagline}</p>
            <p className="text-sm font-bold text-green-400 mt-1">{team.registered} employees registered</p>
        </div>
    );
    return (
        <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/60">
            <div className="text-center mb-8">
                <Tag text={comp.tag} className="bg-red-900/50 text-red-300" />
                <h3 className="text-3xl font-extrabold text-white mt-2">{comp.title}</h3>
                <p className="text-lg font-medium text-purple-400">{comp.subtitle}</p>
            </div>
            <div className="flex justify-around items-center">
                <TeamDisplay team={comp.teamA} />
                <div className="text-gray-500 font-bold text-2xl">VS</div>
                <TeamDisplay team={comp.teamB} />
            </div>
            <div className="bg-gray-900/50 p-4 rounded-xl shadow-inner border border-gray-700 text-center max-w-md mx-auto my-8">
                <p className="font-bold text-gray-100">{comp.matchDetails.date}</p>
                <p className="text-sm text-gray-400">{comp.matchDetails.location}</p>
                <p className="text-sm text-indigo-400 font-semibold mt-1">{comp.matchDetails.details} &bull; {comp.matchDetails.prize}</p>
            </div>
            <div className="flex justify-center gap-4">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">Watch Live (Free)</button>
                <button className="flex-1 bg-gray-800 text-gray-200 font-bold py-3 rounded-xl border-2 border-gray-600 hover:bg-gray-700 transition-colors">Support Team</button>
            </div>
        </div>
    );
}

const RecentBattlesCard: React.FC<{battles: RecentBattle[]}> = ({ battles }) => {
    return (
        <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700/60">
            <h3 className="font-bold text-xl mb-4 text-white">Recent Company Battles</h3>
            <div className="space-y-2">
                {battles.map((battle, index) => (
                    <div key={battle.id}>
                        <div className="flex justify-between items-center py-3">
                            <div>
                                <p className="font-semibold text-gray-200">{battle.matchup}</p>
                                <span className="text-xs font-semibold text-cyan-300 bg-cyan-900/50 px-2 py-0.5 rounded-md">{battle.sport}</span>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-green-400">{battle.winner}</p>
                                <p className="text-sm text-gray-400">{battle.score} &bull; {battle.time}</p>
                            </div>
                        </div>
                        {index < battles.length - 1 && <hr className="border-gray-700" />}
                    </div>
                ))}
            </div>
            <div className="pt-4 mt-2 text-right">
                <a href="#" className="text-sm font-bold text-indigo-400 hover:underline">View Schedule</a>
            </div>
        </div>
    )
}

export const CorporateLifestyle: React.FC = () => {
  return (
    <section id="lifestyle" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
             <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Where Business Meets Lifestyle
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                Connect beyond the boardroom. Discover coffee spots where deals happen, join sports
                groups that build lasting relationships, and witness epic company competitions that bring
                out the best in corporate culture.
            </p>
        </div>
      <div className="space-y-16">
        
        <div>
            <div className="flex items-center gap-3 mb-6">
                <IconWrapper icon={<CoffeeIcon className="w-5 h-5 text-amber-400" />} className="bg-amber-900/40" />
                <h2 className="text-2xl font-bold text-white">Coffee Spots for Professionals</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {mockCoffeeSpots.map(item => <CoffeeSpotCard key={item.id} spot={item} />)}
            </div>
        </div>
        
        <div>
            <div className="flex items-center gap-3 mb-6">
                 <IconWrapper icon={<SoccerBallIcon className="w-5 h-5 text-green-400" />} className="bg-green-900/40" />
                <h2 className="text-2xl font-bold text-white">Cross-Industry Sports Groups</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {mockSportsGroups.map(item => <SportsGroupCard key={item.id} group={item} />)}
            </div>
        </div>

        <div>
            <div className="flex items-center gap-3 mb-6">
                <IconWrapper icon={<TrophyIcon className="w-5 h-5 text-purple-400" />} className="bg-purple-900/40" />
                <h2 className="text-2xl font-bold text-white">Company vs Company Competitions</h2>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <CompetitionCard comp={mockCompetition} />
                </div>
                <div>
                   <RecentBattlesCard battles={mockRecentBattles} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};