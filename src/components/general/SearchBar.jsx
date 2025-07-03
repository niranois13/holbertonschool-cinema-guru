import './general.css';

export default function SearchBar({title = '', className = '', setTitle, placeHolder='' }) {
    const handleInput = (event) => {
        setTitle(event.target.value)
    }

    return (
        <input type='text' className={className} value={title} onChange={handleInput} placeholder={placeHolder}/>
    )
}