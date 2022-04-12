import React from "react";
import './index.scss'
import contenOnePageOne from '../../img/page-one/TheBranding.svg';

const PageOne = () =>{
    return(
        <div className="containerContentPageOne">
            
            <div className="contentPageOne">
                <div className='oneContentPageOne'>                    
                    <img src={contenOnePageOne} alt="React Logo" className='logoHeader'/>
                    <div className="twoContentPageOne">
                        Nuff said !
                    </div>
                </div>
                
                <div className="threeContentPageOne">
                    <div className="slideHorizontal">
                        <div className="subContentOnePageOne">
                            You know your
                            business has what it                        
                        </div>
                        <div className="subContentTwoPageOne">
                            ...We know how 
                            to get you there                        
                        </div>  
                    </div>                                      
                </div>
            </div>
        </div>
    )
}

export default PageOne;
