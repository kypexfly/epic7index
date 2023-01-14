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
    <header
      id='navbar'
      className='sticky top-0 z-20 bg-slate-200/75 backdrop-blur dark:bg-slate-900/75'
    >
      <div className='container mx-auto flex justify-between p-2'>
        <Link className='flex items-center font-bold text-blue-700 dark:text-blue-600' to='/'>
          E7INDEX <sup className='text-slate-700 dark:text-slate-400'>(BETA)</sup>
        </Link>

        <ul className='flex items-center gap-3'>
          <li>
            <NavLink className='hover:dark:text-white' to='/news'>
              News
            </NavLink>
          </li>
          <li>
            <NavLink className='hover:dark:text-white' to='/heroes'>
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink className='hover:dark:text-white' to='/artifacts'>
              Artifacts
            </NavLink>
          </li>
        </ul>

        <button
          className='flex w-12 items-center justify-center rounded-full bg-blue-700 p-1 text-slate-200 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Moon size={22} /> : <BrightnessUp size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
