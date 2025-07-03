import axios from 'axios';
import './navigation.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity';

export default function SideBar({ userUsername, activityTrigger }) {
    const [selected, setSelected] = useState('home');
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);

    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);

        switch (pageName) {
            case 'Home':
                navigate('/home');
                break;
            case 'Favorites':
                navigate('/favorites');
                break;
            case 'Watch Later':
                navigate('/watchlater');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.get('http://localhost:8000/api/activity', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const filteredActivities = response.data.filter(
                    activity => activity.user.username === userUsername
                );
                setActivities(filteredActivities);
                setShowActivities(true);
            } catch (error) {
                console.error('Error fetching activities', error);
            }
        };
        fetchActivities();
    }, [userUsername, activityTrigger]);

    return (
        small ? (
            <nav className='sidebar-nav-container small' onMouseEnter={() => setSmall(false)} onMouseLeave={() => setSmall(true)}>
                <ul className='navigation-ul small'>
                    <li onClick={() => setPage('Home')}><FontAwesomeIcon icon={faFolder} /></li>
                    <li onClick={() => setPage('Favorites')}><FontAwesomeIcon icon={faStar} /></li>
                    <li onClick={() => setPage('Watch Later')}><FontAwesomeIcon icon={faClock} /></li>
                </ul>
            </nav>
        ) : (
            <nav className="sidebar-nav-container large">
                <ul className='navigation-ul'>
                    <li
                        className={selected === 'Home' ? 'active' : ''}
                        onClick={() => setPage('Home')}
                    >
                        <FontAwesomeIcon icon={faFolder} />
                        Home
                        {selected === 'Home' && (
                            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                        )}
                    </li>

                    <li
                        className={selected === 'Favorites' ? 'active' : ''}
                        onClick={() => setPage('Favorites')}
                    >
                        <FontAwesomeIcon icon={faStar} />
                        Favorites
                        {selected === 'Favorites' && (
                            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                        )}
                    </li>

                    <li
                        className={selected === 'Watch Later' ? 'active' : ''}
                        onClick={() => setPage('Watch Later')}
                    >
                        <FontAwesomeIcon icon={faClock} />
                        Watch Later
                        {selected === 'Watch Later' && (
                            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                        )}
                    </li>
                </ul>
                <div className='activity-ul'>
                    <h3>Latest Activities</h3>
                    {showActivities && (
                        <ul className="activity-list">
                            {activities.slice(0, 10).map((activity, index) => (
                                <Activity key={index} activity={activity} />
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        )
    )
}