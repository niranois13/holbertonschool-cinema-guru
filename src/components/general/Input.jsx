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
            {icon ? (
                <div className="icon-label">
                    <span>{icon}</span>
                    <label>{label}</label>
                </div>
            ) : (
                <label>{label}</label>
            )}
            <input type={type} value={value} onChange={handleInput} {...inputAttributes} />
        </div>
    )
}