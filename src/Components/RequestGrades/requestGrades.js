import React from "react";
import { useState } from "react";
import "./requestGrades.css"

const RequestGrades = (props) => {
    const [email, setEmail] = useState("")
    const [organisation, setOrganisation] = useState("")
    const [empName, setEmpName] = useState("")
    const [organisationType, setOrganisationType] = useState("")

    const inputValidation = () => {
        const EmailInputBox = document.getElementById("email");
        const OrgInputBox = document.getElementById("organisation");
        const NameInputBox = document.getElementById("name");
        const OrgInputType = document.getElementById("org-type");

        const emailVal = EmailInputBox.value
        const organisationVal = OrgInputBox.value
        const nameVal = NameInputBox.value
        const orgTypeVal = OrgInputType.value

        const inputBoxArray = [emailVal, organisationVal, orgTypeVal, nameVal]

        let hasEmptyField = false

        inputBoxArray.forEach((element, index) => {
            if (element === "") {
                hasEmptyField = true
                switch (index) {
                    case 0:
                        EmailInputBox.style.border = "1px solid red"
                        break
                    case 1:
                        OrgInputBox.style.border = "1px solid red"
                        break
                    case 2:
                        OrgInputType.style.border = "1px solid red"
                        break
                    case 3:
                        setEmpName("None")
                        break
                    default:
                        break
                }
            }
        })

        if (!hasEmptyField) {
            return true
        }
        return false
    }

    const handleSubmit = (e) => {
        if (inputValidation() === true) {
            props.toggleRequestGrades(e);
            fetch("http://localhost:3000/send-email", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: empName,
                    email: email,
                    org: organisation,
                    orgType: organisationType
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    console.log("Email sent successfully");
                } else {
                    console.log("Failed to send email");
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
                setEmail(value);
                break;
            case "organisation":
                setOrganisation(value);
                break;
            case "org-type":
                setOrganisationType(value);
                break;
            case "name":
                setEmpName(value);
                break;
            default:
        }
    };


    return (
        <div className="request-grades-window">
            <div className="request-grades-container">
                <header className="request-grades-top-section">
                    <h5 id="request-grades-heading">Recipiant Information</h5>
                    <a id="request-grades-exit" onClick={props.toggleRequestGrades} href="#">&Chi;</a>
                    <hr id="request-grades-hr" />
                </header>
                <main className="request-grades-main-content">
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-name">
                            <label className="request-grades-label">Name</label>
                            <input onChange={onInputChange} id="name" name="name" placeholder="Name (Optional)"></input>
                        </div>
                    </div>
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-email">
                            <label className="request-grades-label">Email</label>
                            <input onChange={onInputChange} placeholder="Email" id="email" name="email" ></input>
                        </div>
                    </div>
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-organisation">
                            <label className="request-grades-label">Organisation</label>
                            <input onChange={onInputChange} placeholder="organisation" id="organisation" name="organisation" ></input>
                        </div>
                    </div>
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-organisation-type">
                            <label className="request-grades-label">Organisation Type</label>
                                <select onChange={onInputChange} id="org-type" name="org-type" >
                                    <option value="" selected></option>
                                    <option value="org">Organisation</option>
                                    <option value="uni-col">University/College</option>
                                    <option value="family-friends">Family/Friends</option>
                                    <option value="other">Other</option>
                                </select>
                        </div>
                    </div>
                </main>
                <div className="request-grades-submit-section">
                    <div className="request-grades-buttons">
                        <button onClick={props.toggleRequestGrades} id="request-grades-cancel">Cancel</button>
                        <button onClick={(e) => handleSubmit(e)} id="request-grades-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestGrades