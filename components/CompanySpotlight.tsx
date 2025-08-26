import React, { useState } from 'react';
import { CompanySpotlightData } from '../types';
import { getSalaryEstimate } from '../services/geminiService';
import { UsersGroupIcon, LightBulbIcon, ScaleIcon, AcademicCapIcon, MagnifyingGlassIcon, ArrowLeftIcon, BanknotesIcon } from './Icons';

const mockCompanyDataList: CompanySpotlightData[] = [
    {
        id: 'deloitte',
        companyName: 'Deloitte',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/DeloitteNewLogo.svg/2560px-DeloitteNewLogo.svg.png',
        logoBackgroundColor: 'bg-black',
        tagline: 'Life at Deloitte',
        cultureDescription: 'Our culture is our shared way of doing things and our commitment to making an impact that matters for our clients, our people, and society. It’s a culture of collaboration and high performance, focused on making a tangible difference.',
        imageGallery: ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2787&auto=format&fit=crop', 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop'],
        coreValues: [{ icon: 'UsersGroupIcon', title: 'Collaborate for Impact', description: 'We draw on our collective genius to create a tangible, positive impact for our clients and society.' }, { icon: 'LightBulbIcon', title: 'Lead with Purpose', description: 'We act as stewards of our professions, inspiring others and making a difference in the world.' }, { icon: 'ScaleIcon', title: 'Serve with Integrity', description: 'By acting ethically and with integrity, we earn the trust of our clients, our people, and the public.' }, { icon: 'AcademicCapIcon', title: 'Foster Inclusion', description: 'We are committed to attracting, retaining, and advancing a diverse workforce, while fostering an inclusive culture.' }]
    },
    {
        id: 'anglo-american',
        companyName: 'Anglo American',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Anglo_American_logo.svg/1280px-Anglo_American_logo.svg.png',
        logoBackgroundColor: 'bg-blue-900',
        tagline: 'Re-imagining Mining',
        cultureDescription: 'We are re-imagining mining to improve people\'s lives. Our purpose-led culture is built on safety, innovation, and sustainability, as we work together to extract the precious resources that enable modern life.',
        imageGallery: ['https://images.unsplash.com/photo-1542489674-93325f157e3f?q=80&w=2835&auto=format&fit=crop', 'https://images.unsplash.com/photo-1629230758424-8742568735d1?q=80&w=2835&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop', 'https://images.unsplash.com/photo-1605995538229-9b9c65a8824e?q=80&w=2874&auto=format&fit=crop'],
        coreValues: [{ icon: 'UsersGroupIcon', title: 'Care & Respect', description: 'We treat our colleagues, communities, and the environment with care and respect.' }, { icon: 'LightBulbIcon', title: 'Innovation', description: 'We are constantly seeking new and better ways to work and to improve our industry.' }, { icon: 'ScaleIcon', title: 'Accountability', description: 'We take ownership of our actions and their outcomes.' }, { icon: 'AcademicCapIcon', title: 'Collaboration', description: 'We work together as one team to achieve our shared goals.' }]
    },
     {
        id: 'discovery',
        companyName: 'Discovery',
        logoUrl: 'https://s3.eu-west-2.amazonaws.com/media.ca-dev.co.za/companies/logos/233/Discovery-Logo.png',
        logoBackgroundColor: 'bg-white',
        tagline: 'A Shared Value Insurer',
        cultureDescription: 'Our culture is rooted in our core purpose: to make people healthier and enhance and protect their lives. We are driven by innovation, a passion for our customers, and a belief in the power of shared value.',
        imageGallery: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop', 'https://images.unsplash.com/photo-1573496799582-d4a8d3840c22?q=80&w=2832&auto=format&fit=crop', 'https://images.unsplash.com/photo-1581092580433-c2c01e3b639e?q=80&w=2940&auto=format&fit=crop'],
        coreValues: [{ icon: 'UsersGroupIcon', title: 'Customer-Centric', description: 'We put our customers at the center of everything we do.' }, { icon: 'LightBulbIcon', title: 'Innovation', description: 'We constantly innovate to find new ways to improve people\'s health and well-being.' }, { icon: 'ScaleIcon', title: 'Integrity', description: 'We operate with the highest levels of integrity and ethical standards.' }, { icon: 'AcademicCapIcon', title: 'Leadership', description: 'We strive to be leaders in our industry and in the communities we serve.' }]
    },
];

const ValueCard: React.FC<{ value: CompanySpotlightData['coreValues'][0] }> = ({ value }) => {
    const Icon = { UsersGroupIcon, LightBulbIcon, ScaleIcon, AcademicCapIcon }[value.icon];
    return (
        <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700/60 h-full">
            <Icon className="w-8 h-8 text-green-400 mb-4" />
            <h4 className="font-bold text-lg text-white">{value.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{value.description}</p>
        </div>
    );
};

export const CompanySpotlight: React.FC = () => {
    const [selectedCompany, setSelectedCompany] = useState<CompanySpotlightData | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [salaryRole, setSalaryRole] = useState('');
    const [salaryResult, setSalaryResult] = useState<string | null>(null);
    const [isSalaryLoading, setIsSalaryLoading] = useState(false);

    const filteredCompanies = mockCompanyDataList.filter(company =>
        company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleGetSalary = async () => {
        if (!salaryRole || !selectedCompany) return;
        setIsSalaryLoading(true);
        setSalaryResult(null);
        const result = await getSalaryEstimate(selectedCompany.companyName, salaryRole);
        setSalaryResult(result);
        setIsSalaryLoading(false);
    };

    const ExplorerView = () => (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    <span className="text-gray-500 font-light">@</span>Company
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                    Explore top companies, discover their culture, and get salary insights.
                </p>
            </div>
            <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for a company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-900/70 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                    <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompanies.map(company => (
                    <button key={company.id} onClick={() => setSelectedCompany(company)} className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700/60 text-left hover:border-indigo-500/70 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                        <div className={`w-16 h-16 rounded-xl ${company.logoBackgroundColor} flex items-center justify-center p-2 mb-4`}>
                            <img src={company.logoUrl} alt={`${company.companyName} logo`} className="max-h-full max-w-full object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{company.companyName}</h3>
                        <p className="text-sm text-gray-400 mt-1">{company.tagline}</p>
                    </button>
                ))}
            </div>
        </div>
    );

    const SpotlightView = ({ data }: { data: CompanySpotlightData }) => (
        <div>
            <div className="mb-8">
                <button onClick={() => setSelectedCompany(null)} className="flex items-center space-x-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Back to Companies</span>
                </button>
            </div>
            <div className="flex items-center justify-center text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    <span className="text-gray-500 font-light">@</span>{data.companyName}
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-white tracking-tight">{data.tagline}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{data.cultureDescription}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src={data.imageGallery[0]} alt="Office life 1" className="rounded-xl object-cover w-full h-80 col-span-2" />
                    <img src={data.imageGallery[1]} alt="Office life 2" className="rounded-xl object-cover w-full h-60" />
                    <img src={data.imageGallery[2]} alt="Office life 3" className="rounded-xl object-cover w-full h-60" />
                </div>
            </div>

            <div className="mt-16 bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/60">
                 <div className="flex items-center gap-3 mb-6">
                    <BanknotesIcon className="w-8 h-8 text-teal-400" />
                    <h3 className="text-2xl font-bold text-white">Salary Insights</h3>
                </div>
                <p className="text-gray-400 mb-6 max-w-3xl">Enter a job title to get an AI-powered salary estimate for a role at {data.companyName}.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input type="text" placeholder="e.g., Junior Data Analyst, Artisan Welder..." value={salaryRole} onChange={e => setSalaryRole(e.target.value)} className="flex-grow bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
                    <button onClick={handleGetSalary} disabled={isSalaryLoading || !salaryRole} className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[180px]">
                        {isSalaryLoading ? (<svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>) : 'Get Estimate'}
                    </button>
                </div>
                 {salaryResult && <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-gray-700 text-center"><p className="text-lg text-gray-300">Estimated Salary for a <span className="font-bold text-white">{salaryRole}</span>:</p><p className="text-2xl font-bold text-teal-400 mt-1">{salaryResult}</p></div>}
            </div>

            <div className="mt-16">
                <h3 className="text-2xl font-bold text-center text-white mb-8">Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.coreValues.map(value => <ValueCard key={value.title} value={value} />)}
                </div>
            </div>
        </div>
    );

    return (
        <section id="company-spotlight" className="bg-gray-900/50 p-8 md:p-12 rounded-3xl">
            {selectedCompany ? <SpotlightView data={selectedCompany} /> : <ExplorerView />}
        </section>
    );
};