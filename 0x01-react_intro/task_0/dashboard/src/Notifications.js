import React from "react";
import './Notifications.css';
import close from './close-icon.png';
import { getLatestNotification } from "./utils";

export default function Notifications() {
    return (
        <div className="Notifications">
            <button
            style={{float: 'right', border: 'none', background: 'none'}}
            aria-label="close"
            onClick={() => console.log('Close button has been clicked')}
            >
                <img src={close} style={{ height: '13px', width: '13px'}} alt="close"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>Close button has been clicked</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={ {__html: getLatestNotification()}}></li>
            </ul>        
        </div>
    )
}