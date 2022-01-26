import React, { Component } from 'react';
import io from "socket.io-client";
import styled from 'styled-components';
import Individual from './Individual';

let i = 0;
let j = 0;
let m = 0;

export const IndividualControllerDiv = styled.div`
    box-sizing: border-box;
    /* border: 3px solid lightgoldenrodyellow; */
    width: 100%;
    height: 68%;
    /* max-width: 100%;
    max-height: 70%; */
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    align-items: stretch;
    background-color: black;
    padding: 10px;
    flex-wrap: nowrap;
`;

export class IndividualController extends Component {
    componentDidMount = async () => {
        const socket = io(`http://localhost:3333/`);

        socket.on("connect", () => {
            console.log(`[INDIVIDUAL] Frontend Individual socket connected to backend ${socket.id}`);
        })
        socket.on("onNewTraineeOneData", async (data) => {
            i += 1;
            console.log(`t1 ${i}th data ` + JSON.stringify(data));

            await this.setState(prevState => ({
                t1Data: {
                    ...prevState.t1Data,
                    accx: data.accx,
                    accy: data.accy,
                    accz: data.accz,
                    yaw: data.yaw,
                    pitch: data.pitch,
                    roll: data.roll,
                    timestamp: data.timestamp
                }
            }))
        })
        socket.on("onNewTraineeTwoData", async (data) => {
            j += 1;
            console.log(`t2 ${j}th data ` + JSON.stringify(data));

            await this.setState(prevState => ({
                t2Data: {
                    ...prevState.t2Data,
                    accx: data.accx,
                    accy: data.accy,
                    accz: data.accz,
                    yaw: data.yaw,
                    pitch: data.pitch,
                    roll: data.roll,
                    timestamp: data.timestamp,
                }
            }))
        })
        socket.on("onNewTraineeThreeData", async (data) => {
            m += 1;
            console.log(`t3 ${m}th data ` + JSON.stringify(data));

            await this.setState(prevState => ({
                t3Data: {
                    ...prevState.t3Data,
                    accx: data.accx,
                    accy: data.accy,
                    accz: data.accz,
                    yaw: data.yaw,
                    pitch: data.pitch,
                    roll: data.roll,
                    timestamp: data.timestamp
                }
            }))
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
        t1Data: {},
        t2Data: {},
        t3Data: {},
    }

    render() {
        return (
            <IndividualControllerDiv>
                <Individual data={this.state.t1Data} no='1' name='Brandon'  />
                <Individual data={this.state.t2Data} no='2' name='Riyas'  />
                <Individual data={this.state.t3Data} no='3' name='Ting Wei'  />
            </IndividualControllerDiv>
        )
    }
}

export default IndividualController
