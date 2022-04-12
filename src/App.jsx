import React from "react";
import "./App.scss";

import HeaderNav from "./components/nav/index.jsx";
export default function App() {
  return (
    <div className="App">            
      <HeaderNav></HeaderNav>                   
    </div>
  );
}

{/**

<Routes className="routesContainer">
          <Route exact path='/' element={<Home />}  className="HomeContainer"></Route>         
      </Routes>
 <Route exact path='/projects' element={<Projects />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        
        */}
