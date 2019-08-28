// MainForm.jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auth from './Auth'

class MainFormSignIn extends Component {
    state = {
        email: '',
        password: '',
        remember_me: 0
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { email, password, remember_me } = this.state
        const { setAuth } = this.props
        const values = { email, password, remember_me }
        return <Auth 
            setAuth={setAuth}
            handleChange={this.handleChange}
            values={values}
        />
    }
}

MainFormSignIn.propTypes = {
    setAuth: PropTypes.func.isRequired,
}

export default MainFormSignIn;