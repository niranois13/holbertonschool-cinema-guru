import './movies.css';
import { useState } from 'react';

export default function Tag({ genre = '', filter, genres = [], setGenres }) {
    const [selected, setSelected] = useState(false);

    const handleTag = () => {
        if (selected) {
            const updatedGenres = genres.filter(g => g !== genre);
            setGenres(updatedGenres);
        } else {
            const updatedGenres = [...genres, genre];
            setGenres(updatedGenres);
        }
        setSelected(!selected);
    };

    return (
        <li
            className={`tag ${selected ? 'selected' : ''} ${filter ? 'filter' : ''}`}
            onClick={handleTag}
        >
            {genre}
        </li>
    )
}