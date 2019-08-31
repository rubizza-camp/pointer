import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { axiosPostRequest, axiosGetRequest, axiosDeleteRequest } from 'utils/axios_helper'
import styled, { createGlobalStyle } from 'styled-components'
import { Spinner } from 'reactstrap'
import Cookies from 'js-cookie'
import * as JWT from 'jwt-decode'
import { Card, SaveButton } from '../items/PetsCards'
import { CardProfile } from '../items/CardProfile'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hind Guntur', sans-serif;
  color: #054231;
  }`


const PetContainer = (props) => {
  const { data, handleDelete } = props
  return (
    <>
      {data.map((c) => (
        <CardProfile
          data={(c == null) ? ({}) : (c.attributes)}
          key={c.attributes.id}
          handleDelete={handleDelete}
        />
      ))}
    </>
  )
}

PetContainer.propTypes = {
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

const Wrapper = styled.div`
width:100%; 
display: flex;
flex-wrap: wrap;
@media only screen and (max-width: 650px) {
   margin: 0 0 25px 0;
   flex-direction: column;
}`

class PetController extends Component {
  state = { data: [], loading: true }

  constructor(props) {
    super(props)
    this.id = JWT(Cookies.get('Authorization')).id
  }

  componentDidMount() {
    axiosGetRequest(`/pet_owners/${this.id}/pets`, {}, (response) => { this.setState({ data: response.data.data || [], loading: false }) })
  }

  addPet = () => {
    this.setState({ loading: true })
    axiosPostRequest(`/pet_owners/${this.id}/pets`, {}, (response) => this.setState(({ data }) => ({ loading: false, data: [...data, response.data.data] })))
  }

  handleDelete = (e) => {
    e.persist()
    axiosDeleteRequest(`/pet_owners/${this.id}/pets/${e.target.id}`, {}, (response) => this.setState({ data: response.data.data }))
  }

  render() {
    const { data, loading } = this.state
    if (loading) return <Spinner color="warning" type="grow" />
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <PetContainer data={data} handleDelete={this.handleDelete} user />
          <Card>
            <SaveButton onClick={this.addPet}>Add a pet</SaveButton>
          </Card>
        </Wrapper>
      </>
    )
  }
}

export default PetController
