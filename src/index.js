import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const darkMode = localStorage.getItem('darkMode');
// root.classList.add(darkMode === 'true' ? 'dark-mode' : 'light-mode');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

