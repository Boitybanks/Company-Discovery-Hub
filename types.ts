
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
