import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/aboub';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
  return (
    <>
    <div className="">
      <Navbar />  
      <Header /> 
     
    </div>
    <div>
    
    <About />
    <Services />
    <Portfolio />
    <Contact />

   
    </div>
    </>
  );
}

export default App;
