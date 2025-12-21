import React from 'react'

export default function Alert({ type = 'info', children }) {
  const base = 'rounded-2xl p-4 text-sm'
  const styles = {
    info: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
    success: 'bg-green-500/10 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
    error: 'bg-red-500/10 text-red-700 dark:text-red-300',
  }
  return (
    <div role="alert" className={`${base} ${styles[type]}`}>
      {children}
    </div>
  )
}
