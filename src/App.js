import React from 'react';
// import logo from './logo.svg';
import './App.css';

import SideBar from './components/SideBar/SideBar';

import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Interests from './components/Interests/Interests';
import Awards from './components/Awards/Awards';

function App() {

  

  return (
    <div className="App">
      <div className = "wrapper">

        <div className = "sidebarz">
          <SideBar />
        </div>

        <div className = "content">
          <About />
          <Experience />
          <Education/>
          <Skills/>
          <Interests/>
          <Awards/>
        </div>
        
      
      </div>      
      
     


    </div>
  );
}

export default App;


 