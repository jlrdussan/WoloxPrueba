import { createI18n } from "vue-i18n";
import es from "./plugins/lang/es.json";
import en from "./plugins/lang/en.json";
const messages = {
  en: en,
  es: es,
};
export const i18n = createI18n({
  locale: "es", // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});
