import React from "react";
import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({displayDrawer, listNotifications}) {
    return (
        <React.Fragment>
            <div className="notification-container" >
                <div className="menu-item" >
                    Your notifications
                </div>
                {displayDrawer && 
                <div className="Notifications">
                    <button
                    style={{float: 'right', border: 'none', background: 'none'}}
                    aria-label="close"
                    onClick={() => console.log('Close button has been clicked')}
                    >
                        <img src={close} style={{ height: '13px', width: '13px'}} alt="close"></img>
                    </button>
                    
                    <ul>
                        {listNotifications && listNotifications.length > 0 ? (
                            <>
                                <p>Here is the list of notifications</p>
                                {listNotifications.map((notification) => (
                                    <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                                ))}
                            </>                            
                        ) : (
                           <p>No new notification for now</p>
                        )}                       
                    </ul>        
                </div>
                }
            </div>
        </React.Fragment>
    )
        
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultTypes = {
    displayDrawer: false,
    listNotifications: []
}
