import en from "./locales/en.json";
import ja from "./locales/ja.json";
import { createI18n } from "vue-i18n";
export const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en,
    ja,
  },
});
