import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import unavailableImg from '../../assets/unavailable.png';
import Activity from '../Activity';
import axios from 'axios';

export default function MovieCard({ movie, triggerActivity }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);
    const [imageSrc, setImageSrc] = useState(movie.imageurls?.[0] || unavailableImg);

    useEffect(() => {
        const fetchUserLists = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const [favoriteRes, watchLaterRes] = await Promise.all([
                    axios.get('http://localhost:8000/api/titles/favorite/', { headers }),
                    axios.get('http://localhost:8000/api/titles/watchlater/', { headers }),
                ]);

                if (favoriteRes.data.some((fav) => fav.imdbId === movie.imdbId)) {
                    setIsFavorite(true);
                }

                if (watchLaterRes.data.some((watch) => watch.imdbId === movie.imdbId)) {
                    setIsWatchLater(true);
                }
            } catch (error) {
                console.error('Error fetching user lists:', error);
            }
        };

        fetchUserLists();
    }, [movie.imdbId]);

    const handleClick = async (type) => {
        const token = localStorage.getItem('accessToken');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;

        const isActive = type === 'favorite' ? isFavorite : isWatchLater;
        const setState = type === 'favorite' ? setIsFavorite : setIsWatchLater;

        try {
            if (isActive) {
                await axios.delete(url, { headers });
                setState(false);
                triggerActivity?.();
            } else {
                await axios.post(url, {}, { headers });
                setState(true);
                triggerActivity?.();
            }
        } catch (error) {
            console.error(`Error updating ${type}:`, error);
        }
    };

    return (
        <div className="movie-card">
            <div className="movie-image-container">
                <img
                    src={imageSrc}
                    alt={movie?.title}
                    className="movie-image"
                    onError={() => setImageSrc(unavailableImg)}
                />
                <h3 className="movie-title">{movie?.title}</h3>
                <div className="movie-icons">
                    <FontAwesomeIcon
                        icon={faClock}
                        className={`icon watchlater-icon ${isWatchLater ? "active" : ""}`}
                        onClick={() => handleClick("watchlater")}
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        className={`icon favorite-icon ${isFavorite ? "active" : ""}`}
                        onClick={() => handleClick("favorite")}
                    />
                </div>
            </div>
            <div className="movie-synopsis-container">
                <p className="movie-synopsis">{movie?.synopsis}</p>
            </div>
            <div className="movie-genres">
                {movie?.genres?.map((genre, index) => (
                    <span key={index} className="genre-tag">
                        {genre}
                    </span>
                ))}
            </div>
        </div>
    );
}