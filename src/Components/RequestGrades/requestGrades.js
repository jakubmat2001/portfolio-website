import React from "react";
import "./requestGrades.css"

const RequestGrades = ({ isModalOpen, toggleModal }) => {
    return (
        <div className="request-grades-window">
            <div className="request-grades-container">
                <header className="request-grades-top-section">
                    <h5 id="request-grades-heading">Recipiant Information</h5>
                    <a id="request-grades-exit" onClick={toggleModal} href="#">&Chi;</a>
                    <hr id="request-grades-hr" />
                </header>
                <main className="request-grades-main-content">
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-name">
                            <label className="request-grades-label">Name</label>
                            <input placeholder="Name (Optional)"></input>
                        </div>
                    </div>
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-email">
                            <label className="request-grades-label">Email</label>
                            <input placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-organisation">
                            <label className="request-grades-label">Organisation</label>
                            <input placeholder="organisation"></input>
                        </div>
                    </div>
                    <div className="request-grades-input-container">
                        <div className="request-grades-input-position" id="request-grades-organisation-type">
                            <label className="request-grades-label">Organisation Type</label>
                            <select id="request-grades-select" name="org-type">
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
                        <button onClick={toggleModal} id="request-grades-cancel">Cancel</button>
                        <button id="request-grades-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestGrades