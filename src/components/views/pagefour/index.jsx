import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

import Flecha from "../../img/flecha";
import Elipse from '../../img/pagethree/Elipse.svg';
const PageFour = () =>{
    

    return(
        <div className="containerContentPageFour">
            <div className="pageContentFour">
                <div className="pageContentFourHeader">
                    <div className="pageContentFourHeaderLeft">
                        <img src={Elipse} alt="React Logo" />
                        Work
                    </div>
                    <div className="pageContentFourHeaderRight">
                        We take pride in your success
                    </div>
                </div>
                <div className="pageContentFourCentral">
                    <div className="pageContentFourCentralContentOne">
                        <div id="algo" className="pageContentFourCentralContentOneImage">
                      
                        </div>

                        <div className="pageContentFourCentralContentOneFooter">
                            <div className="textOne">
                                <Link to="/projects" className="Links">  
                                    <text>Bart Street</text> 
                                    <Flecha className="divFlecha" />
                                </Link>                                
                            </div>
                            <div className="textTwo">
                                Re-Branding
                            </div>
                        </div>
                    </div>
                    <div className="pageContentFourCentralContentTwo">
                        <div className="pageContentFourCentralContentTwoImage">
                        </div>
                        <div className="pageContentFourCentralContentTwoFooter">
                            <div className="textOne">          
                                <Link to="/projects" className="Links">  
                                    <text>Reserve Cut</text> 
                                    <Flecha className="divFlecha" />
                                </Link>                                                        
                            </div>
                            <div className="textTwo">
                                Branding Design
                            </div>
                        </div>
                    </div>
                    <div className="pageContentFourCentralContentThree">
                        <div className="pageContentFourCentralContentThreeImage">
                        </div>
                        <div className="pageContentFourCentralContentThreeFooter">
                            <div className="textOne">  
                            <Link to="/projects" className="Links">  
                            <text>Bluelander</text> 
                                <Flecha className="divFlecha" />
                                </Link>                                                                
                                
                            </div>
                            <div className="textTwo">
                                Re-Branding
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pageContentFourFooter">
                    <div className="pageContentFourFooterLeft"> 

                    </div>
                    <div className="pageContentFourFooterRight">
                        <Link to="/projects" className="Links">  
                            <text>More Projects</text> 
                            <Flecha className="divFlecha" />
                        </Link>                                                                                                                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageFour;