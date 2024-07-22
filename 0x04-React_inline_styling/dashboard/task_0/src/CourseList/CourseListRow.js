// CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

  const styles = StyleSheet.create({
    bgColor:{
      backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    }
  });

  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr className={css(styles.bgColor)}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className={css(styles.bgColor)}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr className={css(styles.bgColor)}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
