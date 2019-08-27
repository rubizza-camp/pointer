import React from 'react'
import { Container } from 'reactstrap'
import Banner from '../items/Banner'
import Request from '../items/Request'
import Questions from '../items/Questions'
import Reviews from '../items/Reviews'
import Members from '../items/Members'
import I18n from 'i18n-js'

function HomePage() {
  return (
    <>
      <Banner />
      <Container>
        <h1>{I18n.t('hello')}</h1>
        <Request />
        <Questions />
        <Members />
        <Reviews />
      </Container>
    </>
  )
}

export default HomePage
