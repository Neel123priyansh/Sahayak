import React from 'react'

const ProgressTracker = ({ progress = 85 }) => {
  return (
    <div className="progress-tracker card" style={{
      textAlign: 'left',
      margin: '20px 0',
      padding: '20px'
    }}>
      <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        color: '#374151',
        marginBottom: '12px',
        margin: 0
      }}>
        Today's Progress
      </h3>
      
      <div style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#667eea',
        marginBottom: '12px',
        textAlign: 'right'
      }}>
        {progress}%
      </div>
      
      <div className="progress-bar" style={{
        width: '100%',
        height: '8px',
        background: '#e5e7eb',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '0'
      }}>
        <div 
          className="progress-fill"
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '4px',
            transition: 'width 1s ease-in-out'
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressTracker