import React from "react";
import './index.scss'
import {useState} from 'react'
import LogoHeader from '../img/logoHeader.svg';
import iconWhats from '../img/iconWhats.svg';
import iconInstagram from '../img/iconInsta.svg';
import botonClosed from '../img/MenuClosed.svg';
import botonOpen from '../img/X.svg';



import iconInstaOrange from '../img/facebookOrange.svg';
import iconFacebookOrange from '../img/IntaOrange.svg';
import iconBeOrange from '../img/BeOrange.svg';



import PageOne from "../views/pageone";
import PageTwo from "../views/pagetwo";
import PageThree from '../views/pagethree'
import PageFour from "../views/pagefour";
import PageFive from "../views/pagefive";
import PageSix from "../views/pagesix";
import PageSeven from "../views/pageseven";

import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
const Home = () =>{
    const [menu, setMenu] = useState('0');

    return(
        <div className="GeneralContainer">
         Probando
        </div>
    )
}
export default Home

{/**
  <div className="containerLinksSocial">
                        <img src={iconWhats} alt="React Logo" />
                        <img src={iconInstagram} alt="React Logo" />
                    </div>
                    <div className="containerMenu">
                        <img src={botonClosed} alt="React Logo"  onClick={()=>setMenu('1')} />
                    </div> 

            
            {
                menu == 0?
                    ''    
                :
                <div className="containerHeaderNavShow">
                    <div className="containerHeaderLogo">
                        <img src={LogoHeader} alt="React Logo" />
                    </div>
                   
                    <div className="containerHeaderCentral">
                        <div className="containerMenu">
                            <ul>
                                <Link to='/' className="enlace">Services</Link>
                                <Link to='/projects' className="enlace">Projects</Link>
                                <Link to='/contact' className="enlace"> Contact</Link>
                            </ul>                         
                        </div> 
                        <div className="containerLinksSocial">
                            <img src={iconInstaOrange} alt="React Logo" width="10%" onClick={()=>setMenu('0')} />
                            <img src={iconFacebookOrange} alt="React Logo" width="10%" onClick={()=>setMenu('0')} />
                            <img src={iconBeOrange} alt="React Logo" width="10%" onClick={()=>setMenu('0')} />
                        </div>
                    </div>
                    <div className="containerHeaderClose">
                        <img src={botonOpen} alt="React Logo" width="30%" onClick={()=>setMenu('0')} />
                    </div>
                </div>
            }

                <div className="GeneralContainer">
                    <div className="containerContent">
                        <div className="containerPageOne">
                            <PageOne></PageOne>
                        </div>
                        <div className="containerPageTwo">
                            <PageTwo></PageTwo>
                        </div>
                        <div className="containerPageThree">
                            <PageThree></PageThree>
                        </div>
                        <div className="containerPageFour">
                            <PageFour></PageFour>
                        </div>
                        <div className="containerPageFive">
                            <PageFive></PageFive>
                        </div>
                        <div className="containerPageSix">
                            <PageSix></PageSix>
                        </div>
                        <div className="containerPageSeven">
                            <PageSeven></PageSeven>
                        </div>
                    </div>
                </div>        
*/}












{/**



  {
                menu == 0?
                <div className="containerHeaderNav">
                    <div className="containerHeaderLogo">
                        <img src={LogoHeader} alt="React Logo" />
                    </div>
                  
                </div>    
                :   
                <div className="containerHeaderNav">
                </div>
            }
         <div className="containerLinksSocial">
                        <img src={iconWhats} alt="React Logo" />
                        <img src={iconInstagram} alt="React Logo" />
                    </div>
                    <div className="containerMenu">
                        <img src={botonClosed} alt="React Logo"  onClick={()=>setMenu('1')} />
                    </div> 

            
            {
                menu == 0?
                    ''    
                :
                <div className="containerHeaderNavShow">
                    <div className="containerHeaderLogo">
                        <img src={LogoHeader} alt="React Logo" />
                    </div>
                   
                    <div className="containerHeaderCentral">
                        <div className="containerMenu">
                            <ul>
                                <Link to='/' className="enlace">Services</Link>
                                <Link to='/projects' className="enlace">Projects</Link>
                                <Link to='/contact' className="enlace"> Contact</Link>
                            </ul>                         
                        </div> 
                        <div className="containerLinksSocial">
                            <img src={iconInstaOrange} alt="React Logo" width="10%" onClick={()=>setMenu('0')} />
                            <img src={iconFacebookOrange} alt="React Logo" width="10%" onClick={()=>setMenu('0')} />
                            <img src={iconBeOrange} alt="React Logo" width="10%" onClick={()=>setMenu('0')} />
                        </div>
                    </div>
                    <div className="containerHeaderClose">
                        <img src={botonOpen} alt="React Logo" width="30%" onClick={()=>setMenu('0')} />
                    </div>
                </div>
            }

                <div className="GeneralContainer">
                    <div className="containerContent">
                        <div className="containerPageOne">
                            <PageOne></PageOne>
                        </div>
                        <div className="containerPageTwo">
                            <PageTwo></PageTwo>
                        </div>
                        <div className="containerPageThree">
                            <PageThree></PageThree>
                        </div>
                        <div className="containerPageFour">
                            <PageFour></PageFour>
                        </div>
                        <div className="containerPageFive">
                            <PageFive></PageFive>
                        </div>
                        <div className="containerPageSix">
                            <PageSix></PageSix>
                        </div>
                        <div className="containerPageSeven">
                            <PageSeven></PageSeven>
                        </div>
                    </div>
                </div>        

*/}