import React, { Component } from 'react';
import EmgLineChart from './EmgLineChart';
import styled from 'styled-components';
import io from "socket.io-client";

export const EMGDiv = styled.div`
    flex: 1;
    /* border: 1px solid lightslategray; */
    box-sizing: border-box;
    margin: auto;
`; 

export class EmgController extends Component {

    componentDidMount = async () => {
        const socket = io(`http://localhost:3333/`);

        socket.on("connect", () => {
            console.log(`[EMG] Frontend EMG socket connected to backend ${socket.id}`);
        })

        socket.on("newEMG", async (result) => {

            await this.setState(prevState => ({
                currentEmg: {
                    ...prevState.currentEmg,
                    voltage: result.voltage,
                    rms: result.rms,
                    mfq: result.mfq,
                    timestamp: result.timestamp
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
        currentEmg: {}
    }

    render() {
        return (
            <React.Fragment>
                <EmgLineChart data={this.state.currentEmg} />
            </React.Fragment>
        )
    }
}

export default EmgController
