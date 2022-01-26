import React, { Component } from 'react';
import { PreDashboardDiv,
    PreDashboardContentDiv, 
    PreQuestionDiv,
    PostQuestionDiv,
    WhiteH1 } from './PreDataStyledComponents';
import { Button, EndorsedIcon } from 'evergreen-ui';
import { withRouter } from 'react-router-dom';

export class PreDataDashboard extends Component {
    onLetsDanceClicked = event => {
        event.preventDefault();
        this.props.onStart();
    }

    onViewResultsClicked = event => {
        event.preventDefault();
        this.props.history.push('/coach/summary');
    }
    render() {
        return (
            <PreDashboardDiv>
                <PreDashboardContentDiv>
                    <PreQuestionDiv>
                        <WhiteH1> Are you ready to Dance? </WhiteH1>
                        <Button appearance='primary' marginRight={30} onClick={this.onLetsDanceClicked} iconAfter={EndorsedIcon}> Lets Dance! </Button>
                    </PreQuestionDiv>
                    <PostQuestionDiv>
                        <WhiteH1> View results of your previous dance? </WhiteH1>
                        <Button appearance='primary' marginRight={30} onClick={this.onViewResultsClicked} iconAfter={EndorsedIcon}> View Results! </Button>
                    </PostQuestionDiv>

                </PreDashboardContentDiv>

            </PreDashboardDiv>
        )
    }
}

export default withRouter(PreDataDashboard);
