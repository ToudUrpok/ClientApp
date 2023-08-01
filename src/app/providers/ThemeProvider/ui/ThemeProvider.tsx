import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { THEME_LOCAL_STORAGE_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    defaultTheme?: Theme
}

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    document.body.className = theme

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
