import { useTheme } from './context/ThemeContext.jsx'
import Button from './components/ui/Button.jsx'
import Card from './components/ui/Card.jsx'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 dark:bg-gray-950 transition-colors">
      <Card>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          DevTracker
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Track your developer journey.
        </p>
        <Button onClick={toggleTheme}>
          {isDark ? 'Switch to Light' : 'Switch to Dark'}
        </Button>
      </Card>
    </div>
  )
}

export default App