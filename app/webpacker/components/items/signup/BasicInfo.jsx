// BasicInfo.jsx
import React, { Component } from 'react'
import { Alert, Button, Label, Spinner } from 'reactstrap'
import { AvForm, AvGroup, AvInput, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation'
import axios from 'axios'
import Errors from './Errors'
import getToken from '../../../utils/csrf_helper'


class UserDetails extends Component {
    state = {
      error: null,
    }

    saveAndContinue = () => {
      console.log(this.props.values)
      this.requestData()
      this.form.reset()
    }

    requestData = () => {
      const SignupData = new FormData()
      SignupData.set('user[email]', this.props.values.email)
      SignupData.set('user[password]', this.props.values.password)
      SignupData.set('user[password_confirmation]', this.props.values.password_confirm)
      SignupData.set('user[role]', this.props.values.role)
      SignupData.set('commit', 'Sign up')
      axios({
        method: 'post',
        url: '/users.json',
        data: SignupData,
        headers: { 'Content-Type': 'multipart/form-data', 'X-CSRF-Token': getToken() },
      })
        .then((response) => {
          // this.props.nextStep()
        })
        .catch((error) => {
          if (error.response) {
            this.setState({ error: error.response.data.message })
          }
        })
    }

    render() {
      return (
        <div>
          <Alert color="success">
            <h2 className="ui centered">
Welcome to the registration page!
              <br />
Please, enter user details
            </h2>
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
            <AvGroup>
              <Label for="password_confirm">Password Confirmation:</Label>
              <AvInput
                type="password"
                name="pass2"
                id="password_confirm"
                placeholder="Password Confirmation"
                onChange={this.props.handleChange('password_confirm')}
                required
              />
            </AvGroup>
            <AvGroup>
              <Label for="choose_role">Choose your role:</Label>
              <AvRadioGroup inline name="Choose Role" id='choose_role' required>
                 <AvRadio onChange={this.props.handleChange('role')} customInput label="Owner" value="Owner" />
                 <AvRadio onChange={this.props.handleChange('role')} customInput label="Handler" value="Handler" />
              </AvRadioGroup>
            </AvGroup>
            <Button type="submit" size="lg" color="primary">Next</Button>
          </AvForm>
        </div>
      )
    }
}

export default UserDetails
