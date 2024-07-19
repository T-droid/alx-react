import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';

describe('NotificationItem', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NotificationItem />)
    });

    it('the value is rendered in li', () => {
        const value = "Holla"
        wrapper = shallow(<NotificationItem type="string" value={value} />)
        expect(wrapper.text()).toBe(value)
    });

    it('renders html content', () => {
        const html = '<p>Hello World</p>';
        wrapper = shallow(<NotificationItem type='html' html={{__html: html}} />)
        expect(wrapper.html()).toContain(html)
    });

})