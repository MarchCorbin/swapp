import React from 'react';
import {screen, render, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import Home from './Home.js'

describe('Home', () => {
  it('should render an input field', () => {
    render(<BrowserRouter><Home /></BrowserRouter>)
    const nameInput = screen.getByPlaceholderText('Enter Your Desired Username Padawan!')
    expect(nameInput).toBeInTheDocument()
  })
  it('should render a magnificent star wars logo', () => {
    render(<BrowserRouter><Home /></BrowserRouter>)
    const starlogo = screen.getByAltText('star wars logo')
    expect(starlogo).toBeInTheDocument()
  })
  it('should render the title of the app', () => {
    render(<BrowserRouter><Home /></BrowserRouter>)
    const apptitle = screen.getByText('Galactic Cinematic Composition')
    expect(apptitle).toBeInTheDocument()
  })
  it('should render a single button', () => {
    render(<BrowserRouter><Home /></BrowserRouter>)
    let startbtn = screen.getByRole('button')
    expect(startbtn).toBeInTheDocument()
  })
  it('should be able to enter a username into the input', () => {
     render(<BrowserRouter><Home /></BrowserRouter>)
     let nameInput = screen.getByPlaceholderText('Enter Your Desired Username Padawan!')
     expect(nameInput).toBeInTheDocument()
     fireEvent.change(nameInput, {target: {name: 'username', value: 'Tomassen'}})

     expect(nameInput.value).toBe('Tomassen')
  })
  it('should clear out the input once the button is clicked', () => {
    const setCurrentUser = jest.fn()
    render(<BrowserRouter><Home setCurrentUser={setCurrentUser} /></BrowserRouter>)
     let nameInput = screen.getByPlaceholderText('Enter Your Desired Username Padawan!')
     let startbtn = screen.getByRole('button')
     expect(startbtn).toBeInTheDocument()
     expect(nameInput).toBeInTheDocument()
     fireEvent.change(nameInput, {target: {name: 'username', value: 'Tomassen'}})

     expect(nameInput.value).toBe('Tomassen')
     fireEvent.click(startbtn)
     expect(nameInput.value).toBe('')
  })
})