import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught', error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="surface-card ios-shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Something went wrong</h2>
          <p className="text-sm opacity-80">Try refreshing the page. If the problem persists, contact support.</p>
        </div>
      )
    }
    return this.props.children
  }
}
