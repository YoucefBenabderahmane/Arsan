import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translation.en
      },
      ar: {
        translation: translation.ar
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
