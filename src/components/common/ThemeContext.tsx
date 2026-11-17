import {
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  type ReactNode,
} from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

function currentTheme() {
  return document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme: string) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useLayoutEffect(() => {
    applyTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(currentTheme() === "light" ? "dark" : "light");
  }, []);

  const value = useMemo(
    () => ({ theme: currentTheme(), toggleTheme }),
    [toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
