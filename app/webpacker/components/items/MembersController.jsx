import React, { Component } from 'react'
import axios from 'axios'
import MembersContainer from './MembersContainer'
import axiosGetRequest from '../../utils/axios_helper'

class MembersController extends Component {
  state = {}

  constructor(props) {
    super(props)
    axiosGetRequest('/handlers.json', {}, (response) => {
      this.setState({ data: response.data.data }))

  }

  render = () => {
    const { data } = this.state
    return (<MembersContainer data={data} />)
  }
}

export default MembersController
