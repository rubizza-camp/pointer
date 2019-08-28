// Auth.jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Label, FormGroup, Input } from 'reactstrap'
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation'
import axios from 'axios'
import Cookies from 'js-cookie'
import Errors from './Errors'
import setAuthorizationToken from '../../../utils/set_auth_token'


class Auth extends Component {
    saveAndContinue = () => {
      this.requestData()
      this.form.reset()
    }

    requestData = () => {
      const AuthData = new FormData()
      AuthData.set('user[email]', this.props.values.email)
      AuthData.set('user[password]', this.props.values.password)
      AuthData.set('user[remember_me]', this.props.values.remember_me)
      AuthData.set('commit', 'Log in')
      axios({
        method: 'post',
        url: '/users/sign_in.json',
        data: AuthData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
      })
        .then((response) => {
          Cookies.set('Authorization', response.headers.authorization)
          setAuthorizationToken()
          const { setAuth } = this.props
          setAuth(true)
        })
        .catch((error) => {
          if (error.response) {
            this.setState({ error: error.response.data })
            console.log(error.response.data)
          }
        })
    }

    render() {
      return (
        <div>
          <Alert color="success">
            <h2 className="ui centered">Please, enter your login and password</h2>
          </Alert>
          <Errors data={this.state} />
          <AvForm onValidSubmit={this.saveAndContinue} ref={c => (this.form = c)}>
            <AvGroup>
              <Label for="email">Email:</Label>
              <AvInput
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={this.props.handleChange('email')}
                required
              />
            </AvGroup>
            <AvGroup>
              <Label for="password">Password:</Label>
              <AvInput
                type="password"
                name="pass1"
                id="password"
                placeholder="Your password"
                onChange={this.props.handleChange('password')}
                required
              />
            </AvGroup>
            <FormGroup check>
              <Label check>
                <Input onChange={this.props.handleChange('remember_me')} type="checkbox" />
                {' '}
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" size="lg" color="primary">Login</Button>
          </AvForm>
        </div>
      )
    }
}

Auth.propTypes = {
  setAuth: PropTypes.func.isRequired,
}

export default Auth
