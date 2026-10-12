import { Flame, CheckCircle2, FolderKanban, BookOpen } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import Card from '../components/ui/Card.jsx'
import StatCard from '../components/ui/StatCard.jsx'
import ProgressBar from '../components/ui/ProgressBar.jsx'
import { mockStats, mockDsa, mockGoals, mockProjects, mockActivity } from '../data/mockData.js'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function DashboardPage() {
  const { user } = useAuth()
  const total = mockDsa.easy + mockDsa.medium + mockDsa.hard

  return (
    <div className="flex flex-col gap-6 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {getGreeting()}, {user?.name} 👋
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
          {' · '}Showing sample data
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Flame} label="Coding streak" value={`${mockStats.streak} days`} />
        <StatCard icon={CheckCircle2} label="Problems solved" value={mockStats.problemsSolved} />
        <StatCard icon={FolderKanban} label="Projects" value={mockStats.projects} />
        <StatCard icon={BookOpen} label="Learning progress" value={`${mockStats.learningProgress}%`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">DSA progress</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{total} problems total</p>
          <div className="flex flex-col gap-3">
            {[
              ['Easy', mockDsa.easy, 'bg-green-500'],
              ['Medium', mockDsa.medium, 'bg-yellow-500'],
              ['Hard', mockDsa.hard, 'bg-red-500'],
            ].map(([label, count, color]) => (
              <div key={label}>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                  <span>{label}</span>
                  <span>{count}</span>
                </div>
                <ProgressBar value={(count / total) * 100} color={color} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Active goals</h2>
          <div className="flex flex-col gap-4">
            {mockGoals.map((goal) => (
              <div key={goal.id}>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                  <span>{goal.title}</span>
                  <span>{goal.progress}%</span>
                </div>
                <ProgressBar value={goal.progress} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="flex flex-col gap-4">
            {mockProjects.map((p) => (
              <div key={p.id}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900 dark:text-white">{p.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{p.status}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{p.tech}</p>
                <ProgressBar value={p.progress} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Recent activity</h2>
          <ul className="flex flex-col gap-3">
            {mockActivity.map((item) => (
              <li key={item} className="text-sm text-gray-600 dark:text-gray-300">
                • {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage