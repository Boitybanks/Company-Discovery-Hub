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

// Icons for Company Spotlight
export const UsersGroupIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
);

export const LightBulbIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 00-7.5 0c.045.21.1.413.164.615a1.5 1.5 0 002.355.822m8.41 2.399a7.5 7.5 0 00-7.5 0c.045.21.1.413.164.615a1.5 1.5 0 002.355.822m0 0l-3.35-3.35m0 0a1.5 1.5 0 10-2.122-2.122m2.122 2.122l2.122 2.122" />
    </svg>
);

export const ScaleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.036.42m-11.882-11.882c-1.01.143-2.01.317-3 .52m3-.52l-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 002.036.42m11.882-11.882l-5.25 5.25m0 0l-5.25-5.25m5.25 5.25v-8.25" />
    </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M3.75 13.5l3.725 2.138a4.5 4.5 0 004.55 0l3.725-2.138m-12 0V9.375c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125v4.125m-12 0c0 .621.504 1.125 1.125 1.125h12.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.5v.75c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 14.25v-.75m18 0v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75a3.375 3.375 0 00-3.375 3.375v1.5c0 .621-.504 1.125-1.125 1.125h-1.5A3.375 3.375 0 003 10.875v2.625" />
  </svg>
);

export const MagnifyingGlassIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

export const BanknotesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// Icons for ForumHub
export const ChatBubbleLeftRightIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.125 1.125 0 01-1.59 0l-3.72-3.72A2.122 2.122 0 013 17.172V12.5c0-.97 1.517-1.488 2.483-1.026l.235.117a1.125 1.125 0 010 1.946l-.235.117c-.331.165-.623.362-.877.593M20.25 8.511V6.5c0-1.136-.847-2.1-1.98-2.193l-3.72-3.72a1.125 1.125 0 00-1.59 0l-3.72 3.72A2.122 2.122 0 003 4.828v2.682c0 .97 1.517 1.488 2.483 1.026l.235-.117a1.125 1.125 0 000-1.946l-.235-.117a2.122 2.122 0 01-.877-.593" />
    </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);

export const ChatBubbleOvalLeftIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.125 1.125 0 01-1.59 0l-3.72-3.72A2.122 2.122 0 013 17.172V12.5c0-1.995 1.624-3.618 3.618-3.618h9.764c.55 0 1.071-.115 1.56-.328z" />
  </svg>
);

// Icons for Odyssey Dashboard
export const RocketLaunchIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.13a14.98 14.98 0 00-12.12 6.16.734.734 0 00.03.639 6 6 0 017.38 5.84m-2.58 5.84a6 6 0 01-7.38-5.84m5.84 5.84a14.98 14.98 0 00-6.16-12.12A14.98 14.98 0 0014.37 21a14.98 14.98 0 0012.12-6.16.734.734 0 00-.03-.639z" />
    </svg>
);

export const ArrowTrendingUpIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94.886M21.75 5.25v6" />
  </svg>
);

export const FlagIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.05a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.05m16.5 0v-3.875a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25v3.875m16.5 0a2.25 2.25 0 002.25-2.25v-6a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25m16.5 0h-16.5" />
  </svg>
);