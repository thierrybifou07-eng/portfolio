import { createContext } from 'react'

export const THEME_PREFERENCES = Object.freeze({
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark',
})

export const THEME_STORAGE_KEY = 'portfolio-theme'

export const ThemeContext = createContext(null)
