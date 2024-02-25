import React, { useState, ChangeEvent, FormEvent } from "react";
import "./requestGrades.css";

type RequestGradesModals = {
    toggleRequestGrades: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

interface RequestGradesFormInputs {
    email: string;
    organisation: string;
    empName: string;
    organisationType: string;
}

const RequestGrades: React.FC<RequestGradesModals> = ({ toggleRequestGrades }) => {
    const [formInputs, setFormInputs] = useState<RequestGradesFormInputs>({
        email: "",
        empName: "",
        organisation: "",
        organisationType: "",
    });

    const [statusMsg, setStatusMsg] = useState<string>("");

    const inputValidation = (): boolean => {
        const hasEmptyField = !formInputs.email || !formInputs.organisation || !formInputs.organisationType;
        return !hasEmptyField;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); 

        if (inputValidation()) {
            console.log("Form is valid", formInputs);
            setTimeout(() => {
                displayStatusMsg("Successfully sent email to; jakubmatusik11@gmail.com");
                toggleRequestGrades();
            }, 2000);
        } else {
            setStatusMsg("Please fill in all required fields.");
        }
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const displayStatusMsg = (msg: string) => {
        setStatusMsg(msg);
    };

    return (
        <div className="request-grades-window">
        <form className="request-grades-container" onSubmit={handleSubmit}>
            <header className="request-grades-top-section">
                <h5 id="request-grades-heading">Recipient Information</h5>
                <button type="button" id="request-grades-exit" onClick={toggleRequestGrades}>&Chi;</button>
                <hr id="request-grades-hr" />
            </header>
            <main className="request-grades-main-content">
                <div className="request-grades-input-container">
                    <label className="request-grades-label" htmlFor="emp-name">Name</label>
                    <input className="request-grades-input" type="text" id="emp-name" name="empName" value={formInputs.empName} onChange={onInputChange} placeholder="Name (Optional)" />
                </div>
                <div className="request-grades-input-container">
                    <label className="request-grades-label" htmlFor="email">Email</label>
                    <input className="request-grades-input" type="email" id="email" name="email" value={formInputs.email} onChange={onInputChange} placeholder="Email" required />
                </div>
                <div className="request-grades-input-container">
                    <label className="request-grades-label" htmlFor="organisation">Organisation</label>
                    <input className="request-grades-input" type="text" id="organisation" name="organisation" value={formInputs.organisation} onChange={onInputChange} placeholder="Organisation" required />
                </div>
                <div className="request-grades-input-container">
                    <label className="request-grades-label" htmlFor="org-type">Organisation Type</label>
                    <select className="request-grades-select" id="org-type" name="organisationType" value={formInputs.organisationType} onChange={onInputChange} required>
                        <option value="" disabled>Select type</option>
                        <option value="org">Organisation</option>
                        <option value="uni-col">University/College</option>
                        <option value="family-friends">Family/Friends</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </main>
            <div className="request-grades-status-msg">
                <p>{statusMsg}</p>
            </div>
            <div className="request-grades-submit-section">
                <div className="request-grades-buttons">
                    <button type="button" id="request-grades-cancel" onClick={toggleRequestGrades}>Cancel</button>
                    <button type="submit" id="request-grades-submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default RequestGrades;