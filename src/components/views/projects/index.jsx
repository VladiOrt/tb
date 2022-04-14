import react from "react";
import './index.scss'


import ImgOne from '../../img/projects/Label.svg';


import iconDirection from '../../img/projects/Elipse 39.svg';


import ImgTwo from '../../img/projects/RC_004.svg';
import ImgThree from '../../img/projects/Bluelander_6.svg';
import ImgFour from '../../img/projects/PaperBag.svg';


import ImgFive from '../../img/projects/copia.svg';
import ImgSix from '../../img/projects/Tarjeta_02.svg';


const ContentProjectsTotal = () => {
    return(
    <div className="ContentProjects">
        <div className="ContentProjectsTitle">
            <div className="ContentProjectsLeft">
                <img src={iconDirection} alt="React Logo" width="2%" />  
                The Projects
            </div>
            <div className="ContentProjectsRight">
                We take pride in your success
            </div>
        </div>


        <div className="ContentProjectsViewImgageOne">
            <div className="ContentProjectsViewImgageLeft" 
                style={{
                    backgroundImage:  `url(${ImgOne})`
                }}
            >
            </div>
            <div className="ContentProjectsViewImgageRight">
                <text className="textOne">Bart street</text>
                <text className="textTwo">Re-Branding</text>
                <text className="textThree">
                    <div className="Flecha"></div>
                </text>                                
            </div>
        </div>       
        <div className="ContentProjectsViewImgageTwo">
            <div className="ContentProjectsViewImgageLeft">
                <text className="textOne">Bart street</text>
                <text className="textTwo">Re-Branding</text>
                <text className="textThree">
                    <div className="Flecha"></div>
                </text>  
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
                <text className="textOne">Bart street</text>
                <text className="textTwo">Re-Branding</text>
                <text className="textThree">
                    <div className="Flecha"></div>
                </text> 
            </div>
        </div>       
        <div className="ContentProjectsViewImgageTwo">
            <div className="ContentProjectsViewImgageLeft">
                <text className="textOne">Bart street</text>
                <text className="textTwo">Re-Branding</text>
                <text className="textThree">
                    <div className="Flecha"></div>
                </text> 
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
                <text className="textOne">Bart street</text>
                <text className="textTwo">Re-Branding</text>
                <text className="textThree">
                    <div className="Flecha"></div>
                </text> 
            </div>
        </div>       
        <div className="ContentProjectsViewImgageTwo">
            <div className="ContentProjectsViewImgageLeft">
                <text className="textOne">Bart street</text>
                <text className="textTwo">Re-Branding</text>
                <text className="textThree">
                    <div className="Flecha"></div>
                </text> 
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