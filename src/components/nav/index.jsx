import React, {useState} from "react";
import './index.scss'
import './generalContainer.scss'

import Projects from '../projects'
import Contacts from "../contacts";

import LogoHeader from '../img/logoHeader.svg';
import { Cross as Hamburger } from 'hamburger-react'
import iconWhats from '../img/iconWhats.svg';
import iconInstagram from '../img/iconInsta.svg';


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

const HeaderNav = () =>{

    const[Menu, setMenu] = useState('0')
    const[viewPage, setViewPage] = useState('0')
    
    function changeMenu(id){
        if(id=='0'){
            setMenu('1')
        }
        if(id=='1'){
            setMenu('0')
        }
    }
    function changePage(id){
        if(id=='0' && viewPage !== '0'){
            setViewPage('0')
        }
        if(id=='1' && viewPage !== '1'){
            setViewPage('1')
        }
        if(id=='2' && viewPage !== '2'){
            setViewPage('2')
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
                        <div className="containerTBE"  onClick={()=>changePage(Menu)}>
                            <img src={LogoHeader} alt="React Logo"  width="60%"/>                       
                        </div>
                        <div className="containerLinks">
                            <img src={iconWhats} alt="React Logo"  width="1.5%"/>   
                            <img src={iconInstagram} alt="React Logo"  width="1.5%"/>   
                        </div>
                        <div className="containerBotton" onClick={()=>changeMenu(Menu)} >
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
                            <div className="containerTBE" onClick={()=>changePage(Menu)}>
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
                                    <li  onClick={()=>changePage('0')}>Services</li>
                                    <li  onClick={()=>changePage('1')}>Projects</li>
                                    <li  onClick={()=>changePage('2')}>Contact</li>
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
            
            

            {
                viewPage == '0'?
                <div className="containerHomePage">
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
                </div>
                :
                ''
            }

            {
                viewPage == '1'?
                <div className="containerProjects">
                    <Projects></Projects>
                </div>
                :
                ''
            }


            {
                viewPage == '2'?
                <div className="containerProjects">
                    <Contacts></Contacts>
                </div>
                :
                ''
            }




        </div>
       
    )
}
export default HeaderNav





                   