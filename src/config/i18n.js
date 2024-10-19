import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es', 
    lng: 'es', 

    detection: {
      order: ['localStorage', 'cookie', 'navigator'], 
      caches: ['localStorage', 'cookie'], 
    },

    interpolation: {
      escapeValue: false, 
    },

    backend: {
      loadPath: '/locales/{{lng}}/translation.json', 
    },

    load: 'languageOnly', 
  }, (err) => {
    if (err) {
      console.error('Error initializing i18next:', err);
    }
  });

export default i18n;
