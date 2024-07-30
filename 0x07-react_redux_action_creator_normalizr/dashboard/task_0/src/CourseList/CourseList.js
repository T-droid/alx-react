import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({listCourses}) {

    const styles = StyleSheet.create({
        courseList: {
            width: '100%',
            borderCollapse: 'collapse',
          },
          th: {
            border: '1px solid #ddd',
            padding: '8px',
            backgroundColor: '#f4f4f4',
          },
          td: {
            border: '1px solid #ddd',
            padding: '8px',
          },
    });

    return (
        <table className={css(styles.courseList)}>
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