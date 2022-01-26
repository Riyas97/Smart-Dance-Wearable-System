import React, { Component } from 'react';
import { ViewAndSubmitDiv, 
    InfoBoxDiv,
    SubmitButtonDiv,
    PleaseSaveDiv,
    WhiteH1,
    WhiteH4,
    WhiteLine } from './ViewAndSubmitStyledComponents';
import { Button, Text } from 'evergreen-ui';


export class ViewAndSubmit extends Component {
    onSubmitButtonClicked = event => {
        console.log('Submit button in View & Submit page clicked.');
        event.preventDefault();
        this.props.onSubmit();
    }
    render() {
        let content;

        if (this.props.display) {
            content = (
                <React.Fragment>
                    <InfoBoxDiv>
                        <p>
                            <WhiteH4> Coach </WhiteH4>
                            <br />
                            <Text color="white">  Name: {this.props.coach.name} </Text>
                            <br/>
                            <Text color="white"> Email: {this.props.coach.email}  </Text>
                            <br/>
                            <Text color="white"> Username: {this.props.coach.username}  </Text>
                            <br/>
                            <Text color="white"> Password: {this.props.coach.password}  </Text>                            
                        </p>
                    </InfoBoxDiv>
                    
                    <InfoBoxDiv>
                        <p>
                            <WhiteH4> Trainee 1 </WhiteH4>
                            <br />
                            <Text color="white">  Name: {this.props.trainee1.name} </Text>
                            <br/>
                            <Text color="white"> Email: {this.props.trainee1.email}  </Text>
                            <br/>
                            <Text color="white"> Username: {this.props.trainee1.username}  </Text>
                            <br/>
                            <Text color="white"> Password: {this.props.trainee1.password}  </Text>                            
                        </p>
                    </InfoBoxDiv>

                    <InfoBoxDiv>
                        <p>
                            <WhiteH4> Trainee 2 </WhiteH4>
                            <br />
                            <Text color="white">  Name: {this.props.trainee2.name} </Text>
                            <br/>
                            <Text color="white"> Email: {this.props.trainee2.email}  </Text>
                            <br/>
                            <Text color="white"> Username: {this.props.trainee2.username}  </Text>
                            <br/>
                            <Text color="white"> Password: {this.props.trainee2.password}  </Text>                            
                        </p>

                    </InfoBoxDiv>

                    <InfoBoxDiv>

                        <p>
                            <WhiteH4> Trainee 3 </WhiteH4>
                            <br />
                            <Text color="white">  Name: {this.props.trainee3.name} </Text>
                            <br/>
                            <Text color="white"> Email: {this.props.trainee3.email}  </Text>
                            <br/>
                            <Text color="white"> Username: {this.props.trainee3.username}  </Text>
                            <br/>
                            <Text color="white"> Password: {this.props.trainee3.password}  </Text>                            
                        </p>
                    </InfoBoxDiv>

                    <SubmitButtonDiv>
                        <Button appearance='primary' marginRight={30} onClick={this.onSubmitButtonClicked}> Submit </Button>
                    </SubmitButtonDiv>


                </React.Fragment>
            )
        } else {
            content = (
                <PleaseSaveDiv>
                    <WhiteH1>
                        Please save all other sections before proceeding
                    </WhiteH1>
                </PleaseSaveDiv>
            )
        }
 
        return (
            <ViewAndSubmitDiv>  {content} </ViewAndSubmitDiv>
        )
    }
}

export default ViewAndSubmit
