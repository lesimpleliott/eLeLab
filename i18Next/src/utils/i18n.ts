import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "../../locales/de/translation.json";
import en from "../../locales/en/translation.json";
import fr from "../../locales/fr/translation.json";
import ru from "../../locales/ru/translation.json";

const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  debug: false, // true: active le mode debug
  // lng: "en", // langue actuelle => géré par composant LangSelector.tsx
  fallbackLng: "fr", // langue par défaut si la langue actuelle n'est pas disponible
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
