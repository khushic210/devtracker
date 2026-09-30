import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AppLayout from './layouts/AppLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<div className="text-gray-900 dark:text-white">Dashboard page</div>} />
            <Route path="/dsa" element={<div className="text-gray-900 dark:text-white">DSA page</div>} />
            <Route path="/projects" element={<div className="text-gray-900 dark:text-white">Projects page</div>} />
            <Route path="/learning" element={<div className="text-gray-900 dark:text-white">Learning page</div>} />
            <Route path="/goals" element={<div className="text-gray-900 dark:text-white">Goals page</div>} />
            <Route path="/skills" element={<div className="text-gray-900 dark:text-white">Skills page</div>} />
            <Route path="/analytics" element={<div className="text-gray-900 dark:text-white">Analytics page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)