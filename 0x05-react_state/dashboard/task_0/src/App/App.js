import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import UserContext from './AppContext';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
      user: defaultUser,
      listNotifications: [
        {id: 1, type: 'default', value: 'Close button has been clicked'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
      ]
    }

    
    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ]
  
  }

  logOut = () => {
    this.setState({ user: defaultUser });
    console.log('Logged out');
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }))
  }

  handleDisplayDrawer = () => {
    this.setState({
      display: true
    })
  }

  handleHideDrawer = () => {
    this.setState({
      display: false
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', () => {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  render() {
    const { user, listNotifications } = this.state;
    return (
      <UserContext.Provider value={{ user, logOut: this.logOut }} >
        <React.Fragment>
          <div className='App'>
            <div className={css(styles.headerNotification)}>
              <Header />
              <Notifications
              displayDrawer={this.state.display}
              listNotifications={listNotifications}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
              />
            </div>
            <div className={css(styles.appBody)}>
              {user.isLoggedIn ? (
                <BodySectionWithMarginBottom title='Course List'>
                  <CourseList listCourses={this.listCourses}/>
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login logIn={this.logIn}/>
                </BodySectionWithMarginBottom>
              )}
              <BodySection title='News from the school'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eligendi adipisci cupiditate minus ullam soluta cumque quasi voluptas quam maxime!</p>
              </BodySection>
            </div>
            <Footer />
          </div>
      </React.Fragment>
      </UserContext.Provider>   
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    height: '67vh',
    gap: '5px',
    padding: '1rem',
    borderBottom: '5px solid red',
  },
  
  headerNotification: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '5px solid red',
    padding: '1rem',
  }
});

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

App.propTypes = {
  isLoggin: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggin: false,
  logOut: () => {}
}

export default App;