import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const CompanyLogoIcon: React.FC<IconProps> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="12" fill="url(#paint0_linear_1_2)"/>
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="20" fontFamily="Inter, sans-serif" fontWeight="bold">
            c@
        </text>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1"/>
                <stop offset="1" stopColor="#A855F7"/>
            </linearGradient>
        </defs>
    </svg>
);

export const IconWrapper: React.FC<{icon: React.ReactNode, className?: string}> = ({icon, className}) => (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${className}`}>
        {icon}
    </div>
);

export const CoffeeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 0h10.5c.621 0 1.125-.504 1.125-1.125v-6.75c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v1.5M15.75 9h2.25a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-2.25 2.25h-.75" />
    </svg>
);


export const SoccerBallIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M11.484 2.174a.75.75 0 011.032 0 11.209 11.209 0 018.02 4.225.75.75 0 01-.357 1.128 9.71 9.71 0 00-1.42.532c-.254.095-.518.175-.788.238a9.023 9.023 0 01-1.42.238c-.832 0-1.644-.193-2.387-.55a.75.75 0 01-.43-.918c.22-.681.33-1.393.33-2.122a9.023 9.023 0 01-1.42-2.387c-.254-.518-.592-.99-.99-1.42a.75.75 0 01-.064-1.096A11.209 11.209 0 0111.484 2.174zM4.673 6.071a.75.75 0 01.357-1.128 11.209 11.209 0 018.02-4.225.75.75 0 011.032 0 11.209 11.209 0 014.225 8.02.75.75 0 01-1.128.357 9.71 9.71 0 00-.532-1.42c-.095-.254-.175-.518-.238-.788a9.023 9.023 0 01-.238-1.42c0-.832.193-1.644.55-2.387a.75.75 0 01.918-.43c.681.22 1.393.33 2.122.33a9.023 9.023 0 012.387-1.42c.518-.254.99-.592 1.42-.99a.75.75 0 011.096-.064 11.209 11.209 0 014.225 4.225.75.75 0 01-.357 1.128 9.71 9.71 0 00-1.42.532c-.254.095-.518.175-.788.238a9.023 9.023 0 01-1.42.238c-.832 0-1.644-.193-2.387-.55a.75.75 0 01-.43-.918c.22-.681.33-1.393.33-2.122a9.023 9.023 0 01-1.42-2.387 8.98 8.98 0 01-.99-1.42.75.75 0 01-.064-1.096z" clipRule="evenodd" />
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);


export const TrophyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.5 2.25a2.25 2.25 0 00-2.25 2.25v.75c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-.75a2.25 2.25 0 00-2.25-2.25h-3z" />
        <path d="M7.5 2.25a2.25 2.25 0 012.25 2.25v.75c0 .414-.336.75-.75.75h-3a.75.75 0 01-.75-.75v-.75A2.25 2.25 0 017.5 2.25h3z" />
        <path d="M17.25 6.112V6.75a4.5 4.5 0 01-9 0v-.638a5.25 5.25 0 00-3.032 4.102.75.75 0 00.128.528l.254.381a.75.75 0 00.67.379h10.96a.75.75 0 00.67-.379l.254-.381a.75.75 0 00.128-.528 5.25 5.25 0 00-3.032-4.102zM12 11.25a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12zM12 15a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75z" />
        <path fillRule="evenodd" d="M3.75 21a.75.75 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v4.5a.75.75 0 00.75.75zM20.25 21a.75.75 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v4.5a.75.75 0 00.75.75zM7.5 15.75a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm9 0a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.455L12.75 18l1.177-.398a3.375 3.375 0 002.455-2.455L16.5 14.25l.398 1.177a3.375 3.375 0 002.455 2.455L20.25 18l-1.177.398a3.375 3.375 0 00-2.455 2.455z" />
    </svg>
);

export const ChartBarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.455L12.75 18l1.177-.398a3.375 3.375 0 002.455-2.455L16.5 14.25l.398 1.177a3.375 3.375 0 002.455 2.455L20.25 18l-1.177.398a3.375 3.375 0 00-2.455 2.455z" />
    </svg>
);