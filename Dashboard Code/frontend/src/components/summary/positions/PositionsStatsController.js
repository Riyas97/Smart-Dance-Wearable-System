import React, { Component } from 'react';
import { PositionHeadlineDiv,
    PositionsDiv,
    PositionMainDiv,
    H3, 
    ScoreDiv, 
    DropdownDiv, 
    ChartDiv,
    H4,
    IndividualChartDiv,
    ChartMainDiv } from './PositionsStatsStyledComponents';
import { UserContext } from '../../../contexts/UserContext';
import { getPositionsStats } from '../../../utils/Analytics';
import PieStatsChart from './PieStatsChart';
import { Select } from 'evergreen-ui';


export class PositionsStatsController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST Positions stats 1');

        try {
            console.log('POST Positions stats 2');
            const positionsStats = await getPositionsStats();
            console.log('POST Positions stats 3');
            await this.setState(prevState => ({
                ...prevState,
                ...positionsStats
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('Post positions stats error', error);
            throw new Error(error);
        }
    }

    state = {
        activeIndex: 1,
        t1Pos1: 0,
        t1Pos1Corr1: 0,
        t1Pos1Incorr2: 0,
        t1Pos1Incorr3: 0,
        t1Pos2: 0,
        t1Pos2Corr2: 0,
        t1Pos2Incorr1: 0,
        t1Pos2Incorr3: 0,
        t1Pos3: 0,
        t1Pos3Corr3: 0,
        t1Pos3Incorr1: 0,
        t1Pos3Incorr2: 0,
        t2Pos1: 0,
        t2Pos1Corr1: 0,
        t2Pos1Incorr2: 0,
        t2Pos1Incorr3: 0,
        t2Pos2: 0,
        t2Pos2Corr2: 0,
        t2Pos2Incorr1: 0,
        t2Pos2Incorr3: 0,
        t2Pos3: 0,
        t2Pos3Corr3: 0,
        t2Pos3Incorr1: 0,
        t2Pos3Incorr2: 0,
        t3Pos1: 0,
        t3Pos1Corr1: 0,
        t3Pos1Incorr2: 0,
        t3Pos1Incorr3: 0,
        t3Pos2: 0,
        t3Pos2Corr2: 0,
        t3Pos2Incorr1: 0,
        t3Pos2Incorr3: 0,
        t3Pos3: 0,
        t3Pos3Corr3: 0,
        t3Pos3Incorr1: 0,
        t3Pos3Incorr2: 0,
    };

    onDropdownChange = event => {
        event.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            activeIndex: event.target.value
        }))
    }

    render() {
        let chart1;
        let chart2;
        let chart3;
        let respectiveScore;


        if (this.state.activeIndex == 1) {
            chart1 = (
                <PieStatsChart 
                currentTrainee='Trainee 1 - Position 1' 
                position1={this.state.t1Pos1Corr1}
                position2={this.state.t1Pos1Incorr2}
                position3={this.state.t1Pos1Incorr3} />
            );
            chart2 = (
                <PieStatsChart 
                currentTrainee='Trainee 1 - Position 2'
                position1={this.state.t1Pos2Incorr1}
                position2={this.state.t1Pos2Corr2}
                position3={this.state.t1Pos2Incorr3} />
            );
            chart3 = (
                <PieStatsChart 
                currentTrainee='Trainee 1 - Position 3'
                position1={this.state.t1Pos3Incorr1}
                position2={this.state.t1Pos3Incorr2}
                position3={this.state.t1Pos3Corr3} />
            );

        } else if (this.state.activeIndex == 2) {
            chart1 = (
                <PieStatsChart 
                currentTrainee='Trainee 2 - Position 1' 
                position1={this.state.t2Pos1Corr1}
                position2={this.state.t2Pos1Incorr2}
                position3={this.state.t2Pos1Incorr3} />
            );
            chart2 = (
                <PieStatsChart 
                currentTrainee='Trainee 2 - Position 2'
                position1={this.state.t2Pos2Incorr1}
                position2={this.state.t2Pos2Corr2}
                position3={this.state.t2Pos2Incorr3} />
            );
            chart3 = (
                <PieStatsChart 
                currentTrainee='Trainee 2 - Position 3'
                position1={this.state.t2Pos3Incorr1}
                position2={this.state.t2Pos3Incorr2}
                position3={this.state.t2Pos3Corr3} />
            );
    
        } else if (this.state.activeIndex == 3) {
            chart1 = (
                <PieStatsChart 
                currentTrainee='Trainee 3 - Position 1' 
                position1={this.state.t3Pos1Corr1}
                position2={this.state.t3Pos1Incorr2}
                position3={this.state.t3Pos1Incorr3} />
            );
            chart2 = (
                <PieStatsChart 
                currentTrainee='Trainee 3 - Position 2'
                position1={this.state.t3Pos2Incorr1}
                position2={this.state.t3Pos2Corr2}
                position3={this.state.t3Pos2Incorr3} />
            );
            chart3 = (
                <PieStatsChart 
                currentTrainee='Trainee 3 - Position 3'
                position1={this.state.t3Pos3Incorr1}
                position2={this.state.t3Pos3Incorr2}
                position3={this.state.t3Pos3Corr3} />
            );
        }
    
        return (
            <PositionsDiv>
                <PositionMainDiv>
                    {/* <ScoreDiv>
                        <H4> Position Score: {this.state.totalCorrectPositions} / {this.state.totalPositions} </H4>
                        <H4> {respectiveScore} </H4>
                    </ScoreDiv> */}
                    <ChartDiv>
                        <DropdownDiv>
                            <Select width={120} height={40} onChange={this.onDropdownChange} >
                                    <option value={1}> Trainee 1 </option>
                                    <option value={2}> Trainee 2 </option>
                                    <option value={3}> Trainee 3 </option>
                                </Select>
                        </DropdownDiv>
                        <ChartMainDiv>
                            <IndividualChartDiv>
                                {chart1}
                            </IndividualChartDiv>
                            <IndividualChartDiv>
                                {chart2}
                            </IndividualChartDiv>
                            <IndividualChartDiv>
                                {chart3}
                            </IndividualChartDiv>
                        </ChartMainDiv>
                        
                    </ChartDiv>
                </PositionMainDiv>
            </PositionsDiv>
        )
    }
}

export default PositionsStatsController;
