import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import AppLoader from '../components/app_loader/AppLoader';
import { Component } from 'react';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnAuthenticatedApp = React.lazy(() => import('./UnAuthenticatedApp'));

class MainApp extends Component {
  static contextType = UserContext;

  render() {
    const { user, handleUser } = this.context;
    console.log('Mainapp context ', user);
    // if (user.isFetching === true) {
    //   return <AppLoader />
    // }

    return (
      <React.Suspense  fallback={<AppLoader />}>
        <Router>
          {user.isAuth ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </Router>
      </React.Suspense>
    ) 
  }
  
}

export default MainApp;
