'use client'

import { createContext, useState, useContext } from "react";

type theme = string | undefined

interface ThemeContextType {
  theme: theme,
  setTheme: React.Dispatch<React.SetStateAction<theme>>
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
  const [theme, setTheme] = useState<theme>(undefined);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if(!themeContext){
    throw Error('useThemeContext must be used under ThemeContextProvider');
  }
  return themeContext;
};