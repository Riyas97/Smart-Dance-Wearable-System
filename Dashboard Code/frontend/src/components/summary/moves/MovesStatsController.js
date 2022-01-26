import React, { Component } from 'react';
import { MoveHeadlineDiv,
    MoveMainDiv,
    MovesDiv, 
    ChartDiv,
    ScoreDiv,
    DropdownDiv,
    H3,
    H4 } from './MovesStatsStyledComponents';
import { UserContext } from '../../../contexts/UserContext';
import { getMovesStats } from '../../../utils/Analytics';
import PieStatsChart from './PieStatsChart';

import { Select } from 'evergreen-ui';

export class MovesStatsController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST DATA MOVES STATS 1');

        try {
            console.log('POST DATA MOVES STATS 2');
            const moveStats = await getMovesStats();
            console.log('POST DATA MOVES STATS 3');
            await this.setState(prevState => ({
                ...prevState,
                ...moveStats,
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('POST DATA MOVES STATS error', error);
            throw new Error(error);
        }
    }

    onDropdownChange = event => {
        event.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            activeIndex: event.target.value
        }))
    }

    state = {
        activeIndex: 1,
        totalDab: 0,
        moveDabCorrDab: 0,
        moveDabIncorrElbowKick: 0,
        moveDabIncorrListen: 0,
        moveDabIncorrHair: 0,
        moveDabIncorrGun: 0,
        moveDabIncorrPointHigh: 0,
        moveDabIncorrSidepump: 0,
        moveDabIncorrWipeTable: 0,
        totalElbowKick: 0,
        moveElbowKickCorrElbowKick: 0,
        moveElbowKickIncorrDab: 0,
        moveElbowKickIncorrGun: 0,
        moveElbowKickIncorrHair: 0,
        moveElbowKickIncorrPointHigh: 0,
        moveElbowKickIncorrSidepump: 0,
        moveElbowKickIncorrListen: 0,
        moveElbowKickIncorrWipeTable: 0,
        totalHair: 0,
        moveHairCorrHair: 0,
        moveHairIncorrDab: 0,
        moveHairIncorrElbowKick: 0,
        moveHairIncorrGun: 0,
        moveHairIncorrListen: 0,
        moveHairIncorrPointHigh: 0,
        moveHairIncorrSidepump: 0,
        moveHairIncorrWipeTable: 0,
        totalListen: 0,
        moveListenCorrListen: 0,
        moveListenIncorrDab: 0,
        moveListenIncorrElbowKick: 0,
        moveListenIncorrGun: 0,
        moveListenIncorrHair: 0,
        moveListenIncorrPointHigh: 0,
        moveListenIncorrSidepump: 0,
        moveListenIncorrWipeTable: 0,
        totalGun: 0,
        moveGunCorrGun: 0,
        moveGunIncorrDab: 0,
        moveGunIncorrElbowKick: 0,
        moveGunIncorrHair: 0,
        moveGunIncorrListen: 0,
        moveGunIncorrPointHigh: 0,
        moveGunIncorrSidepump: 0,
        moveGunIncorrWipeTable: 0,
        totalSidepump: 0,
        moveSidepumpCorrSidepump: 0,
        moveSidempumpIncorrElbowKick: 0,
        moveSidepumpIncorrDab: 0,
        moveSidepumpIncorrGun: 0,
        moveSidepumpIncorrHair: 0,
        moveSidepumpIncorrListen: 0,
        moveSidepumpIncorrPointHigh: 0,
        moveSidepumpIncorrWipeTable: 0,
        totalPointHigh: 0,
        movePointHighCorrPointHigh: 0,
        movePointHighIncorrDab: 0,
        movePointHighIncorrElbowKick: 0,
        movePointHighIncorrGun: 0,
        movePointHighIncorrHair: 0,
        movePointHighIncorrSidepump: 0,
        movePointHighIncorrListen: 0,
        movePointHighIncorrWipeTable: 0,
        totalWipeTable: 0,
        moveWipeTableCorrWipeTable: 0,
        moveWipeTableIncorrDab: 0,
        moveWipeTableIncorrElbowKick: 0,
        moveWipeTableIncorrGun: 0,
        moveWipeTableIncorrHair: 0,
        moveWipeTableIncorrListen: 0,
        moveWipeTableIncorrPointHigh: 0,
        moveWipeTableIncorrSidepump: 0
    }
    render() {
        let chart;

        if (this.state.activeIndex == 1) {
            chart = (
                <PieStatsChart 
                correctMoveName='Dab'
                incorrectMoveName1='Elbow Kick'
                incorrectMoveName2='Listen'
                incorrectMoveName3='Hair'
                incorrectMoveName4='Side Pump'
                incorrectMoveName5='Point High'
                incorrectMoveName6='Wipe Table'
                incorrectMoveName7='Gun'
                correctMove={this.state.moveDabCorrDab}
                incorrectMove1={this.state.moveDabIncorrElbowKick}
                incorrectMove2={this.state.moveDabIncorrListen}
                incorrectMove3={this.state.moveDabIncorrHair}
                incorrectMove4={this.state.moveDabIncorrSidepump}
                incorrectMove5={this.state.moveDabIncorrPointHigh}
                incorrectMove6={this.state.moveDabIncorrWipeTable}
                incorrectMove7={this.state.moveDabIncorrGun}
                />
            )
        } else if (this.state.activeIndex == 2) {
            chart = (
                <PieStatsChart 
                correctMoveName='Elbow Kick'
                incorrectMoveName1='Dab'
                incorrectMoveName2='Listen'
                incorrectMoveName3='Hair'
                incorrectMoveName4='Side Pump'
                incorrectMoveName5='Point High'
                incorrectMoveName6='Wipe Table'
                incorrectMoveName7='Gun'
                correctMove={this.state.moveElbowKickCorrElbowKick}
                incorrectMove1={this.state.moveElbowKickIncorrDab}
                incorrectMove2={this.state.moveElbowKickIncorrListen}
                incorrectMove3={this.state.moveElbowKickIncorrHair}
                incorrectMove4={this.state.moveElbowKickIncorrSidepump}
                incorrectMove5={this.state.moveElbowKickIncorrPointHigh}
                incorrectMove6={this.state.moveElbowKickIncorrWipeTable}
                incorrectMove7={this.state.moveElbowKickIncorrGun}
                />
            )
        } else if (this.state.activeIndex == 3) {
            chart = (
                <PieStatsChart 
                correctMoveName='Gun'
                incorrectMoveName1='Dab'
                incorrectMoveName2='Listen'
                incorrectMoveName3='Hair'
                incorrectMoveName4='Side Pump'
                incorrectMoveName5='Point High'
                incorrectMoveName6='Wipe Table'
                incorrectMoveName7='Elbow Kick'
                correctMove={this.state.moveGunCorrGun}
                incorrectMove1={this.state.moveGunIncorrDab}
                incorrectMove2={this.state.moveGunIncorrListen}
                incorrectMove3={this.state.moveGunIncorrHair}
                incorrectMove4={this.state.moveGunIncorrSidepump}
                incorrectMove5={this.state.moveGunIncorrPointHigh}
                incorrectMove6={this.state.moveGunIncorrWipeTable}
                incorrectMove7={this.state.moveGunIncorrElbowKick}
                />
            )
        } else if (this.state.activeIndex == 4) {
            chart = (
                <PieStatsChart 
                correctMoveName='Hair'
                incorrectMoveName1='Dab'
                incorrectMoveName2='Listen'
                incorrectMoveName3='Gun'
                incorrectMoveName4='Side Pump'
                incorrectMoveName5='Point High'
                incorrectMoveName6='Wipe Table'
                incorrectMoveName7='Elbow Kick'
                correctMove={this.state.moveHairCorrHair}
                incorrectMove1={this.state.moveHairIncorrDab}
                incorrectMove2={this.state.moveHairIncorrListen}
                incorrectMove3={this.state.moveHairIncorrGun}
                incorrectMove4={this.state.moveHairIncorrSidepump}
                incorrectMove5={this.state.moveHairIncorrPointHigh}
                incorrectMove6={this.state.moveHairIncorrWipeTable}
                incorrectMove7={this.state.moveHairIncorrElbowKick}
                />
            )
        } else if (this.state.activeIndex == 5) {
            chart = (
                <PieStatsChart 
                correctMoveName='Listen'
                incorrectMoveName1='Dab'
                incorrectMoveName2='Hair'
                incorrectMoveName3='Gun'
                incorrectMoveName4='Side Pump'
                incorrectMoveName5='Point High'
                incorrectMoveName6='Wipe Table'
                incorrectMoveName7='Elbow Kick'
                correctMove={this.state.moveListenCorrListen}
                incorrectMove1={this.state.moveListenIncorrDab}
                incorrectMove2={this.state.moveListenIncorrHair}
                incorrectMove3={this.state.moveListenIncorrGun}
                incorrectMove4={this.state.moveListenIncorrSidepump}
                incorrectMove5={this.state.moveListenIncorrPointHigh}
                incorrectMove6={this.state.moveListenIncorrWipeTable}
                incorrectMove7={this.state.moveListenIncorrElbowKick}
                />
            )
        } else if (this.state.activeIndex == 6) {
            chart = (
                <PieStatsChart 
                correctMoveName='Point High'
                incorrectMoveName1='Dab'
                incorrectMoveName2='Hair'
                incorrectMoveName3='Gun'
                incorrectMoveName4='Side Pump'
                incorrectMoveName5='Listen'
                incorrectMoveName6='Wipe Table'
                incorrectMoveName7='Elbow Kick'
                correctMove={this.state.movePointHighCorrPointHigh}
                incorrectMove1={this.state.movePointHighIncorrDab}
                incorrectMove2={this.state.movePointHighIncorrHair}
                incorrectMove3={this.state.movePointHighIncorrGun}
                incorrectMove4={this.state.movePointHighIncorrSidepump}
                incorrectMove5={this.state.movePointHighIncorrListen}
                incorrectMove6={this.state.movePointHighIncorrWipeTable}
                incorrectMove7={this.state.movePointHighIncorrElbowKick}
                />
            )
        } else if (this.state.activeIndex == 7) {
            chart = (
                <PieStatsChart 
                correctMoveName='Side Pump'
                incorrectMoveName1='Dab'
                incorrectMoveName2='Hair'
                incorrectMoveName3='Gun'
                incorrectMoveName4='Point High'
                incorrectMoveName5='Listen'
                incorrectMoveName6='Wipe Table'
                incorrectMoveName7='Elbow Kick'
                correctMove={this.state.moveSidepumpCorrSidepump}
                incorrectMove1={this.state.moveSidepumpIncorrDab}
                incorrectMove2={this.state.moveSidepumpIncorrHair}
                incorrectMove3={this.state.moveSidepumpIncorrGun}
                incorrectMove4={this.state.moveSidepumpIncorrPointHigh}
                incorrectMove5={this.state.moveSidepumpIncorrListen}
                incorrectMove6={this.state.moveSidepumpIncorrWipeTable}
                incorrectMove7={this.state.moveSidepumpIncorrElbowKick}
                />
            )
        } else if (this.state.activeIndex == 8) {
            chart = (
                <PieStatsChart 
                correctMoveName='Wipe Table'
                incorrectMoveName1='Dab'
                incorrectMoveName2='Hair'
                incorrectMoveName3='Gun'
                incorrectMoveName4='Point High'
                incorrectMoveName5='Listen'
                incorrectMoveName6='Side Pump'
                incorrectMoveName7='Elbow Kick'
                correctMove={this.state.moveWipeTableCorrWipeTable}
                incorrectMove1={this.state.moveWipeTableIncorrDab}
                incorrectMove2={this.state.moveWipeTableIncorrHair}
                incorrectMove3={this.state.moveWipeTableIncorrGun}
                incorrectMove4={this.state.moveWipeTableIncorrPointHigh}
                incorrectMove5={this.state.moveWipeTableIncorrListen}
                incorrectMove6={this.state.moveWipeTableIncorrSidepump}
                incorrectMove7={this.state.moveWipeTableIncorrSidepump}
                />
            )
        }
        return (
                <MovesDiv>
                    <MoveMainDiv>
                        {/* <ScoreDiv>
                            {respectiveScore}
                        </ScoreDiv> */}
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

export default MovesStatsController
