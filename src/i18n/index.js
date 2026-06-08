import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import siteConfig from '../config/site.js'
import enTranslation from './locales/en/translation.js'
import frTranslation from './locales/fr/translation.js'

export const LANGUAGE_STORAGE_KEY = 'portfolio-language'
export const DEFAULT_LANGUAGE = siteConfig.defaultLocale
export const SUPPORTED_LANGUAGES = siteConfig.supportedLocales

export function normalizeLanguage(language) {
  const normalizedLanguage = language?.toLowerCase().split('-')[0]

  return SUPPORTED_LANGUAGES.includes(normalizedLanguage)
    ? normalizedLanguage
    : null
}

function getStoredLanguage() {
  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY))
  } catch {
    return null
  }
}

function getBrowserLanguage() {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  return (
    browserLanguages.map(normalizeLanguage).find(Boolean) ?? DEFAULT_LANGUAGE
  )
}

function getInitialLanguage() {
  return getStoredLanguage() ?? getBrowserLanguage()
}

function applyDocumentLanguage(language) {
  const resolvedLanguage = normalizeLanguage(language) ?? DEFAULT_LANGUAGE
  const openGraphLocale = resolvedLanguage === 'en' ? 'en_US' : 'fr_FR'

  document.documentElement.lang = resolvedLanguage
  document
    .querySelector('meta[property="og:locale"]')
    ?.setAttribute('content', openGraphLocale)
}

function persistLanguage(language) {
  const normalizedLanguage = normalizeLanguage(language)

  if (!normalizedLanguage) {
    return
  }

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage)
  } catch {
    // Language changes still work for the current session without storage.
  }
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: frTranslation },
    en: { translation: enTranslation },
  },
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  load: 'languageOnly',
  initImmediate: false,
  interpolation: {
    defaultVariables: {
      siteName: siteConfig.name,
    },
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

applyDocumentLanguage(i18n.resolvedLanguage)

i18n.on('languageChanged', (language) => {
  applyDocumentLanguage(language)
  persistLanguage(language)
})

export default i18n
