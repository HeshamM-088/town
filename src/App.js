import React from 'react';
import Nav from './Navbar/Nav';
import Intro from './Intro/Intro';
import Work from './Works/Work';
import Imgs from './Imgs/Imgs';
import Contact from './Contact/Contact';
import './App.css';


function App() {
  return(
    <div className='main-app'>
        <Nav />
        <Intro />
        <Work />
        <Imgs />
        <Contact />
    </div>
  )
}

export default App;
