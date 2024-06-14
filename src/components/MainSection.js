
import React from 'react';
import SeminarCard from './SeminarCard';
import './MainSection.css';

const MainSection = ({ seminars }) => {
  return (
    <div className="main-section">
      <h2><i>Recent Seminars</i></h2>
      {seminars.map(seminar => (
        <SeminarCard key={seminar.id} seminar={seminar} />
      ))}
    </div>
  );
};

export default MainSection;