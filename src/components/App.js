import React from 'react';
import '../styles/App.css';
import Searchbar from './Searchbar';
import MovieList from './MovieList';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const listID = 7079355;


class App extends React.Component {
  state = {
    movies: [],
    searchQuery: ""
  };


  async componentDidMount() {
    // const getPopulerURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    // const response = await axios.get(getPopulerURL);
    // this.setState({ movies: response.data.results })
    const getListURL = `https://api.themoviedb.org/3/list/${listID}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(getListURL);
    console.log(response.data.items)
    this.setState({movies : response.data.items})
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
      return (
        movie.title ? movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) 
        : movie.title = movie.name 
      )
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
