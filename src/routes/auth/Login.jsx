import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

export default function Login({ username = "", password = "", setUsername, setPassword }) {
    return (
        <>
            <div className='auth-inputs'>
                <Input label="Username:" type="text" className="login-input" value={username} setValue={setUsername} />
                <Input label="Password:" type="password" className='login-input' value={password} setValue={setPassword} />
            </div>
            <div className='auth-buttons'>
                <Button label="Sign In" type="submit" className="login-button" onClick={() => { }} />
            </div>
        </>
    )
}