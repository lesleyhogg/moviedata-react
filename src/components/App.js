import React, { Component } from 'react';
import MovieCard from './MovieCard';
import $ from 'jquery';
import '../css/App.css';
import '../css/movies.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  loadMovie() {
    console.log("Fetching JSON from TMDB");
    const API_KEY = {process.env.TMDB_API_KEY};
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=US`;
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log("Fetched data successfully!");
        const movieData = searchResults.results;

        console.log(movieData[13]);

        let movieCards = [];
        movieData.forEach((movie) => {
          const movieCard = <MovieCard key={movie.id} movie={movie} />
          movieCards.push(movieCard);
        })

        this.setState({cards: movieCards});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  componentDidMount() {
    this.loadMovie();
  }

  render() {
    return(
      <div className="container">
        <div className="header">
          <h1>MovieData</h1>
          <p>A React Project</p>
        </div>
        <div className="jumbotron">
          <h2><strong>Now Playing in the US</strong></h2>
        </div>
        <div className="movies">
          {this.state.cards}
        </div>
      </div>
    )
  }

}

export default App;
