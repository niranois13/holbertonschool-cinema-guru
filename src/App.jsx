import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';


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
        {isLoggedIn ? <Dashboard username={userUsername} /> : <Authentication />}
      </div>
    </>
  )
}

export default App
