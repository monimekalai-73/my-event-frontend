'use client';

import { useTranslation } from 'react-i18next';
import '../i18n'; // Import the i18n setup

export default function HomePage() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <html lang={i18n.language} dir={isArabic ? 'rtl' : 'ltr'}>
      <body className="p-4 font-sans">
        <h1>{t('welcome')}</h1>
        <button onClick={() => i18n.changeLanguage(isArabic ? 'en' : 'ar')}>
          {isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
        </button>
      </body>
    </html>
  );
}
