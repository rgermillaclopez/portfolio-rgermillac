import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import NavBarPortfolio from './Layout/NavBar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarPortfolio />}>
            <Route index element={<Home />} />
            <Route path='about' element={<Aboutme />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact' element={<Contact />} />

            <Route path='*' element={<Navigate to="/"/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
