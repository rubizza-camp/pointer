import React from 'react'
import I18n from 'i18n-js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/items/Header'
import Footer from '../components/items/Footer'
import MembersPage from '../components/pages/MembersPage'
import HomePage from '../components/pages/HomePage'
import MainFormSignIn from '../components/items/signin/MainForm'
import MainFormSignUp from '../components/items/signup/MainForm'

global.I18n = I18n
require('./i18n/translations')

function Basic() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/members" component={MembersPage} />
        <Route path="/signin" component={MainFormSignIn} />
        <Route path="/signup" component={MainFormSignUp} />
      </Router>
      <Footer />
    </>
  )
}

export default Basic
