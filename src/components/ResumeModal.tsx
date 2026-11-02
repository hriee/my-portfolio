import React, { useState } from 'react';
import { X, Printer, Download, Check, Copy, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { personal, about, experiences } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = async () => {
    const text = `
${personal.name} - ${personal.title}
Email: ${personal.email} | Location: ${personal.location}

SUMMARY:
${personal.summary}

EXPERIENCE:
${experiences
  .map(
    (e) => `• ${e.role} at ${e.organization} (${e.duration})
  ${e.summary}
  Key Achievements: ${e.achievements.join(' ')}
  Tech: ${e.techStack.join(', ')}`
  )
  .join('\n\n')}

EDUCATION:
${about.education.map((ed) => `• ${ed.degree} - ${ed.institution} (${ed.period})`).join('\n')}
    `.trim();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <div className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0F172A] border border-[#94A3B8]/30 shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#94A3B8]/20 bg-slate-900 shrink-0">
          <div>
            <span className="text-xs font-semibold text-[#06B6D4] uppercase tracking-wider">
              Executive Resume Summary
            </span>
            <h2 id="resume-title" className="text-lg sm:text-xl font-bold text-white">
              {personal.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white border border-[#94A3B8]/20 hover:border-[#8B5CF6] rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#06B6D4]"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white border border-[#94A3B8]/20 hover:border-[#06B6D4] rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#06B6D4]"
              title="Copy plain text summary"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span className="text-[#06B6D4]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg border border-[#94A3B8]/20 hover:border-[#8B5CF6] transition-colors cursor-pointer"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#94A3B8]">
          {/* Header Info */}
          <div className="border-b border-[#94A3B8]/20 pb-4 space-y-1">
            <h1 className="text-2xl font-bold text-white">{personal.name}</h1>
            <p className="text-base font-semibold text-[#06B6D4]">{personal.title}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8] pt-1">
              <span>{personal.email}</span>
              <span aria-hidden="true">·</span>
              <span>{personal.location}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#8B5CF6]">Available for Full-Time Roles</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Professional Summary</span>
            </h3>
            <p className="leading-relaxed">{personal.summary}</p>
          </div>

          {/* Key Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Experience & Roles</span>
            </h3>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900 border border-[#94A3B8]/15 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="font-bold text-white">{exp.role}</div>
                    <div className="text-xs font-medium text-[#06B6D4] font-mono">{exp.duration}</div>
                  </div>
                  <div className="text-xs font-medium text-slate-300">
                    {exp.organization} · {exp.location}
                  </div>
                  <p className="text-xs leading-relaxed text-[#94A3B8]">{exp.summary}</p>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Tech:</span>
                    {exp.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-[#94A3B8]/15 space-y-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Education</span>
              </h3>
              {about.education.map((edu, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-slate-300">{edu.institution}</div>
                  <div className="text-[#06B6D4] font-mono">{edu.period}</div>
                  {edu.honors && <div className="text-[#8B5CF6]">{edu.honors}</div>}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-[#94A3B8]/15 space-y-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-2 text-xs">
                {about.certifications.map((cert, idx) => (
                  <div key={idx} className="border-b border-[#94A3B8]/10 last:border-0 pb-1.5 last:pb-0">
                    <div className="font-semibold text-white">{cert.name}</div>
                    <div className="text-[#94A3B8]">{cert.issuer} · {cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 sm:px-6 py-3 border-t border-[#94A3B8]/20 bg-slate-900 flex justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
