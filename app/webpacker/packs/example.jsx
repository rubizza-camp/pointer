import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Header from '../components/items/Header'
import Footer from '../components/items/Footer'
import MembersPage from '../components/pages/MembersPage'
import HomePage from '../components/pages/HomePage'

function Basic() {
  return (
    <>
    <Router>
    <Header />
    <Route path="/" exact component={HomePage} />
    <Route path="/members" component={MembersPage} />
    </Router>
    <Footer />
    </>
  )
}

export default Basic
