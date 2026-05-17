'use client';

import { content } from '@/lib/content';

export default function DifferentiatorsSection() {
  return (
    <section className="w-full py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ما يميزنا عن الآخرين
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نقدم ستة أسباب قوية تجعل وكالتنا الخيار الأمثل لنمو عملك
          </p>
          <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-blue-400 rounded mx-auto mt-4"></div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.differentiators.map((diff, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Number badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {diff.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {diff.description}
              </p>

              {/* Accent line */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-l from-blue-500 to-blue-400 mt-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">
            هذه هي مجرد بداية. دعنا نساعدك على تحقيق أهدافك التسويقية.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            احجز استشارة مجانية
          </button>
        </div>
      </div>
    </section>
  );
}
