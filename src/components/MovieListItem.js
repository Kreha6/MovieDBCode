import React, {Component} from 'react';

export class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`
    }
  }
  handleImageError = () => {
    this.setState({url: "http://selectoinc.com/images/image_not_available.png"})
  }
  handleClick = () => {
    let x = document.getElementsByClassName("active-movie");
    if (x.length > 0) {
      x[0].classList.remove("active-movie");
    }

  }
  render() {
    return (
      <li className="list-group-item movie-item">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <img className="media-object poster img-responsive" onError={() => this.handleImageError()} src={this.state.url}/>
          </div>

          <div className="col-sm-6 col-xs-12 text-center">
            <h3 className="media-heading">{this.props.movie.title}</h3>
            <h5 className="media-heading">Release date: {this.props.movie.release_date}</h5>
            <h5 className="media-heading">Popularity: {Math.round(this.props.movie.popularity * 100) / 100}</h5>
            <h5 className="media-heading">Votes: {this.props.movie.vote_count}</h5>
            <h5 className="media-heading">Average vote: {this.props.movie.vote_average}</h5>
            <a className = "button list-button" onClick= {()=>this.props.onMovieSelect(this.props.movie.id)}>See details</a>
          </div>
        </div>
      </li>
    )
  }
}
{/* <button
  onClick= {()=>this.props.onMovieSelect(this.props.movie.id)}
  type="button" className="btn-g list-button">
  <span className = "button-text">See details</span></button> */}
