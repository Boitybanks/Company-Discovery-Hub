export interface Story {
  id: number;
  type: 'image' | 'video';
  url: string;
  duration?: number; // duration in seconds
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  description: string;
  culture: string[];
  openRoles: number;
  cultureAnalytics: {
    [key: string]: number; // e.g., { 'Work-Life Balance': 4.5, 'Innovation': 5, ... }
  };
  stories: Story[];
}

export interface Opportunity {
  id: number;
  title: string;
  companyName: string;
  companyLogo: string;
  type: 'Job' | 'Internship' | 'Scholarship';
  location: string;
  isRemote: boolean;
}

export interface Post {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface UserProfile {
  name: string;
  bio: string;
  skills: string[];
  careerGoals: string[];
}

// NEW TYPES FOR LIFESTYLE SECTION
export interface CoffeeSpot {
    id: number;
    name: string;
    location: string;
    description: string;
    tags: {
        hot?: boolean;
        trending?: boolean;
        vip?: boolean;
    };
    features: string[];
    checkedIn: number;
    rating?: number;
    cta: {
        text: string;
        link: string;
        type: 'primary' | 'secondary';
    };
    event?: {
        name: string;
        time: string;
    }
}

export interface SportsGroup {
    id: number;
    name: string;
    details: string;
    description: string;
    tags: string[];
    status: {
        active?: boolean;
        premium?: boolean;
    }
}

export interface Competition {
    id: number;
    tag: string;
    title: string;
    subtitle: string;
    teamA: {
        name: string;
        tagline: string;
        logoInitial: string;
        registered: number;
        bgColor: string;
    };
    teamB: {
        name:string;
        tagline: string;
        logoInitial: string;
        registered: number;
        bgColor: string;
    };
    matchDetails: {
        date: string;
        location: string;
        details: string;
        prize: string;
    };
}

export interface RecentBattle {
    id: number;
    matchup: string;
    sport: string;
    winner: string;
    score: string;
    time: string;
}