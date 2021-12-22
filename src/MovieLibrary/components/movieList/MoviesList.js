import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import MovieListItem from './MovieListItem'

import TMDBImage from '../TMDBImage'
import './MoviesList.css'

export default class MoviesList extends PureComponent {

  static propTypes = {
    movies: PropTypes.array.isRequired
  }

  state = {
    selectedMovie: null,
    detail: false,
  }
  handleSelectMovie = item => this.setState({selectedMovie: item, detail:true})

  handleSortingChange = sortingType => console.log(sortingType)

  render() {

    const {movies} = this.props
    const {selectedMovie} = this.state
    const {detail} = this.state

    return (
      <div className="movies-list">
        {
          !detail ? (
            <div className='sort'>
              <span>Sort by:</span>
              <SortingOptions onChange={this.handleSortingChange}/>
            </div> 
          ) : (null)
        }
        <div className="items">
        {
          detail ? (
            <div className='container-detail'>
              <button className='btnHome' onClick={()=>this.setState({detail:false})}>HOME</button>
              <ExpandedMovieItem movie={selectedMovie} state={this.state} />
            </div>
          ) :  (
            movies.map(movie =>
              <MovieListItem 
                key={movie.id}
                movie={movie} 
                isSelected={selectedMovie===movie} 
                onSelect={this.handleSelectMovie}
              />
            )
            )
          }
      </div>
      </div>
    )
  }
}  

const ExpandedMovieItem = ({ movie: {title, original_title, poster_path, overview, vote_average, vote_count}}) => (
  <div className="expanded-movie-item">
    <TMDBImage src={poster_path} className="poster-expanded" />
    <div className="description">
      <h2>{title}({original_title})</h2>
        <div className="rank">
          <h4>Rank(votes count)</h4>: <span>{vote_average}({vote_count})</span>
        </div>
      <span>{overview}</span>
    </div>
  </div>
)
class SortingOptions extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    const selectedValue = e.target.value
    const {onChange} = this.props
    this.setState({value: selectedValue})
    onChange(selectedValue)
  }

  render() {

    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value=""></option>
        <option value="name_asc">A - Z</option>
        <option value="name_desc">Z - A</option>
        <option value="rating">Rating</option>
      </select>
    )
  }
}

