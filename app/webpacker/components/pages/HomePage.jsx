import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Header from '../items/Header'
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
