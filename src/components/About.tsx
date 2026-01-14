"use client";

const stats = [
  { number: "1+", label: "Year Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "5+", label: "Happy Clients" },
  { number: "8+", label: "Technologies" },
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
                    A
                  </div>
                  <p className="mt-6 text-gray-400">Your photo here</p>
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
              A passionate developer based in{" "}
              <span className="gradient-text">Durg, Chhattisgarh</span>
            </h3>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I&apos;m Mohammad Ayaan Ansari - a full-stack developer and automation specialist.
              I love building smart solutions using n8n, AI tools, and modern web technologies.
              Fresh out of college and already working on exciting freelance projects!
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              My expertise spans workflow automation, AI voice agents with Retell AI,
              communication systems with Twilio, and marketing automation with GoHighLevel.
              I turn complex ideas into seamless digital experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-4 text-center hover-card"
                >
                  <p className="text-3xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
