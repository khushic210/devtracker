import { useTheme } from './context/ThemeContext.jsx'
import Button from './components/ui/Button.jsx'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white dark:bg-gray-900 transition-colors">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        DevTracker
      </h1>
      <Button onClick={toggleTheme}>
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </Button>
    </div>
  )
}

export default App