import React from "react";
import logo from '../assets/logo.png';
import { css, StyleSheet } from "aphrodite";


export default function Header() {
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
    return (
        <div className={css(styles.appHeader)}>
            <img className={css(styles.img)} src={logo} alt='logo'></img>
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
    )
}