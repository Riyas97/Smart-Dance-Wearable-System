import React, { Component } from 'react';
import { SummaryDiv, 
    ModeDiv, 
    ModeContentDiv, 
    DanceMovePlayerDiv, 
    EMGDiv, 
    CorrectPositionDiv, 
    SyncDelayMoveAccuracyDiv, 
    HistoryDiv,
    GreenH4, 
    RedH4, 
    CorrectPositionContentDiv,
    WhiteH4,
    EndDanceDiv,
    EndDanceContentDiv } from './SummaryStyledComponents';
import Table from 'react-bootstrap/Table';
import Fade from 'react-bootstrap/Fade';
import _ from 'lodash';
import io from "socket.io-client";
import EmgController from './EmgController';
import { Button, EndorsedIcon } from 'evergreen-ui';
import { withRouter } from 'react-router-dom';

let currentMove;
let videoComponent;
let currentMode;
let resultDisplay;
let positionDisplay;
let summaryDisplay;
let i = 0;
let m = 0;
let j = 0;

const moveIdToMove = ['Dab', 'Elbow Kick', 'Gun', 'Hair', 'Listen', 'Point High', 'Side Pump', 'Wipe Table', 'Logout']

// why mp4 videos need to be placed in public folder: https://stackoverflow.com/questions/60794257/react-js-react-player-how-to-play-local-video
// why tables need to be wary of whitespaces: https://stackoverflow.com/questions/39914455/react-validatedomnesting-text-cannot-appear-as-a-child-of-tr
// how to check for empty object: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

export class Summary extends Component {

    componentDidMount = async () => {
        const socket = io(`http://localhost:3333/`);

        socket.on("connect", () => {
            console.log(`[SUMMARY] Frontend Summary socket connected to backend ${socket.id}`);
        })

        socket.on("newResult", async (result) => {
            j += 1;
            console.log(`${j}th result: `+ JSON.stringify(result));

            // this.updatePositions(result.dancerIds);
            // this.updateCurrentMove(result.predictedMove);


            await this.setState(prevState => ({
                currentResult: {
                    ...prevState.currentResult,
                    timestamp: result.timestamp,
                    dancerIds: result.dancerIds,
                    correctDancerIds: result.correctDancerIds,
                    predictedMove: result.predictedMove,
                    syncDelay: result.syncDelay,
                    accuracy: result.accuracy
                }
            }))

            await this.handleHistoryState(result);  
        })

        // socket.on("newMode", async (result) => {
        //     await this.setState(prevState => ({
        //         mode: result.mode
        //     }))
        //     console.log('Mode Changed in Result! ', result.mode);
        // })

        socket.on("disconnect", (reason) => {
            if (reason === "io server disconnect") {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
              }
            console.log('Frontend socket disconnected. Reason: ' + reason);
        })
    }

    state = {
        history: [],
        currentResult: {},
        mode: ''
    }

    handleHistoryState = async (result) => {
        if (this.state.history.length == 0) {
            await this.setState(prevState => {
                const history = [];
                history.push(result);
                return { history };
            })
        } else if (this.state.history.length == 1) {
            await this.setState(prevState => {
                const history = [result, prevState.history[0]];
                return { history };
            })
        } else if (this.state.history.length == 2) {
            await this.setState(prevState => {
                const history = [result, prevState.history[0], prevState.history[1]];
                return { history };
            })
        } else if (this.state.history.length == 3) {
            await this.setState(prevState => {
                const history = [result, prevState.history[0], prevState.history[1]];
                return { history };
            })
        }

        console.log('history', this.state.history);
    }
    
    // settleMode() {
    //     if (this.state.mode == '') {
    //         currentMode = (
    //             <ModeDiv>
    //                 <ModeContentDiv>
    //                     <h4> Trainee Instructions </h4>
    //                     <h4> Waiting for incoming data! Be Patient. </h4>
    //                 </ModeContentDiv>
    //             </ModeDiv>
    //         )
    //     } else {
    //         let color =''
    //         console.log('Mode Changed in Summary! ', this.state.mode);
    //         if (this.state.mode == 'CHANGE POSITIONS') {
    //             color = 'yellow';
    //         } else if (this.state.mode == 'START DANCING') {
    //             color = 'green';
    //         } else if (this.state.mode == 'RESETTING... DO NOT MOVE...') {
    //             color = 'red';
    //         }
    //         currentMode = (
    //             <ModeDiv inputColor={color}>
    //                 <ModeContentDiv>
    //                     <br/>
    //                     <h1> {this.state.mode} </h1>
    //                     <br />
    //                 </ModeContentDiv>
    //             </ModeDiv>
    //         )
    //     }
    // }

    settleVideoAndMove() {
        if (this.state.currentResult.predictedMove == 0) {
            currentMove = 'Dab';
        } else if (this.state.currentResult.predictedMove == 1) {
            currentMove = 'Elbow Kick';
        } else if (this.state.currentResult.predictedMove == 2) {
            currentMove = 'Gun';
        }  else if (this.state.currentResult.predictedMove == 3) {
            currentMove = 'Hair';
        } else if (this.state.currentResult.predictedMove == 4) {
            currentMove = 'Listen';
        } else if (this.state.currentResult.predictedMove == 5) {
            currentMove = 'Point High';
        } else if (this.state.currentResult.predictedMove ==  6) {
            currentMove = 'Side Pump';           
        } else if (this.state.currentResult.predictedMove == 7) {
            currentMove = 'Wipe Table';
        } else if (this.state.currentResult.predictedMove == 8) {
            currentMove = 'Logout';
        }
    }

    settleResult() {
        // console.log('here ', this.props.currentResult);

        if (_.isEmpty(this.state.currentResult)) {
            positionDisplay = (
                <CorrectPositionDiv>
                    <CorrectPositionContentDiv>
                        <WhiteH4> Positions </WhiteH4>
                        {/* <WhiteH4> Waiting for incoming data! Be Patient. </WhiteH4> */}
                    </CorrectPositionContentDiv>
                   
                </CorrectPositionDiv>
            )
            resultDisplay = (
                <React.Fragment>
                    <WhiteH4> Statistics </WhiteH4>
                    {/* <WhiteH4> Waiting for incoming data! Be Patient. </WhiteH4> */}
                </React.Fragment>
            );
        } else {
            if (this.state.currentResult.correctDancerIds == this.state.currentResult.dancerIds) {
                positionDisplay = (
                    <CorrectPositionDiv inputColor='green'>
                        <CorrectPositionContentDiv>
                            <WhiteH4> Current Positions - {this.state.currentResult.dancerIds} </WhiteH4>
                            <br />
                            <WhiteH4> Correct Positions - {this.state.currentResult.correctDancerIds} </WhiteH4>
                        </CorrectPositionContentDiv>
                    </CorrectPositionDiv>
                )
            } else {
                positionDisplay = (
                    <CorrectPositionDiv inputColor='red'>
                        <CorrectPositionContentDiv>
                            <WhiteH4> Current Positions - {this.state.currentResult.dancerIds} </WhiteH4>
                            <br />
                            <WhiteH4> Correct Positions - {this.state.currentResult.correctDancerIds} </WhiteH4>
                        </CorrectPositionContentDiv>

                    </CorrectPositionDiv>
                )
            }

            resultDisplay = (
                    <React.Fragment>
                        <WhiteH4> Current Move - {currentMove}  </WhiteH4>
                        <WhiteH4> Sync Delay - {this.state.currentResult.syncDelay}s</WhiteH4>
                        <WhiteH4> Confidence - {this.state.currentResult.accuracy}%</WhiteH4>
                    </React.Fragment>
            )
        }
    }

    onDanceEndClicked = event => {
        event.preventDefault();
        // this.props.onDanceEnd();
        this.props.history.push('/coach/summary');
    }

    settleHistory() {
        let summaryFirstRowDancerIds = null;
        let summarySecondRowDancerIds = null;
        let summaryThirdRowDancerIds = null;

        let summaryFirstRowPredictedMove = null;
        let summarySecondRowPredictedMove = null;
        let summaryThirdRowPredictedMove = null;

        // console.log('History ', JSON.stringify(this.props.history));
        if (_.isEmpty(this.state.history)) {
            summaryDisplay = ( 
                <React.Fragment> </React.Fragment>
                // <WhiteH4> No Data Yet! </WhiteH4>
            )
        } else {
            if (this.state.history.length == 1) {
                summaryFirstRowDancerIds = this.state.history[0].dancerIds;
                summaryFirstRowPredictedMove = moveIdToMove[this.state.history[0].predictedMove];
                
            } else if (this.state.history.length == 2) {
                summaryFirstRowDancerIds = this.state.history[0].dancerIds;
                summaryFirstRowPredictedMove = moveIdToMove[this.state.history[0].predictedMove];
    
                summarySecondRowDancerIds = this.state.history[1].dancerIds;
                summarySecondRowPredictedMove = moveIdToMove[this.state.history[1].predictedMove];
    
            } else if (this.state.history.length == 3) {
                summaryFirstRowDancerIds = this.state.history[0].dancerIds;
                summaryFirstRowPredictedMove = moveIdToMove[this.state.history[0].predictedMove];
    
                summarySecondRowDancerIds = this.state.history[1].dancerIds;
                summarySecondRowPredictedMove = moveIdToMove[this.state.history[1].predictedMove];
    
                summaryThirdRowDancerIds = this.state.history[2].dancerIds;
                summaryThirdRowPredictedMove = moveIdToMove[this.state.history[2].predictedMove];
            }
    
            summaryDisplay = (
                <Table borderless size='sm'>
                    <thead><tr><th style={{ color: 'white'}}>Positions</th><th style={{ color: 'white'}}>Move</th></tr></thead>
                    <tbody>
                        {/* <Fade appear={true} in={true}></Fade> */}
                        <tr><td style={{ color: 'green' }} >{summaryFirstRowDancerIds}</td><td style={{ color: 'green' }}>{summaryFirstRowPredictedMove}</td></tr>
                        <tr><td style={{ color: 'red' }}>{summarySecondRowDancerIds}</td><td style={{ color: 'red' }}>{summarySecondRowPredictedMove}</td></tr>
                        <tr><td style={{ color: 'white' }}>{summaryThirdRowDancerIds}</td><td style={{ color: 'white' }}>{summaryThirdRowPredictedMove}</td></tr></tbody>
                </Table>
            );
        }
    }

    render() {

        this.settleResult();
        this.settleVideoAndMove();
        this.settleHistory();
        // this.settleMode();

        return (
          <SummaryDiv>
              {positionDisplay}

              <SyncDelayMoveAccuracyDiv>
                {resultDisplay}
              </SyncDelayMoveAccuracyDiv>

              <EndDanceDiv>
                  <EndDanceContentDiv>
                    <Button appearance='primary' height={56} onClick={this.onDanceEndClicked} iconAfter={EndorsedIcon}> End Dance! </Button>
                  </EndDanceContentDiv>

              </EndDanceDiv>
              <EMGDiv>
                <EmgController />
              </EMGDiv>

              <HistoryDiv>
                <WhiteH4> History </WhiteH4>
                {summaryDisplay}
              </HistoryDiv>
          </SummaryDiv>
        )
    }
}

export default withRouter(Summary);
