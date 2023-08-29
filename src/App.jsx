import { useState, useEffect } from 'react'

import "./new.css"
import SearchIcon from './search.svg'
import MovieCard from './movieCard'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=cff5ac5b'


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }


  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search For Movies'
          value={searchTerm}
          onChange={handleChange}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className='container'>

        {
          movies.length > 0
            ? (<Grid container rowspacing={2}>
              {movies.map((movie) => (
                <Grid xs={8} md={6}>
                  <item><MovieCard movie1={movie} /></item>
                </Grid>
              ))}
            </Grid>)
            : (
              <div className='empty'>
                <h2>No movies Found</h2>
              </div>
            )
        }

      </div>
    </div>
  )
}

export default App;
