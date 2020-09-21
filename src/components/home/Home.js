import React from 'react';
import './Home.css'
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isValid: null,
      error: 'Padawan, you need to enter a Name!'
    }
  }

  handleChange = (e) => {
    this.setState({username: e.target.value})
  }

  handleSubmit = () => {
    this.props.setCurrentUser(this.state.username)
    if(this.state.username !== '') { this.setState({isValid: true})
    this.setState({username: ''})
  }else {this.setState({isValid: false})}
  }

  render() {
    return (
    <div className='home-background'>
      <div className='title-holder'>
       <img className='starwars-logo' src='/assets/starwarslogo.png' alt='star wars logo' /><h1 className='app-title'>Galactic Cinematic Composition</h1>
      </div>
      <input name='username' className="username-input" alt='username'            type="text" placeholder="Enter Your Desired Username Padawan!" value={this.state.username} onChange={this.handleChange} />
      {this.state.isValid === false && <h5 className='error-display'>{this.state.error}</h5>}
      <button className="start-btn" onClick={this.handleSubmit}>Begin!</button>
      {this.state.isValid && <Redirect to='/game' /> }
    </div>)
  }
}

export default Home

Home.propTypes = {
  setCurrentUser: PropTypes.func
}