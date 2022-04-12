import react from "react";
import './index.scss'


import ImgOne from '../../img/projects/Label.svg';

import BartStreet from '../../img/projects/Bart Street.svg';
import ReBranding from '../../img/projects/Re-Branding.svg';
import iconDirection from '../../img/projects/Elipse 39.svg';


import ImgTwo from '../../img/projects/RC_004.svg';
import ImgThree from '../../img/projects/Bluelander_6.svg';
import ImgFour from '../../img/projects/PaperBag.svg';


import ImgFive from '../../img/projects/copia.svg';
import ImgSix from '../../img/projects/Tarjeta_02.svg';


/*
import BartStreet from '../../img/projects/Bart Street.svg';
import ReBranding from '../../img/projects/Re-Branding.svg';
import iconDirection from '../../img/projects/Elipse 39.svg';
*/

import PageSeven from '../pageseven/'

const ContentProjectsTotal = () => {
    return(
    <div className="ContentProjects">
        <div className="ContentProjectsViewImgageOne">
            <div className="ContentProjectsViewImgageLeft" 
                style={{
                    backgroundImage:  `url(${ImgOne})`
                }}
            >
            </div>
            <div className="ContentProjectsViewImgageRight">
                <img src={BartStreet} alt="React Logo" width="65%" />                                
                <img src={ReBranding} alt="React Logo" width="65%" />                                
                <img src={iconDirection} alt="React Logo" width="8%" />                                
            </div>
        </div>       
        <div className="ContentProjectsViewImgageTwo">
            <div className="ContentProjectsViewImgageLeft">
                <img src={BartStreet} alt="React Logo" width="65%" />                                
                <img src={ReBranding} alt="React Logo" width="65%" />                                
                <img src={iconDirection} alt="React Logo" width="8%" />                                
            </div>
            <div className="ContentProjectsViewImgageRight"
                style={{
                    backgroundImage:  `url(${ImgTwo})`
                }}
            >
            </div>
        </div>    




        <div className="ContentProjectsViewImgageOne">
            <div className="ContentProjectsViewImgageLeft"
                style={{
                    backgroundImage:  `url(${ImgThree})`
                }}
            >             
            </div>
            <div className="ContentProjectsViewImgageRight">
                <img src={BartStreet} alt="React Logo" width="65%" />                                
                <img src={ReBranding} alt="React Logo" width="65%" />                                
                <img src={iconDirection} alt="React Logo" width="8%" />                                
            </div>
        </div>       
        <div className="ContentProjectsViewImgageTwo">
            <div className="ContentProjectsViewImgageLeft">
                <img src={BartStreet} alt="React Logo" width="65%" />                                
                <img src={ReBranding} alt="React Logo" width="65%" />                                
                <img src={iconDirection} alt="React Logo" width="8%" />                                
            </div>
            <div className="ContentProjectsViewImgageRight"
               style={{
                    backgroundImage:  `url(${ImgFour})`
               }}
            >
            </div>
        </div>    



        <div className="ContentProjectsViewImgageOne">
            <div className="ContentProjectsViewImgageLeft"
               style={{
                    backgroundImage:  `url(${ImgFive})`
                }}
            >                               
            </div>
            <div className="ContentProjectsViewImgageRight">
                <img src={BartStreet} alt="React Logo" width="65%" />                                
                <img src={ReBranding} alt="React Logo" width="65%" />                                
                <img src={iconDirection} alt="React Logo" width="8%" />                                
            </div>
        </div>       
        <div className="ContentProjectsViewImgageTwo">
            <div className="ContentProjectsViewImgageLeft">
                <img src={BartStreet} alt="React Logo" width="65%" />                                
                <img src={ReBranding} alt="React Logo" width="65%" />                                
                <img src={iconDirection} alt="React Logo" width="8%" />                                
            </div>
            <div className="ContentProjectsViewImgageRight"
                style={{
                    backgroundImage:  `url(${ImgSix})`
                }}
            >
            </div>
        </div>  
    </div>
    )
}

export default ContentProjectsTotal;