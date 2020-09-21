import React from 'react';
import './ScoreBoard.css'
import PropTypes from 'prop-types'

function ScoreBoard(props) {
  return(
    <div className="scoreboard">
      <h4 alt='current score'>Score: {props.score}</h4>
      <h4 alt='current round'>Round: {props.round}/10</h4>
    </div>
  )
}

export default ScoreBoard

ScoreBoard.propTypes = {
  score: PropTypes.number,
  round: PropTypes.number
}