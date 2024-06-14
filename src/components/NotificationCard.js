
import React from 'react';
import './NotificationCard.css';

const NotificationCard = ({ notification }) => {
  return (
    <div className="notification-card">
      <h3>{notification.title}</h3>
      <p>{notification.update}</p>
      <p><strong>Date:</strong> {notification.date}</p>
    </div>
  );
};

export default NotificationCard;