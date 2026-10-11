import React from "react";
import { useState, useEffect } from "react";
import "./spashText.css"

const SpashText = React.forwardRef((props, navigateSpashTextRef) => {
    const [displayText, setDisplayText] = useState("Visitor")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayText((currentText) => (currentText === "Friend" ? props.name : "Friend"));
        }, 3150);

        return () => clearInterval(intervalId);
    }, [props.name]);

    return (
        <div ref={navigateSpashTextRef} className="spashText-container">

            <div className="text-container">
                <p>Welcome</p>
                <p key={displayText} id={displayText === "Friend" ? "spash-text-transistion-sun" : "spash-text-transistion-name"}><b>{displayText}</b></p>
            </div>
        </div>
    )
})

export default SpashText;