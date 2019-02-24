import React, { Component } from 'react';
import MovieCard from './MovieCard';
import $ from 'jquery';
import '../css/App.css';
import '../css/movies.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      region: 'GR',
      regionName: 'Greece',
      regions: [],
      regionsMap: null
    };
  }

  loadMovie() {
    console.log("Fetching JSON from TMDB");
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=${this.state.region}`;
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log("Fetched data successfully!");
        this.setState({movie: searchResults.results});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  componentDidMount() {
    this.loadMovie();
    this.loadRegions();
  }

  loadRegions() {
    console.log("Fetching JSON from REST Countries EU");
    const url = `https://restcountries.eu/rest/v2/all`;
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log("Region data fetched data successfully!");
        const regionsMap = searchResults.reduce((acc, current) => {
          acc[current.alpha2Code] = current;
          return acc;
          }, {}
        )
        this.setState({regions: searchResults, regionsMap: regionsMap});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch region data")
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.region !== prevState.region) {
      this.loadMovie();
    }
  }

  render() {
    return(
      <div className="container">
        <div className="header">
          <h1>MovieData</h1>
          <p>A React Project</p>
        </div>
        <div className="jumbotron">
          <h2><strong>Now Playing in {this.state.regionsMap && this.state.regionsMap[this.state.region].name}</strong></h2>
        </div>
        <div id="search">
          <p>Select a different country:</p>
          <select onChange={e =>
            this.setState({region: e.target.value})
          }>
            {
              this.state.regions.map(region => <option key={region.alpha2Code} value={region.alpha2Code}>{region.name}</option>)
            }
          </select>
        </div>
        <div className="movies">
          {this.state.movie && this.state.movie.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    )
  }

}

export default App;
