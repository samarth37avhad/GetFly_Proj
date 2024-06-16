import React from 'react';
import NotificationSection from '../components/NotificationSection';

const Notification = () => {
  const notifications = [
    { id: 1, title: "AI Components", update: "New session added on zero-trust architecture.", date: "2024-03-26" },
    { id: 2, title: "Cyber security", update: "New Threats had been finding .", date: "2024-05-13" },
    { id: 3, title: "Software Testing", update: "Testing the Projects", date: "2024-05-28" },
  ];

  return (
    <div>
      <NotificationSection notifications={notifications} />
    </div>
  );
};

export default Notification;
