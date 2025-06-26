import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

export default function Register({ username = '', password = '', setUsername, setPassword }) {
    return (
        <>
            <div className='auth-inputs'>
                <Input label="Username:" type="text" className="register-input" value={username} setValue={setUsername} />
                <Input label="Password:" type="password" className='register-input' value={password} setValue={setPassword} />
            </div>
            <div className='auth-buttons'>
                <Button label="Sign Up" className="register-button"/>
            </div>
        </>
    )
}