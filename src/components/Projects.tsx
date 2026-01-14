"use client";

const projects = [
  {
    title: "AI Voice Agent System",
    description: "Intelligent voice agent powered by Retell AI for automated customer support and lead qualification calls.",
    tags: ["Retell AI", "n8n", "Node.js", "Twilio"],
    image: "bg-gradient-to-br from-[#ff6b35] to-[#ff8f6b]",
    link: "#",
    github: "https://github.com/ayaan-commits",
  },
  {
    title: "n8n Automation Workflows",
    description: "Custom automation workflows connecting multiple apps and services for business process automation.",
    tags: ["n8n", "REST APIs", "Webhooks", "Automation"],
    image: "bg-gradient-to-br from-[#7c3aed] to-[#a78bfa]",
    link: "#",
    github: "https://github.com/ayaan-commits",
  },
  {
    title: "GoHighLevel Integration",
    description: "Marketing automation setup with custom pipelines, SMS campaigns, and lead tracking systems.",
    tags: ["GoHighLevel", "Twilio", "CRM", "Marketing"],
    image: "bg-gradient-to-br from-[#06b6d4] to-[#67e8f9]",
    link: "#",
    github: "https://github.com/ayaan-commits",
  },
  {
    title: "Portfolio Website",
    description: "Modern, animated portfolio showcasing creative work with smooth transitions and bold design.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "bg-gradient-to-br from-[#f59e0b] to-[#fbbf24]",
    link: "#",
    github: "https://github.com/ayaan-commits",
  },
  {
    title: "Twilio Communication System",
    description: "Multi-channel communication platform with SMS, voice calls, and WhatsApp integration.",
    tags: ["Twilio", "Node.js", "n8n", "APIs"],
    image: "bg-gradient-to-br from-[#ec4899] to-[#f472b6]",
    link: "#",
    github: "https://github.com/ayaan-commits",
  },
  {
    title: "Business Automation Suite",
    description: "End-to-end automation solution for small businesses including CRM, email marketing, and reporting.",
    tags: ["n8n", "Python", "APIs", "Automation"],
    image: "bg-gradient-to-br from-[#10b981] to-[#34d399]",
    link: "#",
    github: "https://github.com/ayaan-commits",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative noise-bg">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#ff6b35] rounded-full blur-[200px] opacity-10" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#7c3aed] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#ff6b35] text-lg font-medium mb-4">My Recent Work</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-3xl overflow-hidden hover-card group"
            >
              {/* Project Image */}
              <div className={`aspect-video ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.link}
                    className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform"
                    aria-label="View live project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/5 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
