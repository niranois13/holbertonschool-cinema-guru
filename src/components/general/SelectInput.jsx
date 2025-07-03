import './general.css';

export default function SelectInput({
    label = '',
    options = [],
    className = '',
    value,
    setValue,
}) {
    const handleSelect = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className={`input-text ${className}`}>
            <label>{label}</label>
            <select value={value} onChange={handleSelect}>
                {options.map((option, index) => {
                    if (typeof option === 'object' && option !== null) {
                        return (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        );
                    }
                    return (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}