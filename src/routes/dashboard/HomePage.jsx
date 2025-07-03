import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function HomePage({ triggerActivity }) {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    const loadMovies = useCallback(async (pageNumber = 1) => {
        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
                params: {
                    minYear,
                    maxYear,
                    genres: genres.join(','),
                    sort,
                    title,
                    page: pageNumber,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (pageNumber === 1) {
                setMovies(response.data.titles);
            } else {
                setMovies(prev => {
                    const newMovies = response.data.titles.filter(
                        (newMovie) => !prev.some(movie => movie.imdbId === newMovie.imdbId)
                    );
                    return [...prev, ...newMovies];
                });
            }

        } catch (error) {
            console.error('Error loading movies:', error);
        }
    }, [minYear, maxYear, genres, sort, title]);

    useEffect(() => {
        setMovies([]);
        setPage(1);
        loadMovies(1);
    }, [minYear, maxYear, genres, sort, title, loadMovies]);

    useEffect(() => {
        if (page > 1) {
            loadMovies(page);
        }
    }, [page, loadMovies]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="homepage">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />

            <ul className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie.imdbId} movie={movie} triggerActivity={triggerActivity} />
                ))}
            </ul>

            <div className="load-more-button">
                <Button onClick={handleLoadMore} label="Load More.." />
            </div>
        </div>
    );
}
