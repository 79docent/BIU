import React, { useState} from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import SearchArea from "./SearchArea";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import MovieInfo from "./MovieInfo";

const App = () =>  {
  const moviesObject = {
    movies: [],
    searchTerm: '',
    totalResults: 0,
    currentPage: 1,
    currentMovie: null,
    currentMovieGenre: []
  };

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(moviesObject);

  const apiKey = process.env.REACT_APP_API

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      setState({ movies: [...data.results], totalResults: data.total_results })
    })
    .then(setLoading(false));
  }

  const handleChange = (e) => {
    setState({ searchTerm: e.target.value })
  }

  const nextPage = (pageNumber) => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      setState({ movies: [...data.results], currentPage: pageNumber })
    })
    .then(setLoading(false));
  }

  const viewMovieInfo = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => {

      const filteredMovie = state.movies.filter(movie => movie.id === id)

      const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
      
      setState({ currentMovie: newCurrentMovie , currentMovieGenre: data.genres})

      console.log(data);
    })
  }

  const sortByPopularity = () => {
    const sortedMovies = state?.movies.sort((a, b) => a.popularity > b.popularity ? -1 : 1);
    setState({ movies: [...sortedMovies]})
}

const sortByReleaseDate = () => {
  const sortedMovies = state?.movies.sort((a, b) => a.release_date > b.release_date ? -1 : 1);
  setState({ movies: [...sortedMovies]})
}

const sortByVotes = () => {
  const sortedMovies = state?.movies.sort((a, b) => a.vote_count > b.vote_count ? -1 : 1);
  setState({ movies: [...sortedMovies]})
}

  const closeMovieInfo = () => {
    setState({ currentMovie: null })
  }

 
    const numberPages = Math.floor(state.totalResults / 20);

    return (
      <div className="App">
        <Nav/>
        
        { !loading ? <>
          { state.currentMovie == null ? 
          <div>
            <Routes> 
              <Route path="/" index element={<SearchArea handleSubmit={handleSubmit} handleChange={handleChange}/>}/>
            </Routes>
              <div className="card-image waves-effect waves-block waves-light center">
                    <p>Sortuj według:</p>
                    <p><a href="#" onClick={() => sortByPopularity()}>Popularność</a> | <a href="#" onClick={() => sortByReleaseDate()}>Data premiery</a> | <a href="#" onClick={() => sortByVotes()}>Liczba głosów</a></p>
                    <br></br>
              </div>
            <MovieList currentMovie={state.currentMovie} viewMovieInfo={viewMovieInfo} movies={state.movies} />
          </div> 
            : 
          <MovieInfo currentMovie={state.currentMovie} closeMovieInfo={closeMovieInfo} currentMovieGenre={state.currentMovieGenre} />}

          { state.totalResults > 20 && state.currentMovie == null ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={state.currentPage} /> : ''}</> : <h1>test</h1> 
        }
        
      </div>
    );

  }
export default App;
