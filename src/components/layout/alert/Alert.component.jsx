import React from 'react';
import "./Alert.style.css";

const Alert = ({ alert }) => {
    
    return (
        alert !== null && (
            <div className={`alert alert__${alert.type}`}>
                <p className="message">{alert.msg}</p>
                <i className="fas fa-lg fa-info-circle"></i>
            </div>
        )
    )
}

export default Alert
