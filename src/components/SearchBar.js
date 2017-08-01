import React from 'react';

export const SearchBar = (props) => (
  <div className="search-bar row">
    <div className="col-md-2 hidden-xs hidden-sm">
      <a className = "button list-button" onClick= {() => props.sortMovies()}>Sort movies</a>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-10">
      <form onSubmit={props.handleSubmit}>
        <input className="input" type="text" onChange={props.handleInputChange} value={props.currentMovie} placeholder="What movie are you looking for?"/>
      </form>
    </div>
  </div>
)

SearchBar.propTypes = {
  currentMovie: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired

}
