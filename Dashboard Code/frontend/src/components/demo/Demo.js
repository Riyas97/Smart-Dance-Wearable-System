import React, { Component } from 'react';

import {
    DemoDiv,
    NavbarDiv,
    DemoMainDiv,
    DemoCentreDiv,
    DemoInfoDiv,
    DemoContentDiv,
    DemoViewDiv,
    WhiteH1,
    WhiteP,
    HeaderDiv
} from './DemoStyledComponents';
import DashboardNavBar from '../navbars/dashboard/DashboardNavBar';
import DemoView from './DemoView';

export class Demo extends Component {
    render() {
        return (
            <DemoDiv>
                <NavbarDiv>
                    <DashboardNavBar user='coach' />
                </NavbarDiv>
                <DemoMainDiv>
                    <DemoCentreDiv>

                        <DemoInfoDiv>
                            <HeaderDiv>
                                <WhiteH1> Demo </WhiteH1>
                                <WhiteP> Unsure of the moves? Check out the tabs below! </WhiteP>
                            </HeaderDiv>
                        </DemoInfoDiv>

                        <DemoContentDiv>
                            <DemoViewDiv>
                                <DemoView />
                            </DemoViewDiv>
                        </DemoContentDiv>
                    </DemoCentreDiv>
                   
                </DemoMainDiv>
            </DemoDiv>
        )
    }
}

export default Demo
