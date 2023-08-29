import { useContext } from 'react'
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const selectedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(selectedTheme)
        document.body.className = selectedTheme
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, selectedTheme)
    }

    return {
        toggleTheme,
        theme: theme ?? Theme.LIGHT
    }
}
