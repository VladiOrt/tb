import React from "react";
import './index.scss'
import { useState } from "react";




import iconInsta from '../../img/pageseven/iconInstaBottom.svg';
import iconFacebook from '../../img/pageseven/iconFacebookBottom.svg';
import iconBe from '../../img/pageseven/iconBeBottom.svg';

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
                            (<text>tBE<label>®</label><text>Special</text></text>)
                        :''
                    }
                    {
                        chart == 1 ?
                            (<text>tBE<label>®</label><text>Awesome</text></text>)
                        :''
                    }
                    {
                        chart == 2 ?
                            (<text>tBE<label>®</label><text>Creative</text></text>)
                        :''
                    }
                    {
                        chart == 3 ?
                            (<text>tBE<label>®</label><text>Unique</text></text>)
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