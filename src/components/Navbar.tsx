import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-[#94A3B8]/20 shadow-lg shadow-black/20'
          : 'bg-[#0F172A] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-[#06B6D4] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded"
          >
            Harindra Kumar
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#94A3B8]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded ${
                    isActive
                      ? 'text-[#06B6D4] font-semibold'
                      : 'hover:text-[#8B5CF6]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#06B6D4] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#94A3B8] hover:text-white border border-[#94A3B8]/30 hover:border-[#8B5CF6] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
            >
              <FileText className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-[#0F172A] bg-[#06B6D4] hover:bg-[#06B6D4]/90 rounded-lg shadow-sm hover:shadow-cyan-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] active:scale-95"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-[#94A3B8] hover:text-white border border-[#94A3B8]/20 hover:border-[#8B5CF6] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-[#94A3B8]/20 px-4 pt-3 pb-5 space-y-2 max-w-full shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer min-h-[44px] flex items-center justify-between ${
                    isActive
                      ? 'bg-[#06B6D4]/10 text-[#06B6D4] font-semibold'
                      : 'text-[#94A3B8] hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#94A3B8]/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white border border-[#94A3B8]/30 hover:border-[#8B5CF6] rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#06B6D4]" />
              <span>View Executive Resume</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0F172A] bg-[#06B6D4] hover:bg-[#06B6D4]/90 rounded-lg transition-colors cursor-pointer"
            >
              <span>Get in Touch Directly</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
