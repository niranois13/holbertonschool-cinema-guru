import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

export default function Button({label = '', className = '', onClick, icon}) {
    return (
        <button className={className} onClick={onClick}>
            {icon && <span>{icon}</span>}
            {label}
        </button>
    )
}