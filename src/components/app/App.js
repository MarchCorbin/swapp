import React from 'react';
import './App.css';
import Home from '../home/Home.js'
import Game from '../game/Game.js'
import HighScores from '../highScores/HighScores.js'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentPlanet: [],
      correctFilms: [],
      guessedFilms: [],
      correct: null, 
      score: 0,
      round: 0,
      inProgress: true
    }
  }

  resetCorrect = () => {
    this.setState({correct: null, guessedFilms:[], correctFilms:[]})
  }

  setCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  setGuessed = (movies) => {
    this.setState({guessedFilms: movies})
  }

  setCurrentPlanet = async(planet) => {
    await this.setState({currentPlanet: planet})
    await this.setCorrectFilms()
  }

  setCorrectFilms = async() => {
    let current = []
    await this.state.currentPlanet.films.forEach(film => current.push(film.charAt(film.length - 2)))  
    await this.fixCorrectFilms(current)
  }

  fixCorrectFilms = async(current) => {
    let fixed = []
  await  current.forEach(num => {
      if (num === '4') {
        fixed.push('Episode 1')
      } else if (num === '5') {
        fixed.push('Episode 2')
      } else if (num === '6') {
        fixed.push('Episode 3')
      } else if (num === '1') {
        fixed.push('Episode 4')
      } else if (num === '2') {
        fixed.push('Episode 5')
      } else if (num === '3') {
        fixed.push('Episode 6')
      }
    })
    this.setState({correctFilms: fixed})
  }

  checkAnswer = () => {
    let sorted = this.state.guessedFilms.sort()
    let correctSorted = this.state.correctFilms.sort()
   if(sorted.join() === correctSorted.join()) {
    this.setState({correct: true, score: this.state.score + 1})
   } else {
     this.setState({correct: false})
   }
   if(this.state.round !== 10) {
     this.setState({guessedFilms:[], round:this.state.round + 1})
   } else {
     this.saveState()
     this.setState({inProgress: false})
   }
  }

  saveState = () => {
    console.log('WEMADEIT')
    let keyVal = localStorage.length + 1
    let currentStats = {
     user: this.state.currentUser,
     score: this.state.score
    }
    localStorage.setItem(`newEntry${keyVal}`, JSON.stringify(currentStats))
  }

  presentDirections = (e) => {
  let textSlot = document.querySelector('.directional-text')
  if(!e.target.classList.contains('active')) {
    e.target.classList.add('active')
    textSlot.classList.add('active-text')
  } else {
    e.target.classList.remove('active')
    textSlot.classList.remove('active-text')
  }
 e.target.classList.contains('active') ? textSlot.innerText = 'Instructions: This is a test of your memory! \n  Rules: You will be presented with a series of Star Wars planets. You must select ALL of the movies that this planet was shown in. Be careful some of these planets arent in ANY of the movies, in this case just clear your answers and hit Submit. Good Luck!' : textSlot.innerText = ''
  }

  render() {
    return (
      <main>
        <BrowserRouter>
        <Route path="/highscores">
          <HighScores />
        </Route>
        <Route path="/game">
          <Game
            username={this.state.currentUser} 
            presentDirections={this.presentDirections}
            score={this.state.score}
            round={this.state.round}
            resetCorrect={this.resetCorrect}
            finalAnswer={this.state.correct}
            checkAnswer={this.checkAnswer}
            setCurrentPlanet={this.setCurrentPlanet}  
            setGuessed={this.setGuessed}
             />
            {!this.state.inProgress  && <Redirect to='/highscores' />}
        </Route>
          <Route path exact="/">
            <Home setCurrentUser={this.setCurrentUser} />
          </Route>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
