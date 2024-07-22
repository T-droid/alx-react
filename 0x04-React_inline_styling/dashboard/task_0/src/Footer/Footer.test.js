import React from "react";
import { shallow } from "enzyme";
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection()
describe('Footer', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('renders without crashing', () => {
        shallow(<Footer />)
    })
})