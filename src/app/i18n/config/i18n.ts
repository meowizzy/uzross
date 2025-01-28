import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { E_LANGUAGES } from "../types";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: E_LANGUAGES.uz,
    supportedLngs: [E_LANGUAGES.uz, E_LANGUAGES.ru, E_LANGUAGES.en],
    debug: isDev,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
