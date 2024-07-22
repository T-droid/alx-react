import React, { Component } from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";


class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            bodySectionWithMargin: {
                marginBottom: '40px'
            }
        })
    }

    render() {
        return (
            <div className={this.styles.bodySectionWithMargin}>
                <BodySection {...this.props} />
            </div>
        );
    }
}

export default BodySectionWithMarginBottom;