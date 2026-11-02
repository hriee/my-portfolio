import React from 'react';
import { ArrowRight, Briefcase, MapPin, CheckCircle, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HomeSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onOpenResume,
}) => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      aria-label="Introduction & Overview"
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-[#94A3B8]/20 bg-[#0F172A]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Typographic Presentation */}
        <div className="flex flex-col space-y-6">
          {/* Status Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
            <span className="text-[#06B6D4] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
              Available for Full-Time Roles
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
              {personal.location}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-[#06B6D4]">{personal.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#94A3B8] tracking-tight">
              {personal.title}
            </p>
          </div>

          {/* Introduction Copy */}
          <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-3xl">
            {personal.summary}
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0F172A] bg-[#06B6D4] hover:bg-[#06B6D4]/90 rounded-lg shadow-md shadow-cyan-500/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] active:scale-95"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('experience')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 border border-[#94A3B8]/30 hover:border-[#8B5CF6] rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] active:scale-95"
            >
              <Briefcase className="w-4 h-4 text-[#06B6D4]" />
              <span>View Experience</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#94A3B8] hover:text-white hover:border-[#8B5CF6] border border-transparent rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#8B5CF6]" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Key Value Proposition Pillars */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#94A3B8]">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-[#94A3B8]/15">
              <CheckCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>Modern React 19, TypeScript & Vite Architecture</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-[#94A3B8]/15">
              <CheckCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>Scalable Node.js & Distributed Cloud Microservices</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-[#94A3B8]/15">
              <CheckCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>Sub-Second Data Latency & High Fault Tolerance</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-[#94A3B8]/15">
              <CheckCircle className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>Strict Accessibility (WCAG AA) & Mobile-First Design</span>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#94A3B8]/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-800/40 border border-[#94A3B8]/15 hover:border-[#8B5CF6]/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#06B6D4] tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#94A3B8] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
