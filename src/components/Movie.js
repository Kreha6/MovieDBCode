import React, {Component} from 'react';

export class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://image.tmdb.org/t/p/w342/${this.props.movie.poster_path}`
    }
  }
  handleImageError = () => {
    this.setState({url: "http://selectoinc.com/images/image_not_available.png"})
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({url: `http://image.tmdb.org/t/p/w342/${nextProps.movie.poster_path}`});
  }
  render() {
    let genreList = [];
    this.props.movie.genres.map(genre => genreList.push(genre.name));
    let companiesList = [];
    this.props.movie.production_companies.map(company => companiesList.push(company.name));
    let countriesList = [];
    this.props.movie.production_countries.map(country => countriesList.push(country.name));
    const movieLink = `https://www.imdb.com/title/${this.props.movie.imdb_id}/`;
    return (
        <div className="movie-detail">
          <div className="row">
            <div className="col-xs-12 col-md-6 text-center">
              <img className="media-object poster img-responsive" src={this.state.url} onError={() => this.handleImageError()}/>
            </div>

            <div className="col-md-6 col-xs-12 text-center">
              <h3 className="media-heading">{this.props.movie.title}</h3>
              <h4 className="media-heading">Release date: {this.props.movie.release_date}</h4>
              <h4 className="media-heading">Popularity: {Math.round(this.props.movie.popularity * 100) / 100}</h4>
              <h4 className="media-heading">Votes: {this.props.movie.vote_count}</h4>
              <h4 className="media-heading">Average vote: {this.props.movie.vote_average}</h4>
              <h4 className="media-heading">Genres: {genreList.join(", ")}</h4>
              <h4 className="media-heading">Production companies: {companiesList.join(", ")}</h4>
              <h4 className="media-heading">Production countries: {countriesList.join(", ")}</h4>
              <h4 className="media-heading">Overview:
                <br/></h4>
              <h4 className="media-heading">{this.props.movie.overview}</h4>
              <h4>See more details at
                <a className="movie-link" href={movieLink}> IMDB</a>
              </h4>
            </div>
          </div>
        </div>
    )
  }
}
