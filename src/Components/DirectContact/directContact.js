import React, {useState} from "react";
import './directContact.css'

const DirectContact = ({toggleDirectContact}) => {
    const [statusMsg, setStatusMsg] = useState("")
    const [formInputs, setFormInputs] = useState({
        email: "",
        message: ""
    })

    const inputValidation = () => {
        return true
    }

    const handleSubmit = (e) => {
        if (inputValidation() === true) {
            fetch("https://portfolio-website-backend-c405ae064912.herokuapp.com/send-mail", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formInputs.email,
                    message: formInputs.message
                }),
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    displayStatusMsg("Successfully sent email to; jakubmatusik11@gmail.com", e)
                } else {
                    displayStatusMsg("Something had gone wrong, please try again later", e)
                }
            })
            .catch(error => {
                console.error("Error sending email:", error);
            });
        }
    };

    const onInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "email":
                setFormInputs((prevState) => ({
                    ...prevState,
                    email: value
                }));
                break;
            case "message-area":
                setFormInputs((prevState) => ({
                    ...prevState,
                    message: value
                }));
            default:
                return
        }
    };

    const displayStatusMsg = (msg, e) => {
        setStatusMsg(msg)
        setTimeout(() => {
            toggleDirectContact(e)
        }, 3000)
    }

    return (
        <div className="direct-contact-window">
            <div className="direct-contact-container">
                <header className="direct-contact-top-section">
                    <h5 id="direct-contact-heading">Recipiant Information</h5>
                    <a id="direct-contact-exit" onClick={toggleDirectContact} href="#">&Chi;</a>
                    <hr id="direct-contact-hr"/>
                </header>
                <main className="direct-contact-main-content">
                    <div className="direct-contact-input-container">
                        <div className="direct-contact-input-position" id="direct-contact-email">
                            <label className="direct-contact-label">E-mail</label>
                            <input onChange={onInputChange} id="email" name="email" placeholder="E-mail (Required)"></input>
                        </div>
                        <div className="direct-contact-input-position" id="direct-contact-message">
                            <label className="direct-contact-label">Message</label>
                            <textarea 
                            autoCorrect="on" onChange={onInputChange} 
                            id="message-input" name="message-area" 
                            placeholder="Any message in this box will be sent to my e-mail..."
                            rows={7} 
                            autocapitalize="sentences">
                            </textarea>
                        </div>
                    </div>
                </main>
                <div className="direct-contact-status-msg">
                    <p>{statusMsg}</p>
                </div>
                <div className="direct-contact-submit-section">
                    <div className="direct-contact-buttons">
                        <button onClick={toggleDirectContact} id="direct-contact-cancel">Cancel</button>
                        <button onClick={(e) => handleSubmit(e)} id="direct-contact-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectContact