import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Create from './Create';
import Profile from './Profile';

function App() {
  useEffect(() => {
    // Mobile menu toggle
    const btn = document.querySelector('.togglebtn');
    const menu = document.querySelector('.dropdown_menu');
    if (btn && menu) {
      btn.onclick = () => {
        menu.classList.toggle('open');
      };
    }

    // Search + right side menu toggle
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const sideMenu = document.querySelector('.side-menu');
    if (searchIcon && searchInput && sideMenu) {
      searchIcon.onclick = () => {
        searchInput.classList.toggle('active');
        sideMenu.classList.toggle('show');
        if (searchInput.classList.contains('active')) {
          searchInput.focus();
        }
      };
    }
  }, []); // run once after first render

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
