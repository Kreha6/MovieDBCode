import React from 'react';
import {MovieListItem} from './'

export const MovieList = (props) => {
  const movieItems = props.movies.map(movie => {
    return <MovieListItem key={movie.id} onMovieSelect={props.onMovieSelect} movie={movie}/>
  })
  if (props.empty == true) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-4 empty-result">
        <h3>There are no movies that match the criteria. Try again</h3>
      </div>
    )
  } else {
    if (props.phase === 0) {
      return (
        <div className="col-xs-12 hidden-md hidden-lg hidden-xl">
          <div className="hint-sm text-center">
            <span>
              <span className="glyphicon glyphicon-circle-arrow-up hint-arrow"></span><br/>
              <h3>Type a movie you are looking for</h3>
            </span>
          </div>
        </div>
      )
    }
    if (props.phase >0) {
      return (
        <div>
          <div className="col-xs-12 hidden-md hidden-lg hidden-xl">
            <div className="hint-sm text-center">
              <span>
                <h3>Choose movie from this list</h3>
                <span className="glyphicon glyphicon-circle-arrow-down hint-arrow"></span><br/>
                <a className = "button list-button sort-button" onClick= {() => props.sortMovies()}>Sort movies</a>
              </span>
            </div>
          </div>
          <div>
            <ul className="col-xs-12 col-sm-12 col-md-4 list-group movie-list">
              {movieItems}
              <span id="loader"></span>
            </ul>
          </div>
        </div>
      )
    }
  }
}
