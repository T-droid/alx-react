import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

export default function Footer() {
    const styles = StyleSheet.create({
        footer: {
            fontStyle: 'italic',
        }
    })
    return (
        <div className={css(styles.footer)}>
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
    )
}