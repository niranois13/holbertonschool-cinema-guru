import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';


function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return
    }

    axios.post(
      'http://localhost:8000/api/auth',
      {},
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
      }
    )
    .then((res) => {
      setIsLoggedIn(true)
      setUserUsername(res.data.username)
    })
    .catch((error) => {
      console.error('Authentication failed:', error)
      setIsLoggedIn(false)
      setUserUsername("")
    })
  }, [])

  return (
    <>
      <div className='App'>
        {isLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/> : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/>}
      </div>
    </>
  )
}

export default App
