import React, { useState } from 'react';
import {
  Briefcase,
  ExternalLink,
  Github,
  Calendar,
  MapPin,
  TrendingUp,
  X,
  Code2,
} from 'lucide-react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'full-time' | 'internship' | 'project'>('all');
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const filteredExperiences = experiences.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const getFilterCount = (type: 'all' | 'full-time' | 'internship' | 'project') => {
    if (type === 'all') return experiences.length;
    return experiences.filter((e) => e.type === type).length;
  };

  return (
    <section
      id="experience"
      aria-label="Work Experience & Projects"
      className="py-16 sm:py-24 border-b border-[#94A3B8]/20 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-8 sm:mb-10">
          <div className="text-xs font-semibold tracking-wider text-[#06B6D4] uppercase">
            Track Record & Impact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            A comprehensive record of my roles in engineering scalable cloud architectures, web systems, internships, and technical projects.
          </p>
        </div>

        {/* Interactive Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-800/60 rounded-xl border border-[#94A3B8]/20 mb-8 max-w-2xl">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`min-h-[42px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] flex items-center gap-2 ${
              filter === 'all'
                ? 'bg-[#06B6D4] text-[#0F172A] font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <span>All Experience</span>
            <span className="tabular-nums font-mono opacity-80">({getFilterCount('all')})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('full-time')}
            className={`min-h-[42px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] flex items-center gap-2 ${
              filter === 'full-time'
                ? 'bg-[#06B6D4] text-[#0F172A] font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <span>Full-Time Roles</span>
            <span className="tabular-nums font-mono opacity-80">({getFilterCount('full-time')})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('internship')}
            className={`min-h-[42px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] flex items-center gap-2 ${
              filter === 'internship'
                ? 'bg-[#06B6D4] text-[#0F172A] font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <span>Internships & Training</span>
            <span className="tabular-nums font-mono opacity-80">({getFilterCount('internship')})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter('project')}
            className={`min-h-[42px] px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] flex items-center gap-2 ${
              filter === 'project'
                ? 'bg-[#06B6D4] text-[#0F172A] font-semibold shadow-sm'
                : 'text-[#94A3B8] hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <span>Featured Projects</span>
            <span className="tabular-nums font-mono opacity-80">({getFilterCount('project')})</span>
          </button>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20 hover:border-[#8B5CF6]/50 transition-all shadow-sm hover:shadow-lg hover:shadow-black/20"
            >
              {/* Header: Role, Org, and Timing */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
                    <span className="text-[#06B6D4] font-medium uppercase tracking-wider">
                      {exp.type === 'full-time'
                        ? 'Full-Time Role'
                        : exp.type === 'internship'
                        ? 'Internship & Training'
                        : 'Featured Project'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#94A3B8]" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-300">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#94A3B8] shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-[#94A3B8]/20 text-[#06B6D4] font-medium tabular-nums">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Quantifiable Metrics Highlight */}
              {exp.metrics && (
                <div className="mt-4 p-3 rounded-xl bg-slate-800/60 border border-[#06B6D4]/30 flex items-center gap-2 text-xs sm:text-sm text-[#06B6D4]">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span className="font-semibold text-white">Impact Metric:</span>
                  <span>{exp.metrics}</span>
                </div>
              )}

              {/* Key Achievements Checklist */}
              <div className="mt-5 space-y-2">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  Key Accomplishments
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zero-Pill Tech Stack: Clean inline text with typographic separators */}
              <div className="mt-6 pt-5 border-t border-[#94A3B8]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#94A3B8]">
                  <span className="font-semibold text-white">Technologies:</span>
                  {exp.techStack.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-300">{tech}</span>
                      {idx < exp.techStack.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Buttons for this item */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedExperience(exp)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white hover:text-[#06B6D4] border border-[#94A3B8]/30 hover:border-[#8B5CF6] rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                  >
                    <Code2 className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>Technical Details</span>
                  </button>

                  {exp.github && (
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-[#94A3B8] hover:text-[#8B5CF6] hover:border-[#8B5CF6] border border-[#94A3B8]/20 rounded-lg transition-colors cursor-pointer"
                      title="View GitHub Repository"
                      aria-label={`${exp.organization} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-[#94A3B8] hover:text-[#06B6D4] hover:border-[#06B6D4] border border-[#94A3B8]/20 rounded-lg transition-colors cursor-pointer"
                      title="Visit Live URL"
                      aria-label={`${exp.organization} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Deep Dive Modal */}
        {selectedExperience && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-experience-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-[#94A3B8]/30 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#06B6D4] uppercase tracking-wider">
                    Technical Architecture Deep-Dive
                  </div>
                  <h3
                    id="modal-experience-title"
                    className="text-xl sm:text-2xl font-bold text-white mt-1"
                  >
                    {selectedExperience.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-0.5">
                    {selectedExperience.organization} · {selectedExperience.duration}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedExperience(null)}
                  className="p-2 text-[#94A3B8] hover:text-white rounded-lg border border-[#94A3B8]/20 hover:border-[#8B5CF6] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-[#94A3B8] leading-relaxed">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    System Architecture & Context
                  </h4>
                  <p>{selectedExperience.summary}</p>
                </div>

                {selectedExperience.metrics && (
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-[#06B6D4]/40 text-xs sm:text-sm text-slate-200">
                    <span className="font-bold text-[#06B6D4]">Key Verified Metric:</span> {selectedExperience.metrics}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Key Architectural Accomplishments
                  </h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Full Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedExperience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-[#94A3B8]/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#94A3B8]/20 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedExperience(null)}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
