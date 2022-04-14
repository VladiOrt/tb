import React from "react";
import './index.scss'
import { useState } from "react";
import elipse from '../../img/pagetwo/Elipse.svg';


import  Flecha from '../../../components/img/flecha'
import { Link } from "react-router-dom";
const PageTwo = () =>{
    const [option, setOption] = useState('0')
    return(
        <div className="containerContentPageTwo">
            <div className="titlePageTwo">
                <img src={elipse} alt="React Logo" width="1%"/>
                Our Values               
            </div>
            <div className="containerSubContentPageTwo">
                <div className="subtitleContainerPageTwo">
                    <h1>WE SHARE YOUR GOALS </h1>
                    <h1>WE BELIEVE IN YOUR SUCESS.</h1>                    
                </div>
                <div className="optionSelectSubtitle">
                    <div className="submenuPageTwo">
                            {
                                option == 0 ? (
                                <ul className="submenu">
                                    <li onClick={()=>{setOption('0')}} className="suboptionSelected">TIME</li>
                                    <li onClick={()=>{setOption('1')}}>QUALITY</li>
                                    <li onClick={()=>{setOption('2')}}>SERVICE</li> 
                                    <li onClick={()=>{setOption('3')}}>MONEY</li>
                                </ul>
                                ):''
                            }
                            {
                                option == 1 ? (
                                <ul className="submenu">
                                    <li onClick={()=>{setOption('0')}} >TIME</li>
                                    <li onClick={()=>{setOption('1')}} className="suboptionSelected">QUALITY</li>
                                    <li onClick={()=>{setOption('2')}}>SERVICE</li> 
                                    <li onClick={()=>{setOption('3')}}>MONEY</li>
                                </ul>
                                ):''
                            }
                            {
                                option == 2 ? (
                                <ul className="submenu">
                                    <li onClick={()=>{setOption('0')}} >TIME</li>
                                    <li onClick={()=>{setOption('1')}}>QUALITY</li>
                                    <li onClick={()=>{setOption('2')}} className="suboptionSelected">SERVICE</li> 
                                    <li onClick={()=>{setOption('3')}}>MONEY</li>
                                </ul>
                                ):''
                            }
                            {
                                option == 3 ? (
                                <ul className="submenu">
                                    <li onClick={()=>{setOption('0')}} >TIME</li>
                                    <li onClick={()=>{setOption('1')}} >QUALITY</li>
                                    <li onClick={()=>{setOption('2')}}>SERVICE</li> 
                                    <li onClick={()=>{setOption('3')}} className="suboptionSelected">MONEY</li>
                                </ul>
                                ):''
                            }
                        
                    </div>
                    <div className="contentMenuPageTwo">
                        {
                            option == 0?
                                (<div className="textContainer">
                                    <div className="title">Quick turn around</div>
                                    <div className="subtitle">TIME IS MONEY</div>
                                    <div className="text">
                                        Your project completed on schedule means reaching your goals faster.
                                        See better result in less time.
                                    </div>
                                    <Link to="/contact" className="Links">  
                                        <div className="boton"><text>Ask for a quote </text><Flecha></Flecha></div>
                                    </Link>
                                </div>)
                            :''
                        }
                        {
                            option == 1?
                            (<div className="textContainer">
                                <div className="title"> Outstanding Quality</div>
                                <div className="subtitle">QUALITY IS EVERYTHING</div>
                                <div className="text">
                                    Unparalleled attention to detail and superior
                                    quality in every aspect. Take your business to the next level.
                                </div>
                                <Link to="/contact" className="Links"> 
                                    <div className="boton"><text>Ask for a quote </text><Flecha></Flecha></div>
                                </Link>
                            </div>)
                            :''
                        }
                        {
                            option == 2?
                            (<div className="textContainer">
                                <div className="title"> Premium service</div>
                                <div className="subtitle">SERVICE THAT SHOWS WE CARE</div>
                                <div className="text">
                                    From initial contact to project completion.
                                    We're always available with great service. timely
                                    responses and an upbeat attitude. Give your
                                    project the attention it deserves
                                </div>
                                <Link to="/contact" className="Links">  
                                    <div className="boton"><text>Ask for a quote </text><Flecha></Flecha></div>
                                </Link>
                            </div>)
                            :''
                        }
                        {
                            option == 3?
                            (<div className="textContainer">
                                <div className="title">Exceptional Value</div>
                                <div className="subtitle">MORE FOR YOUR INVESTMENT</div>
                                <div className="text">
                                    With all-inclusibve branding packages, you know
                                    you're getting the best for your money. 
                                    Get a bigger impact at a better value.
                                </div>
                                <Link to="/contact" className="Links"> 
                                    <div className="boton"><text>Ask for a quote </text><Flecha></Flecha></div>                                
                                </Link>
                                    
                            </div>)
                            :''
                        }
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default PageTwo;