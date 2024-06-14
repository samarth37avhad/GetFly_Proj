import React from 'react';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';

const Dashboard = () => {
  const seminars = [
    { id: 1, title: "Emerging Technologies in IT", description: "This seminar will cover the latest advancements in IT, including artificial intelligence (AI), blockchain technology, and cybersecurity. Attendees will learn how these technologies are transforming industries and what skills are needed to stay ahead in the field.", timings: "10:00 AM, June 20, 2024", venue: "Auditorium",Apply:"offline registration process at college" },
    { id: 2, title: "Cloud Computing Trends", description: "Dive into the newest trends and best practices in cloud computing. The seminar will cover topics such as serverless computing, multi-cloud strategies, and the impact of edge computing. Industry experts will share insights and case studies.", timings: "11:30 AM, June 22, 2024", venue: "Room 101",Apply:"offline registration process at college" },
    { id: 3, title: "Data Science & Analytics", description: "This seminar offers a comprehensive look at data science techniques and analytics tools. Topics include machine learning, big data analytics, and data visualization. Participants will gain hands-on experience with popular data science tools.", timings: "2:00 PM, June 24, 2024", venue: "Conference Hall ",Apply:"offline registration process at college" },
    { id: 4, title: "Cybersecurity Essentials", description: "Understand the essentials of cybersecurity, including threat detection, risk management, and incident response. This seminar will also cover the latest cybersecurity threats and how to protect against them. Suitable for all levels of IT professionals.", timings: "9:00 AM, June 25, 2024", venue: " Room 203",Apply:"offline registration process at college" },
    { id: 5, title: "Software Development Best Practices", description: "Learn about the best practices in software development, including agile methodologies, DevOps practices, and continuous integration/continuous deployment (CI/CD). This seminar will also discuss common pitfalls and how to avoid them.", timings: "3:30 PM, June 27, 2024", venue: "Lab 5",Apply:"offline registration process at college" },
  ];

  return (
    <div>
      <HeroSection totalSeminars={10} attendedSeminars={400} />
      <MainSection seminars={seminars} />
    </div>
  );
};

export default Dashboard;
