import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

export default function Filter({
    minYear,
    setMinYear,
    maxYear,
    setMaxYear,
    sort,
    setSort,
    genres,
    setGenres,
    title,
    setTitle
}) {
    const genreList = [
        'action', 'drama', 'comedy', 'biography',
        'romance', 'thriller', 'war', 'history',
        'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'
    ];

    const sortOptions = [
        { value: 'latest', label: 'Latest' },
        { value: 'oldest', label: 'Oldest' },
        { value: 'highestrated', label: 'Highest Rated' },
        { value: 'lowestrated', label: 'Lowest Rated' }
    ];

    return (
        <div className="filter-container">
            <div>
                <SearchBar title={title} className='search-bar-black' setTitle={setTitle} placeHolder='Search movies'/>
                <div className='input-container'>
                    <Input className="year-input" label='Min Date:' type='number' value={minYear} onChange={(e) => setMinYear(Number(e.target.value))} />
                    <Input className="year-input" label='Max Date:' type='number' value={maxYear} onChange={(e) => setMaxYear(Number(e.target.value))} />
                    <SelectInput className="sort-input" label='Sort:' value={sort} onChange={(e) => setSort(e.target.value)} options={sortOptions} />
                </div>
            </div>

            <ul className="filter-tags">
                {genreList.map((genre) => (
                    <Tag key={genre} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
                ))}
            </ul>
        </div>
    )
}