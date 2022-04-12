import React from 'react';
import {
    BrowserRouter as Router,
    Link, 
    Routes, 
    Route
  } from 'react-router-dom'
import './index.scss'
import Projects from '../views/projects';
const RoutesContainer = () => {
    return (
      <>      
      <Router>
              <Routes>
                <Route path="/about" />
                <Route path="/projects" >
                </Route>
                <Route path="/">
                  <Home></Home>
                </Route>
              </Routes>
      </Router>  
      </>         
    );
  }
  

  export default RoutesContainer;


  function Home() {
    return <h2>Home</h2>
  }