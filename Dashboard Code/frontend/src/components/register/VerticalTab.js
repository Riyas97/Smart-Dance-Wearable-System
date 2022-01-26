import React, { Component } from 'react';
import { Button, Pane, Tablist, SidebarTab, TextInput } from 'evergreen-ui';
import InputForm from './InputForm';
import ViewAndSubmit from './ViewAndSubmit';
// import './VerticalTab.css';

// how to update nested state properties: https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
// why console.log immediately after setState doesnt show updated value and the componentDidUpdate / async await soln: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately

export class VerticalTab extends Component {

    state = {
        activeIndex: '0',
        tabs: ['Coach', 'Trainee 1', 'Trainee 2', 'Trainee 3', 'View & Submit'],
        allOnSave: false,
        coach: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
        },
        trainee1: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
        },
        trainee2: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
        },
        trainee3: {
            name: '',
            email: '',
            username: '',
            password: '',
            onSave: false,
        }
    }

    onVerticalTabChange = event => {
        console.log('event' + event + typeof event);
        this.setState({
            activeIndex: event,
        })

        console.log(this.state.activeIndex + ' ' + typeof this.state.activeIndex);
    }

    checkForAllSave = async () => {
        if (this.state.coach.onSave && this.state.trainee1.onSave && this.state.trainee2.onSave && this.state.trainee3.onSave) {
            await this.setState({
                allOnSave: true,
            })
        } else {
            await this.setState({
                allOnSave: false,
            })
        }
    }

    onCoachInputFormChange = async (event) => {
        console.log('coach' + JSON.stringify(event));

        if (Object.keys(event).length === 2) {
            console.log('here');
            await this.setState({
                coach: { ...this.state.coach , onSave: event.onSave } });
            await this.checkForAllSave();
        } else {
            await this.setState({
                coach: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
            await this.checkForAllSave();
        }
        console.log(JSON.stringify(this.state));
    }

    onTraineeOneInputFormChange = async (event) => {
        console.log('t1' + JSON.stringify(event));
        if (Object.keys(event).length === 2) {
            await this.setState({
                trainee1: { ...this.state.trainee1 , onSave: event.onSave }});
            await this.checkForAllSave();

        } else {
            await this.setState({
                trainee1: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
            await this.checkForAllSave();
        }
        console.log(JSON.stringify(this.state));
    }

    onTraineeTwoInputFormChange = async (event) => {
        console.log('t2' + JSON.stringify(event));
        if (Object.keys(event).length === 2) {
            await this.setState({
                trainee2: { ...this.state.trainee2 , onSave: event.onSave } });
            await this.checkForAllSave();
        } else {
            await this.setState({
                trainee2: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
            await this.checkForAllSave();
        }
        console.log(JSON.stringify(this.state));
    }

    onTraineeThreeInputFormChange = async (event) => {
        console.log('t3' + JSON.stringify(event));
        if (Object.keys(event).length === 2) {
            await this.setState({
                trainee3: { ...this.state.trainee3 , onSave: event.onSave } });
            await this.checkForAllSave();
        } else {
            await this.setState({
                trainee3: {
                    name: event.name,
                    email: event.email,
                    username: event.username,
                    password: event.password,
                    onSave: event.onSave,
                }
            })
            await this.checkForAllSave();
        }
        console.log(JSON.stringify(this.state));
    }

    onSaveController = event => {
        if (event.index === 0) {
            this.onCoachInputFormChange(event)
        } else if (event.index === 1) {
            this.onTraineeOneInputFormChange(event)
        } else if (event.index === 2) {
            this.onTraineeTwoInputFormChange(event)
        } else if (event.index === 3) {
            this.onTraineeThreeInputFormChange(event)
        }
    }

    onSubmitButtonClicked = event => {
        this.props.onFormSubmit(this.state)
    }
    onNextButtonClicked = event => {
        const newNumber = parseInt(this.state.activeIndex, 10) + 1;
        const newNumberString = newNumber.toString();
        this.setState({
            activeIndex: newNumberString,
        })
        console.log(this.state.activeIndex);
    }

    render() {
        return (
         <Pane display='flex' height={240} backgroundColor='#3c3c3c' elevation={2}  >
             <Tablist marginBottom={30} flexBasis={240} marginRight={24} >
                 {this.state.tabs.map((tab, index) => (
                     <SidebarTab 
                        key={tab}
                        id={tab}
                        onSelect={() => this.setState({ activeIndex: index })}
                        isSelected={index === this.state.activeIndex}
                        aria-controls={`panel-${tab}`}
                        backgroundColor='#494747'
                        marginBottom={16}
                    >
                        <h4 style={{ color: 'white' }}  > {tab} </h4>
                    </SidebarTab>
                 ))}
                 
             </Tablist>
             <Pane  flex="1" >
                {this.state.tabs.map((tab, index) => (
                    <Pane
                        key={tab}
                        id={`panel-${tab}`}
                        role="tabpanel"
                        aria-labelledby={tab}
                        aria-hidden={index !== this.state.activeIndex}
                        display={index === this.state.activeIndex ? 'block' : 'none'}
                    >
                    {index === 4 ? <ViewAndSubmit display={this.state.allOnSave} coach={this.state.coach} trainee1={this.state.trainee1} trainee2={this.state.trainee2} trainee3={this.state.trainee3} onSubmit={this.onSubmitButtonClicked}/>
                     : <InputForm index={index} onInputFormChange={this.onSaveController} />}
                </Pane>
                ))}
            </Pane>
         </Pane>
        )
    }
}

export default VerticalTab
