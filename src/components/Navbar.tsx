import { Link, NavLink } from 'react-router-dom'
import { Moon, BrightnessUp } from 'tabler-icons-react'
import { useThemeStore } from '../store/useStore'
import { useEffect } from 'react'

const Navbar = () => {
  const [theme, toggleTheme] = useThemeStore((state) => [state.theme, state.toggleTheme])

  useEffect(() => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'
    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <header className='sticky top-0 z-20 bg-slate-200/50 backdrop-blur dark:bg-slate-800/50'>
      <div className='container mx-auto flex justify-between p-4'>
        <Link className='flex items-center font-bold text-blue-700 dark:text-blue-600' to='/'>
          E7INDEX
        </Link>

        <ul className='flex items-center gap-3'>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-blue-500' : undefined)}
              to='/news'
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-blue-500' : undefined)}
              to='/heroes'
            >
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-blue-500' : undefined)}
              to='/artifacts'
            >
              Artifacts
            </NavLink>
          </li>
        </ul>

        <button className='flex items-center justify-center' onClick={toggleTheme}>
          {theme === 'dark' ? <Moon size={24} /> : <BrightnessUp size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
