"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative noise-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b35] rounded-full blur-[150px] opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed] rounded-full blur-[150px] opacity-20 animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#06b6d4] rounded-full blur-[100px] opacity-10 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting */}
        <p className="text-[#ff6b35] text-lg md:text-xl font-medium mb-4 animate-slide-up">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-text">Mohammad Ayaan</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Part tech builder, part creative mind. I specialize in automation, AI integrations,
          and building modern web experiences that solve real problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#7c3aed] rounded-full font-semibold text-white hover:opacity-90 transition-all hover:scale-105 animate-pulse-glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-[#ff6b35] rounded-full font-semibold text-white hover:bg-[#ff6b35]/10 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
