'use client';

//import { useTranslation } from 'react-i18next';
import '../i18n'; // Import the i18n setup
import { useEffect, useState } from 'react';

/*export default function HomePage() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage(isArabic ? 'en' : 'ar')}>
        {isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
      </button>
    </div>
  );
}*/
export default function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>{message}</p>
    </div>
  );
}
