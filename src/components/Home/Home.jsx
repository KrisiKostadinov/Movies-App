import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import moviesApi from '../../db/Movies';

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  function getAllMovies() {
    moviesApi.getMovies()
      .then((res) => {
        console.log(res.data.data.movies);
        setMovies(res.data.data.movies);
        setLoading(false);
      });
  }

  useEffect(() => {
    let isSubs = true;

    if (isSubs) {
      isSubs = false;

      getAllMovies();
    }

    return () => {
      isSubs = false;
    }

  }, []);

  return (
    <div className='movies-container'>
      <h1>All Movies</h1>
      {loading ? <div className='loading'><div></div></div> :
        <div className="movies-list">
          {
            movies.map(movie =>
              <div key={movie.title} className='movie'>
                <h2>{movie.title}</h2>
                <img src={movie.background_image_original} alt={movie.title} />
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