import { shallow } from 'enzyme';
import App from './App';
import React from 'react';


describe('App', () => {
    it('renders a div with class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.hasClass('App-header')).toBe(true);
    })

    it('renders a div with class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.hasClass('App-body')).toBe(true);
    })

    it('renders a div with class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.hasClass('App-footer')).toBe(true);
    })
});
