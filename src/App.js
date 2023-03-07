import './App.css';
import Ball from "./Ball";
import Lottery from './Lottery';
import React, { useState } from 'react';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div >
        <Lottery title="Lotto" maxNum={40} numBalls={6} />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
      </div>
      <div>
          <button onClick={toggleTheme}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
      </div>
    </div>
  );
}

export default App;
