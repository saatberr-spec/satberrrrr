'use client';

import { content } from '@/lib/content';

export default function VisionMissionValuesSection() {
  return (
    <section className="w-full py-20 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            رؤيتنا ورسالتنا وقيمنا
          </h2>
          <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-blue-400 rounded mx-auto"></div>
        </div>

        {/* Vision, Mission, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-4">01</div>
            <h3 className="text-2xl font-bold text-white mb-4">{content.vision.title}</h3>
            <p className="text-gray-300 leading-relaxed">{content.vision.description}</p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-4">02</div>
            <h3 className="text-2xl font-bold text-white mb-4">{content.mission.title}</h3>
            <p className="text-gray-300 leading-relaxed">{content.mission.description}</p>
          </div>

          {/* Core Focus */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-4">03</div>
            <h3 className="text-2xl font-bold text-white mb-4">القيم الأساسية</h3>
            <ul className="space-y-3">
              {content.values.map((value, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span>{value.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Detail Section */}
        <div className="mt-16 pt-12 border-t border-blue-500 border-opacity-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">قيمنا الأساسية بالتفصيل</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.values.map((value, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-blue-300 mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
