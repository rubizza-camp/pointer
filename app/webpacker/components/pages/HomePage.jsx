import React from 'react'
import { Container } from 'reactstrap'
import Banner from '../items/Banner'
import Request from '../items/Request'
import Questions from '../items/Questions'
import Reviews from '../items/Reviews'
import Members from '../items/Members'

function HomePage() {
  return (
    <>
      <Banner />
      <Container>
        <Request />
        <Questions />
        <Members />
        <Reviews />
      </Container>
    </>
  )
}

export default HomePage
