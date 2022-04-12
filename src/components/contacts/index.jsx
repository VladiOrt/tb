import React from "react";
import './index.scss'

import PageSeven from "../views/pageseven";
import FormContact from "./form";
const Contacts = () =>{
    return(
        <div className="ContactsContainer">
            <FormContact></FormContact>
            <PageSeven></PageSeven>
        </div>
    )
}

export default Contacts;