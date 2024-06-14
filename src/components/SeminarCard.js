

// export default SeminarCard;
import React from 'react';
import './SeminarCard.css';

const SeminarCard = ({ seminar }) => {
  return (
    <div className="seminar-card">
      <h3>{seminar.title}</h3>
      <p>{seminar.description}</p>
      <p><strong>Time:</strong> {seminar.timings}</p>
      <p><strong>Venue:</strong> {seminar.venue}</p>
      <p><strong>Apply:</strong> {seminar.Apply}</p>
    </div>
  );
};

export default SeminarCard;