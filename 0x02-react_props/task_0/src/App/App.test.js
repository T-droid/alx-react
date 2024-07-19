import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import CourseList from '../CourseList/CourseList';


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
    })
});
