import React from "react";
import "./requestGrades.css"

const RequestGrades = ({isModalOpen, toggleModal}) => {
    return(
        <div className="request-grades">
            <button onClick={toggleModal}>Close</button>
        </div>
    )
}

export default RequestGrades