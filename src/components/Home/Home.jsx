import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MoviesContext from '../../context/MoviesContext';
import moviesApi from '../../db/Movies';

const Home = () => {
  
  const [loading, setLoading] = useState(true);
  const { movies, setMovies } = useContext(MoviesContext);

  const getAllMovies = useCallback(
    () => {
    moviesApi.getMovies()
      .then((res) => {
        setMovies(res.data.data.movies);
        setLoading(false);
      });
    }, [setMovies]
  )
  
  useEffect(() => {
    let isSubs = true;

    if (isSubs) {
      isSubs = false;

      if(movies.length === 0 && loading) {
        getAllMovies();
      } else {
        setLoading(false);
      }
    }

    return () => {
      isSubs = false;
    }

  }, [movies, getAllMovies, loading]);

  return (
    <div className='movies-container'>
      <h1>All Movies</h1>
      {loading ? <div className='loading'><div></div></div> :
        <div className="movies-list">
          {
            movies.map(movie =>
              <div key={movie.title} className='movie'>
                <img src={movie.background_image_original} alt={movie.title} />
                <h2>{movie.title}</h2>
                <NavLink to={'/movies/' + movie.id}>
                  <button>See Details</button>
                </NavLink>
              </div>
            )
          }
        </div>
      }
    </div>
  )
}

export default Home;