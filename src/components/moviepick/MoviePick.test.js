import React from 'react';
import {screen, render, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import MoviePick from './MoviePick.js'
jest.mock('../../FetchCalls.js')

describe('MoviePick', () => {
  it('should render 6 movie options', () => {
    render(<BrowserRouter><MoviePick /></BrowserRouter>)
      const jarjar = screen.getByAltText('episode 1')
      const attackOfClones = screen.getByAltText('episode 2')
      const revengeOfSith = screen.getByAltText('episode 3')
      const newHope = screen.getByAltText("episode 4")
      const empireStrikes = screen.getByAltText("episode 5")
      const returnOfTheJedi = screen.getByAltText("episode 6")
      expect(jarjar).toBeInTheDocument()
      expect(attackOfClones).toBeInTheDocument()
      expect(revengeOfSith).toBeInTheDocument()
      expect(newHope).toBeInTheDocument()
      expect(empireStrikes).toBeInTheDocument()
      expect(returnOfTheJedi).toBeInTheDocument()
  })
  it('should render 8 buttons total', () => {
    render(<BrowserRouter><MoviePick /></BrowserRouter>)
    const allButtons = screen.getAllByRole('button')
    expect(allButtons.length).toBe(8)
  })
  it('should have a submit and a clear selection button', () => {
    render(<BrowserRouter><MoviePick /></BrowserRouter>)
      const submitbtn = screen.getByText('Submit!')
      expect(submitbtn).toBeInTheDocument()
      const clearbtn = screen.getByText('Clear Selection')
      expect(clearbtn).toBeInTheDocument()
  })
})
