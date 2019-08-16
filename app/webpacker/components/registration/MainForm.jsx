// MainForm.jsx
import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import PersonalDetails from './PersonalDetails';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        email: '',
        password: '',
        password_confirm: '',
        role: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { email, password, password_confirm, role } = this.state;
        const values = { email, password, password_confirm, role };
        switch(step) {
        case 1:
            return <BasicInfo
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Success />
        }
    }
}

export default MainForm;