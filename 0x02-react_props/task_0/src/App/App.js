import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

function App({isLoggin}) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ]

  const listNotifications = [
    {id: 1, type: 'default', value: 'Close button has been clicked'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
  ]

return (
    <React.Fragment>
      <div className='App'>
        <div className='Header-notification'>
          <Header />
          <Notifications displayDrawer={false} listNotifications={listNotifications}/>
        </div>
        <div className='App-body'>
          {isLoggin ? (
            <CourseList listCourses={listCourses}/>
          ) : (
            <Login />
          )}
        </div>
        <Footer />
      </div>
    </React.Fragment>    
  );
}

App.propTypes = {
  isLoggin: PropTypes.bool
}

App.defaultProps = {
  isLoggin: false
}

export default App;