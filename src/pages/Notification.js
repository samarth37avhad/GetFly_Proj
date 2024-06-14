import React from 'react';
import NotificationSection from '../components/NotificationSection';

const Notification = () => {
  const notifications = [
    { id: 1, title: "Cybersecurity Essentials", update: "New session added on zero-trust architecture.", date: "2024-06-26" },
    { id: 2, title: "Cloud Computing Trends", update: "Added new case studies on edge computing.", date: "2024-06-23" },
    { id: 3, title: "Software Development Best Practices", update: "Updated session on microservices architecture.", date: "2024-06-28" },
  ];

  return (
    <div>
      <NotificationSection notifications={notifications} />
    </div>
  );
};

export default Notification;
