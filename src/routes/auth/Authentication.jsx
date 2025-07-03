import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Button from '../../components/general/Button';
import axios from 'axios';
import './auth.css';


export default function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault()
        set_switch(true)
    };

    const handleSignUp = (e) => {
        e.preventDefault()
        set_switch(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = _switch 
        ? 'http://localhost:8000/api/auth/login'
        : 'http://localhost:8000/api/auth/register';

        await axios.post(endpoint, { 
            username: username, 
            password: password 
        })
            .then((res) => {
                const token = res.data?.accessToken;
                if (token) {
                    localStorage.setItem('accessToken', token);
                    setUserUsername(username);
                    setIsLoggedIn(true);
                }
            })
            .catch((error) => {
                console.error('Authentication failed:', error);
                alert('Authentication failed');
            })
    }

    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit}>
                <div className='auth-header'>
                    <Button label="Sign In" type="button" className="sign-in-button" onClick={handleSignIn} />
                    <Button label="Sign Up" type="button" className="sign-up-button" onClick={handleSignUp} />
                </div>
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
            </form>
        </div>
    )
}