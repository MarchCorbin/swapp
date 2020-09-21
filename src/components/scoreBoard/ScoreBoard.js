import React from 'react';
import './ScoreBoard.css'

function ScoreBoard(props) {
  return(
    <div className="scoreboard">
      <h4 alt='current score'>Score: {props.score}</h4>
      <h4 alt='current round'>Round: {props.round}/10</h4>
    </div>
  )
}

export default ScoreBoard