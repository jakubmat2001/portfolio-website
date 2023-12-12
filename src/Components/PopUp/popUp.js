import React from "react";
import { useState } from "react";
import "./popUp.css"

const PopUp = ({togglePopUp, handleChangeText}) => {
    const [popUpInput, setPopUpInput] = useState('')

    const focusInput = () => {
        const inputBox = document.getElementById("pop-up-input")
        inputBox.style.border = "1px solid red"

    }

    const handlePopUpInput = (event) => {
        setPopUpInput(event.target.value);
    }

    
    const handleSubmit = (event) => {
        if (popUpInput === ""){
            return focusInput()
        }
        return (handleChangeText(popUpInput), togglePopUp(event))
    }


    return (
        <div className="pop-up-window">
            <div className="pop-up-container">
                <div className="pop-up-title">
                    <h3 id="pop-up-welcome" >Welcome !</h3>
                    <a id="pop-up-exit" onClick={togglePopUp} href="#">&Chi;</a>
                </div>
                <div className="pop-up-text">
                    <p>Before we begin your tour...<br/> I highly advise on entering name 
                    of your organisation to improve your viewing experiance <br/><br/><b>Note: </b>Please ignore if your not an employer
                    </p>
                </div>
                <main className="pop-up-form">
                    <input onChange={(event) => handlePopUpInput(event)} type="text" id="pop-up-input" name="pop-up-input" placeholder="Organisation"></input>
                </main>
                <div className="pop-up-submit">
                    <button onClick={togglePopUp} className="pop-up-no-opt">Cancel</button>
                    <button onClick={(event) => handleSubmit(event)} className="pop-up-yes-opt">Thank You</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp;

