import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import UserContext from "../App/AppContext";

export default function Footer() {
    const styles = StyleSheet.create({
        footer: {
            textAlign: "center",
            fontStyle: 'italic',
        }
    })
    return (
        <UserContext.Consumer>
            {({user, logOut}) => (
                <div className={css(styles.footer)}>
                <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
                {user.isLoggedIn && 
                <p><a href="#">Contact us</a></p>}
            </div>
            )}
        </UserContext.Consumer>        
    )
}