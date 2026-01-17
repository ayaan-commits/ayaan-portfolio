"use client";

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  color?: string;
  className?: string;
}

const techColors: Record<string, string> = {
  // Automation
  "n8n": "#FF6D5A",
  "Make.com": "#6366F1",
  "Zapier": "#FF4A00",

  // AI/ML
  "OpenAI": "#10A37F",
  "GPT-4": "#10A37F",
  "Claude": "#D97706",
  "Gemini": "#4285F4",
  "Whisper": "#10A37F",

  // Voice/Communication
  "VAPI": "#7C3AED",
  "ElevenLabs": "#FFFFFF",
  "Twilio": "#F22F46",
  "GoHighLevel": "#00BFA5",

  // Web Tech
  "Next.js": "#FFFFFF",
  "React": "#61DAFB",
  "TypeScript": "#3178C6",
  "Python": "#3776AB",
  "FastAPI": "#009688",
  "Node.js": "#68A063",
  "Tailwind CSS": "#06B6D4",

  // Platforms
  "YouTube": "#FF0000",
  "TikTok": "#000000",
  "Instagram": "#E4405F",
  "LinkedIn": "#0A66C2",
  "Twitter/X": "#1DA1F2",

  // Database/Tools
  "Supabase": "#3ECF8E",
  "PostgreSQL": "#4169E1",
  "Vercel": "#FFFFFF",
  "Google Sheets": "#34A853",
  "Airtable": "#18BFFF",
};

export function TechBadge({ name, color, className }: TechBadgeProps) {
  const badgeColor = color || techColors[name] || "#6B7280";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full",
        "bg-white/5 border border-white/10 text-gray-300",
        "hover:bg-white/10 transition-colors cursor-default",
        className
      )}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: badgeColor }}
      />
      {name}
    </span>
  );
}

interface TechStackProps {
  technologies: string[];
  className?: string;
  limit?: number;
}

export function TechStack({ technologies, className, limit }: TechStackProps) {
  const displayTechs = limit ? technologies.slice(0, limit) : technologies;
  const remaining = limit ? technologies.length - limit : 0;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {displayTechs.map((tech) => (
        <TechBadge key={tech} name={tech} />
      ))}
      {remaining > 0 && (
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-400">
          +{remaining} more
        </span>
      )}
    </div>
  );
}
