'use client';

import { content } from '@/lib/content';

export default function PartnersSection() {
  return (
    <section className="w-full py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.partners.title}
          </h2>
          <p className="text-xl text-gray-300">
            {content.partners.subtitle}
          </p>
          <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-blue-400 rounded mx-auto mt-4"></div>
        </div>

        {/* Main stat */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 rounded-2xl p-12 border border-blue-500 border-opacity-20 text-center mb-16">
          <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 mb-4">
            {content.partners.count}
          </p>
          <p className="text-xl text-gray-300">
            {content.partners.label}
          </p>
        </div>

        {/* Partner logos/cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center justify-center h-40 mb-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-gray-400 mt-2">مؤسسة طبية ناجحة</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-blue-300 font-semibold">حالة نجاح</p>
                <p className="text-gray-400 text-sm mt-1">تحسن ملحوظ في الوصول والمبيعات</p>
              </div>
            </div>
          ))}
        </div>

        {/* Results highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-8 border-l-4 border-blue-500">
            <p className="text-2xl font-bold text-blue-400 mb-2">+350%</p>
            <p className="text-gray-300">متوسط زيادة العملاء</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 border-l-4 border-blue-500">
            <p className="text-2xl font-bold text-blue-400 mb-2">+500%</p>
            <p className="text-gray-300">متوسط زيادة الحجوزات الإلكترونية</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 border-l-4 border-blue-500">
            <p className="text-2xl font-bold text-blue-400 mb-2">98%</p>
            <p className="text-gray-300">معدل رضا العملاء</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            هل تريد أن تكون من قصص نجاحنا التالية؟
          </p>
          <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            تحدث معنا اليوم
          </button>
        </div>
      </div>
    </section>
  );
}
