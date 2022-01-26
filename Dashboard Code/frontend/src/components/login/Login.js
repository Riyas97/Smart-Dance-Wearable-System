import React, { Component } from 'react';

import { LoginDiv, NavBarDiv, MainDiv, ContentDiv, LoginMainFormDiv, SideContentDiv,
    LoginH2Div, LoginH1, LoginFormDiv, IndividualField, LoginH2,
    GIFDiv, Video, LoginH1Div, LoginAttemptFailedDiv, LoginAttemptFailedText } from './LoginStyledComponents';
import LoginAndRegisterNavBar from '../navbars/login-register/LoginAndRegisterNavBar';
import { TextInputField, Button } from 'evergreen-ui';
import { login } from '../../utils/Auth';
import { UserContext } from '../../contexts/UserContext';
import video from './the_office.mp4';

export class Login extends Component {
    static contextType = UserContext;

    state = {
        email: '',
        password: '',
        onSave: false,
        onLoginAttemptFailed: false
    }

    async handleLoginProcess() {
        const email = this.state.email;
        const password = this.state.password;
        const { user, handleUser } = this.context;

        // console.log('CONTEXT 1', this.context);
        // console.log('LOGIN STATE', this.state);
        await handleUser({ ...user, isFetching: true });
        try {
            // console.log('CONTEXT 2', this.context);
            const {role, success} = await login({ email, password });
            // console.log(role);
            // console.log('CONTEXT 3', this.context);

            //console.log('SUCCESS ', success );
            if (success) {
                await handleUser({
                    ...user,
                    email,
                    role,
                    isAuth: true,
                    isFetching: true,
                });
            } else {
                await this.setState(prevState => ({
                    ...prevState,
                    onLoginAttemptFailed: true
                }))
            }
            
            // console.log('CONTEXT 4', this.context);
            // console.log('LOCAL STORAGE ', getAccessToken(), getName());

        } catch {
            await handleUser({ ...user, isAuth: false, isFetching: false });
        }
    }

    onSubmitButtonClicked = async (event) => {
        event.preventDefault();
        console.log('Login Page Submit button clicked');
        await this.setState({ 
            onSave: true,
        });
        console.log(JSON.stringify(this.state));
        await this.handleLoginProcess();
    }

    render() {

        return (
            <LoginDiv>
                <LoginAndRegisterNavBar />
                <MainDiv>
                    <ContentDiv>
                        <LoginMainFormDiv>
                            <LoginH1Div>
                                <LoginH1> Login </LoginH1>
                            </LoginH1Div>

                            <LoginFormDiv>
                                <IndividualField>
                                    <TextInputField
                                        label="Email"
                                        placeholder="Email" 
                                        margin='auto' 
                                        required 
                                        isInvalid={this.state.onLoginAttemptFailed ? true : false }
                                        validationMessage={this.state.onLoginAttemptFailed ? 'Email may or may not be correct.' : null} 
                                        width={400} 
                                        onChange={e => this.setState({ email: e.target.value, onLoginAttemptFailed: false })} />
                                </IndividualField>

                                <IndividualField>
                                    <TextInputField 
                                        label="Password"
                                        placeholder="Password" 
                                        margin='auto' 
                                        required 
                                        validationMessage={this.state.onLoginAttemptFailed ? 'Password may or may not be correct.' : null} 
                                        isInvalid={this.state.onLoginAttemptFailed ? true : false } 
                                        width={400} 
                                        onChange={e => this.setState({ password: e.target.value, onLoginAttemptFailed: false })} />
                                </IndividualField>

                                <IndividualField>
                                    <Button onClick={this.onSubmitButtonClicked} >Submit</Button>
                                </IndividualField>
                                
                            </LoginFormDiv>
                        </LoginMainFormDiv>
                        <SideContentDiv>
                            <LoginH2Div>
                                <LoginH2> Cant wait to dance like these guys?  </LoginH2>
                            </LoginH2Div>
                            <GIFDiv>
                                <Video autoPlay loop muted src={video} type='video/mp4' />
                            </GIFDiv>

                        </SideContentDiv>
                    </ContentDiv>
                </MainDiv>
            </LoginDiv>
        )
    }
}

export default Login
