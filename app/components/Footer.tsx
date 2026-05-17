'use client';

import { content } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-blue-500 border-opacity-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              {content.company.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              وكالة متخصصة في التسويق الرقمي للقطاع الطبي
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 {content.footer.address}</p>
              <p>⏰ {content.footer.hours}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">الروابط السريعة</h4>
            <ul className="space-y-2">
              {content.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">الخدمات</h4>
            <ul className="space-y-2">
              {content.services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href={`tel:${content.company.phone}`}
                className="block text-blue-300 hover:text-blue-200 transition-colors duration-300 text-sm font-semibold"
              >
                {content.company.phone}
              </a>
              <a
                href={`mailto:${content.company.email}`}
                className="block text-blue-300 hover:text-blue-200 transition-colors duration-300 text-sm font-semibold"
              >
                {content.company.email}
              </a>
              <div className="pt-2">
                <p className="text-gray-400 text-sm mb-2">تابعنا:</p>
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-sm"
                >
                  {content.company.social}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            {content.footer.copyright}
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
              شروط الخدمة
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
              خريطة الموقع
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
