
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

export interface LifestyleItem {
  id: number;
  category: 'Coffee Spot' | 'Sports Group' | 'Competition';
  name: string;
  image: string;
  description: string;
  details: string;
}

export interface UserProfile {
  name: string;
  bio: string;
  skills: string[];
  careerGoals: string[];
}

export interface LiveEvent {
    id: number;
    companyName: string;
    companyLogo: string;
    title: string;
    hostName: string;
    hostTitle: string;
    dateTime: string;
    attendees: number;
    type: 'AMA' | 'Coffee Chat' | 'Workshop';
}
