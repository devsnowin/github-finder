import React, { useContext } from 'react';
import AlertContext from '../../../context/alert/AlertContext';
import "./Alert.style.css";

const Alert = () => {

    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;
    
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
