// MainForm.jsx
import React, { Component } from 'react';
import Auth from './Auth';

class MainFormSignIn extends Component {
    state = {
        email: '',
        password: '',
        remember_me: 0
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const { email, password, remember_me } = this.state;
        const values = { email, password, remember_me };
    return <Auth
                handleChange = {this.handleChange}
                values={values}
            />
    }
}

export default MainFormSignIn;