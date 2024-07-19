import CourseListRow from "./CourseListRow";
import React from "react";
import { shallow } from 'enzyme';

describe('CourseListRow', () => {

    describe('WHen isHeader is true', () => {
        it('it renders one cell with colspan when textSecondCell does not exist', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Header 1' />);
            const cell = wrapper.find('th');
            expect(cell.prop('colSpan')).toBe(2);
            expect(cell.text()).toBe('Header 1');
        });

        it('renders two cell when textSeconCell is present', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Header 1' textSecondCell='Header 2' />);
            const cells = wrapper.find('th');
            expect(cells).toHaveLength(2);
            expect(cells.at(0).text()).toBe('Header 1');
            expect(cells.at(1).text()).toBe('Header 2');
        });
    });

    describe('When isHeader is false', () => {
        it('renders correctly two td elements within tr elements', () => {
            const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='cell 1' textSecondCell='cell 2' />);
            const cells = wrapper.find('td');
            expect(cells).toHaveLength(2)
            expect(cells.at(0).text()).toBe('cell 1');
            expect(cells.at(1).text()).toBe('cell 2')
        });
    });
});