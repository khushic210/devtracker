import { Sun, Moon, Menu } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'

function Navbar({ onMenuClick }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="md:hidden text-gray-600 dark:text-gray-300">
          <Menu size={22} />
        </button>
        <span className="font-bold text-lg text-gray-900 dark:text-white">DevTracker</span>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  )
}

export default Navbar