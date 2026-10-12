function Button({ children, onClick, type = 'button', disabled = false, fullWidth = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button