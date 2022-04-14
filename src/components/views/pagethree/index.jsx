import React from "react";
import './index.scss'
import { useState } from "react";
import Elipse from '../../img/pagethree/Elipse.svg';


import Huella from '../../img/pagethree/Huella.svg';
import Triangulo from '../../img/pagethree/Triangulo.svg';
import Mundo from '../../img/pagethree/Mun.svg';


import HuellaOrange from '../../img/pagethree/HuellaOrange.svg';
import TrianguloOrange from '../../img/pagethree/TrianguloOrange.svg';
import MundoOrange from '../../img/pagethree/MundoOrange.svg';




import Menos from '../../img/pagethree/Menos.svg';
import Mas from '../../img/pagethree/Mas.svg';
const PageThree = () =>{
    const [opcionSelect, setOpcionSelect] = useState('0');

    function Menu(id){
        if(opcionSelect == id){
            setOpcionSelect('0')
        }else{
            setOpcionSelect(id)
        }
    }
    return(
        <div className="containerContentPageThree">
            <div className='pageThreeContent'>
                <div className="containerTitleContentPageThree">
                    <div className="containerTitleContentPageThreeLeft">
                        <img src={Elipse} alt="React Logo" />
                        What We Do
                    </div>
                    <div className="containerTitleContentPageThreeRight">
                        {
                            opcionSelect > 0?
                                (<div className="Text"> Build your brand. Build your business</div>)
                            :   (<div className="selectText">Build your brand. Build your business</div>)
                        }
                    </div>
                </div>
                <div className='submenuContainerPageThree'>
                    <div className='submenuLeftContainer'>
                        <div className='submenuLeftContainerIcons'>            
                                  
                            {
                                opcionSelect == 1 ? (<img onClick={()=>Menu('0')} src={HuellaOrange} alt="React Logo" width="20%" />)
                                : (<img onClick={()=>Menu('1')} src={Huella} alt="React Logo" width="5%" color="white"  className="test"/>)
                            }
                            {
                                opcionSelect == 2 ? (<img onClick={()=>Menu('2')} src={TrianguloOrange} alt="React Logo" width="30%" color="black"/>)
                                : (<img onClick={()=>Menu('2')} src={Triangulo} alt="React Logo" width="7%"/>)
                            }
                            {
                                opcionSelect == 3 ? (<img onClick={()=>Menu('3')} src={MundoOrange} alt="React Logo" width="25%" className="iconSelected"/>)
                                : (<img onClick={()=>Menu('3')} src={Mundo} alt="React Logo" width="6%"/>)
                            }                            
                        </div>
                        <div className="submenuLeftContainerBottom">
                            <div className="submenuRightContainerHeader">
                                Leave it to the
                            </div>
                            <div className="submenuRightContainerBottom">
                                <div className="submenuRightContainerBottomLeft">                            
                                    {
                                        opcionSelect == 1 ? (<div className="branding"><text>Branding</text><text className="mas"></text></div>): ''
                                    }
                                    {
                                        opcionSelect == 2 ? (<div className="Design">Design</div>): ''
                                    }
                                    {
                                        opcionSelect == 3 ? (<div className="Web">Web</div>): ''
                                    }           
                                </div>
                                <div className="submenuRightContainerBottomRight">
                                    Experts
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='submenuRightContainer'> 
                        <ul>                            
                                {
                                        opcionSelect == 1 ? (
                                            <li className="selected">
                                                <div className="titleselect" onClick={()=>setOpcionSelect('0')}>
                                                    <text>Branding </text> 
                                                    <text>
                                                        <img src={Menos} alt="Menos" />
                                                    </text>
                                                </div>
                                            <ul>
                                            <li>Logo & Icon</li>
                                            <li>Visual Identity</li>
                                            <li>Taglines</li>
                                            <li>Brand Applications</li>
                                            <li>Signage</li>
                                            <li>Packaging</li>
                                            <li>Naming Systems</li>
                                            <li>Brand Manual</li>
                                            <li>Social Media Assets</li>
                                            </ul>
                                            </li>                                        
                                        ): <li>
                                                <div className="title" onClick={()=>setOpcionSelect('1')}>
                                                    <text>Branding</text>  
                                                    <text className="opcion" ><img src={Menos} alt="Menos" className="menos"/><img src={Mas} alt="Mas" className="mas"/></text>
                                                </div>
                                            </li>
                                }
                                                            
                                    {
                                        opcionSelect == 2 ? (
                                        <li className="selected">
                                         <div className="titleselect" onClick={()=>setOpcionSelect('0')}><text>Graphic Design </text>   <text className="opcion" ><img src={Menos} alt="Menos" /></text></div>                                      
                                        <ul>
                                            <li>Ads</li>
                                            <li>Catalogs</li>
                                            <li>Infographics</li>
                                            <li>Illustrations</li>
                                            <li>Iconography</li>
                                            <li>Advanced Photo manipulation</li>
                                        </ul>
                                        </li>
                                        ): <li>
                                            <div className="title"  onClick={()=>setOpcionSelect('2')}>
                                                    <text>Graphic Design </text>  
                                                    <text className="opcion" ><img src={Menos} alt="Menos" className="menos"/><img src={Mas} alt="Mas" className="mas"/></text>
                                                </div>
                                        </li>
                                    }                                                             
                                    {
                                        opcionSelect == 3 ? (
                                        <li className="selected">                                 
                              <div className="titleselect" onClick={()=>setOpcionSelect('0')}><text>Web Design & Development </text>   <text className="opcion" ><img src={Menos} alt="Menos" /></text></div>                                      
                                        <ul>
                                            <li>UI Design</li>
                                            <li>UX Design</li>
                                            <li>Front End development</li>
                                            <li>Back End development</li>
                                        </ul>         
                                        </li>  
                                        ): <li>
                                                <div className="title"  onClick={()=>setOpcionSelect('3')}>
                                                    <text>Web Design & Development</text>  
                                                    <text className="opcion" ><img src={Menos} alt="Menos" className="menos"/><img src={Mas} alt="Mas" className="mas"/></text>
                                                </div>    
                                        </li>  
                                    }                                                                                                               
                        </ul>
                    </div>
                </div>                
            </div>
            
        </div>
    )
}
export default PageThree;