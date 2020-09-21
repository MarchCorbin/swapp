import React from 'react';
import {screen, render, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header.js'
import {getAllPlanets, getSecondSet} from '../../FetchCalls.js'
import {mockPlanets, singlePlanet, mockFetch, mockFetch2} from '../../MockData.js'

describe('Header', () => {
  it('should render 2 buttons', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    const button1 = screen.getByText('?')
    const button2 = screen.getByText('High Scores')
    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
  })
  it('should render a welcome message', () => {
   render(<BrowserRouter><Header username={'Franklin'} /></BrowserRouter>)
   const greeting = screen.getByText('Welcome to Star Wars Franklin!')
   expect(greeting).toBeInTheDocument()
  })
  // it('should render instructions when clicking on the ? button', async() => {
  //   const directions = 'Instructions: This is a test of your memory! /n  Rules: You will be presented with a series of Star Wars planets. You must select ALL of the movies that this planet was shown in. Be Careful some of these planets arent in ANY of the movies, in this case just clear your answers and hit Submit. Good Luck!'
  //   const presentDirections = jest.fn()
  //   render(<BrowserRouter><Header presentDirections={presentDirections} username={'Franklin'} /></BrowserRouter>)
  //   const button1 = screen.getByText('?')
  //   expect(button1).toBeInTheDocument();
  //   fireEvent.click(button1)
  //   const instructions = await waitFor(() => screen.getByText('Rules: You will be presented with a series of Star Wars planets. You must select ALL of the movies that this planet was shown in. Be Careful some of these planets arent in ANY of the movies, in this case just clear your answers and hit Submit. Good Luck!', {exact: false}))
  // })
})