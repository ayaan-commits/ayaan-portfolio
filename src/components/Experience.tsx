"use client";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    description: "Building automation solutions and web applications for clients worldwide. Specializing in n8n workflows, AI integrations, and modern web development.",
    achievements: [
      "Delivered 5+ client projects successfully",
      "Built AI voice agents using Retell AI",
      "Created automated workflows with n8n & GoHighLevel",
    ],
  },
  {
    role: "Automation Specialist",
    company: "Freelance Projects",
    period: "2024",
    description: "Developing custom automation solutions for businesses using n8n, Twilio, and various AI tools to streamline operations.",
    achievements: [
      "Automated client communication workflows",
      "Integrated Twilio for SMS/voice features",
      "Saved clients hours of manual work weekly",
    ],
  },
  {
    role: "College Graduate",
    company: "B.Tech / BCA",
    period: "2024",
    description: "Completed degree with focus on computer science and software development. Built multiple projects during academics.",
    achievements: [
      "Developed multiple academic projects",
      "Self-learned modern web technologies",
      "Started freelancing while in final year",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative noise-bg">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#7c3aed] rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#ff6b35] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#ff6b35] text-lg font-medium mb-4">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff6b35] via-[#7c3aed] to-[#06b6d4]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`lg:flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                  <div className="glass rounded-3xl p-8 hover-card">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#ff6b35] to-[#7c3aed] rounded-full text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-[#ff6b35] font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-400 mb-6">{exp.description}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm flex items-center gap-2 lg:justify-start">
                          <span className="text-[#06b6d4]">&#10003;</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#7c3aed] border-4 border-[#0a0a0a]" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
