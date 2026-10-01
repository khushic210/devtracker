import express from 'express'
import pool from './config/db.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'DevTracker API is running' })
})

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.json({ connected: true, time: result.rows[0].now })
  } catch (err) {
    res.status(500).json({ connected: false, error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})