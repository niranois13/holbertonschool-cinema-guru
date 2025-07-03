import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

export default function Login({ username = "", password = "", setUsername, setPassword }) {
    return (
        <>
            <h3>Sign in with your account</h3>
            <div className='auth-inputs'>
                <Input label="Username:" type="text" className="login-input" value={username} setValue={setUsername} icon={<FontAwesomeIcon icon={faUser} className="auth-icon" />} />
                <Input label="Password:" type="password" className='login-input' value={password} setValue={setPassword} icon={<FontAwesomeIcon icon={faKey} className="auth-icon" />} />
            </div>
            <div className='auth-buttons'>
                <Button label="Sign In" type="submit" className="login-button" icon={<FontAwesomeIcon icon={faKey} />} />
            </div>
        </>
    )
}