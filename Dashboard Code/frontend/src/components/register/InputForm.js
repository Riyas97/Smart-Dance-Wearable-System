import { TextInputField, Button, ArrowRightIcon, EditIcon, SavedIcon, TextInput } from 'evergreen-ui';
import React, { Component } from 'react';
import { InputFormDiv,
    TextFieldsDiv,
    ButtonsDiv } from './InputFormStyledComponents';

export class InputForm extends Component {
    state = {
        onSave: false,
        name: '',
        email: '',
        username: '',
        password: '',
    }
    onSaveButtonClicked = event => {
        event.preventDefault();
        console.log('save button clicked ' + this.props.index);
        this.setState({ 
            onSave: true,
        })
        console.log(JSON.stringify(this.state));
        this.props.onInputFormChange({
            index: this.props.index,
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            onSave: true,
        })
    }

    onEditButtonClicked = event => {
        event.preventDefault();
        console.log('edit button clicked ' + this.props.index);
        this.setState({ 
            onSave: false,
        });
        console.log(JSON.stringify(this.state));
        this.props.onInputFormChange({
            index: this.props.index,
            onSave: false,
        })
    }

    onNextButtonClicked = event => {
        event.preventDefault();
        console.log('next button clicked ' + this.props.index);
    }

    render() {
        return (
            <InputFormDiv>
                <TextFieldsDiv>
                    <TextInputField placeholder='Name' marginTop={6} marginBottom={6} inputWidth={400} disabled={this.state.onSave} value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
                    <TextInputField placeholder='Email' marginBottom={6} disabled={this.state.onSave} value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                    <TextInputField placeholder='Username' marginBottom={6} disabled={this.state.onSave} value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                    <TextInputField placeholder='Password' marginBottom={6} disabled={this.state.onSave} value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                </TextFieldsDiv>
                <ButtonsDiv>
                    <Button appearance='primary' marginRight={30} onClick={this.onSaveButtonClicked} iconAfter={SavedIcon}> Save </Button>
                    <Button appearance='primary' marginRight={30} onClick={this.onEditButtonClicked} iconAfter={EditIcon} > Edit </Button>
                    <Button appearance='primary' marginRight={30} onClick={this.onNextButtonClicked} iconAfter={ArrowRightIcon}> Next </Button>
                </ButtonsDiv>
               
                
            </InputFormDiv>
        )
    }
}

export default InputForm




