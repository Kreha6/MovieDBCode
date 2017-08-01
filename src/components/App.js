import React, {Component} from 'react';
import {SearchBar, MovieList, MovieDetail} from './';
import axios from 'axios';
import '../libs/scripts.js';

const ROOT_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '?api_key=22b20517dd905f6da209ff314bb554c8';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null,
      currentMovie: '',
      phase: 0,
      emptyResult: false
    }

  }
  handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`${ROOT_URL}${API_KEY}&query=${this.state.currentMovie}`).then(response => {
      let parsed = JSON.parse(response.request.response);
      let empty = parsed.results.length > 0 ? false : true;
      let phase = empty ? 0 : 1;
      this.setState({movies: parsed.results, currentMovie: '', phase: phase, emptyResult: empty})
    }).catch(error => {
      console.log(error);
    });
  }

  handleInputChange = (e) => {
    this.setState({currentMovie: e.target.value})
  }

  pickMovie = (id) => {
    const movieLink = `https://api.themoviedb.org/3/movie/${id}${API_KEY}`;
    axios.get(movieLink).then(response => {
      this.setState({selectedMovie: response.data, phase: 2})
    }).catch(error => {
      console.log(error);
    });
  }
  compareMovies = (a, b) => {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }
  sortMovies = () => {
    let movies = [...this.state.movies];
    movies.sort(this.compareMovies)
    this.setState({movies})
  }

  render() {
    return (
      <div>
        <span className="glyphicon glyphicon-circle-arrow-up" id="scroll"></span>
        <div className="row">
          <SearchBar sortMovies={this.sortMovies} handleInputChange={this.handleInputChange} currentMovie={this.state.currentMovie} handleSubmit={this.handleSubmit}/>
        </div>

        <div className="row">
          <MovieList phase={this.state.phase} sortMovies={this.sortMovies} empty={this.state.emptyResult} movies={this.state.movies} onMovieSelect= {id => {this.pickMovie(id)}}/>
          <MovieDetail phase={this.state.phase} movie={this.state.selectedMovie}/>
        </div>
      </div>

    );
  }
}

export default App;
