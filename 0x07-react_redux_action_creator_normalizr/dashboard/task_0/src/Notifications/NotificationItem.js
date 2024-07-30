import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, type, html, value, markAsRead} = this.props;

        const className = css(
            type === 'default' ? styles.default : styles.urgent
        )

        if (value) return <li className={className} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
        return <li className={className} dangerouslySetInnerHTML={html} data-notification-type={type} onClick={() => markAsRead(id)}></li>
    }
}

const styles = StyleSheet.create({
    default: {
      color: "blue",
      "@media (max-width: 375px)": {
        borderBottom: "1px solid black",
        listStyle: "none",
        fontSize: "20px",
        padding: "10px 8px",
      },
    },
    urgent: {
      color: "red",
      "@media (max-width: 375px)": {
        borderBottom: "1px solid black",
        listStyle: "none",
        fontSize: "20px",
        padding: "10px 8px",
      },
    },
  });

NotificationItem.propTypes = {
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
}

NotificationItem.defaultProps = {
    type: 'default'
}

export default NotificationItem;