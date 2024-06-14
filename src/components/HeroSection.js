import React from 'react';
import './HeroSection.css';

const HeroSection = ({ totalSeminars, attendedSeminars }) => {
  return (
    <div className="hero-section">
      <h1><i>Welcome to Our Seminars</i></h1>
      <p>Total No of Seminars Provided By Organisation: {totalSeminars}</p>
      <p>Seminars Attended By Student: {attendedSeminars}</p>
    </div>
  );
};

export default HeroSection;