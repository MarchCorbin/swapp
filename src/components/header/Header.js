import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function Header(props){
  let directions = document.querySelector('.directional-text')
  let instructionbtn = document.querySelector('.instructions-btn')
return ( 
<div className="header">
  <button alt='instructions btn' onClick={props.presentDirections} className="instructions-btn">?</button>
  <h4 className="directional-text"></h4>
<h1>Welcome to Star Wars {props.username}!</h1>
<Link to='/highscores'><button className='highscores-btn'>High Scores</button></Link>
</div>
 )
}

export default Header;

Header.propTypes = {
  presentDirections: PropTypes.func,
  username: PropTypes.string
}