import React, { Component } from 'react';
import { IndividualDiv, 
    InfoDisplay, 
    PreDisplay, 
    PositionDisplay, 
    DisplayDiv, 
    MiscDiv, 
    AccGraphDiv, 
    YPRGraphDiv,
    WhiteH1,
    WhiteH2,
    WhiteH3,
    WhiteP  } from './IndividualStyledComponents';
import GCCLineChart from './GCCLineChart';
import AccLineChart from './AccLineChart';
import { IconContext } from 'react-icons';
import { IoAccessibilityOutline, IoAccessibilitySharp } from 'react-icons/io5'; 
import _ from 'lodash';

// how to style react-icons: https://stackoverflow.com/questions/56636280/how-to-style-react-icons
function redPersonIcon() {
    return (
        <IconContext.Provider value={{ fill: "red", size: '2rem', marginRight: '1.5rem' }} >
            <div>
                <IoAccessibilitySharp />
            </div>
        </IconContext.Provider>
    )
}

export class Individual extends Component {

    state = {
        hasPositionsChanged: false,
    }

    positionStickman() {
        if (this.props.position == 1) {
            return (
                <React.Fragment>
                    <IoAccessibilitySharp size='2rem' style={{ fill:'red', marginRight: '1.5rem' }} />
                    <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                    <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                </React.Fragment>
            )
        } else if (this.props.position == 2) {
            return (
                <React.Fragment>
                    <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                    <IoAccessibilitySharp size='2rem' style={{ fill:'red', marginRight: '1.5rem' }} />
                    <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                    <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                    <IoAccessibilitySharp size='2rem' style={{ fill:'red', marginRight: '1.5rem' }} />
                </React.Fragment>
            )
        }
    }
    
    render() {
        let display;
        // console.log(this.props.data);
        if (_.isEmpty(this.props.data)) {
            display = ( 
                <PreDisplay>
                    <WhiteH2> Ooops unable to connect just yet. </WhiteH2>
                    <WhiteP> Receving data in abit! If problem persists, check whether trainee has activated their device.  </WhiteP>
                </PreDisplay>
            )
        } else {
            display = (
            <React.Fragment>
                <DisplayDiv>
                    <MiscDiv>
                        <InfoDisplay>
                            <WhiteH3> Trainee {this.props.no} - {this.props.name} </WhiteH3>
                        </InfoDisplay>
                        <PositionDisplay >
                            {/* <AccessibilityNewIcon fontSize='large' color="primary" style={{ marginRight: '1rem'}} />
                            <AccessibilityNewIcon fontSize='large' color="primary" style={{ marginRight: '1rem'}} />
                            <AccessibilityNewIcon fontSize='large' color="action" style={{ color: red[500], marginRight: '1rem'}} /> */}
                            {/* {this.positionStickman()} */}
                            {/* <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} />
                            <IoAccessibilitySharp size='2rem' style={{ fill:'#291f7d', marginRight: '1.5rem' }} />
                            <IoAccessibilityOutline size='2rem' style={{ marginRight: '1.5rem' }} /> */}
                        </PositionDisplay>
                    </MiscDiv>
                    <AccGraphDiv>
                        <AccLineChart data={this.props.data} />
                    </AccGraphDiv>
                    <YPRGraphDiv>
                        <GCCLineChart data={this.props.data} /> 
                    </YPRGraphDiv>
                </DisplayDiv>
            </React.Fragment> 
        )}
        return (
            <IndividualDiv>
                
                {display}

            </IndividualDiv>
        )
    }
}

export default Individual
