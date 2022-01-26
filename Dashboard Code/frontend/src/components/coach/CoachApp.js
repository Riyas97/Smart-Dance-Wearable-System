import React, { Component } from 'react';
import DashboardNavBar from '../navbars/dashboard/DashboardNavBar';
import Dashboard from '../dashboard/coach/Dashboard';
import { DashboardDiv, NavbarDiv, ContentDiv } from './CoachAppStyledComponents';


export class CoachApp extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardDiv>
                    <NavbarDiv>
                        <DashboardNavBar user='coach' name='Adam' />
                    </NavbarDiv>
                    <ContentDiv>
                        <Dashboard />
                    </ContentDiv>
                </DashboardDiv>

            </React.Fragment>

        )
    }
}

export default CoachApp
