import React, { Component } from 'react'
import axios from 'axios'
import MembersContainer from './MembersContainer'

class MembersController extends Component {
  state = {}

  constructor(props) {
    super(props)
    axios({
      url: '/handlers.json',
      headers:
      {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content,
      },

    }).then((response) => {
      this.setState({ data: response.data.data })
    })
  }

  render = () => {
    const { data } = this.state
    return (<MembersContainer data={data} />)
  }
}

export default MembersController
