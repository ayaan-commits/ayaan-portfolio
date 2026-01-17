"use client";

import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { Bot, Video, MessageSquare, Phone, Mail, Globe, Sparkles, Zap } from "lucide-react";

const automations: BentoItem[] = [
  // Content Automations
  {
    id: "ai-video-generation",
    title: "AI Video Generation & Multi-Platform Publishing",
    description: "Automated content pipeline that generates AI videos using ElevenLabs voice synthesis and publishes to YouTube, TikTok, and Instagram simultaneously with optimized captions and hashtags.",
    category: "content",
    technologies: ["n8n", "ElevenLabs", "OpenAI", "YouTube", "TikTok", "Instagram"],
    gradient: "bg-gradient-to-br from-[#ff6b35]/20 to-[#ff8f6b]/20",
    icon: <Video className="w-5 h-5" />,
    metrics: "51 Nodes",
    href: "#",
  },
  {
    id: "podcast-tiktok",
    title: "Podcast to TikTok Clips",
    description: "Transforms long-form podcast episodes into viral short-form clips using Google Gemini for intelligent highlight detection and automated editing with perfect timing.",
    category: "content",
    technologies: ["n8n", "Google Gemini", "FFmpeg", "TikTok", "YouTube Shorts"],
    gradient: "bg-gradient-to-br from-[#7c3aed]/20 to-[#a78bfa]/20",
    icon: <Sparkles className="w-5 h-5" />,
    metrics: "55 Nodes",
    href: "#",
  },

  // Marketing Automations
  {
    id: "linkedin-scraper",
    title: "Google Scraping Agent (LinkedIn)",
    description: "Intelligent lead generation agent that scrapes Google for LinkedIn profiles, enriches data with AI, and automatically adds qualified leads to CRM with personalized outreach templates.",
    category: "marketing",
    technologies: ["n8n", "OpenAI", "LinkedIn", "Google", "GoHighLevel"],
    gradient: "bg-gradient-to-br from-[#0A66C2]/20 to-[#0077B5]/20",
    icon: <Zap className="w-5 h-5" />,
    metrics: "11 Nodes",
    href: "#",
  },
  {
    id: "ai-outreach",
    title: "AI Outreach Webhook System",
    description: "Comprehensive multi-channel outreach automation with AI-personalized emails, SMS sequences, and follow-up scheduling based on engagement signals and lead scoring.",
    category: "marketing",
    technologies: ["n8n", "OpenAI", "GoHighLevel", "Twilio", "SendGrid"],
    gradient: "bg-gradient-to-br from-[#06b6d4]/20 to-[#67e8f9]/20",
    icon: <Mail className="w-5 h-5" />,
    metrics: "88 Nodes",
    href: "#",
    github: "https://github.com/ayaan-commits/ai-outreach",
  },

  // AI Calling
  {
    id: "ai-call",
    title: "AI Call Webhook",
    description: "Voice AI agent powered by Retell AI that handles inbound/outbound calls, qualifies leads with natural conversation, books appointments, and syncs with CRM in real-time.",
    category: "ai-calling",
    technologies: ["n8n", "Retell AI", "OpenAI", "Twilio", "GoHighLevel", "Google Calendar"],
    gradient: "bg-gradient-to-br from-[#10b981]/20 to-[#34d399]/20",
    icon: <Phone className="w-5 h-5" />,
    metrics: "51 Nodes",
    href: "#",
    github: "https://github.com/ayaan-commits/ai-call",
  },

  // AI Texting
  {
    id: "ai-text",
    title: "AI Text Assistant",
    description: "24/7 conversational AI assistant for SMS and WhatsApp that handles customer inquiries, schedules appointments, and escalates complex issues to humans intelligently.",
    category: "ai-texting",
    technologies: ["n8n", "OpenAI", "Twilio", "WhatsApp", "GoHighLevel"],
    gradient: "bg-gradient-to-br from-[#ec4899]/20 to-[#f472b6]/20",
    icon: <MessageSquare className="w-5 h-5" />,
    metrics: "32 Nodes",
    href: "#",
    github: "https://github.com/ayaan-commits/ai-text",
  },
];

const websites: BentoItem[] = [
  {
    id: "igniteict",
    title: "Ignite ICT",
    description: "K-12 ICT curriculum website with dual learning pathways (Digiverse & Codiverse) for 21st century digital literacy education.",
    category: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradient: "bg-gradient-to-br from-[#f97316]/20 to-[#fb923c]/20",
    icon: <Globe className="w-5 h-5" />,
    href: "https://igniteict-website.vercel.app",
    github: "https://github.com/ayaan-commits/igniteict-website",
  },
  {
    id: "transcript-scraper",
    title: "Video Transcriber",
    description: "Full-stack web app that extracts audio from YouTube, TikTok, Instagram, and Twitter videos, then transcribes using OpenAI Whisper with language detection.",
    category: "website",
    technologies: ["React", "FastAPI", "Python", "Whisper", "Tailwind CSS"],
    gradient: "bg-gradient-to-br from-[#f59e0b]/20 to-[#fbbf24]/20",
    icon: <Globe className="w-5 h-5" />,
    href: "#",
    github: "https://github.com/ayaan-commits/transcript-scraper",
  },
  {
    id: "town-country-title",
    title: "Town & Country Title Guaranty",
    description: "SEO-optimized corporate website with 87+ pages, 67 Florida county pages, schema markup, and AI crawler optimization for a title insurance company.",
    category: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
    gradient: "bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/20",
    icon: <Globe className="w-5 h-5" />,
    metrics: "87+ Pages",
    href: "#",
    github: "https://github.com/ayaan-commits/town-country-title",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative noise-bg">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#ff6b35] rounded-full blur-[200px] opacity-10" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#7c3aed] rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#06b6d4] rounded-full blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Automations */}
        <div className="text-center mb-16">
          <p className="text-[#ff6b35] text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <Bot className="w-5 h-5" />
            n8n Automation Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            AI-Powered Automations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Custom n8n workflows that save hours of manual work. From content creation to lead generation, these automations run 24/7.
          </p>
        </div>

        {/* Automations Bento Grid */}
        <BentoGrid items={automations} className="mb-32" />

        {/* Section Header - Websites */}
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] text-lg font-medium mb-4 flex items-center justify-center gap-2">
            <Globe className="w-5 h-5" />
            Web Development
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Websites
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern, performant websites built with Next.js, React, and cutting-edge technologies.
          </p>
        </div>

        {/* Websites Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {websites.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-[#111111] border border-white/5 transition-all duration-500 hover:border-white/10"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.gradient}`}
              />

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className={`p-3 rounded-2xl bg-gradient-to-br ${item.gradient.replace("/20", "")} text-white`}>
                    {item.icon}
                  </span>

                  <div className="flex gap-2">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {item.metrics && (
                  <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-[#7c3aed]/20 text-[#a78bfa] border border-[#7c3aed]/30">
                    {item.metrics}
                  </span>
                )}

                <p className="text-gray-400 mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Automations Built", value: "50+", color: "#ff6b35" },
            { label: "Nodes Configured", value: "500+", color: "#7c3aed" },
            { label: "Hours Saved", value: "1000+", color: "#06b6d4" },
            { label: "Happy Clients", value: "20+", color: "#10b981" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-[#111111] border border-white/5"
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
