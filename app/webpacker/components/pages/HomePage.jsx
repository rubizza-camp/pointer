/* global I18n */

import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Banner from '../items/Banner'
import Request from '../items/Request'
import Questions from '../items/Questions'
import Reviews from '../items/Reviews'
import Members from '../items/Members'

const PageTitle = styled.p`
  margin: 80px 50px;
  font-size: 32px;
  font-weight: 600;
  color: #4d4d4dd1;
  text-align: center;
}
`

function HomePage() {
  return (
    <>
      <Banner />
      <Container>
        <Request />
        <PageTitle>{I18n.t('questions.title')}</PageTitle>
        <Questions />
        <PageTitle>{I18n.t('members.title')}</PageTitle>
        <Members />
        <PageTitle>{I18n.t('reviews.title')}</PageTitle>
        <Reviews />
      </Container>
    </>
  )
}

export default HomePage
