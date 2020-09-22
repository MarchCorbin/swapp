import React from 'react';
import {getAllPlanets, getSecondSet} from '../../FetchCalls.js'
import './Game.css'
import Header from '../header/Header.js'
import MoviePick from '../moviepick/MoviePick.js'
import ScoreBoard from '../scoreBoard/ScoreBoard.js'
import PropTypes from 'prop-types'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlanets: [],
      currentPlanet : [],
      error: '',
      valid: true
    }
  }

  newRound = async() => {
    let max = this.state.allPlanets.length
    let randomInt = Math.random() * (max) ;
     await this.setState({
      currentPlanet: this.state.allPlanets[Math.floor(randomInt)]
    })
     await this.props.setCurrentPlanet(this.state.currentPlanet)
  }

  showCurrentPlanet = () => {
    let planet = this.state.currentPlanet
      return (
      <div alt='planet-card' className="planet-card">
        <h1>{planet.name}</h1>
        <img className="planet-img" src={`/assets/${planet.name}.jpg`} alt = "current planet" />
        <h4>Climate: {planet.climate}</h4>
        <h4>Diameter: {planet.diameter}</h4>
        <h4>Gravity: {planet.gravity}</h4>
        <h4>Orbital Period: {planet.orbital_period}</h4>
        <h4>Population: {planet.population}</h4>
        <h4>Roatation Period: {planet.rotation_period}</h4>
        <h5>Surface Water: {planet.surface_water}</h5>
        <h5>Terrain: {planet.terrain}</h5>
      </div>
    )
  }

  componentDidMount = async() => {
    let allData1 = []
    let allData2 = []
    await getAllPlanets()
      .then(data => allData1 = data.results)
      .catch(err => this.setState({valid: false, error: err}))
    await getSecondSet()
      .then(newData => allData2 = newData.results)
      .catch(err => this.setState({valid: false, error: err}))
    let combined = allData1.concat(allData2)
    this.setState({allPlanets: combined})
    this.newRound()
  }

 setNext = () => {
   this.props.resetCorrect()
   this.newRound()
 }
 
  render() {
  return (
    <>
      <Header
        presentDirections={this.props.presentDirections} 
        username={this.props.username} />
    <div className="game-page">
      <div className="planet-side">
        {this.showCurrentPlanet()}
      </div>
        {this.props.finalAnswer === true && <div className='answer-text'><h2 className="answer">CORRECT!</h2><button onClick={this.setNext} className="next-question">NEXT</button></div>}
        {this.props.finalAnswer === false && <div className='answer-text'><h2 className="answer">Incorrect!</h2><button onClick={this.setNext} className="next-question">NEXT</button></div>}
        {!this.state.valid && <h2>{this.state.error}</h2>} 

      <div className="choice-side">
        <ScoreBoard
        score={this.props.score}
        round={this.props.round}
        />
        <MoviePick checkAnswer={this.props.checkAnswer} setGuessed={this.props.setGuessed} />
      </div>
    </div>
    </>
    )
  }
}

export default Game

Game.propTypes = {
username: PropTypes.string,
presentDirections: PropTypes.func,
score: PropTypes.number,
round: PropTypes.number,
resetCorrect: PropTypes.func,
finalAnswer: PropTypes.bool,
checkAnswer: PropTypes.func,
setCurrentPlanet: PropTypes.func,
setGuessed: PropTypes.func
}