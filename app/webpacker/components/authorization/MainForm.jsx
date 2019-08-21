// MainForm.jsx
import React, { Component } from 'react';
import Auth from './Auth';

class MainForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const { email, password } = this.state;
        const values = { email, password };
    return <Auth
                handleChange = {this.handleChange}
                values={values}
            />
    }
}

export default MainForm;