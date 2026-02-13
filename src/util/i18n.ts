import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      OpenTheGame: "Open the game",
      DownloadCasino: "Download Casino",
      PlayMinAnywhereAnytime: "Play Min anywhere, anytime",
      InstallApp: "Install App",
      Only18Plus: "Only 18+",
      CasinoIsCertifiedByTheAnjouanGamingAuthority:
        "Casino is certified by the Anjouan Gaming Authority",
      UsOnSocialMedia: "Us on social media:",
      BackgroundImage:
        "linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)",
    },
  },
  fr: {
    translation: {
      OpenTheGame: "Ouvrir le jeu",
      DownloadCasino: "Télécharger le Casino",
      PlayMinAnywhereAnytime: "Jouez Min n'importe où, n'importe quand",
      InstallApp: "Installer l'application",
      Only18Plus: "Seulement 18+",
      CasinoIsCertifiedByTheAnjouanGamingAuthority:
        "Casino est certifié par l'Autorité de jeu d'Anjouan",
      UsOnSocialMedia: "Nous sur les réseaux sociaux:",
      BackgroundImage:
        "linear-gradient(84.38deg, #4A90E2 7.59%, #50C878 96.71%)",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
