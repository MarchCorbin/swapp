import React from 'react';
import {screen, render, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import ScoreBoard from './ScoreBoard.js'
jest.mock('../../FetchCalls.js')

describe('ScoreBoard', () => {
  it('should render the users current score', async() => {
    render(<BrowserRouter><ScoreBoard
      score={4}
      round={6}
      /></BrowserRouter>)
      const currentScore = await waitFor(() => screen.getByText('Score: 4', {exact: false}))
      expect(currentScore).toBeInTheDocument()
  })
  it('should render the current round', () => {
    render(<BrowserRouter><ScoreBoard
      score={4}
      round={6}
      /></BrowserRouter>)
      const currentRound = screen.getByText('Round: 6', {exact: false})
      expect(currentRound).toBeInTheDocument()
  })
})