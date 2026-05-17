'use client';

import { content } from '@/lib/content';

export default function StatsSection() {
  return (
    <section className="w-full py-20 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            إحصائيات نجاحنا
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            أرقام تعكس التزامنا بالتميز والنتائج الملموسة
          </p>
          <div className="h-1 w-32 bg-gradient-to-l from-blue-500 to-blue-400 rounded mx-auto mt-4"></div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Number */}
              <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 mb-4 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>

              {/* Label */}
              <p className="text-lg text-gray-300 font-medium">
                {stat.label}
              </p>

              {/* Accent dot */}
              <div className="h-1 w-0 bg-gradient-to-l from-blue-500 to-blue-400 mx-auto mt-4 group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Breakdown section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Left side - More stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">التفاصيل</h3>
            
            <div className="bg-slate-800 rounded-lg p-6 border-r-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">مشاريع في القطاع الطبي</h4>
                <span className="text-2xl font-bold text-blue-400">100%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border-r-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">معدل الاحتفاظ بالعملاء</h4>
                <span className="text-2xl font-bold text-blue-400">95%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border-r-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-white">النمو السنوي</h4>
                <span className="text-2xl font-bold text-blue-400">45%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>

          {/* Right side - Achievement highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">الإنجازات</h3>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  الأفضل في الصناعة
                </h4>
                <p className="text-gray-400">
                  معترف بنا كأفضل وكالة تسويق رقمي متخصصة في القطاع الطبي
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  فريق خبير
                </h4>
                <p className="text-gray-400">
                  فريق من المتخصصين في التسويق الرقمي والقطاع الطبي
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  ثقة العملاء
                </h4>
                <p className="text-gray-400">
                  ثقة من عشرات المؤسسات الطبية الكبرى والناشئة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
