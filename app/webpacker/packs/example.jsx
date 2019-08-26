import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/items/Header'
import Footer from '../components/items/Footer'
import MembersPage from '../components/pages/MembersPage'
import HomePage from '../components/pages/HomePage'
import ReviewList from '../components/ReviewList'

function Basic() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/members" component={MembersPage} />
        <Route exact path="/:reviewable_type/:id/reviews" component={ReviewList} />
      </Router>
      <Footer />
    </>
  )
}

export default Basic
