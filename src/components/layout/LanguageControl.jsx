import { useTranslation } from 'react-i18next'
import {
  DEFAULT_LANGUAGE,
  normalizeLanguage,
  SUPPORTED_LANGUAGES,
} from '../../i18n/index.js'
import PreferenceDropdown from './PreferenceDropdown.jsx'

function LanguageControl() {
  const { i18n, t } = useTranslation()
  const activeLanguage =
    normalizeLanguage(i18n.resolvedLanguage) ?? DEFAULT_LANGUAGE
  const options = SUPPORTED_LANGUAGES.map((language) => ({
    value: language,
    label: language.toUpperCase(),
  }))

  return (
    <PreferenceDropdown
      label={t('preferences.languageLabel')}
      value={activeLanguage}
      options={options}
      onChange={(language) => i18n.changeLanguage(language)}
      icon={
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />
        </svg>
      }
    />
  )
}

export default LanguageControl
