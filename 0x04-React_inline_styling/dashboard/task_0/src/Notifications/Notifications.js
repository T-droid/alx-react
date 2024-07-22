import React, { Component } from "react";
import close from '../assets/close-icon.png';
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from "./NotificationItemShape";
import { css, StyleSheet } from "aphrodite";


const opacityAnim = {
    "0%": { opacity: 0.5 },
    "100%": { opacity: 1 },
};
  
  const bounceAnim = {
    "0%": { transform: "translateY(0px)" },
    "33%": { transform: "translateY(-5px)" },
    "66%": { transform: "translateY(5px)" },
    "100%": { transform: "translateY(0px)" },
};


export default class Notifications extends Component {
    constructor(props){
        super(props)
        this.markAsRead = this.markAsRead.bind(this);
        this.styles = StyleSheet.create({
            Notifications: {
                border: '5px dotted red',
                padding: '1rem',
                "@media (max-width: 900px)": {
                    width: "100%",
                    padding: "0px",
                    fontSize: 20,
                    position: "relative",
                    right: 0,
                    left: 0,
                    border: "none",
                },
            },
            
            notificationContainer: {
                display: 'flex',
                flexDirection: 'column',
            },
            
            menuItem: {
                position: "relative",
                zIndex: 100,
                textAlign: "right",
                ":hover": {
                  cursor: "pointer",
                  animationName: [opacityAnim, bounceAnim],
                  animationDuration: "1s, 0.5s",
                  animationIterationCount: "3",
                },
            },
            ul: {
                "@media (max-width: 900px)": {
                  padding: 0,
                },
            },
            button: {
                "@media (max-width: 900px)": {
                  position: "relative",
                  float: "right",
                },
            }
        })
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.listNotifications.length > this.props.listNotifications.length) {
            return true;
        }
        return false
    }


    render() {
        const {displayDrawer, listNotifications} = this.props;
        return (
            <React.Fragment>
                <div className={css(this.styles.notificationContainer)} >
                    <div className={css(this.styles.menuItem)} >
                        Your notifications
                    </div>
                    {displayDrawer && 
                    <div className={css(this.styles.Notifications)}>
                        <button
                         style={{
                            color: "#3a3a3a",
                            fontWeight: "bold",
                            background: "none",
                            border: "none",
                            fontSize: "15px",
                            position: "absolute",
                            right: "3px",
                            top: "3px",
                            cursor: "pointer",
                            outline: "none",
                          }}
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
                                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} id={notification.id} markAsRead={this.markAsRead}/>
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
        
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultTypes = {
    displayDrawer: false,
    listNotifications: []
}
