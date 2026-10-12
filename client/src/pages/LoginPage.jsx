import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../services/api.js'
import { useAuth } from '../context/AuthContext.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await api.post('/auth/login', { email, password })
      login(res.data.token, res.data.user)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <Card>
        <div className="w-80">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome back
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" disabled={loading} fullWidth>
              {loading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage