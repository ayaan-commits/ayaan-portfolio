"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { TiltCard } from "./tilt-card";
import { TechStack } from "./tech-badge";
import { ArrowUpRight, Github, ExternalLink, Bot, Video, MessageSquare, Phone, Mail, Globe } from "lucide-react";

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  category: "automation" | "website" | "ai-calling" | "ai-texting" | "content" | "marketing";
  technologies: string[];
  gradient: string;
  icon?: ReactNode;
  href?: string;
  github?: string;
  metrics?: string;
  size?: "small" | "medium" | "large";
}

const categoryIcons: Record<string, ReactNode> = {
  "automation": <Bot className="w-5 h-5" />,
  "website": <Globe className="w-5 h-5" />,
  "ai-calling": <Phone className="w-5 h-5" />,
  "ai-texting": <MessageSquare className="w-5 h-5" />,
  "content": <Video className="w-5 h-5" />,
  "marketing": <Mail className="w-5 h-5" />,
};

const categoryLabels: Record<string, string> = {
  "automation": "Automation",
  "website": "Website",
  "ai-calling": "AI Calling",
  "ai-texting": "AI Texting",
  "content": "Content",
  "marketing": "Marketing",
};

interface BentoCardProps {
  item: BentoItem;
  className?: string;
}

export function BentoCard({ item, className }: BentoCardProps) {
  return (
    <TiltCard
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "bg-[#111111] border border-white/5",
        "transition-all duration-500",
        className
      )}
    >
      {/* Gradient Background */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          item.gradient
        )}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={cn(
              "p-2 rounded-xl",
              "bg-gradient-to-br",
              item.gradient.replace("bg-gradient-to-br", ""),
              "text-white"
            )}>
              {item.icon || categoryIcons[item.category]}
            </span>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {categoryLabels[item.category]}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
          {item.description}
        </p>

        {/* Metrics Badge */}
        {item.metrics && (
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#ff6b35]/20 text-[#ff6b35] border border-[#ff6b35]/30">
              {item.metrics}
            </span>
          </div>
        )}

        {/* Tech Stack */}
        <TechStack technologies={item.technologies} limit={4} />

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </TiltCard>
  );
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      className
    )}>
      {items.map((item, index) => {
        // Make first item larger on large screens
        const isLarge = index === 0;
        const isMedium = index === 1 || index === 2;

        return (
          <BentoCard
            key={item.id}
            item={item}
            className={cn(
              "min-h-[280px]",
              isLarge && "lg:col-span-2 lg:row-span-1",
              isMedium && "lg:col-span-1"
            )}
          />
        );
      })}
    </div>
  );
}
