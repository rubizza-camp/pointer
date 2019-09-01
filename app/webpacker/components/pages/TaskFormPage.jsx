import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import DatePicker from '../items/DatePicker'

const PageTitle = styled.p`
  margin: 70px 50px;
  font-size: 32px;
  font-weight: 600;
  color: #4d4d4dd1;
  text-align: center;
`

function TaskFormPage() {
  return (
    <>
      <Container>
        <DatePicker />
      </Container>
    </>
  )
}


export default TaskFormPage
