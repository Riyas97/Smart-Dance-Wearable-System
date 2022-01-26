import React, { Component } from 'react';
import { MoveHeadlineDiv,
    MoveMainDiv,
    MovesDiv, 
    ChartDiv,
    ScoreDiv,
    DropdownDiv,
    H3,
    H4 } from './MovesSummaryControllerStyledComponents';
import { UserContext } from '../../../contexts/UserContext';
import { getMovesSummary } from '../../../utils/Analytics';
import PieSummaryChart from './PieSummaryChart';
import { Select } from 'evergreen-ui';

export class MovesSummaryController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST MOVES SUMMARY 1');

        try {
            console.log('POST MOVES SUMMARY 2');
            const movesSummary = await getMovesSummary();
            console.log('POST MOVES SUMMARY 3');
            await this.setState(prevState => ({
                ...prevState,
                totalMoves: movesSummary.totalMoves,
                totalCorrectMoves: movesSummary.totalCorrectMoves,
                totalGun: movesSummary.totalGun,
                totalGunCorrect: movesSummary.totalGunCorrect,
                totalGunIncorrect: movesSummary.totalGunIncorrect,
                totalHair: movesSummary.totalHair,
                totalHairCorrect: movesSummary.totalHairCorrect,
                totalHairIncorrect: movesSummary.totalHairIncorrect,
                totalSidepump: movesSummary.totalSidepump,
                totalSidepumpCorrect: movesSummary.totalSidepumpCorrect,
                totalSidepumpIncorrect: movesSummary.totalSidepumpIncorrect,
                totalDab: movesSummary.totalDab,
                totalDabCorrect: movesSummary.totalDabCorrect,
                totalDabIncorrect: movesSummary.totalDabIncorrect,
                totalElbowKick: movesSummary.totalElbowKick,
                totalElbowKickCorrect: movesSummary.totalElbowKickCorrect,
                totalElbowKickIncorrect: movesSummary.totalElbowKickIncorrect,
                totalListen: movesSummary.totalListen,
                totalListenCorrect: movesSummary.totalListenCorrect,
                totalListenIncorrect: movesSummary.totalListenIncorrect,
                totalWipeTable: movesSummary.totalWipeTable,
                totalWipeTableCorrect: movesSummary.totalWipeTableCorrect,
                totalWipeTableIncorrect: movesSummary.totalWipeTableIncorrect,
                totalPointHigh: movesSummary.totalPointHigh,
                totalPointHighCorrect: movesSummary.totalPointHighCorrect,
                totalPointHighIncorrect: movesSummary.totalPointHighIncorrect
                }))
            this.props.getMovesStats({ 
                totalMoves: movesSummary.totalMoves, 
                totalCorrectMoves: movesSummary.totalCorrectMoves});
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('Post MOVES SUMMARY error', error);
            throw new Error(error);
        }
    }

    state = {
        currentTrainee: 1,
        totalMoves: 0,
        totalCorrectMoves: 0,
        totalGun: 0,
        totalGunCorrect: 0,
        totalGunIncorrect: 0,
        totalHair: 0,
        totalHairCorrect: 0,
        totalHairIncorrect: 0,
        totalSidepump: 0,
        totalSidepumpCorrect: 0,
        totalSidepumpIncorrect: 0,
        totalDab: 0,
        totalDabCorrect: 0,
        totalDabIncorrect: 0,
        totalElbowKick: 0,
        totalElbowKickCorrect: 0,
        totalElbowKickIncorrect: 0,
        totalListen: 0,
        totalListenCorrect: 0,
        totalListenIncorrect: 0,
        totalWipeTable: 0,
        totalWipeTableCorrect: 0,
        totalWipeTableIncorrect: 0,
        totalPointHigh: 0,
        totalPointHighCorrect: 0,
        totalPointHighIncorrect: 0,
    };

    onDropdownChange = event => {
        event.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            currentTrainee: event.target.value
        }))
    }
    render() {

        let chart;
        let respectiveScore; 

        console.log('POST DATA SUMMARY MOVES ', this.state);
        
        if (this.state.currentTrainee == 1) {
            chart = (
                <PieSummaryChart name='Dab' totalCorrect={this.state.totalDabCorrect} totalIncorrect={this.state.totalDabIncorrect} />
            );
            respectiveScore = `Dab Score: ${this.state.totalDabCorrect} / ${this.state.totalDab}`;

        } else if (this.state.currentTrainee == 2) {
            chart = (
                <PieSummaryChart name='Elbow Kick' totalCorrect={this.state.totalElbowKickCorrect} totalIncorrect={this.state.totalElbowKickIncorrect} />
            );
            respectiveScore = `Elbow Kick Score: ${this.state.totalElbowKickCorrect} / ${this.state.totalElbowKick}`;

        } else if (this.state.currentTrainee == 3) {
            chart = (
                <PieSummaryChart name='Gun' totalCorrect={this.state.totalGunCorrect} totalIncorrect={this.state.totalGunIncorrect} />
            );
            respectiveScore = `Gun Score: ${this.state.totalGunCorrect} / ${this.state.totalGun}`;

        } else if (this.state.currentTrainee == 4) {
            chart = (
                <PieSummaryChart name='Hair' totalCorrect={this.state.totalHairCorrect} totalIncorrect={this.state.totalHairIncorrect} />
            );
            respectiveScore = `Hair Score: ${this.state.totalHairCorrect} / ${this.state.totalHair}`;

        } else if (this.state.currentTrainee == 5) {
            chart = (
                <PieSummaryChart name='Listen' totalCorrect={this.state.totalListenCorrect} totalIncorrect={this.state.totalListenIncorrect} />
            );
            respectiveScore = `Listen Score: ${this.state.totalListenCorrect} / ${this.state.totalListen}`;

        } else if (this.state.currentTrainee == 6) {
            chart = (
                <PieSummaryChart name='Point High' totalCorrect={this.state.totalPointHighCorrect} totalIncorrect={this.state.totalPointHighIncorrect} />
            );
            respectiveScore = `Point High Score: ${this.state.totalPointHighCorrect} / ${this.state.totalPointHigh}`;

        } else if (this.state.currentTrainee == 7) {
            chart = (
                <PieSummaryChart name='Side Pump' totalCorrect={this.state.totalSidepumpCorrect} totalIncorrect={this.state.totalSidepumpIncorrect} />
            );
            respectiveScore = `Side Pump Score: ${this.state.totalSidepumpCorrect} / ${this.state.totalSidepump}`;

        } else if (this.state.currentTrainee == 8) {
            chart = (
                <PieSummaryChart name='Wipe Table' totalCorrect={this.state.totalWipeTableCorrect} totalIncorrect={this.state.totalWipeTableIncorrect} />
            );
            respectiveScore = `Wipe Table Score: ${this.state.totalWipeTableCorrect} / ${this.state.totalWipeTable}`;
        }

        return (
            <MovesDiv>
                <MoveHeadlineDiv>
                    <H3> Dance Moves Stats </H3>
                </MoveHeadlineDiv>
                <MoveMainDiv>
                    <ScoreDiv>
                        {/* <H3> Total Score: {this.state.totalCorrectMoves} / {this.state.totalMoves} </H3> */}
                        <H4> Total Score: {this.state.totalCorrectMoves} / {this.state.totalMoves} </H4>
                        <H4> {respectiveScore} </H4>
                    </ScoreDiv>
                    <ChartDiv>
                        <DropdownDiv>
                            <Select width={120} height={40} onChange={this.onDropdownChange} >
                                <option value={1}> Dab </option>
                                <option value={2}> Elbow Kick </option>
                                <option value={3}> Gun </option>
                                <option value={4}> Hair </option>
                                <option value={5}> Listen </option>
                                <option value={6}> Point High </option>
                                <option value={7}> Side Pump </option>
                                <option value={8}> Wipe Table </option>
                            </Select>
                        </DropdownDiv>
                        {chart}
                    </ChartDiv>
                </MoveMainDiv>
            </MovesDiv>
        )
    }
}

export default MovesSummaryController;
