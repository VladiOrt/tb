import React  from "react";
import './index.scss'


import Select from "react-select"
const FormContact= () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
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
                        <input type="text"  placeholder="Carlos"></input>
                        <input type="text"  placeholder="Manzano"></input>
                    </div>

                    <div className="subtitleForm">
                        <text>Email / <tex  className='gray'>Correo </tex></text>
                        <text>Cell Phone / <tex  className='gray'>Celular</tex></text>
                    </div>
                    <div className="inputForm">
                        <input type="text"  placeholder="cmanzano@example.com"></input>
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
                        <input type="text" className="message" placeholder="How can we help you"></input>
                    </div>

                    <div className="subtitleForm">
                        <text> Start Date / <tex className='gray'>Fecha de inicio</tex> </text>
                        <text> Delivery Date / <tex  className='gray'>Fecha de entrega</tex> </text>
                    </div>
                    <div className="inputForm">
                        <input type="date"  placeholder="10 / 02 / 2022"></input>
                        <input type="date"  placeholder="10 / 02 / 2022"></input>
                    </div>
                    


                    <div className="inputRadius">
                        <div>
                            <label>Branding</label>
                            <label>
                                <input type="radio"></input>
                                Naming
                            </label>
                            <label>
                                <input type="radio"></input>
                                New Brand
                            </label>
                            <label>
                                <input type="radio"></input>
                                Rebrand
                            </label>
                            <label>
                                <input type="radio"></input>
                                Brand applications
                            </label>
                            <label>
                                <input type="radio"></input>
                                Brand Book / Visual Identity
                            </label>
                            <label>
                                <input type="radio"></input>
                                Social Media Assets
                            </label>
                            <label>
                                <input type="radio"></input>
                                Packaging
                            </label>
                            <label>
                                <input type="radio"></input>
                                Signage
                            </label>
                            <label>
                                <input type="radio"></input>
                                Naming System
                            </label>
                        </div>
                        <div>
                            <label>Graphic Design</label>
                            <label>
                                <input type="radio"></input>
                                Advertisement
                            </label>
                            <label>
                                <input type="radio"></input>
                                Presentation
                            </label>
                            <label>
                                <input type="radio"></input>
                                Catalog
                            </label>
                            <label>
                                <input type="radio"></input>
                                Infographic
                            </label>
                            <label>
                                <input type="radio"></input>
                                Illustration
                            </label>
                            <label>
                                <input type="radio"></input>
                                Iconography
                            </label>
                            <label>
                                <input type="radio"></input>
                                Photo manipulation
                            </label>
                           
                        </div>
                        <div>
                        <label>Web Design & Development</label>
                            <label>
                                <input type="radio"></input>
                                UI Design
                            </label>
                            <label>
                                <input type="radio"></input>
                                UX Design
                            </label>
                            <label>
                                <input type="radio"></input>
                                Front End Development
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="Submit">Submit</button>
                </div>
                <div className="containerFormContentRight">
                    Let’s start building <br></br>
                    something great !
                </div>

            </div>
            


        </div>
    )
}

export default FormContact