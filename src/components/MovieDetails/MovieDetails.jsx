import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import moviesApi from '../../db/Movies';

const MovieDetails = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isSubs = true;

        if (isSubs) {
            isSubs = false;

            moviesApi.getById(id)
                .then(res => {
                    console.log(res.data.data.movie);
                    setMovie(res.data.data.movie);
                    setLoading(false);
                });
        }

        return () => {
            isSubs = false;
        }
    }, []);

    return (
        <>
            {loading ? <div className='loading'><div></div></div> :
                <div className='movie-container'>
                    <h1>{movie.title}</h1>
                    <div className="movie-detail">
                        <div className="header">
                            <img src={movie.background_image_original} alt={movie.title} />
                            <div className="images">
                                <img src={movie.medium_screenshot_image1} />
                                <img src={movie.medium_screenshot_image2} />
                                <img src={movie.medium_screenshot_image3} />
                            </div>
                        </div>
                        <ul className="main">
                            <p>{movie.description_full}</p>
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
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default MovieDetails;