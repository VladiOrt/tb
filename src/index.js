import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route,Link,Routes} from 'react-router-dom'

import './fonts/Summer-Faith.otf';
import './fonts/Montserrat-Regular.otf';
import './fonts/Summer Faith.ttf';

import HeaderNavContact from './components/nav/contact'
import HeaderNavProjects from './components/nav/projects'
 
    

ReactDOM.render(
  <BrowserRouter >
      <Routes>
          <Route exact path='/' element={<App />} />
          <Route  exact path='/contact' element={<HeaderNavContact />} />
          <Route exact path='/projects' element={<HeaderNavProjects />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
