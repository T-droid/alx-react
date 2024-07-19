import Notifications from "./Notifications";
import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
    {id: 1, type: 'default', value: 'Close button has been clicked'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
]

describe('Notifications Component', () => {
    
    describe('When displayDrawer is false', () => {
        it('should display the menu item', () => {
            const wrapper = shallow(<Notifications displayDrawer={false} />);
            expect(wrapper.find('div.menu-item').exists()).toBe(true);
        });

        it('should not display the Notifications section', () => {
            const wrapper = shallow(<Notifications displayDrawer={false} />);
            expect(wrapper.find('div.Notifications').exists()).toBe(false);
        });
    });

    describe('When displayDrawer is true', () => {
        it('should display the menu item', () => {
            const wrapper = shallow(<Notifications displayDrawer={true} />);
            expect(wrapper.find('div.menu-item').exists()).toBe(true);
        });

        it('should display the Notifications section', () => {
            const wrapper = shallow(<Notifications displayDrawer={true} />);
            expect(wrapper.find('div.Notifications').exists()).toBe(true);
        });

        describe('when list notification is empty or has an element', () => {
            it('when it is empty', () => {
                const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
                expect(wrapper.find('ul').find('p').text()).toBe('No new notification for now');
            });

            it('when it is not empty', () => {                
                const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
                expect(wrapper.find('ul').find('p').text()).toBe('Here is the list of notifications');
            })
        })
        it('should render the correct number of NotificationItem components', () => {
           
            const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
            const notificationItems = wrapper.find(NotificationItem);
            expect(notificationItems.length).toBe(listNotifications.length);
        });
    });
});
