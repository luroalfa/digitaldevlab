import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        detection: {
            order: ['cookie', 'localStorage', 'navigator'],
            caches: ['cookie'],
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/src/locales/{{lng}}/translation.json',
        },
        load: 'languageOnly',
    }, (err, t) => {
        if (err) {
            console.error('Error initializing i18next:', err);
        } else {
            console.log('i18next initialized successfully with language:', i18n.language);
        }
    });

export default i18n;
