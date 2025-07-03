import './dashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../../components/movies/MovieCard';

export default function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.get('http://localhost:8000/api/titles/favorite/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setMovies(response.data);
            } catch (error) {
                console.error('Failed to fetch favorite movies:', error);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <div className="movies-page">
            <h1>MOVIES YOU LIKE</h1>
            <ul className="movie-list">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </ul>
        </div>
    );
}
