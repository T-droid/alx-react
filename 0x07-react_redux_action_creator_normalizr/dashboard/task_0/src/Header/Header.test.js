import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';


StyleSheetTestUtils.suppressStyleInjection()
describe('Header', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('test if img is rendered', () => {
        expect(wrapper.find('img').length).toBe(1)
    });

    it('test if h1 is rendered', () => {
        expect(wrapper.find('h1').length).toBe(1)
    });
})