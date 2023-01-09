import create from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  theme: "dark" | "light",
  toggleTheme: () => void
}

export const useThemeStore = create(
  persist<ThemeState>((set) => ({
    theme: 'dark',
    toggleTheme: () => set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark'
    }))
  }), {
    name: "theme"
  })
)