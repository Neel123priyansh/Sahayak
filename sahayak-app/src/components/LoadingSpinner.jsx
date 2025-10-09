import React from 'react'

const LoadingSpinner = ({ size = 'medium', variant = 'default', text = 'Loading...' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small': return 'w-4 h-4'
      case 'large': return 'w-12 h-12'
      case 'xl': return 'w-16 h-16'
      default: return 'w-8 h-8'
    }
  }

  const getTextSize = () => {
    switch (size) {
      case 'small': return 'text-xs'
      case 'large': return 'text-lg'
      case 'xl': return 'text-xl'
      default: return 'text-sm'
    }
  }

  if (variant === 'dots') {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`${getSizeClasses()} bg-primary-500 rounded-full animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        {text && (
          <p className={`${getTextSize()} text-surface-300 animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className={`${getSizeClasses()} bg-primary-500 rounded-full animate-pulse`} />
        {text && (
          <p className={`${getTextSize()} text-surface-300 animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    )
  }

  if (variant === 'ring') {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className={`${getSizeClasses()} relative`}>
          <div className="absolute inset-0 border-4 border-surface-600 rounded-full" />
          <div className="absolute inset-0 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
        {text && (
          <p className={`${getTextSize()} text-surface-300 animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className={`${getSizeClasses()} relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full animate-spin" 
               style={{ background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)' }} />
          <div className="absolute inset-1 bg-surface-900 rounded-full" />
        </div>
        {text && (
          <p className={`${getTextSize()} text-surface-300 animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    )
  }

  // Default spinner
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className={`${getSizeClasses()} relative`}>
        <div className="absolute inset-0 border-2 border-surface-600 rounded-full" />
        <div className="absolute inset-0 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
      {text && (
        <p className={`${getTextSize()} text-surface-300 animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )
}

// Full screen loading overlay
export const LoadingOverlay = ({ isVisible, variant = 'gradient', text = 'Loading...' }) => {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-900/80 backdrop-blur-sm">
      <div className="card-glass p-8 rounded-2xl">
        <LoadingSpinner size="large" variant={variant} text={text} />
      </div>
    </div>
  )
}

// Inline loading state
export const InlineLoader = ({ variant = 'dots', size = 'small' }) => {
  return (
    <div className="flex items-center justify-center py-4">
      <LoadingSpinner size={size} variant={variant} text="" />
    </div>
  )
}

export default LoadingSpinner