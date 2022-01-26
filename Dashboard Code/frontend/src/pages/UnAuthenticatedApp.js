import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Home from '../components/home/Home';

import { LOGIN, HOME, REGISTER } from '../constants/Routes';

const UnAuthenticatedApp = () => {
    return (
        <Switch>
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={REGISTER} component={Register} />
            <Route exact path={HOME} component={Home} />
            <Redirect to={HOME} />
        </Switch>
    )
}

export default UnAuthenticatedApp;
