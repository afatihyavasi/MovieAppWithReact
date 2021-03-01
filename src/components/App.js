import React from 'react';
import '../styles/App.css';
import Searchbar from './Searchbar';
import MovieList from './MovieList';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;



class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  };


  async componentDidMount() {
    const getPopulerURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(getPopulerURL);
    this.setState({ movies: response.data.results })
  }

  deleteMovie = (movie) => {
    const newMovies = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({ movies: newMovies });


  };

  searchMovie = (event) => {

    this.setState({ searchQuery: event.target.value });

  }

  render() {

    let filteredMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase());
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Searchbar searchMovieP={this.searchMovie} />
          </div>
        </div>

        <MovieList movie={filteredMovies} deleteMovies={this.deleteMovie} />

      </div>
    );
  }
}

export default App;
