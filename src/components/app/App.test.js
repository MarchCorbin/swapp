import React from 'react';
import {screen, render, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App.js'
import {getAllPlanets, getSecondSet} from '../../FetchCalls.js'
import {mockPlanets, singlePlanet, mockFetch, mockFetch2} from '../../MockData.js'
jest.mock('../../FetchCalls.js')

describe('App', () => {
  it('should render the home page', () => {
    render(<BrowserRouter><App /></BrowserRouter>)
    let nameInput = screen.getByPlaceholderText('Enter Your Desired Username Padawan!')
    let startbtn = screen.getByRole('button')
    let titleText = screen.getByText('Galactic Cinematic Composition')
    expect(titleText).toBeInTheDocument()
    expect(startbtn).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
  })
  it('should receive a warning when a name is not entered', () => {
    render(<BrowserRouter><App /></BrowserRouter>)
    let nameInput = screen.getByPlaceholderText('Enter Your Desired Username Padawan!')
    let startbtn = screen.getByRole('button')
    let titleText = screen.getByText('Galactic Cinematic Composition')
    expect(titleText).toBeInTheDocument()
    expect(startbtn).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()

    fireEvent.click(startbtn)
    const warning = screen.getByText('Padawan, you need to enter a Name!')
    expect(warning).toBeInTheDocument()
  })
  it('should allow user to proceed to the game when a name is entered, press submit receive an incorrect message and then navigate to the high scores page!', async() => {
    getAllPlanets.mockResolvedValue(mockFetch)
    getSecondSet.mockResolvedValue(mockFetch2)
    render(<BrowserRouter><App /></BrowserRouter>)
    let nameInput = screen.getByPlaceholderText('Enter Your Desired Username Padawan!')
    let startbtn = screen.getByRole('button')
    let titleText = screen.getByText('Galactic Cinematic Composition')
    expect(titleText).toBeInTheDocument()
    expect(startbtn).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()

    fireEvent.change(nameInput, {target: {name: 'username', value: 'Jar Jar'}})
    expect(nameInput.value).toBe('Jar Jar')

    fireEvent.click(startbtn)

    const greeting = await waitFor(() =>screen.getByText('Welcome to Star Wars Jar Jar!'))
    expect(greeting).toBeInTheDocument()


    let submitbtn = screen.getByText('Submit!')
    expect(submitbtn).toBeInTheDocument()

    fireEvent.click(submitbtn)

    let usermessage = await waitFor(() =>screen.getByText('Incorrect!'))
    expect(usermessage).toBeInTheDocument()

    const highscoresbtn = screen.getByText('High Scores')
    expect(highscoresbtn).toBeInTheDocument()

    fireEvent.click(highscoresbtn)

    const newgamebtn = screen.getByText('New Game!')
    const scoresmessage = screen.getByText('High Scores:')
    expect(newgamebtn).toBeInTheDocument()
    expect(scoresmessage).toBeInTheDocument()
    
  })
})