import React from "react";
import PropTypes from "prop-types";

import './Notfication.css'

const Notification = ({ message }) => {
    return (
        <p>{message}</p>
    )
}

Notification.propTypes = {
    massage: PropTypes.string,
}

export default Notification;