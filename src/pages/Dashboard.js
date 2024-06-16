import React from 'react';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';

const Dashboard = () => {
  const seminars = [
    { id: 1, title: "Seminar on AI and Machine Learning", description: "An in-depth seminar on the latest trends in AI and Machine Learning.", timings: "12:00 AM, June 22, 2024", venue: "Auditorium",Apply:"offline registration process On Campus" },
    { id: 2, title: "Seminar on Data Analytics", description: "Exploring the power of data analytics in shaping industries and decision-making.", timings: "11:30 AM, July 22, 2024", venue: "Room 201",Apply:"offline registration process at college" },
    { id: 3, title: "AI in Education", description: "Understanding the impact of artificial intelligence on modern education systems and learning methodologies.", timings: "1:00 PM, Aug 24, 2024", venue: "Conference Hall ",Apply:"offline registration process at college" },
    { id: 4, title: "Advances in Biotechnology", description: "Understanding the impact of artificial intelligence on modern education systems and learning methodologies.", timings: "10:00 AM, Sep 25, 2024", venue: " Room 303",Apply:"offline registration process at college" },
    { id: 5, title: "Seminar on Modern Art", description: "A seminar on the latest advancements in biotechnology and their applications in medicine and agriculture.", timings: "4:30 PM, June 29, 2024", venue: "Lab 5",Apply:"offline registration process at college" },
  ];

  return (
    <div>
      <HeroSection totalSeminars={13} attendedSeminars={300} />
      <MainSection seminars={seminars} />
    </div>
  );
};

export default Dashboard;
