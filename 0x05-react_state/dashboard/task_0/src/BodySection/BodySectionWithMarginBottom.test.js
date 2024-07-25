import { shallow } from "enzyme";
import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";


StyleSheetTestUtils.suppressStyleInjection()
describe('BodySectionWithMarginBottom', () => {
    it('renders correctly together with props', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );
    })
})