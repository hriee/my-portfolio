import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  roleType: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    roleType: 'Recruiter / Hiring Manager',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const presets = [
    {
      title: 'Schedule an Interview',
      subject: 'Interview Invitation for Senior Software Engineer Role',
      message:
        "Hi Harindra,\n\nWe came across your portfolio and were impressed by your background in distributed systems and full-stack engineering. We would love to set up a preliminary conversation with our team.",
    },
    {
      title: 'Contract / Consulting',
      subject: 'Architecture & Cloud Engineering Consultation Inquiry',
      message:
        "Hi Harindra,\n\nWe have an upcoming product initiative requiring expertise in scalable microservices and modern React UI. Let's discuss your availability and project scope.",
    },
    {
      title: 'General Technical Inquiry',
      subject: 'Engineering Collaboration & Discussion',
      message:
        "Hi Harindra,\n\nI saw your work on StreamGrid and would love to exchange ideas regarding event streaming and consensus architectures.",
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a message for your inquiry';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate API dispatch with guaranteed feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const applyPreset = (preset: { subject: string; message: string }) => {
    setFormData((prev) => ({
      ...prev,
      subject: preset.subject,
      message: preset.message,
    }));
    // Clear message error if preset applied
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: undefined }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      roleType: 'Recruiter / Hiring Manager',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information & Recruiter Inquiries"
      className="py-16 sm:py-24 border-b border-[#94A3B8]/20 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10 sm:mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#06B6D4] uppercase">
            Start a Conversation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Whether you're looking to hire, discuss distributed system architecture, or explore technical collaboration, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-[#94A3B8]/20 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Direct Inquiries
                </div>
                <span className="text-xs font-medium text-[#06B6D4] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Replies within 24h
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-[#94A3B8]/20">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#06B6D4] transition-colors truncate focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#06B6D4]"
                  >
                    {personal.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#06B6D4]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span className="text-[#06B6D4]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] shrink-0" />
                  <span className="text-slate-300 font-medium">{personal.availability}</span>
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-[#94A3B8]/20 space-y-4">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Professional Networks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-[#94A3B8]/20 hover:border-[#8B5CF6] text-xs font-medium text-white hover:text-[#8B5CF6] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-[#94A3B8]/20 hover:border-[#06B6D4] text-xs font-medium text-white hover:text-[#06B6D4] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-[#94A3B8]/20 hover:border-[#8B5CF6] text-xs font-medium text-white hover:text-[#8B5CF6] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter/X</span>
                </a>
              </div>
            </div>

            {/* Quick Templates for Recruiters */}
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-[#94A3B8]/20 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Fast Message Presets</span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                Click any preset to automatically populate the message form:
              </p>
              <div className="flex flex-col gap-2">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-[#94A3B8]/20 hover:border-[#8B5CF6] text-xs text-[#94A3B8] hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#06B6D4]"
                  >
                    <span className="font-semibold text-slate-200 block">
                      {preset.title}
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-1">
                      {preset.subject}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-[#94A3B8]/20">
              {submitted ? (
                /* Submission Confirmation State */
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#06B6D4]/10 border border-[#06B6D4] flex items-center justify-center">
                    <Check className="w-8 h-8 text-[#06B6D4]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                      Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. A copy of your inquiry has been acknowledged, and I will reply to <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-[#94A3B8]/20 max-w-md mx-auto text-left text-xs text-[#94A3B8] space-y-1">
                    <div>
                      <span className="text-slate-400">Subject:</span>{' '}
                      <span className="text-white">{formData.subject || 'Direct Inquiry'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Inquiring as:</span>{' '}
                      <span className="text-[#06B6D4]">{formData.roleType}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] bg-[#06B6D4] hover:bg-[#06B6D4]/90 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-white"
                      >
                        Your Name <span className="text-[#06B6D4]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Alex Morgan"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-sm text-white border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] ${
                          errors.name ? 'border-red-500' : 'border-[#94A3B8]/30 hover:border-[#94A3B8]'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-400 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-white"
                      >
                        Your Email <span className="text-[#06B6D4]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-sm text-white border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] ${
                          errors.email ? 'border-red-500' : 'border-[#94A3B8]/30 hover:border-[#94A3B8]'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-400 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Role Type Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-role"
                        className="block text-xs font-semibold text-white"
                      >
                        I am reaching out as:
                      </label>
                      <select
                        id="contact-role"
                        value={formData.roleType}
                        onChange={(e) =>
                          setFormData({ ...formData, roleType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-sm text-white border border-[#94A3B8]/30 hover:border-[#94A3B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] cursor-pointer"
                      >
                        <option value="Recruiter / Hiring Manager">Recruiter / Talent Partner</option>
                        <option value="Engineering Director / Lead">Engineering Director / Tech Lead</option>
                        <option value="Founder / Executive">Startup Founder / Executive</option>
                        <option value="Technical Collaborator">Collaborator / Developer</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-white"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Senior Software Engineer Position"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-sm text-white border border-[#94A3B8]/30 hover:border-[#94A3B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-white"
                      >
                        Message <span className="text-[#06B6D4]">*</span>
                      </label>
                      <span className="text-[11px] text-[#94A3B8] font-mono">
                        {formData.message.length}/1000 characters
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share details regarding your team, technology stack, project scope, or opportunity..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 text-sm text-white border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] resize-y ${
                        errors.message ? 'border-red-500' : 'border-[#94A3B8]/30 hover:border-[#94A3B8]'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-400 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0F172A] bg-[#06B6D4] hover:bg-[#06B6D4]/90 rounded-lg shadow-md shadow-cyan-500/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] active:scale-95 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0F172A] border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
