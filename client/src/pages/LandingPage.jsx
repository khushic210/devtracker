import { Link } from 'react-router-dom'
import { Code2, GitBranch, FolderKanban, BookOpen, BarChart3, Target } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

const features = [
  { icon: Code2, title: 'DSA Tracking', desc: 'Log problems, track difficulty, and monitor your solving streak.' },
  { icon: GitBranch, title: 'GitHub Activity', desc: 'See your contributions and repository activity in one place.' },
  { icon: FolderKanban, title: 'Project Tracking', desc: 'Manage every project from idea to deployment.' },
  { icon: BookOpen, title: 'Learning Goals', desc: 'Track courses and topics as you work through them.' },
  { icon: BarChart3, title: 'Developer Analytics', desc: 'Visualize your progress with clear, useful charts.' },
  { icon: Target, title: 'Career Progress', desc: 'Set goals and track your path toward internships.' },
]

function LandingPage() {
  const { toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
        <span className="font-bold text-lg">DevTracker</span>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="text-sm text-gray-500 dark:text-gray-400">
            Toggle theme
          </button>
          <Link to="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Track your developer journey. Build better habits.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
          DevTracker brings together your coding progress, learning, projects, goals, and developer analytics — all in one dashboard.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/dashboard">
            <Button>Start Tracking</Button>
          </Link>
          <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline">
            Explore Features
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Everything in one place</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <Icon size={24} className="text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-10">How it works</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
          {['Create your profile', 'Connect your activity', 'Track goals & progress', 'Improve consistently'].map((step, i) => (
            <div key={step}>
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center px-6 py-20">
        <h2 className="text-2xl font-bold mb-4">Start your developer journey today</h2>
        <Link to="/dashboard">
          <Button>Start Tracking</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 dark:text-gray-600 py-6 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} DevTracker
      </footer>
    </div>
  )
}

export default LandingPage