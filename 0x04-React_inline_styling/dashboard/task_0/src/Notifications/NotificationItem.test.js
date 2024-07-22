import React from "react";
import NotificationItem from "./NotificationItem";
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";


StyleSheetTestUtils.suppressStyleInjection()
describe('NotificationItem', () => {
    let wrapper;

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

    it('calls the markAsRead func correctly', () => {
        const notification = {id: 1, type: 'default', value: 'Close button has been clicked'};
        const markAsRead = jest.fn();
        wrapper = shallow(<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} id={notification.id} markAsRead={markAsRead}/>);
        wrapper.find('li').simulate('click');
        expect(markAsRead).toHaveBeenCalledWith(1);
    });

})