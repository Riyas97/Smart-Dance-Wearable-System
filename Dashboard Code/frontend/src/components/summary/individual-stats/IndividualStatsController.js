import React, { Component } from 'react';
import { 
    IndividualStatsOverallDiv,
    IndividualStatDiv,
    H3,
    H4,
    H5
} from './IndividualStatsControllerStyledComponents';

export class IndividualStatsController extends Component {

    state = {
    }

    render() {
        console.log('Individual Stats Controller ', this.props);
        return (
            <IndividualStatsOverallDiv>
                <IndividualStatDiv>
                    <H4> Trainee 1 </H4>
                    <H5> Move Score: {this.props.overallStats.totalCorrectMoves} / {this.props.overallStats.totalMoves} </H5>
                    <H5> Position Score: {this.props.overallStats.traineeOneCorrectPosition} / {this.props.overallStats.totalPositions} </H5>

                </IndividualStatDiv>

                <IndividualStatDiv>
                    <H4> Trainee 2 </H4>
                    <H5> Move Score: {this.props.overallStats.totalCorrectMoves} / {this.props.overallStats.totalMoves} </H5>
                    <H5> Position Score: {this.props.overallStats.traineeTwoCorrectPosition} / {this.props.overallStats.totalPositions} </H5>
                </IndividualStatDiv>

                <IndividualStatDiv>
                    <H4> Trainee 3 </H4>
                    <H5> Move Score: {this.props.overallStats.totalCorrectMoves} / {this.props.overallStats.totalMoves} </H5>
                    <H5> Position Score: {this.props.overallStats.traineeThreeCorrectPosition} / {this.props.overallStats.totalPositions} </H5>

                </IndividualStatDiv>
            </IndividualStatsOverallDiv>
        )
    }
}

export default IndividualStatsController
