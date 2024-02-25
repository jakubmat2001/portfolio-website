import React from "react";
import { useState, useEffect, forwardRef } from "react";
import "./splashText.css"; 
const Fade = require("react-reveal/Fade");

type SplashTextProps = {
    name: string;
}

const SplashText = forwardRef<HTMLDivElement, SplashTextProps>((props, ref) => {
    const [displayText, setDisplayText] = useState("Sun");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayText((currentText) => (currentText === "Sun" ? props.name : "Sun"));
        }, 3150);
        return () => clearInterval(intervalId);
    }, [props.name]);

    return (
        <div ref={ref} className="splashText-container"> 
            <Fade top>
                <div className="text-container">
                    <p>Don't Fall Asleep</p>
                    <p>As</p>
                    <p key={displayText} id={displayText === "Sun" ? "splash-text-transition-sun" : "splash-text-transition-name"}><b>{displayText}</b></p>
                    <p>Rises</p>
                </div>
            </Fade>
        </div>
    );
});

export default SplashText;