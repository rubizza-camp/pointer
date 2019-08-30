// MainForm.jsx
import React, { Component } from 'react'
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

    render() {
      const { step } = this.state
      const { email, password, password_confirm, role, data } = this.state
      const values = { email, password, password_confirm, role, data }
      switch (step) {
        case 1:
          return (
            <SignContainer>
            <BasicInfo
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
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </SignContainer>
          )
      }
    }
}

export default MainFormSignUp
