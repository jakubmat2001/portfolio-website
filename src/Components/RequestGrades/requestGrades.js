import React from "react";
import { useState } from "react";
import "./requestGrades.css"

const RequestGrades = ({ isModalOpen, toggleRequestGrades }) => {
    const [email, setEmail] = useState("")
    const [organisation, setOrganisation] = useState("")
    const [empName, setEmpName] = useState("")
    const [organisationType, setOrganisationType] = useState("")

    const inputValidation = () => {
        const EmailInputBox = document.getElementById("email");
        const OrgInputBox = document.getElementById("organisation");
        const NameInputBox = document.getElementById("name");

        const emailVal = EmailInputBox.value
        const organisationVal = OrgInputBox.value
        const nameVal = NameInputBox.value

        const inputBoxArray = [emailVal, organisationVal, nameVal]

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

    const handleSubmit = () => {
        if (inputValidation() === true) {
            toggleRequestGrades()
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
            }).then(
                res => console.log(res)
            ).catch(console.log)
        }
    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "email":
                setEmail(value);
                console.log(email);
                break;
            case "organisation":
                setOrganisation(value);
                console.log(organisation);
                break;
            case "org-type":
                setOrganisationType(value);
                console.log(organisationType);
                break;
            case "name":
                setEmpName(value);
                console.log(empName);
                break;
            default:
                console.log("nothing");
        }
    };


    return (
        <div className="request-grades-window">
            <div className="request-grades-container">
                <header className="request-grades-top-section">
                    <h5 id="request-grades-heading">Recipiant Information</h5>
                    <a id="request-grades-exit" onClick={toggleRequestGrades} href="#">&Chi;</a>
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
                            <div id="org-type-style">
                                <select onChange={onInputChange} id="org-type" name="org-type" >
                                    <option value="org">Organisation</option>
                                    <option value="uni-col">University/College</option>
                                    <option value="family-friends">Family/Friends</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </main>
                <div className="request-grades-submit-section">
                    <div className="request-grades-buttons">
                        <button onClick={toggleRequestGrades} id="request-grades-cancel">Cancel</button>
                        <button onClick={() => handleSubmit()} id="request-grades-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestGrades