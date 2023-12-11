import React from "react";
import ReactDOM from "react-dom";
import "./modal.css"

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props){
        super(props)
        
        this.divElement = document.createElement("div");
    }

    componentDidMount() {
        modalRoot.appendChild(this.divElement)
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.divElement)
    } 

    render(){
        return ReactDOM.createPortal(this.props.children, this.divElement)
    }
}

export default Modal;