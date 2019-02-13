import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    let rating;
    const noRating = "No rating available.";

    if (this.props.movie.vote_average !== null) {
      rating = this.props.movie.vote_average;
    } else {
      rating = noRating;
    }

    return(
      <div className="card" key={this.props.movie.id}>
      <img className="card-img-top" src={'https://image.tmdb.org/t/p/w500'.concat(this.props.movie.poster_path)} alt={this.props.movie.title.concat(' poster')}></img>
        <h3 className="card-title">{this.props.movie.title}</h3>
        <p className="card-subtitle text-muted">Original Title: {this.props.movie.original_title}</p>
        <p className="card-subtitle text-muted">Release Date: {this.props.movie.release_date}</p>
        <p className="card-subtitle text-muted">Average Rating (out of 10): {rating}</p>
        <p className="card-text">{this.props.movie.overview}</p>
      </div>
    )
  }
}

export default MovieCard;
