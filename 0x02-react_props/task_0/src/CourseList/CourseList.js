import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

export default function CourseList({listCourses}) {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length && listCourses.length > 0 ? (
                    listCourses.map((course) => (
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                    ))
                ) : (
                    <tr>
                        <td>No course available</td>
                    </tr>
                )}                
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}