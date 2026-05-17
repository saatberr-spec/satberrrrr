'use client';

import { content } from '@/lib/content';

export default function ClosingSection() {
  return (
    <section id="contact" className="w-full py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {content.cta.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            {content.cta.description}
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-bold text-white mb-2">اتصل بنا</h3>
            <p className="text-blue-300 font-semibold mb-1">{content.company.phone}</p>
            <p className="text-sm text-gray-400">متاح يومياً خلال ساعات العمل</p>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-lg font-bold text-white mb-2">البريد الإلكتروني</h3>
            <p className="text-blue-300 font-semibold mb-1">{content.company.email}</p>
            <p className="text-sm text-gray-400">سنرد عليك خلال 24 ساعة</p>
          </div>

          {/* Social */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg font-bold text-white mb-2">تابعنا على وسائل التواصل</h3>
            <p className="text-blue-300 font-semibold mb-1">{content.company.social}</p>
            <p className="text-sm text-gray-400">محتوى قيم يومي</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-12 border border-blue-500 border-opacity-20">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            {content.cta.contact}
          </h3>
          <p className="text-gray-300 text-center mb-8">
            أخبرنا عن احتياجاتك وسنبتكر الحل المناسب لك
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  اسمك الكامل
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسمك"
                  className="w-full px-4 py-3 bg-slate-700 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-slate-700 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                اسم العيادة/المستشفى
              </label>
              <input
                type="text"
                placeholder="اسم مؤسستك الطبية"
                className="w-full px-4 py-3 bg-slate-700 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                الرسالة
              </label>
              <textarea
                rows={4}
                placeholder="أخبرنا عن احتياجاتك ورؤيتك..."
                className="w-full px-4 py-3 bg-slate-700 border border-blue-500 border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                أرسل الآن
              </button>
              <button
                type="reset"
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                مسح
              </button>
            </div>
          </form>
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300">
            شكراً لك على اهتمامك بـ <span className="text-blue-400 font-bold">راس</span>
          </p>
          <p className="text-gray-400 mt-2">
            نتطلع لمساعدتك في تحقيق أهدافك التسويقية
          </p>
        </div>
      </div>
    </section>
  );
}
