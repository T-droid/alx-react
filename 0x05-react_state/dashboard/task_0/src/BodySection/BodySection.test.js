import { shallow } from "enzyme";
import BodySection from "./BodySection";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";


StyleSheetTestUtils.suppressStyleInjection()
describe('BodySection', () => {
    it('renders the h2 and children correctly', () => {
        const wrapper = shallow(
        <BodySection title="test title">
            <p>test children node</p>
        </BodySection>
        );
        expect(wrapper.find('h2').text()).toBe('test title');
        expect(wrapper.find('p').text()).toBe('test children node');
    });
});
