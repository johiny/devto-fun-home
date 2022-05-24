import React,{useState,createContext, Children} from "react";
import { lightmode } from "../SimpleComponents/Themes";

const ThemeContext = createContext(null)
const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(lightmode)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider,ThemeContext}