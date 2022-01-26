import React, { Component } from 'react';
import { getDataSummary } from '../../../utils/Analytics';
import { UserContext } from '../../../contexts/UserContext';
import { 
    MainDiv,
    HeadlineDiv,
    H3,
    DropDownDiv } from './IndividualDataControllerStyledComponents';
import Individual from './Individual';
import { Select } from 'evergreen-ui';

export class IndividualDataController extends Component {
    static contextType = UserContext;

    async componentDidMount() {
        const { user, handleUser } = this.context;
        await handleUser({ ...user, isFetching: true });
        console.log('POST DATA 1');

        try {
            console.log('POST DATA 2');
            const dataSummary = await getDataSummary();
            console.log('POST DATA 3');
            await this.setState(prevState => ({
                ...prevState,
                totalCorrectMoves: dataSummary.totalCorrectMoves,
                totalCorrectPositions: dataSummary.totalCorrectPositions,
                totalNoMoves: dataSummary.totalNoMoves,
                traineeOneTimestamp: dataSummary.traineeOneTimestamp,
                traineeOneAccx: dataSummary.traineeOneAccx,
                traineeOneAccy: dataSummary.traineeOneAccy,
                traineeOneAccz: dataSummary.traineeOneAccz,
                traineeOneGccx: dataSummary.traineeOneGccx,
                traineeOneGccy: dataSummary.traineeOneGccy,
                traineeOneGccz: dataSummary.traineeOneGccz,
                traineeTwoTimestamp: dataSummary.traineeTwoTimestamp,
                traineeTwoAccx: dataSummary.traineeTwoAccx,
                traineeTwoAccy: dataSummary.traineeTwoAccy,
                traineeTwoAccz: dataSummary.traineeTwoAccz,
                traineeTwoGccx: dataSummary.traineeTwoGccx,
                traineeTwoGccy: dataSummary.traineeTwoGccy,
                traineeTwoGccz: dataSummary.traineeTwoGccz,
                traineeThreeTimestamp: dataSummary.traineeThreeTimestamp,
                traineeThreeAccx: dataSummary.traineeThreeAccx,
                traineeThreeAccy: dataSummary.traineeThreeAccy,
                traineeThreeAccz: dataSummary.traineeThreeAccz,
                traineeThreeGccx: dataSummary.traineeThreeGccx,
                traineeThreeGccy: dataSummary.traineeThreeGccy,
                traineeThreeGccz: dataSummary.traineeThreeGccz,
                }))
            await handleUser({ ...user, isFetching: false });
        } catch (error) {
            console.log('Post dashboard error', error);
            throw new Error(error);
        }
    }

    state = {
        currentTrainee: 1,
        traineeOneTimestamp: [],
        traineeOneAccx: [],
        traineeOneAccy: [],
        traineeOneAccz: [],
        traineeOneGccx: [],
        traineeOneGccy: [],
        traineeOneGccz: [],
        traineeTwoTimestamp: [],
        traineeTwoAccx: [],
        traineeTwoAccy: [],
        traineeTwoAccz: [],
        traineeTwoAccz: [],
        traineeTwoGccx: [],
        traineeTwoGccy: [],
        traineeTwoGccz: [],
        traineeThreeTimestamp: [],
        traineeThreeAccx: [],
        traineeThreeAccy: [],
        traineeThreeAccz: [],
        traineeThreeGccx: [],
        traineeThreeGccy: [],
        traineeThreeGccz: [],
    };

    onDropdownChange = async (event) => {
        event.preventDefault();
        await this.setState(prevState => ({
            ...prevState,
            currentTrainee: event.target.value
        }))
        console.log(this.state.currentTrainee);
    }
    render() {
        let individual; 

        if (this.state.currentTrainee == 1) {
            individual = (
                <Individual 
                    name='Brandon'
                    no='1'
                    timestamp={this.state.traineeOneTimestamp} 
                    accx={this.state.traineeOneAccx} 
                    accy={this.state.traineeOneAccy}
                    accz={this.state.traineeOneAccz}
                    gccx={this.state.traineeOneGccx}
                    gccy={this.state.traineeOneGccy}
                    gccz={this.state.traineeOneGccz}
                />
            )
        } else if (this.state.currentTrainee == 2) {
            individual = (
                <Individual
                    name='Riyas'
                    no='2'
                    timestamp={this.state.traineeTwoTimestamp}
                    accx={this.state.traineeTwoAccx}
                    accy={this.state.traineeTwoAccy}
                    accz={this.state.traineeTwoAccz}
                    gccx={this.state.traineeTwoGccx}
                    gccy={this.state.traineeTwoGccy}
                    gccz={this.state.traineeTwoGccz}
                />
            )
        } else if (this.state.currentTrainee == 3) {
            individual = (
                <Individual
                    name='Ting Wei'
                    no='3'
                    timestamp={this.state.traineeThreeTimestamp}
                    accx={this.state.traineeThreeAccx}
                    accy={this.state.traineeThreeAccy}
                    accz={this.state.traineeThreeAccz}
                    gccx={this.state.traineeThreeGccx}
                    gccy={this.state.traineeThreeGccy}
                    gccz={this.state.traineeThreeGccz}
                />
            )
        }
    
        return (
            <MainDiv>
                <HeadlineDiv>
                    <H3> Data </H3>
                </HeadlineDiv>
                <DropDownDiv>
                    <Select width={240} height={40} marginBottom={20} onChange={this.onDropdownChange} >
                        <option value={1}> Trainee 1 </option>
                        <option value={2}> Trainee 2 </option>
                        <option value={3}> Trainee 3 </option>
                    </Select>
                </DropDownDiv>
                {individual}
            </MainDiv>
        )
    }
}

export default IndividualDataController
