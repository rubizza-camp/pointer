import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'reactstrap'
import Contacts from '../items/Contacts'

class ContactsPage extends Component {
  render() {
    return (
      <Container>
        <Contacts />
      </Container>
    )
  }
}

export default ContactsPage
