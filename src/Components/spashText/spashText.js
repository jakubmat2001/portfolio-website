import React from "react";
import { useState, useEffect } from "react";
import "./spashText.css"

const SpashText = ({name}) => {
    const [displayText, setDisplayText] = useState("Sun")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayText((currentText) => (currentText === "Sun" ? name : "Sun"));
        }, 3150);

        return () => clearInterval(intervalId);
    }, [name]);

    return (
        <div className="spashText-container">
            <div className="text-container">
                <p>Don't Fall Asleep</p>
                <p>As</p>
                <p key={displayText} id={displayText === "Sun" ? "spash-text-transistion-sun" : "spash-text-transistion-name"}><b>{displayText}</b></p>
                <p>Rises</p>
            </div>
        </div>
    )
}

export default SpashText;