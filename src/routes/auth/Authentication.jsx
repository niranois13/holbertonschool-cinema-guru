import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';
import './auth.css';


export default function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignInClick = (e) => {
        e.preventDefault()
        set_switch(true)
    };

    const handleSignUpClick = (e) => {
        e.preventDefault()
        set_switch(false)
    }

    return (
        <div className='auth-container'>
            <form className='auth-header'>
                <Button label="Sign In" type="button" className="sign-in-button" onClick={handleSignInClick} />
                <Button label="Sign Up" type="button" className="sign-up-button" onClick={handleSignUpClick} />
            </form>
            {
                _switch ? (
                    <Login
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                    />
                ) : (
                    <Register
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                    />
                )
            }
        </div>
    )
}