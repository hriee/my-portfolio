import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] border-t border-[#94A3B8]/20 py-12 text-xs sm:text-sm text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-base font-bold text-white tracking-tight">
              {personal.name}
            </div>
            <p className="text-xs text-[#94A3B8]">
              {personal.title}
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm"
          >
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#06B6D4] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#06B6D4] transition-colors cursor-pointer"
            >
              About Me
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="hover:text-[#06B6D4] transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#06B6D4] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Socials & Back-To-Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#94A3B8] hover:text-[#8B5CF6] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#94A3B8] hover:text-[#06B6D4] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 text-[#94A3B8] hover:text-[#06B6D4] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 hover:text-[#06B6D4] border border-[#94A3B8]/20 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#06B6D4]"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Subtext */}
        <div className="mt-8 pt-6 border-t border-[#94A3B8]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#94A3B8]">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript & Tailwind CSS · Strictly Poppins Typography
          </div>
        </div>
      </div>
    </footer>
  );
};
