import './components.css';

export default function Activity({ activity }) {
    const date = new Date(activity.updatedAt);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    })

    const activityType = activity.activityType;
    let formattedActivityType = '';
    let formattedAction1 = '';
    let formattedAction2 = '';
    switch (activityType) {
        case 'favorite':
            formattedActivityType = 'favorites';
            formattedAction1 = 'added';
            formattedAction2 = 'to';
            break;
        case 'watchLater':
            formattedActivityType = 'watch later';
            formattedAction1 = 'added';
            formattedAction2 = 'to';
            break;
        case 'removeFavorited':
            formattedActivityType = 'favorites';
            formattedAction1 = 'removed';
            formattedAction2 = 'from';
            break;
        case 'removeWatchLater':
            formattedActivityType = 'watch later';
            formattedAction1 = 'removed';
            formattedAction2 = 'from';
            break;
        default:
            return;
    }

    const activityUser = activity.user.username;
    const activityTitle = activity.title.title;

    return (
        <div className='activity-list-container'>
            <li className='activity-list'>
                <p>
                    <span>{activityUser}</span> {formattedAction1} <span>{activityTitle}</span> {formattedAction2} {formattedActivityType} - {formattedDate}
                </p>
            </li>
        </div>
    )
}