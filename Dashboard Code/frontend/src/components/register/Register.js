import React, { Component } from 'react'
import VerticalTab from './VerticalTab';
import { RegisterDiv,
    RegisterMainDiv, 
    HeaderTabDiv, 
    HeaderH1, 
    InfoP, 
    VerticalTabDiv,
    RegisterOutsideDiv,
    RegisterContentDiv
} from './RegisterStyledComponents';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import { register, test, getAccessToken, getName } from '../../utils/Auth';
import { UserContext } from '../../contexts/UserContext';

export class NewRegister extends Component {
    static contextType = UserContext;

    state = { 
        coach: {
            role: 'coach',
        },
        trainee1: {
            role: 'trainee',
        },
        trainee2: {
            role: 'trainee',
        },
        trainee3: {
            role: 'trainee',
        },
    }

    registerGroup = async () => {
        const { user, handleUser } = this.context;
        // console.log('CONTEXT 1', this.context);
        await handleUser({ ...user, isFetching: true });
        try {
            // console.log('CONTEXT 2', this.context);
            await register({ ...this.state });
            // console.log('CONTEXT 3', this.context);
            await handleUser({
                ...user,
                email: this.state.coach.email,
                role: this.state.coach.role,
                isAuth: true,
                isFetching: true,
            });
            // console.log('CONTEXT 4', this.context);
            // console.log('LOCAL STORAGE ', getAccessToken(), getName());

        } catch {
            await handleUser({ ...user, isAuth: false, isFetching: false });
        }
        // await test();
    }

    accountForSubmittedForm = async (input) => {
        console.log(JSON.stringify(input));

        await this.setState({
            coach: { ...this.state.coach , 
                name: input.coach.name,
                email: input.coach.email,
                username: input.coach.username,
                password: input.coach.password }
        })

        await this.setState({
            trainee1: { ...this.state.trainee1 , 
                name: input.trainee1.name,
                email: input.trainee1.email,
                username: input.trainee1.username,
                password: input.trainee1.password }
        })

        await this.setState({
            trainee2: { ...this.state.trainee2 , 
                name: input.trainee2.name,
                email: input.trainee2.email,
                username: input.trainee2.username,
                password: input.trainee2.password }
        })

        await this.setState({
            trainee3: { ...this.state.trainee3 , 
                name: input.trainee3.name,
                email: input.trainee3.email,
                username: input.trainee3.username,
                password: input.trainee3.password }
        })

        await this.registerGroup();
        console.log('registration finished' + JSON.stringify(this.state));
    }
    render() {
        return (
            <RegisterDiv>
                    <LoginAndRegisterNavBar />
                    <RegisterMainDiv>
                        <RegisterOutsideDiv>
                            <RegisterContentDiv>
                                <HeaderTabDiv>
                                    <HeaderH1> Registration </HeaderH1>
                                    <InfoP> 
                                    Please be informed that only coaches can register themselves and their trainees into the system. 
                                            <br></br>
                                            <br></br>
                                    Trainees who wish to use DanceEdge must contact their coach to register the group on their behalf.
                                    </InfoP>
                                </HeaderTabDiv>
                                <VerticalTabDiv>
                                    <VerticalTab onTabChange={this.accountForTabChange} onFormSubmit={this.accountForSubmittedForm}/>
                                </VerticalTabDiv>
                            </RegisterContentDiv>
                        </RegisterOutsideDiv>
                    </RegisterMainDiv>
               
            </RegisterDiv>
        )
    }
}

export default NewRegister
