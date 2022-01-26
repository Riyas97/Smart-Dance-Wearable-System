import React, { Component } from 'react';
import { SummaryDiv,
    NavbarDiv,
    SummaryMainDiv, 
    MovesDiv, 
    DataDiv, 
    PositionsDiv,
    SummaryStatsDiv,
    IndividualTraineeStatsDiv,
    StatsDiv,
    IndividualChartsDiv,
    MovesSummaryDiv,
    MovesStatsDiv,
    PositionsStatsDiv,
    PositionsSummaryDiv,
    TableDiv } from './SummaryStyledComponents';
import IndividualDataController from './individual-data/IndividualDataController';
import IndividualStatsController from './individual-stats/IndividualStatsController';
import MovesSummaryController from './moves/MovesSummaryController';
import MovesStatsController from './moves/MovesStatsController';
import PositionsSummaryController from './positions/PositionsSummaryController';
import PositionsStatsController from './positions/PositionsStatsController';
import DashboardNavBar from '../navbars/dashboard/DashboardNavBar';

export class Summary extends Component {    

    state = {
        totalMoves: 0,
        totalCorrectMoves: 0,

    }

    onMovesStats = async ({totalMoves, totalCorrectMoves}) => {
        await this.setState(prevState => ({
                ...prevState,
                totalMoves,
                totalCorrectMoves,
                }))
    }

    onPositionsStats = async(positionsStats) => {
        await this.setState(prevState => ({
            ...prevState,
            ...positionsStats,
        }))

    }

    render() {
        console.log('Summary');
        return (
            <SummaryDiv>
                <NavbarDiv>
                    <DashboardNavBar />
                </NavbarDiv>
                <SummaryMainDiv>
                    <DataDiv>
                       
                        <IndividualChartsDiv>
                            <IndividualDataController/>
                        </IndividualChartsDiv>
                        <IndividualTraineeStatsDiv>
                                <IndividualStatsController overallStats={this.state}/>
                        </IndividualTraineeStatsDiv>
                    </DataDiv>

                    <StatsDiv>
                        <SummaryStatsDiv>
                            <MovesDiv>
                                <MovesSummaryDiv>
                                    <MovesSummaryController getMovesStats={this.onMovesStats} />
                                </MovesSummaryDiv>
                                <MovesStatsDiv>
                                    <MovesStatsController />
                                </MovesStatsDiv>
                            </MovesDiv>

                            <PositionsDiv>
                                <PositionsSummaryDiv>
                                    <PositionsSummaryController getPositionsStats={this.onPositionsStats} />
                                </PositionsSummaryDiv>
 
                                <PositionsStatsDiv>
                                    <PositionsStatsController />
                                </PositionsStatsDiv> 
                            </PositionsDiv>

                        </SummaryStatsDiv>

                    </StatsDiv>

                    
                </SummaryMainDiv>

            </SummaryDiv>
        )
    }
}

export default Summary
