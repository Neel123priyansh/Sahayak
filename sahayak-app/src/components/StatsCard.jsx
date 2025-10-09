import React from 'react'

const StatsCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  gradient = 'card-gradient-brown',
  progress = 75,
  className = '' 
}) => {
  const isPositive = change && change.startsWith('+')
  
  // Circular progress component with warm colors
  const CircularProgress = ({ percentage, size = 60, strokeWidth = 4, color = '#8B4513' }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative">
        <svg width={size} height={size} className="progress-ring">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(139, 69, 19, 0.2)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="progress-ring-circle animate-progress-fill"
            style={{ '--progress-offset': offset }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-text-primary">{percentage}%</span>
        </div>
      </div>
    )
  }
  
  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Educational Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
        <div className="w-full h-full bg-accent-orange rounded-full transform translate-x-4 -translate-y-4"></div>
      </div>
      
      {/* Floating Educational Elements */}
      <div className="absolute top-3 right-3 w-3 h-3 bg-accent-green/20 rounded-full animate-float-dark"></div>
      <div className="absolute bottom-4 right-6 w-2 h-2 bg-accent-blue/20 rounded-full animate-float-dark"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
            <div className="p-2 sm:p-3 bg-accent-brown/20 rounded-2xl backdrop-blur-sm flex-shrink-0">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-brown" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-text-secondary text-xs sm:text-sm font-medium mb-1 truncate">
                {title}
              </h3>
              <div className="text-xl sm:text-3xl font-bold text-text-primary">
                {value}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2 sm:space-y-3 flex-shrink-0 ml-3">
            {change && (
              <div className="bg-surface/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                <span className={`text-xs sm:text-sm font-semibold ${
                  isPositive ? 'text-accent-green' : 'text-text-secondary'
                }`}>
                  {change}
                </span>
              </div>
            )}
            <CircularProgress 
              percentage={progress} 
              size={50} 
              color={isPositive ? 'var(--color-accent-green)' : 'var(--color-accent-brown)'}
            />
          </div>
        </div>
        
        {/* Educational Activity indicators */}
        <div className="flex items-center justify-between">
          <div className="text-text-secondary text-xs sm:text-sm font-medium">
            {isPositive ? 'Growing steadily' : 'Making progress'}
          </div>
          
          {/* Educational progress dots */}
          <div className="flex space-x-1 sm:space-x-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
                  i < (isPositive ? 3 : 2) ? 'bg-accent-brown' : 'bg-surface'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom educational accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent"></div>
      </div>
      
      {/* Warm shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-orange/10 to-transparent -skew-x-12 transform translate-x-full animate-shine-dark"></div>
    </div>
  )
}

export default StatsCard