import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Terminal,
  Target,
  Sparkles,
  BookOpen,
  Check,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;
  const [activeTab, setActiveTab] = useState<'journey' | 'skills' | 'education'>('journey');

  return (
    <section
      id="about"
      aria-label="About Me & Professional Background"
      className="py-16 sm:py-24 border-b border-[#94A3B8]/20 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 sm:mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#06B6D4] uppercase">
            Background & Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            A comprehensive look at my engineering journey, technical disciplines, and the principles that guide my software design.
          </p>
        </div>

        {/* Interactive Segmented Tabs (Buttons per §1.A Interactive Filter Controls) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-800/60 rounded-xl border border-[#94A3B8]/20 mb-8 max-w-xl">
          <button
            type="button"
            onClick={() => setActiveTab('journey')}
            className={`flex-1 min-h-[42px] px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] ${
              activeTab === 'journey'
                ? 'bg-[#06B6D4] text-[#0F172A] font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Journey & Vision
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('skills')}
            className={`flex-1 min-h-[42px] px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] ${
              activeTab === 'skills'
                ? 'bg-[#06B6D4] text-[#0F172A] font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Technical Competencies
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`flex-1 min-h-[42px] px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] ${
              activeTab === 'education'
                ? 'bg-[#06B6D4] text-[#0F172A] font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Education & Certs
          </button>
        </div>

        {/* Tab 1: Journey & Vision */}
        {activeTab === 'journey' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#06B6D4]" />
                  <span>The Software Engineering Journey</span>
                </h3>
                {about.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Career Goals */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#8B5CF6]" />
                  <span>Career Goals & Aspirations</span>
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {about.careerGoals}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Technical Interests */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#06B6D4]" />
                  <span>Core Engineering Interests</span>
                </h3>
                <ul className="space-y-3">
                  {about.interests.map((interest, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                      <span className="text-white font-medium">{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Principles Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#8B5CF6]" />
                  <span>Guiding Principles</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#94A3B8]">
                  <div>
                    <span className="text-white font-semibold">Simplicity Over Cleverness:</span> Maintainable, readable code saves more engineering hours than esoteric abstractions.
                  </div>
                  <div>
                    <span className="text-white font-semibold">Observability First:</span> Systems must report their operational health through metrics, structured logs, and tracing.
                  </div>
                  <div>
                    <span className="text-white font-semibold">Defensive Type Systems:</span> Strive for compile-time safety across frontend and backend boundaries.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Technical Competencies */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.skillCategories.map((group, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 hover:border-[#8B5CF6]/50 transition-colors space-y-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                    {group.description}
                  </p>
                </div>

                {/* Zero-Pill Typography Discipline: Clean unboxed list with typographic bullets */}
                <div className="pt-2 border-t border-[#94A3B8]/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                      <span className="text-slate-200 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Education History */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30">
                    <GraduationCap className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Higher Education
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      Rigorous foundational degree in engineering
                    </p>
                  </div>
                </div>

                {about.education.map((edu, idx) => (
                  <div key={idx} className="space-y-2 border-l-2 border-[#06B6D4] pl-4 sm:pl-6">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-[#94A3B8]">
                      <span className="font-semibold text-[#06B6D4]">{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <div className="text-sm font-medium text-slate-300">
                      {edu.institution}
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                      {edu.details}
                    </p>
                    {edu.honors && (
                      <div className="pt-1 text-xs font-medium text-[#8B5CF6]">
                        {edu.honors}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Certifications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30">
                    <Award className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Industry Certifications
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      Verified cloud & architecture credentials
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {about.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-800/40 border border-[#94A3B8]/15 space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm font-bold text-white">
                          {cert.name}
                        </div>
                        <span className="text-xs font-semibold text-[#06B6D4] shrink-0">
                          {cert.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                        <span>{cert.issuer}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[11px] text-slate-400">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
