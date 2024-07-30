import { shallow, mount } from 'enzyme';
import App from './App';
import React from 'react';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection()
describe('App', () => {
    it('it renders without crashing', () => {
        shallow(<App />)
    })

    it('check if course list is not displayed when isLogin is False', () => {
        const wrapper = shallow(<App isLoggin={false} />);
        expect(wrapper.find(CourseList).exists()).toBe(false);
    });

    it('check if course list is rendered if isLoggin is true', () => {
        const wrapper = shallow(<App isLoggin={true} />);
        expect(wrapper.find(CourseList).exists()).toBe(true);
    });

    describe('when component is mounted and crtl + h is pressed', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplimentation(() => {});

        const wrapper = mount(<App logOut={logOutMock} />)

        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h'});
        window.dispatchEvent(event);

        expect(logOutMock).toHaveBeenCalled()
        expect(alertMock).toHaveBeenCalledWith('Logging you out');

        alertMock.mockRestore();
        wrapper.unmount();
    });
});
