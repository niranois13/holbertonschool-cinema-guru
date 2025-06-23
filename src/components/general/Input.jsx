import './general.css';

export default function Input({
    label = '',
    type = '',
    className = '',
    value,
    setValue,
    icon,
    inputAttributes = {},
}) {
    const handleInput = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className={`input-text ${className}`}>
            <label>{label}</label>
            <div>
                {icon && <span>{icon}</span>}
                <input type={type} value={value} onChange={handleInput} {...inputAttributes} />
            </div>
        </div>
    )
}