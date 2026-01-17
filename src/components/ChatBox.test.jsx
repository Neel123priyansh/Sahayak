import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AppProvider } from '../context/AppContext.jsx'
import ChatBox from './ChatBox.jsx'

vi.stubGlobal('WebSocket', vi.fn(() => ({
  readyState: 1,
  send: vi.fn(),
  close: vi.fn(),
})))

vi.stubGlobal('fetch', vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ messages: [] }),
  })
))

const renderWithProvider = (ui) => {
  window.localStorage.setItem('userType', 'teacher')
  window.localStorage.setItem('userName', 'Test Teacher')
  return render(<AppProvider>{ui}</AppProvider>)
}

describe('ChatBox', () => {
  it('renders header and input', () => {
    renderWithProvider(<ChatBox threadId="test-thread" />)
    expect(screen.getByText(/Teacher–student chat/i)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Send a quick note or doubt clarification/i)
    ).toBeInTheDocument()
  })

  it('does not send empty messages', () => {
    renderWithProvider(<ChatBox threadId="test-thread" />)
    const sendButton = screen.getByRole('button')
    fireEvent.click(sendButton)
    expect(screen.queryByText('Sent')).not.toBeInTheDocument()
  })

  it('adds message on send when connected', () => {
    renderWithProvider(<ChatBox threadId="test-thread" />)
    const textarea = screen.getByPlaceholderText(
      /Send a quick note or doubt clarification/i
    )
    fireEvent.change(textarea, { target: { value: 'Hello students' } })
    const sendButton = screen.getByRole('button')
    fireEvent.click(sendButton)
    expect(screen.getByText('Hello students')).toBeInTheDocument()
  })
})
