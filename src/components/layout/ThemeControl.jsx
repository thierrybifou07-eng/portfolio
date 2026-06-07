import { useTranslation } from 'react-i18next'
import useTheme from '../../hooks/useTheme.js'

function ThemeControl() {
  const { t } = useTranslation()
  const { setTheme, theme, themePreferences } = useTheme()

  return (
    <label className="preference-control">
      <span className="visually-hidden">{t('preferences.themeLabel')}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42M7.06 16.94l-1.42 1.42" />
        <circle cx="12" cy="12" r="4" />
      </svg>
      <select
        aria-label={t('preferences.themeLabel')}
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
      >
        <option value={themePreferences.SYSTEM}>
          {t('preferences.themeSystem')}
        </option>
        <option value={themePreferences.LIGHT}>
          {t('preferences.themeLight')}
        </option>
        <option value={themePreferences.DARK}>
          {t('preferences.themeDark')}
        </option>
      </select>
    </label>
  )
}

export default ThemeControl
