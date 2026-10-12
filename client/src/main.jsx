import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const placeholder = (name) => (
  <div className="text-gray-900 dark:text-white">{name} page</div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={placeholder('Dashboard')} />
              <Route path="/dsa" element={placeholder('DSA')} />
              <Route path="/projects" element={placeholder('Projects')} />
              <Route path="/learning" element={placeholder('Learning')} />
              <Route path="/goals" element={placeholder('Goals')} />
              <Route path="/skills" element={placeholder('Skills')} />
              <Route path="/analytics" element={placeholder('Analytics')} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)