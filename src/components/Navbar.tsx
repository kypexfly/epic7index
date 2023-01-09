import { Link, NavLink } from "react-router-dom";
import { Moon, BrightnessUp } from "tabler-icons-react";
import { useThemeStore } from "../store/useThemeStore";
import { useEffect } from "react";

const Navbar = () => {
  const [theme, toggleTheme] = useThemeStore((state) => [
    state.theme,
    state.toggleTheme,
  ]);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === "dark"
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <header id="navbar" className="bg-slate-200/75 dark:bg-slate-900/75 backdrop-blur sticky top-0 z-20">
      <div className="container mx-auto flex justify-between p-2">
        <Link
          className="text-blue-700 dark:text-blue-600 flex items-center font-bold"
          to="/"
        >
          E7INDEX <sup className="text-slate-700 dark:text-slate-400">(BETA)</sup>
        </Link>

        <ul className="flex items-center gap-3">
          <li>
            <NavLink className="hover:dark:text-white" to="/heroes">
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:dark:text-white" to="/artifacts">
              Artifacts
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:dark:text-white" to="/test">
              Test
            </NavLink>
          </li>
        </ul>

        <button
          className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-slate-200 rounded-full p-1 w-16 flex justify-center"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Moon /> : <BrightnessUp />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
