import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import MoviesContext from '../../context/MoviesContext';
import moviesApi from '../../db/Movies';

const MovieDetails = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const { movies, setMovies } = useContext(MoviesContext);

    useEffect(() => {
        let isSubs = true;

        if (isSubs) {
            isSubs = false;

            const index = movies.findIndex(m => m.id.toString() === id.toString());
            if (movies[index]?.cached === true) {
                setMovie(movies[index]);
                setLoading(false);
            } else {   
                moviesApi.getById(id)
                .then(res => {
                    setMovie(res.data.data.movie);
                    const tempArr = movies;
                    
                    tempArr[index] = { ...res.data.data.movie, cached: true };
                    
                    setMovies(tempArr);
                    setLoading(false);
                });
            }
        }

        return () => {
            isSubs = false;
        }
    }, [id, movies, setMovies]);

    return (
        <>
            {loading ? <div className='loading'><div></div></div> : ''}
            <div className='movie-container'>
                <h1>{movie.title}</h1>
                <div className="movie-detail">
                    <div className="header">
                        <img src={movie.medium_screenshot_image1} alt={movie.title} />
                        <img src={movie.background_image_original} alt={movie.title} />
                        <div className="images">
                            <img src={movie.medium_screenshot_image2} alt={movie.title} />
                            <img src={movie.medium_screenshot_image3} alt={movie.title} />
                        </div>
                    </div>
                    <div>
                        <h4>Description</h4>
                        {movie.description_full}
                    </div>
                    <ul className="main">
                        <h4>Details</h4>
                        <li><span>Year:</span>
                            <span>{movie.year}</span>
                        </li>
                        <li>
                            <span>Language:</span>
                            <span>{movie.language}</span>
                        </li>
                        <li>
                            <span>Genres:</span>
                            <span>{movie.genres?.join(', ')}</span>
                        </li>
                        <li>
                            <span>Download:</span>
                            <span><a href={movie.url}>Download</a></span>
                        </li>
                    </ul>
                    <ul className='cast'>
                        <h4>Cast</h4>
                        {movie.cast?.map(c =>
                            <li key={c.name}>
                                <img src={c.url_small_image} alt={c.name} />
                                <h4>{c.name} / {c.character_name}</h4>
                            </li>
                        )}
                        {
                            movie.cast?.length === 0 || !movie.cast ?
                                <li>No Provided</li> :
                                ''
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MovieDetails;