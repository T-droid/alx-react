import { shallow } from 'enzyme';
import Login from './Login';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection()
describe('Login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />)
    });

    it('renders input element', () => {
        expect(wrapper.find('input').length).toBe(2);
    });

    it('renders label element', () => {
        expect(wrapper.find('label').length).toBe(2);
    });
})
