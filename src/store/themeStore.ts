import { create } from "zustand";

type ThemeStore = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode:
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    document.documentElement.classList.contains("dark"),
  toggleTheme: () =>
    set((state) => {
      const newIsDarkMode = !state.isDarkMode;
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
      return { isDarkMode: newIsDarkMode };
    }),
}));
