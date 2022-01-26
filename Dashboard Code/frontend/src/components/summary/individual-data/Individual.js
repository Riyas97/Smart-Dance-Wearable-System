import React, { Component } from 'react';
import AccLineChart from './AccLineChart';
import GccLineChart from './GccLineChart';
import { IndividualDiv, 
    DisplayDiv, 
    MiscDiv, 
    InfoDisplay, 
    AccGraphDiv, 
    GCCGraphDiv,
    H3 } from './IndividualStyledComponents';

export class Individual extends Component {
    render() {
        console.log('INDIVIDUAL', this.props)
        return (
                <React.Fragment>
                    <IndividualDiv>
                        <DisplayDiv>
                            <MiscDiv>
                                <InfoDisplay>
                                    <H3> Trainee {this.props.no} - {this.props.name} </H3>
                                </InfoDisplay>
                            </MiscDiv>
                            <AccGraphDiv>
                                <AccLineChart timestamp={this.props.timestamp} accx={this.props.accx} accy={this.props.accy} accz={this.props.accz} />
                            </AccGraphDiv>
                            <GCCGraphDiv>
                                <GccLineChart timestamp={this.props.timestamp} gccx={this.props.gccx} gccy={this.props.gccy} gccz={this.props.gccz} />
                            </GCCGraphDiv>
                        </DisplayDiv>
                    </IndividualDiv>

                </React.Fragment>
        )
    }
}

export default Individual
