// Auth.jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import { Alert, Button, Label, FormGroup, Input } from 'reactstrap'
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation'
import styled from 'styled-components'
import axios from 'axios'
import Cookies from 'js-cookie'
import Errors from './Errors'
import setAuthorizationToken from '../../../utils/set_auth_token'
import getToken from '../../../utils/csrf_helper'

const AuthContainer = styled(Container)`
  margin-top: 50px;
`

class Auth extends Component {
    saveAndContinue = () => {
      this.requestData()
      this.form = React.createRef()
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
        headers: { 'Content-Type': 'multipart/form-data', 'X-CSRF-Token': getToken() } })
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
        <AuthContainer>
          <Alert color="success">
            <h2 className="ui centered">Please, enter your login and password</h2>
          </Alert>
          <Errors data={this.state} />
          <AvForm onValidSubmit={this.saveAndContinue} ref={this.form}>
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
                name="password"
                id="password"
                placeholder="Your password"
                onChange={this.props.handleChange('password')}
                required
              />
            </AvGroup>
            <FormGroup check>
              <Label check>
                <Input onChange={this.props.handleChange('remember_me')} type="checkbox" />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" size="lg" color="primary">Login</Button>
          </AvForm>
        </AuthContainer>
      )
    }
}

Auth.propTypes = {
  setAuth: PropTypes.func.isRequired,
}

export default Auth
