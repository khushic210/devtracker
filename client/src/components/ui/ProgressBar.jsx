function ProgressBar({ value, color = 'bg-blue-600' }) {
  return (
    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}

export default ProgressBar