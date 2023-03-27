import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          homepage: {
            title: "Pokemon 1st Generation Encyclopedia",
            subtitle: "Discover 151 of the Pokemon that statred it all.",
            button: "Enter Here"
          },
          navigation: {
            home: "Home",
            list: "Pokemon List"
          },
          poke_modal: {
            id: "Pokemon ID: ",
            name: "Name: ",
            height: "Height: ",
            weight: "Weight: ",
            height_metric: "cm",
            weight_metric: "kg",
            type: "Types: ",
            habitat: "Habitat: ",
            not_found: "Not Found",
            moves_number: "No of Moves: ",
            moves_rand: "Random Move:"
          },
          poke_list: {
            title: "Pokemon List",
            instr: "Click on a Pokemon to discover more..",
            poke_card: {
              type: "Types: ",
              weight: "Weight: "
            }
          }
        }
      }
    }
  });

export default i18n;