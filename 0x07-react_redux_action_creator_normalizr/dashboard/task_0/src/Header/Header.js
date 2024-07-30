import React, { useContext } from "react";
import logo from '../assets/logo.png';
import { css, StyleSheet } from "aphrodite";
import UserContext from "../App/AppContext";


export default function Header() {
    const { user, logOut } = useContext(UserContext)
    return (
        <div className={css(styles.appHeader)}>
            <img className={css(styles.img)} src={logo} alt='logo'></img>
            <h1 className={css(styles.h1)}>School dashboard</h1>
            {user.isLoggedIn && 
            <p id="logoutSection">Welcome {user.email}<a href="#" onClick={() => logOut()}>(logout)</a></p>}
        </div>
    )
}

const styles = StyleSheet.create({
  appHeader: {
      display: 'flex',
      padding: '1rem',
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    img: {
      width: '150px',
      height: '150px',
    },
    
    h1: {
      color: 'red',
    }
});