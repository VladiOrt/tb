import React from "react";
import './index.scss'

import Elipse from './Elipse.svg';
import FlechaSVG from './Trazado.svg';
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