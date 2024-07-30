import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const styles = StyleSheet.create({
    bgColor: {
      backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    },
    rowChecked: {
      backgroundColor: '#e6e4e4',
    }
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const rowStyle = isChecked ? css(styles.bgColor, styles.rowChecked) : css(styles.bgColor);

  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr className={rowStyle}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className={rowStyle}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr className={rowStyle}>
      <td>
        <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
