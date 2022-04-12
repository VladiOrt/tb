import React from "react";
import './index.scss'

import Elipse from './Elipse 39.svg';
import FlechaSVG from './Trazado 239.svg';
const Flecha =() => {
    return(
        <div className="containerFlecha"
        >
            <img src={Elipse} alt="React" width="100%"/>
            <img src={FlechaSVG} alt="React" width="50%" className="flecha"/>
        </div>
    )
}
export default Flecha;