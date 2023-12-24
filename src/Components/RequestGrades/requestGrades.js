import React from "react";
import { useState } from "react";
import "./requestGrades.css"

const RequestGrades = ({toggleRequestGrades}) => {
    const [formInputs, setFormInputs] = useState({
        email: "",
        empName: "",
        organisation: "",
        organisationType: ""
    })

    const [statusMsg, setStatusMsg] = useState("")

    const inputValidation = () => {
        const EmailInputBox = document.getElementById("email");
        const OrgInputBox = document.getElementById("organisation");
        const NameInputBox = document.getElementById("emp-name");
        const OrgInputType = document.getElementById("org-type");

        const emailVal = EmailInputBox.value
        const organisationVal = OrgInputBox.value
        const nameVal = NameInputBox.value
        const orgTypeVal = OrgInputType.value

        console.log(`name ${nameVal}, org ${organisationVal}, email ${emailVal}, orgType: ${orgTypeVal}`)
        console.log(`name formInput ${formInputs.empName}`)
        console.log(`email formInput ${formInputs.email}`)
        console.log(`org formInput ${formInputs.organisation}`)
        console.log(`orgType formInput ${formInputs.organisationType}`)


        const inputBoxArray = [emailVal, organisationVal, orgTypeVal]

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
        console.log(formInputs.empName)
        if (inputValidation() === true) {
            fetch("https://portfolio-website-backend-c405ae064912.herokuapp.com/request-grades", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formInputs.empName,
                    email: formInputs.email,
                    org: formInputs.organisation,
                    orgType: formInputs.organisationType
                }),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
            case "organisation":
                setFormInputs((prevState) => ({
                    ...prevState,
                    organisation: value
                }));
                break;
            case "org-type":
                setFormInputs((prevState) => ({
                    ...prevState,
                    organisationType: value
                }));
                break;
            case "emp-name":
                setFormInputs((prevState) => ({
                    ...prevState,
                    empName: value
                }));
                break;
            default:
        }
    };

    const displayStatusMsg = (msg, e) => {
        setStatusMsg(msg)
        setTimeout(() => {
            toggleRequestGrades(e)
        }, 3000)
    }

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
                            <input onChange={onInputChange} id="emp-name" name="emp-name" placeholder="Name (Optional)"></input>
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
                                    <option value="" defaultValue={""}></option>
                                    <option value="org">Organisation</option>
                                    <option value="uni-col">University/College</option>
                                    <option value="family-friends">Family/Friends</option>
                                    <option value="other">Other</option>
                                </select>
                        </div>
                    </div>
                </main>
                <div className="request-grades-status-msg">
                    <p>{statusMsg}</p>
                </div>
                <div className="request-grades-submit-section">
                    <div className="request-grades-buttons">
                        <button onClick={toggleRequestGrades} id="request-grades-cancel">Cancel</button>
                        <button onClick={(e) => handleSubmit(e)} id="request-grades-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestGrades