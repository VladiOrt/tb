import React from "react";
import './index.scss'


import Flecha from "../../img/flecha";

const PageFour = () =>{
    

    return(
        <div className="containerContentPageFour">
            <div className="pageContentFour">
                <div className="pageContentFourHeader">
                    <div className="pageContentFourHeaderLeft">

                    </div>
                    <div className="pageContentFourHeaderRight">
                        We take priden in your success
                    </div>
                </div>
                <div className="pageContentFourCentral">
                    <div className="pageContentFourCentralContentOne">
                        <div id="algo" className="pageContentFourCentralContentOneImage">
                      
                        </div>

                        <div className="pageContentFourCentralContentOneFooter">
                            <div className="textOne">
                                <text>Bart Street</text> 
                                <Flecha className="divFlecha" />
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
                                <text>Reserve Cut</text> 
                                <Flecha className="divFlecha" />
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
                                <text>Bluelander</text> 
                                <Flecha className="divFlecha" />
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
                        <text>More Projects</text> 
                        <Flecha className="divFlecha" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageFour;