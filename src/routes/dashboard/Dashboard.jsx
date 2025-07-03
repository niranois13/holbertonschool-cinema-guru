import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function Dashboard({ userUsername, setIsLoggedIn }) {
    const [activityTrigger, setActivityTrigger] = useState(false);

    const triggerActivity = () => {
        setActivityTrigger((prev) => !prev);
    };

    return (
        <BrowserRouter>
            <div className='dashboard'>
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            </div>
            <div className='content-wrapper'>
                <div className='sidebar-container'>
                    <SideBar userUsername={userUsername} activityTrigger={activityTrigger} />
                </div>
                <div className='main-content'>
                    <Routes>
                        <Route path='/home' element={<HomePage triggerActivity={triggerActivity} />} />
                        <Route path='/favorites' element={<Favorites />} />
                        <Route path='/watchlater' element={<WatchLater />} />
                        <Route path='*' element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}