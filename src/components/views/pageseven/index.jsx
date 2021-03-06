import React from "react";
import './index.scss'
import { useState } from "react";




import iconInsta from '../../img/pageseven/iconInstaBottom.svg';
import iconFacebook from '../../img/pageseven/iconFacebookBottom.svg';
import iconBe from '../../img/pageseven/iconBeBottom.svg';


import toBeUnique from '../../img/pageseven/toBeUnique.svg';
import toBeAwesome from '../../img/pageseven/toBeAwesome.svg';
import toBeCreative from '../../img/pageseven/toBeCreative.svg';
import toBeEspecial from '../../img/pageseven/toBeEspecial.svg';
const PageSeven = () =>{

    const [chart,Chart] = useState(getRandom())

    function getRandom() {
        let min = 0;
        let max = 4;
        return Math.floor(Math.random() * (max - min) + min);
    }

    return(
        <div className="containerContentPageSeven">
            <div className="containerInformation">
                <div className="titleInformation">
                    {
                        chart == 0 ?
                            (<img src={toBeUnique} alt="React Logo" width="20%"/>)
                        :''
                    }
                    {
                        chart == 1 ?
                            (<img src={toBeAwesome} alt="React Logo" width="20%"/>)
                        :''
                    }
                    {
                        chart == 2 ?
                            (<img src={toBeCreative} alt="React Logo" width="20%"/>)
                        :''
                    }
                    {
                        chart == 3 ?
                            (<img src={toBeEspecial} alt="React Logo" width="20%"/>)
                        :''
                    }
                </div>  
                <div className="informationBotton">
                    <text className="textTwo">
                         theBrandingExperts
                         <text className="icon">®</text>
                    </text>
                    <div className="iconsBottoms">
                        <img src={iconInsta} alt="React Logo" width="30px"/>
                        <img src={iconFacebook} alt="React Logo" width="30px"/>
                        <img src={iconBe} alt="React Logo" width="30px"/>
                    </div>
                    <text className="textThree">
                        <text className="icon">©</text> 2021 theBrandingExperts. all Rights Reserved
                    </text>
                </div>
            </div>
            <div className="bottonend">
            </div>
        </div>
    )
}
export default PageSeven;