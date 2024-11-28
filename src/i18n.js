import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import translationEN from "../src/locales/en/translation.json";
import translationUA from "../src/locales/uk/translation.json";
import translationRU from "../src/locales/ru/translation.json";


const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    },
    ru: {
        translation: translationRU
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        fallbackLng: 'en',
    })
