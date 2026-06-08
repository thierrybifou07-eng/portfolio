import { useTranslation } from 'react-i18next'
import LanguageControl from './LanguageControl.jsx'
import ThemeControl from './ThemeControl.jsx'

function PreferenceControls() {
  const { t } = useTranslation()

  return (
    <div
      className="preference-controls"
      role="group"
      aria-label={t('preferences.groupLabel')}
    >
      <ThemeControl />
      <LanguageControl />
    </div>
  )
}

export default PreferenceControls
