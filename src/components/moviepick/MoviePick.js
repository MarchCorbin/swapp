import React from 'react';
import './MoviePick.css'

class MoviePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovies: []
    }
  }

  clickHandler = (e) => {
    if(!e.target.classList.contains('active')) {
      e.target.classList.add('active')
      this.setState({selectedMovies: [...this.state.selectedMovies, e.target.innerText]})
    } else {
      e.target.classList.remove('active')
      let selected = e.target.innerText
      let removeSlot = this.state.selectedMovies.indexOf(selected)
      this.state.selectedMovies.splice(removeSlot, 1)
    }
  }


  nonehandler = (e) => {
    let actives = document.querySelectorAll('.movie-choice')
    // e.target.classList.add('active')
    actives.forEach(movie => {
      movie.classList.remove('active')
    })
    this.setState({selectedMovies: []})
}

submitHandler = async(e) => {
  let actives = document.querySelectorAll('.movie-choice')
 await this.props.setGuessed(this.state.selectedMovies)
 await this.props.checkAnswer()
  actives.forEach(movie => {
    movie.classList.remove('active')
  })
  this.setState({selectedMovies: []})
}

  render() {
    return (
      <div alt='movie picker' className="movie-picker">
        <button
        onClick={this.clickHandler} 
        className="movie-choice">
          <img 
          className="movie-img" 
          alt='episode 1' 
          src='/assets/Episode I.jpeg' />
          Episode 1
          </button>
        <button 
        onClick={this.clickHandler}
        className="movie-choice">
          <img 
          className="movie-img" 
          alt='episode 2' 
          src='/assets/Episode II.jpg' />
          Episode 2
          </button>
        <button 
        onClick={this.clickHandler}
        className="movie-choice">
          <img 
          className="movie-img" 
          alt='episode 3' src='/assets/Episode III.jpg' />
          Episode 3
          </button>
        <button
        onClick={this.clickHandler} 
        className="movie-choice">
          <img 
          className="movie-img"
          alt='episode 4' 
          src='/assets/Episode IV.jpg' />
          Episode 4
          </button>
        <button 
        onClick={this.clickHandler}
        className="movie-choice">
          <img 
          className="movie-img"
          alt='episode 5' 
          src='/assets/Episode V.jpg'/>
          Episode 5
          </button>
        <button 
        onClick={this.clickHandler}
        className="movie-choice">
          <img 
          className="movie-img"
          alt='episode 6'
          src='/assets/Episode VI.jpg' />
          Episode 6
          </button>
          <button
          onClick={this.nonehandler} 
          className="movie-choice clear-btn">
          Clear Selection
          </button>
          <button
          onClick={this.submitHandler} className="submit">Submit!</button>
      </div>
    )
  }
}

export default MoviePicker