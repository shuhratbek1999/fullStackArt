import { createI18n } from "vue-i18n";
import en from "./en.json";
import de from "./de.json";

function loadLocaleMessages() {
    return {
      en: en,
      de: de
    };
  }

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "de",
    legacy: false,
    messages: loadLocaleMessages(),
});

console.log("Loaded Messages:", i18n);
// Output the loaded messages to the console for debugging

export default i18n;