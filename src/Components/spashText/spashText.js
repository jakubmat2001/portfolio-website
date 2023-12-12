import React from "react";
import { useState, useEffect } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "./spashText.css"

const SpashText = React.forwardRef((props, navigateSpashTextRef) => {
    const [displayText, setDisplayText] = useState("Sun")

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayText((currentText) => (currentText === "Sun" ? props.name : "Sun"));
        }, 3150);

        return () => clearInterval(intervalId);
    }, [props.name]);

    return (
        <div ref={navigateSpashTextRef} className="spashText-container">
        <ScrollAnimation animateIn="fadeIn">

            <div className="text-container">
                <p>Don't Fall Asleep</p>
                <p>As</p>
                <p key={displayText} id={displayText === "Sun" ? "spash-text-transistion-sun" : "spash-text-transistion-name"}><b>{displayText}</b></p>
                <p>Rises</p>
            </div>
            
        </ScrollAnimation>
        </div>
    )
})

export default SpashText;