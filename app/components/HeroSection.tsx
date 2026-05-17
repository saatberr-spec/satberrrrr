'use client';

import { content } from '@/lib/content';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Company Name */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              {content.company.name}
            </h1>
            <p className="text-lg sm:text-xl text-blue-200">
              {content.company.nameEN}
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              {content.company.tagline}
            </p>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              {content.company.specialty}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300">
              {content.cta.buttonText}
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-blue-200 font-semibold border border-blue-400 rounded-lg transition-colors duration-300">
              تعرف على خدماتنا
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
