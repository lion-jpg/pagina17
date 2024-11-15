import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones
import enTranslations from '../locales/en/translation.json'; // Traducciones en inglés
import esTranslations from '../locales/es/translation.json'; // Traducciones en español
import jaTranslations from '../locales/ja/translation.json'; // Traducciones en japonés

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      ja: { translation: jaTranslations },
    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;