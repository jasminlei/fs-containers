import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import Todo from './Todo'

describe('Todo', () => {
  test('renders todo text', () => {
    const todo = {
      _id: '1',
      text: 'Learn Docker',
      done: false,
    }

    render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)

    expect(screen.getByText('Learn Docker')).toBeInTheDocument()
  })
})
