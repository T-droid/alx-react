import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";


StyleSheetTestUtils.suppressStyleInjection()
const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
]
describe('CourseList', () => {
    it('renderswithout crashing', () => {
        shallow(<CourseList />);
    });

    it('renders correct number rows', () => {
        
        const wrapper = shallow(<CourseList listCourses={listCourses}/>);
        const rows = wrapper.find(CourseListRow);
        expect(rows).toHaveLength(listCourses.length + 2);
    });

    it('renders when listCourses is empty', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.find('tr').find('td').text()).toBe('No course available');
    })
});
