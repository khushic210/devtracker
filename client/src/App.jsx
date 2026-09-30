import { useTheme } from './context/ThemeContext.jsx'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white dark:bg-gray-900 transition-colors">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        DevTracker
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  )
}

export default App