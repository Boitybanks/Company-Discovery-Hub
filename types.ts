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

// NEW TYPES FOR CAREER GURU
export interface CareerRecommendation {
    career: string;
    description: string;
    aiImpact: {
        riskPercentage: number;
        outlook: string;
    };
}

export interface UniversitySuggestion {
    name: string;
    specialty: string;
}

export interface CareerGuruAnalysis {
    overallAssessment: string;
    careerRecommendations: CareerRecommendation[];
    academicPlan: string[];
    universitySuggestions: UniversitySuggestion[];
    potentialEmployers: string[];
}

// NEW TYPES FOR MARKET PULSE
export interface TrendingSkill {
    skill: string;
    demandGrowth: number;
}

export interface HiringHotspot {
    industry: string;
    sentiment: string;
}

export interface MarketPulseData {
    trendingSkills: TrendingSkill[];
    hiringHotspots: HiringHotspot[];
}


// NEW TYPES FOR CONNECT AI
export interface SuggestedConnection {
    id: number;
    name: string;
    title: string;
    company: string;
    imageUrl: string;
}

export interface ConnectAISuggestion {
    connection: SuggestedConnection;
    icebreakers: string[];
}

// NEW TYPES FOR COMPANY SPOTLIGHT AND NEWS
export interface CompanySpotlightData {
    id: string;
    companyName: string;
    logoUrl: string;
    logoBackgroundColor?: string;
    tagline: string;
    cultureDescription: string;
    imageGallery: string[];
    coreValues: {
        icon: 'UsersGroupIcon' | 'LightBulbIcon' | 'ScaleIcon' | 'AcademicCapIcon';
        title: string;
        description: string;
    }[];
}

export interface NewsItem {
    id: number;
    companyName: string;
    headline: string;
    urgency: 'high' | 'normal';
}

// NEW TYPES FOR FORUM HUB
export type ForumChannel = 'Career Crossroads' | 'Interview Intel' | 'Side Hustle Showcase' | 'Industry Deep Dives';

export interface ForumReply {
    id: number;
    author: {
        name: string;
        avatarUrl?: string;
        anonymous: boolean;
    };
    content: string;
    timestamp: string;
    upvotes: number;
}

export interface ForumPost {
    id: number;
    channel: ForumChannel;
    title: string;
    content: string;
    author: {
        name: string;
        avatarUrl?: string;
        anonymous: boolean;
    };
    timestamp: string;
    upvotes: number;
    replies: ForumReply[];
    isTrending?: boolean;
}

// NEW TYPES FOR ODYSSEY DASHBOARD
export type PhaseItemType = 'Skill' | 'Role' | 'Community' | 'Action';
export interface PhaseItem {
    type: PhaseItemType;
    title: string;
    description: string;
}

export interface CareerPhase {
    phase: string; // e.g., "Phase 1: Foundation (Years 0-2)"
    title: string;
    description: string;
    items: PhaseItem[];
}

export interface OdysseyPlan {
    ambition: string;
    summary: string;
    phases: CareerPhase[];
}