import React from 'react';
import './HighScores.css'
import {Link} from 'react-router-dom'

class HighScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allScores: [],
    }
  }

  componentDidMount  = async() => {
    this.beginRender()
  }

  beginRender = async() => {
   let allEntries = []
    let keys = Object.keys(localStorage)
    await keys.forEach(key => {
      let entry = localStorage.getItem(key)
      allEntries.push(JSON.parse(entry))
    })
  await this.setState({allScores: allEntries})
  this.renderScores()
  }


  renderScores() {
    console.log(this.state.allScores, 'IAMALLSCORES')
   return this.state.allScores.map(entry => {
      return(
        <h3>{entry.user}: {entry.score}</h3>
      )
    })
  }

  render() {
    return (
     <div className='highscores-page'>
       <h1>High Scores:</h1>
      {this.renderScores()}
      <Link to='/'><button className='newgame-btn'>New Game!</button></Link>
     </div>
    )
  }
}

export default HighScores