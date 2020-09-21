import React from 'react';
import {screen, render, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import HighScores from './HighScores.js'
jest.mock('../../FetchCalls.js')

describe('HighScores', () => {
  it('should render the header', () => {
    render(<BrowserRouter><HighScores /></BrowserRouter>)

    const headings = screen.getByText('High Scores:')
    expect(headings).toBeInTheDocument()
  })
  it('should render a new game button on the page', () => {
    render(<BrowserRouter><HighScores /></BrowserRouter>)
      const newGame = screen.getByText('New Game!')
      expect(newGame).toBeInTheDocument()
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBe(1)
  })
})