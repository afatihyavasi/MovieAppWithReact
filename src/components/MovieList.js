import React from 'react';
import '../styles/MovieList.css';

const MovieList = (props) => {

    const deleteCard = (movie) => {
        props.deleteMovies(movie);
    };

    return (
        <div className="row">
            {props.movie.map((movie) => {
                return (
                    <div className="col-lg-3" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} className="card-img-top" alt='sample-movie' />
                            <div className="card-body overflow-auto">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text overflow-auto">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" className="btn btn-md btn-outline-danger" onClick={() => deleteCard(movie)}>Delete</button>
                                    <h2><span className="badge badge-info">{movie.vote_average}</span></h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};



export default MovieList;

