import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CoachApp from '../components/coach/CoachApp';
import Demo from '../components/demo/Demo';
import Summary from '../components/summary/Summary';

import { COACH_DASHBOARD, COACH_DEMO, COACH_SUMMARY } from '../constants/Routes';

const AuthenticatedApp = () => {
    return (
        <Switch>
            <Route exact path={COACH_DASHBOARD} component={CoachApp} />
            <Route exact path={COACH_DEMO} component={Demo} />
            <Route exact path={COACH_SUMMARY} component={Summary} />
            <Redirect to={COACH_DASHBOARD} />
        </Switch>
    )
}

export default AuthenticatedApp;
