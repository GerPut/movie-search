import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import './movie.css'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey='


function App() {

  const [movies, setMovies] = useState([])

  const [searchTerm, setsearchTerm] = useState('')

  // const movie1 = {
  //   "Title": "Spiderman in Cannes",
  //   "Year": "2016",
  //   "imdbID": "tt5978586",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
  // }


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('')
  }, [])


  return (
    <div className="app">
      <h1>Movie Search</h1>
      <div className="search">
        <input type="text" placeholder='Search' value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
        <img src="" alt="search " onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies.length > 0 ? (<div className="container">
          {movies.map((movie) => (<MovieCard movie={movie} />))}
          <MovieCard movie1={movies[0]} />
        </div>)
          :
          (
            <div className="empty">No movies found</div>
          )
      }
      <div className="container">
        <MovieCard movie={movies[0]} />
      </div>
    </div>
  );
}

export default App;
