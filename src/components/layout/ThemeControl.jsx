import { useTranslation } from 'react-i18next'
import useTheme from '../../hooks/useTheme.js'
import PreferenceDropdown from './PreferenceDropdown.jsx'

function ThemeControl() {
  const { t } = useTranslation()
  const { setTheme, theme, themePreferences } = useTheme()
  const options = [
    {
      value: themePreferences.SYSTEM,
      label: t('preferences.themeSystem'),
    },
    {
      value: themePreferences.LIGHT,
      label: t('preferences.themeLight'),
    },
    {
      value: themePreferences.DARK,
      label: t('preferences.themeDark'),
    },
  ]

  return (
    <PreferenceDropdown
      label={t('preferences.themeLabel')}
      value={theme}
      options={options}
      onChange={setTheme}
      icon={
        <svg viewBox="0 0 24 24">
          <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42M7.06 16.94l-1.42 1.42" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      }
    />
  )
}

export default ThemeControl
