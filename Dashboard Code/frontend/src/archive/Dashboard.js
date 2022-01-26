import React, { Component } from 'react';
import { DashboardDiv, IndividualInputDiv, SummaryDiv, PreDashboardDiv, QuestionDiv, PostResultsDiv, PostDashboardDiv, CoverDiv } from './DashboardStyledComponents';
import Individual from './Individual';
import { Button, EndorsedIcon } from 'evergreen-ui';
import Summary from './Summary';
import io from "socket.io-client";
import { connect } from 'react-redux';
import { addTraineeOneData, addTraineeTwoData, addTraineeThreeData,
    addSyncDelay, addPredictedMove, addDancerIds, addAccuracy, addResults, addEMG } from '../actions';
let i = 0;
let j = 0;

// how to update an object with setState: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
export class Dashboard extends Component {

    componentDidMount = async () => {
        const socket = io(`http://localhost:3333/`);

        socket.on("connect", () => {
            console.log(`Frontend socket connected to backend ${socket.id}`);
        })
        socket.on("onNewTraineeOneData", async (data) => {
            i += 1;
            // if (i % 100 == 0) {
            //     console.log(`${i}th data`)
            // }
            await this.setState({
                t1Data: data
            })
            // this.props.addTraineeOneData(data);
            this.updateTraineeOneMode(data.mode);
            console.log(`${i}th data ' + JSON.stringify(data)`);
        })
        socket.on("onNewTraineeTwoData", (data) => {
            i += 1;
            if (i % 100 == 0) {
                console.log(`${i}th data`)
            }
            this.props.addTraineeTwoData(data);
            this.updateTraineeTwoMode(data.mode);
            // console.log('data ' + JSON.stringify(data));
        })
        socket.on("onNewTraineeThreeData", (data) => {
            i += 1;
            if (i % 100 == 0) {
                console.log(`${i}th data`)
            }
            this.props.addTraineeThreeData(data);
            this.updateTraineeThreeMode(data.mode);
            // console.log('data ' + JSON.stringify(data));
        })

        socket.on("newResult", async (result) => {
            // this.props.addAccuracy(result);
            // this.props.addDancerIds(result);
            // this.props.addPredictedMove(result);
            // this.props.addSyncDelay(result);
            // this.props.addResults(result);
            // this.updatePositions(result.dancerIds);
            j += 1;
            this.updateCurrentMove(result.predictedMove);

            await this.setState({
                currentResult: {...result}
            });
            
            console.log(`${j}th result: `+ JSON.stringify(this.state.currentResult));
        })

        socket.on("newEMG", async (result) => {
            this.props.addEMG(result);
        })

        socket.on("disconnect", (reason) => {
            if (reason === "io server disconnect") {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
              }
            console.log('Frontend socket disconnected. Reason: ' + reason);
        })
    }
    state = {
        preDashboard: true, 
        postDashboard: false,
        posTraineeOne: 1,
        posTraineeTwo: 2,
        posTraineeThree: 3,
        modeTraineeOne: 1,
        modeTraineeTwo: 1,
        modeTraineeThree: 1,
        currentMove: 0,
        currentResult: {},
        t1Data: {}
    }

    updateTraineeOneMode = async (mode) => {
        if (mode != this.state.modeTraineeOne) {
            await this.setState({
                modeTraineeOne: mode
            });
        }
    }

    updateTraineeTwoMode = async (mode) => {
        if (mode != this.state.modeTraineeTwo) {
            await this.setState({
                modeTraineeTwo: mode
            });
        }
    }

    updateTraineeThreeMode = async (mode) => {
        if (mode != this.state.modeTraineeThree) {
            await this.setState({
                modeTraineeThree: mode
            });
        }
    }

    updateCurrentMove = async (move) => {
        await this.setState({ 
            currentMove: move
        });
    }

    updatePositions = async (positions) => {
        if (positions == '1 2 3') {
            await this.setState({
                posTraineeOne: 1
            });
            await this.setState({
                posTraineeTwo: 2
            });
            await this.setState({
                posTraineeThree: 3
            })
        } else if (positions == '1 3 2') {
            await this.setState({
                posTraineeOne: 1
            });
            await this.setState({
                posTraineeTwo: 3
            });
            await this.setState({
                posTraineeThree: 2
            })
        } else if (positions == '2 1 3') {
            await this.setState({
                posTraineeOne: 2
            });
            await this.setState({
                posTraineeTwo: 1
            });
            await this.setState({
                posTraineeThree: 3
            })
        } else if (positions == '2 3 1') {
            await this.setState({
                posTraineeOne: 3
            });
            await this.setState({
                posTraineeTwo: 1
            });
            await this.setState({
                posTraineeThree: 2
            })
        } else if (positions == '3 1 2') {
            await this.setState({
                posTraineeOne: 2
            });
            await this.setState({
                posTraineeTwo: 3
            });
            await this.setState({
                posTraineeThree: 1
            })
        } else if (positions == '3 2 1') {
            await this.setState({
                posTraineeOne: 3
            });
            await this.setState({
                posTraineeTwo: 2
            });
            await this.setState({
                posTraineeThree: 1
            })
        }
    }

    onLetsDanceClicked = event => {
        event.preventDefault();
        this.setState({
            preDashboard: false,
        })
    }

    render() {

        // console.log(this.props);

        let currentState;

        const preDashboard = (
            <PreDashboardDiv>
                <QuestionDiv>
                    <h1> Are you ready to dance? </h1>
                    <Button appearance='primary' marginRight={30} onClick={this.onLetsDanceClicked} iconAfter={EndorsedIcon}> Lets Dance! </Button>
                </QuestionDiv>

            </PreDashboardDiv>
        )
        
        // TODO fix name!! and coach-trainee entity relationship
        const dashboard = (
            <React.Fragment>
                <DashboardDiv>
                    <Individual data={this.state.t1Data} no='1' name='Riyas' position={this.state.posTraineeOne} />
                    <Individual data={this.props.traineeTwoData} no='2' name='Mary' position={this.state.posTraineeTwo} />
                    <Individual data={this.props.traineeThreeData} no='3' name='Stacy' position={this.state.posTraineeThree} />
                </DashboardDiv>
                <Summary 
                    currentResult={this.state.currentResult} 
                    dancerIds={this.props.dancerIds} 
                    predictedMove={this.props.predictedMove} 
                    syncDelay={this.props.syncDelay} 
                    currentMove={this.state.currentMove} 
                    emgs={this.props.emgs}
                    modeTraineeOne={this.state.modeTraineeOne}
                    modeTraineeTwo={this.state.modeTraineeTwo}
                    modeTraineeThree={this.state.modeTraineeThree} />
            </React.Fragment>

        )

        const postDashboard = (
            <PostDashboardDiv>
                <PostResultsDiv>
                    <h1> Results </h1>
                </PostResultsDiv>
            </PostDashboardDiv>
        )
        if (this.state.preDashboard) {
            // console.log('pre dashboard');
            currentState = preDashboard;
        } else if (this.state.postDashboard) {
            // console.log('post dashboard');
            currentState = postDashboard;
        } else {
            // console.log('dashboard');
            currentState = dashboard;
        }
        return (
            <React.Fragment>
                {currentState}
            </React.Fragment>
        )
    }
}

// do this to access the values created from each reducer. The state refers to the keys of the combined reducers. 
const mapStateToProps = (state) => {
    return {
        traineeOneData: state.traineeOneData,
        traineeTwoData: state.traineeTwoData,
        traineeThreeData: state.traineeThreeData,
        syncDelay: state.syncDelay,
        predictedMove: state.predictedMove,
        dancerIds: state.dancerIds,
        accuracy: state.accuracy,
        results: state.results,
        emgs: state.emgs
    }
}

// connect actions to the mapstatetoprops
export default connect(mapStateToProps, {
    addTraineeOneData,
    addTraineeTwoData,
    addTraineeThreeData,
    addDancerIds,
    addPredictedMove,
    addAccuracy,
    addSyncDelay,
    addResults,
    addEMG
})(Dashboard);
