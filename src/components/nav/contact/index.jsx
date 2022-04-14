import React, {useState} from "react";
import '../index.scss'
import '../generalContainer.scss'

import Contacts from "../../contacts";

import LogoHeader from '../../img/logoHeader.svg';
import { Cross as Hamburger } from 'hamburger-react'
import iconWhats from '../../img/iconWhats.svg';
import iconInstagram from '../../img/iconInstaBlackWhite.svg';


import iconInstaOrange from '../../img/facebookOrange.svg';
import iconFacebookOrange from '../../img/IntaOrange.svg';
import iconBeOrange from '../../img/BeOrange.svg';





import {
    Link
} from "react-router-dom"


const HeaderNavContact= () =>{
    
    const[Menu, setMenu] = useState('0')
    
    function changeMenu(id){
        if(id=='0'){
            setMenu('1')
        }
        if(id=='1'){
            setMenu('0')
        }
    }
    return(
        <div>
        {
                    Menu == '0' ? 
                    (
                        <div  className="HeaderNavContainer">            
                            <div className="navigationMenu">
                             <div className="MenuBottoms">
                        <div className="containerTBE"  style={{
                            background:'#000'
                        }}>
                            <img src={LogoHeader} alt="React Logo"  width="60%"/>                       
                        </div>
                        <div className="containerLinks" style={{
                            background:'#000'
                        }}>
                        
                            <a href="https://wa.me/529?text=I'm%20interested%20in%20working%20with%20tBE,%20would%20to%20talk%20about%20my%20project." target="_blank"><img src={iconWhats} alt="React Logo"  width="30px"/></a>  
                            <a href="https://www.instagram.com/tbe_agency/" target="_blank"><img src={iconInstagram} alt="React Logo"  width="30px"/></a>  
                     
                        </div>
                        <div className="containerBotton" onClick={()=>changeMenu(Menu)} style={{
                            background:'#000'
                        }}>
                            <Hamburger ></Hamburger>
                        </div>                        
                    </div>
                    <div className="MenuTitleHeaders">

                    </div>
                </div>                     
            </div>
                    )
                    : 
                    <div  className="HeaderNavContainerOpen">            
                    <div className="navigationMenu">
                        <div className="MenuBottoms">
                            <div className="containerTBE" >
                                <img src={LogoHeader} alt="React Logo"  width="60%"/>                       
                            </div>
                            <div className="containerLinks">
                           
                            </div>
                            <div className="containerBotton" onClick={()=>changeMenu(Menu)} >
                                <Hamburger ></Hamburger>
                            </div>                        
                        </div>
                        <div className="MenuTitleHeaders">
                            <div className="elementOne"></div>
                            <div className="elementTwo"></div>
                            <div className="elementThree">
                                <ul>
                                <li><Link to="/" className="Links">Services</Link></li>
                                    <li><Link to="/projects" className="Links">Projects</Link></li>
                                    <li><Link to="/contact" className="Links">Contact</Link></li>
                                </ul>
                                <div>
                                    <img src={iconInstaOrange} alt="React Logo" />
                                    <img src={iconFacebookOrange} alt="React Logo" />
                                    <img src={iconBeOrange} alt="React Logo"  />
                                </div>
                            </div>
                            
                        </div>
                    </div>                     
                </div>
                    
                    
            }
            
            <div className="containerProjects">
                <Contacts></Contacts>
            </div>
        </div>  
    )
}
export default HeaderNavContact
