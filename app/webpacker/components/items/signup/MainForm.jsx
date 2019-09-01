// MainForm.jsx
import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import BasicInfo from './BasicInfo'
import PersonalDetails from './PersonalDetails'

const SignContainer = styled(Container)`
  margin-top: 50px;
`

class MainFormSignUp extends Component {
    state = {
      step: 1,
      email: '',
      password: '',
      password_confirm: '',
      role: '',
      data: '',
      first_name: '',
      last_name: '',
      phone: '',
      metro: '',
      userable_id: '',
    }

    nextStep = () => {
      const { step } = this.state
      this.setState({
        step: step + 1,
      })
    }

    prevStep = () => {
      const { step } = this.state
      this.setState({
        step: step - 1,
      })
    }

    handleChange = input => event => {
      this.setState({ [input]: event.target.value })
    }

    userableId = (type_id) => {
      this.setState({ userable_id: type_id })
    }

    render() {
      const { step } = this.state
      const { email, password, password_confirm, role, data, first_name, last_name, phone, metro, userable_id } = this.state
      const values = { email, password, password_confirm, role, data, first_name, last_name, phone, metro, userable_id }
      switch (step) {
        case 1:
          return (
            <SignContainer>
            <BasicInfo
              userableId={this.userableId}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            </SignContainer>
          )
        case 2:
          return (
            <SignContainer>
              <PersonalDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </SignContainer>
          )
        case 3: 
          return (
            <Alert color="success"><h2 className="ui centered">
            Email with confirmation link has been sent to your email :)
            </h2></Alert>
          )  
      }
    }
}

export default MainFormSignUp
