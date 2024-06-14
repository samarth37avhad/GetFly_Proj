// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import NavBar from './components/NavBar';
// import HeroSection from './components/HeroSection';
// import MainSection from './components/MainSection';
// import NotificationSection from './components/NotificationSection';
// import './App.css';

// const App = () => {
//   const seminars = [
//     { id: 1, title: "Seminar 1", description: "Description 1", timings: "10:00 AM", venue: "Venue 1" },
//     { id: 2, title: "Seminar 2", description: "Description 2", timings: "11:00 AM", venue: "Venue 2" },
//     { id: 3, title: "Seminar 3", description: "Description 3", timings: "12:00 PM", venue: "Venue 3" },
//     { id: 4, title: "Seminar 4", description: "Description 4", timings: "01:00 PM", venue: "Venue 4" },
//     { id: 5, title: "Seminar 5", description: "Description 5", timings: "02:00 PM", venue: "Venue 5" },
//   ];

//   const notifications = [
//     { id: 1, title: "Update 1", update: "Update description 1", date: "2024-06-01" },
//     { id: 2, title: "Update 2", update: "Update description 2", date: "2024-06-02" },
//     { id: 3, title: "Update 3", update: "Update description 3", date: "2024-06-03" },
//   ];

//   return (
//     <div className="App">
//       <NavBar />
//       <HeroSection totalSeminars={10} attendedSeminars={5} />
//       <MainSection seminars={seminars} />
//       <NotificationSection notifications={notifications} />
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Notification from './pages/Notification';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;