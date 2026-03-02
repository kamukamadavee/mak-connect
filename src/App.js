
import Home from './Home';
import Create from './Create';
import Profile from './Profile';
import About from './About';
import Header from './Header';
import Footer from './Footer';

import Postpage from './Postpage';
import Missing from './Missing';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/"
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
    }, []);

  useEffect(() =>{
      const fetchdata = async () => {
    try{
      const response = await fetch(`${API_URL}posts`)
      if(!response.ok){
        throw new Error ("couldn't fetch data")
      }
      const data = await response.json()
      setPosts(data);

    }
    catch(error){
    console.error(error)}
  }
  fetchdata();
  }, [])
  return (
    <div>
      <Header search={search} setSearch={setSearch}/>
      

      <Routes>
        <Route path='/' element={<Home posts={posts} />}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post/:id' element={<Postpage posts={posts}/>}/>
        <Route path='*' element={<Missing/>}/>
      
      </Routes>

      <Footer/>
  
    </div>
  );
}

export default App;
