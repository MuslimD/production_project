import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContex';

interface UseThemaResult {
    handleThema: () => void;
    theme:Theme;
}

export function useThema():UseThemaResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThema = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme, handleThema,
    };
}
