'use client';

import { content } from '@/lib/content';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            خدماتنا المتكاملة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم ثماني خدمات تسويقية متكاملة مصممة خصيصاً لنجاح عملك في القطاع الطبي
          </p>
          <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-blue-400 rounded mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">اعرف المزيد</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Services Summary */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-10 border border-blue-500 border-opacity-20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            حل متكامل لجميع احتياجات التسويق الرقمي
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-400">8</p>
              <p className="text-gray-300 text-sm mt-1">خدمات رئيسية</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">100%</p>
              <p className="text-gray-300 text-sm mt-1">تكامل شامل</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">∞</p>
              <p className="text-gray-300 text-sm mt-1">دعم مستمر</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">✓</p>
              <p className="text-gray-300 text-sm mt-1">ضمان النتائج</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
