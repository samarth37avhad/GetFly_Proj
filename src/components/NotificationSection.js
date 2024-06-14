import React from 'react';
import NotificationCard from './NotificationCard';
import './NotificationSection.css';

const NotificationSection = ({ notifications }) => {
  return (
    <div className="notification-section">
      <h2><i>Latest updates</i></h2>
      {notifications.map(notification => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationSection;