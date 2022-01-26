import React, { Component, PureComponent } from 'react';
import IndividualController from './individual/IndividualController';
import Summary from './summary/Summary';
// import { traceLifecycle } from 'react-lifecycle-visualizer';



// how to update an object with setState: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
// how to fix experimental decorators vs code warning: https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/
// @traceLifecycle
export class DataDashboard extends Component {

    onDanceEnd = async () => {
        console.log('On Dance End Clicked ', this.props);
        await this.props.onEnd();
    }
    render() {
        console.log('Data Dashboard Props ', this.props);
        return (
            <React.Fragment>
                <IndividualController />
                <Summary 
                    traineeOneName='Brandon'
                    traineeTwoName='Riyas'
                    traineeThreeName='Ting Wei'
                    onDanceEnd={this.onDanceEnd} 
                />
            </React.Fragment>
        )
    }
}

export default DataDashboard;