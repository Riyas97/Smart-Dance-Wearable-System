import React, { Component } from 'react';
import { PositionHeadlineDiv,
    PositionsDiv,
    PositionMainDiv,
    H3, 
    ScoreDiv, 
    DropdownDiv, 
    ChartDiv,
    H4 } from './PositionsSummaryControllerStyledComponents';
import { UserContext } from '../../../contexts/UserContext';
import { getPositionsSummary } from '../../../utils/Analytics';
import PieSummaryChart from './PieSummaryChart';
import { Select } from 'evergreen-ui';


export class PositionsSummaryController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST Positions 1');

        try {
            console.log('POST Positions 2');
            const positionsSummary = await getPositionsSummary();
            console.log('POST Positions 3');
            await this.setState(prevState => ({
                ...prevState,
                totalPositions: positionsSummary.totalPositions,
                totalCorrectPositions: positionsSummary.totalCorrectPositions,
                totalIncorrectPositions: positionsSummary.totalIncorrectPositions,
                traineeOneCorrectPosition: positionsSummary.traineeOneCorrectPosition,
                traineeOneIncorrectPosition: positionsSummary.traineeOneIncorrectPosition,
                traineeTwoCorrectPosition: positionsSummary.traineeTwoCorrectPosition,
                traineeTwoIncorrectPosition: positionsSummary.traineeTwoIncorrectPosition,
                traineeThreeCorrectPosition: positionsSummary.traineeThreeCorrectPosition,
                traineeThreeIncorrectPosition: positionsSummary.traineeThreeIncorrectPosition
                }))
            this.props.getPositionsStats({
                totalPositions: positionsSummary.totalPositions,
                totalCorrectPositions: positionsSummary.totalCorrectPositions,
                totalIncorrectPositions: positionsSummary.totalIncorrectPositions,
                traineeOneCorrectPosition: positionsSummary.traineeOneCorrectPosition,
                traineeOneIncorrectPosition: positionsSummary.traineeOneIncorrectPosition,
                traineeTwoCorrectPosition: positionsSummary.traineeTwoCorrectPosition,
                traineeTwoIncorrectPosition: positionsSummary.traineeTwoIncorrectPosition,
                traineeThreeCorrectPosition: positionsSummary.traineeThreeCorrectPosition,
                traineeThreeIncorrectPosition: positionsSummary.traineeThreeIncorrectPosition
            })
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('Post positions error', error);
            throw new Error(error);
        }
    }

    state = {
        currentPosition: 1,
        totalPositions: 0,
        totalCorrectPositions: 0,
        totalIncorrectPositions: 0,
        traineeOneCorrectPosition: 0,
        traineeOneIncorrectPosition: 0,
        traineeTwoCorrectPosition: 0,
        traineeTwoIncorrectPosition: 0,
        traineeThreeCorrectPosition: 0,
        traineeThreeIncorrectPosition: 0
 
    };

    onDropdownChange = event => {
        event.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            currentPosition: event.target.value
        }))
    }

    render() {
        let chart;
        let respectiveScore;

        console.log('POST DATA SUMMARY POSITIONS ', this.state.currentPosition);

        if (this.state.currentPosition == 1) {
            chart = (
                <PieSummaryChart name='Trainee 1' totalCorrect={this.state.traineeOneCorrectPosition} totalIncorrect={this.state.traineeOneIncorrectPosition} />
            );
            respectiveScore = `Trainee 1 Score: ${this.state.traineeOneCorrectPosition} / ${this.state.totalPositions}`;

        } else if (this.state.currentPosition == 2) {
            chart = (
                <PieSummaryChart name='Trainee 2' totalCorrect={this.state.traineeTwoCorrectPosition} totalIncorrect={this.state.traineeTwoIncorrectPosition} />
            );
            respectiveScore = `Trainee 2 Score: ${this.state.traineeTwoCorrectPosition} / ${this.state.totalPositions}`;
    
        } else if (this.state.currentPosition == 3) {
            chart = (
                <PieSummaryChart name='Trainee 3' totalCorrect={this.state.traineeThreeCorrectPosition} totalIncorrect={this.state.traineeThreeIncorrectPosition} />
            );
            respectiveScore = `Trainee 3 Score: ${this.state.traineeThreeCorrectPosition} / ${this.state.totalPositions}`;
        }
    
        return (
            <PositionsDiv>
                <PositionHeadlineDiv>
                    <H3> Dance Position Stats </H3>
                </PositionHeadlineDiv>
                <PositionMainDiv>
                    <ScoreDiv>
                        <H4> Position Score: {this.state.totalCorrectPositions} / {this.state.totalPositions} </H4>
                        <H4> {respectiveScore} </H4>
                    </ScoreDiv>
                    <ChartDiv>
                        <DropdownDiv>
                            <Select width={120} height={40} onChange={this.onDropdownChange} >
                                    <option value={1}> Trainee 1 </option>
                                    <option value={2}> Trainee 2 </option>
                                    <option value={3}> Trainee 3 </option>
                                </Select>
                        </DropdownDiv>
                        {chart}
                    </ChartDiv>
                </PositionMainDiv>
            </PositionsDiv>
        )
    }
}

export default PositionsSummaryController;
