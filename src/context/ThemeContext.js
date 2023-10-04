import { createContext } from "react";

export const themeContext = createContext({
  theme: "",
  onChangeTheme: () => {},
});

themeContext.displayName = "ThemeContext";
