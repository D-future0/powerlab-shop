export default function Alert({ type = 'success', message }) {
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100'
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800'

  return (
    <div className={`${bgColor} ${textColor} fixed px-4 py-2 rounded-md shadow-sm mb-4`}>
      {message}
    </div>
  )
}

// This component displays an alert message with a specific type (success or error).
// It uses Tailwind CSS classes to style the alert box with appropriate colors and padding.