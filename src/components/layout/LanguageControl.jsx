import { useTranslation } from 'react-i18next'
import {
  DEFAULT_LANGUAGE,
  normalizeLanguage,
  SUPPORTED_LANGUAGES,
} from '../../i18n/index.js'

function LanguageControl() {
  const { i18n, t } = useTranslation()
  const activeLanguage =
    normalizeLanguage(i18n.resolvedLanguage) ?? DEFAULT_LANGUAGE

  return (
    <label className="preference-control preference-control-language">
      <span className="visually-hidden">{t('preferences.languageLabel')}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />
      </svg>
      <select
        aria-label={t('preferences.languageLabel')}
        value={activeLanguage}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  )
}

export default LanguageControl
