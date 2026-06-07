import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getPortfolioData } from '../data/index.js'

function usePortfolioData() {
  const { i18n } = useTranslation()

  return useMemo(
    () => getPortfolioData(i18n.resolvedLanguage),
    [i18n.resolvedLanguage],
  )
}

export default usePortfolioData
