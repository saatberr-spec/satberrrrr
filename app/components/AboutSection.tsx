'use client';

import { content } from '@/lib/content';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {content.about.title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-l from-blue-500 to-blue-400 rounded"></div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {content.about.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {content.stats.map((stat, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-4 border border-blue-500 border-opacity-20">
                  <p className="text-2xl font-bold text-blue-400">{stat.number}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden border border-blue-500 border-opacity-30">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-2">راس</div>
                <p className="text-lg">وكالة التسويق الرقمي الطبي</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
