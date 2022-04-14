import React , {useState} from "react";
import './index.scss'

import Flecha from '../../img/flecha'
import Select from "react-select"

const FormContact= () => {

    return(
        <div className="containerFormContact">
            <div className="formTitle">
                <div className="formTitleLeft">
                    Get in touch
                </div>
                <div className="formTitleRight">
                    A small step for man <br />
                    A giant for your startup
                </div>
            </div>
            <div className="containerFormContent">
                <div className="containerFormContentLeft">
                    
                    <div className="subtitleForm">
                        <text className="LeftSubtitle">First Name / <tex  className='gray'> Nombre </tex></text>
                        <text className="RightSubtitle">Last Name / <tex  className='gray'> Apellido </tex></text>
                    </div>
                    <div className="inputForm">
                        <input type="text"  placeholder="Thomas"></input>
                        <input type="text"  placeholder="Edwards"></input>
                    </div>

                    <div className="subtitleForm">
                        <text>Email / <tex  className='gray'>Correo </tex></text>
                        <text>Cell Phone / <tex  className='gray'>Celular</tex></text>
                    </div>
                    <div className="inputForm">
                        <input type="text"  placeholder="email@example.com"></input>
                        <input type="text"  placeholder="+1(333)333-3333"></input>
                    </div>

                    <div className="subtitleForm">
                        <text>Company  /<tex  className='gray'> Empresa</tex> </text>
                        <text>Tax ID / <tex  className='gray' > RFC</tex></text>
                    </div>
                    <div className="inputForm">
                        <input type="text"  placeholder="Example"></input>
                        <input type="text"  placeholder="Example"></input>
                    </div>
                  
                    <div className="subtitleForm">
                        <text> Brand / <tex  className='gray'> Marca </tex></text>
                        <text> Industry /<tex  className='gray'> Industria</tex></text>
                    </div>
                    <div className="inputForm">
                        <input type="text"  placeholder="Example"></input>
                        <input type="text"  placeholder="Example"></input>
                    </div>
                    

                    <div className="subtitleForm">
                        <text> Country  / <tex  className='gray'>Pais </tex></text>
                    </div>
                    <div className="inputForm">
                        <input type="text"  placeholder="USA"></input>
                    </div>
                    
                    <div className="subtitleForm">
                        <text> Tell us a little about what you need /<tex  className='gray'> Tus requerimientos</tex> </text>
                    </div>
                    <div className="inputForm">
                        <input type="text"  placeholder="How can we help you"></input>
                    </div>
                    
                    <div className="subtitleForm">
                        <text> Tell us a little about what you need /<tex  className='gray'> Tus requerimientos</tex> </text>
                    </div>
                    <div className="inputForm">
                        <textarea className="textarea" rows="5" cols="80">
                            How can we help you
                        </textarea>
                    </div>

                    <div className="subtitleForm">
                        <text> Start Date / <tex className='gray'>Fecha de inicio</tex> </text>
                        <text> Delivery Date / <tex  className='gray'>Fecha de entrega</tex> </text>
                    </div>
                    <div className="inputForm">
                        <input type="date" ></input>
                        <input type="date"  > </input>
                    </div>
                    <div className="subtitleForm">
                        <text> Services required / <tex className='gray'>Servicios requeridos</tex> </text>
                    </div>
                    <br></br>
                    <div className="inputRadius">
                        
                        <div>
                            <label className="title">Branding</label>
                            <label>
                                
                                <input type="checkbox"></input>
                                Naming
                            </label>
                            <label>
                                <input type="checkbox"></input>
                                New Brand
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Rebrand
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Brand applications
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Brand Book / Visual Identity
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Social Media Assets
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Packaging
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Signage
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Naming System
                            </label>
                        </div>
                        <div>
                            <label className="title">Graphic Design</label>
                            <label>
                            <input type="checkbox"></input>
                                Advertisement
                            </label>
                            <label>
                                <input type="checkbox"></input>
                                Presentation
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Catalog
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Infographic
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Illustration
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Iconography
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Photo manipulation
                            </label>
                           
                        </div>
                        <div>
                        <label className="title"> Web Design & Development</label>
                            <label>
                            <input type="checkbox"></input>
                                UI Design
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                UX Design
                            </label>
                            <label>
                            <input type="checkbox"></input>
                                Front End Development
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="Boton"><text>Submit</text> <Flecha /></button>
                </div>
                <div className="containerFormContentRight">
                    Let’s start building
                    something great !
                </div>

            </div>
            


        </div>
    )
}

export default FormContact