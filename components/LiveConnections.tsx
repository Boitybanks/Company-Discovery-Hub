
import React from 'react';
import type { LiveEvent } from '../types';
import { VideoCameraIcon, CalendarDaysIcon, UsersIcon } from './Icons';

const mockEvents: LiveEvent[] = [
  { id: 1, companyName: 'Innovate Inc.', companyLogo: 'https://picsum.photos/seed/1/100', title: 'AMA with our Lead AI Engineer', hostName: 'Jane Foster', hostTitle: 'Lead AI Engineer', dateTime: 'Oct 28, 4:00 PM PST', attendees: 88, type: 'AMA' },
  { id: 2, companyName: 'Creative Minds', companyLogo: 'https://picsum.photos/seed/2/100', title: 'Virtual Coffee Chat: UX/UI Careers', hostName: 'Michael Chen', hostTitle: 'Head of Design', dateTime: 'Oct 29, 9:00 AM PST', attendees: 120, type: 'Coffee Chat' },
  { id: 3, companyName: 'GreenScape', companyLogo: 'https://picsum.photos/seed/4/100', title: 'Workshop: Sustainable Tech Explained', hostName: 'Emily Carter', hostTitle: 'Chief Sustainability Officer', dateTime: 'Nov 2, 11:00 AM PST', attendees: 45, type: 'Workshop' },
  { id: 4, companyName: 'HealthFirst', companyLogo: 'https://picsum.photos/seed/3/100', title: 'Inside Health Tech: A Recruiter Q&A', hostName: 'David Lee', hostTitle: 'Senior Recruiter', dateTime: 'Nov 5, 1:00 PM PST', attendees: 212, type: 'AMA' },
];

const EventCard: React.FC<{ event: LiveEvent }> = ({ event }) => {
    const typeStyles = {
        'AMA': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
        'Coffee Chat': { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
        'Workshop': { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
    }[event.type];

    return (
        <div className={`flex-shrink-0 w-80 bg-slate-800/60 rounded-xl border ${typeStyles.border}
                       p-5 flex flex-col justify-between space-y-4
                       transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-400/60`}>
            <div>
                <div className="flex items-center space-x-3 mb-3">
                    <img src={event.companyLogo} alt={event.companyName} className="w-10 h-10 rounded-lg" />
                    <div>
                        <p className="font-semibold text-white">{event.companyName}</p>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeStyles.bg} ${typeStyles.text}`}>{event.type}</span>
                    </div>
                </div>
                <h3 className="text-white font-bold">{event.title}</h3>
                <p className="text-sm text-slate-400 mt-1">with {event.hostName}, {event.hostTitle}</p>
            </div>
            
            <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="w-4 h-4 text-slate-400" />
                    <span>{event.dateTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <UsersIcon className="w-4 h-4 text-slate-400" />
                    <span>{event.attendees} attending</span>
                </div>
            </div>

            <button className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors">
                RSVP
            </button>
        </div>
    );
}

export const LiveConnections: React.FC = () => {
    return (
        <section id="live-connections" className="py-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
                <VideoCameraIcon className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white text-center">Live Connections</h2>
            </div>
            <p className="text-slate-300 text-center mb-8">Join live AMAs, coffee chats, and workshops to connect with companies.</p>

            <div className="flex space-x-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
                {mockEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </section>
    );
};
