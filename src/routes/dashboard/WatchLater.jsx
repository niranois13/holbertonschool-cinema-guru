import './dashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';

export default function WatchLater() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchWatchLater = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.get('http://localhost:8000/api/titles/watchlater/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMovies(response.data);
            } catch (error) {
                console.error('Failed to fetch watch later movies:', error);
            }
        };

        fetchWatchLater();
    }, []);

    return (
        <div className="movies-page">
            <h1>MOVIES TO WATCH LATER</h1>
            <ul className="movie-list">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </ul>
        </div>
    );
}
