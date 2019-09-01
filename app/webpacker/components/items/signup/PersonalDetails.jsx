// PersonalDetails.jsx
import React, { Component } from 'react'
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation'
import { Alert, Button, Label } from 'reactstrap'
import axios from 'axios'
import getToken from '../../../utils/csrf_helper'


class PersonalDetails extends Component {
  saveAndContinue = () => {
    const url = (this.props.values.role == 'Owner')
      ? '/pet_owners'.concat(`/${this.props.values.userable_id}`)
      : '/handlers'.concat(`/${this.props.values.userable_id}`)
    this.requestData(url)
  }

  requestData = (url) => {
    const SignupPersonalData = new FormData()
    SignupPersonalData.set('name', this.props.values.first_name)
    SignupPersonalData.set('last_name', this.props.values.last_name)
    SignupPersonalData.set('metro', this.props.values.metro)
    SignupPersonalData.set('phone', this.props.values.phone)
    axios({
      method: 'patch',
      url,
      data: { data: Object.fromEntries(SignupPersonalData) },
      headers: { 'X-CSRF-Token': getToken() }
    })
      .then((response) => {
        this.props.nextStep()
      })
      .catch((error) => {
        if (error.response) {
          this.setState({ error: error.response.data.message })
        }
      })
  }

  render() {
    return (
      <AvForm>
        <Alert color="success">
          <h2 className="ui centered">
            Please, enter your personal details:
            </h2>
        </Alert>
        <AvGroup>
          <Label for="first_name">Enter your first name:</Label>
          <AvInput
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First name:"
            onChange={this.props.handleChange('first_name')}
            required
          />
        </AvGroup>
        <AvGroup>
          <Label for="last_name">Enter your last name:</Label>
          <AvInput
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last name:"
            onChange={this.props.handleChange('last_name')}
            required
          />
        </AvGroup>
        <AvGroup>
          <Label for="metro">Enter your metro line:</Label>
          <AvInput
            type="text"
            name="metro"
            id="metro"
            placeholder="Metro line:"
            onChange={this.props.handleChange('metro')}
            required
          />
        </AvGroup>
        <AvGroup>
          <Label for="phone">Enter your phone number:</Label>
          <AvInput
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone number:"
            onChange={this.props.handleChange('phone')}
            required
          />
        </AvGroup>
        <Button onClick={this.saveAndContinue}>Save And Continue</Button>
      </AvForm>
    )
  }
}

export default PersonalDetails
