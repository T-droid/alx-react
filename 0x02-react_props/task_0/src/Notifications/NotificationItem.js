import React from 'react';
import './NotificationItem.css'
import PropTypes from 'prop-types';

function NotificationItem({type, html, value}) {
    if (value) return <li data-notification-type={type}>{value}</li>

    return <li dangerouslySetInnerHTML={html} data-notification-type={type}></li>
}

NotificationItem.propTypes = {
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
}

NotificationItem.defaultProps = {
    type: 'default'
}

export default NotificationItem;