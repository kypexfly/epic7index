import create from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  theme: "dark" | "light",
  toggleTheme: () => void
}

type AppState = {
  selectedId: string;
  setSelectedId: (id:string) => void

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

export const useAppStore = create<AppState>((set) => ({
  selectedId: "",
  setSelectedId: (id) => set({selectedId: id })
}))