"use client";

const stats = [
  { number: "50+", label: "Automations Built" },
  { number: "500+", label: "Nodes Configured" },
  { number: "20+", label: "Happy Clients" },
  { number: "15+", label: "Technologies" },
];

const highlights = [
  "Scaled business operations from Rs 8L to Rs 40L monthly",
  "Built 50+ production-ready n8n workflows",
  "Built AI voice agents with Retell AI",
  "Automation Engineer at Prodigy Flow AI",
];

export default function About() {
  return (
    <section id="about" className="py-32 relative noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#ff6b35] text-lg font-medium mb-4">Get To Know</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative z-10 glass rounded-3xl p-8 hover-card">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#ff6b35]/20 to-[#7c3aed]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-[#ff6b35] to-[#7c3aed] flex items-center justify-center text-6xl font-bold">
                    MA
                  </div>
                  <p className="mt-6 text-xl font-semibold text-white">Mohammad Ayaan</p>
                  <p className="text-gray-400">Automation Engineer</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#ff6b35] rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#7c3aed] rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              AI Automation Engineer at{" "}
              <span className="gradient-text">Prodigy Flow AI</span>
            </h3>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I&apos;m Mohammad Ayaan Ansari - part tech builder, part creative mind. I work at
              the intersection of automation, content, and problem-solving. Whether it&apos;s
              setting up advanced workflows with n8n, GoHighLevel, or Twilio, I care
              about making things that work - fast, clean, and with real impact.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I&apos;m not someone who waits to be told what to do. I plan, build, and iterate.
              I ask hard questions. And I love learning - not just for the sake of it, but
              because better understanding leads to better execution.
            </p>

            {/* Highlights */}
            <div className="mb-8 space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-4 text-center hover-card"
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
