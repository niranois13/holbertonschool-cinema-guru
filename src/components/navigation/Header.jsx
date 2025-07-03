import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header({ userUsername = '', setIsLoggedIn }) {
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    }

    return (
        <nav className="nav-header">
            <a href="/">Cinema Guru</a>
            <div className="nav-right-side">
                <img className="nav-avatar" src="https://picsum.photos/100/100" alt="User Avatar"/>
                <p>Welcome, {userUsername}!</p>
                <span className="nav-logout" onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} /> logout
                </span>
            </div>
        </nav>
    )
}