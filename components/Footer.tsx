
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 text-slate-400 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-bold text-white mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">For Students</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Opportunities</a></li>
              <li><a href="#" className="hover:text-orange-400">Scholarships</a></li>
              <li><a href="#" className="hover:text-orange-400">AI Mentor</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">For Companies</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Post a Job</a></li>
              <li><a href="#" className="hover:text-orange-400">Premium Profiles</a></li>
              <li><a href="#" className="hover:text-orange-400">Partnerships</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Company Discovery Hub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
