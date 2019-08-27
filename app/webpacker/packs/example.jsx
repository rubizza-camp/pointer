import React, { Component } from 'react'
import I18n from 'i18n-js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/items/Header'
import Footer from '../components/items/Footer'
import MembersPage from '../components/pages/MembersPage'
import HomePage from '../components/pages/HomePage'

global.I18n = I18n

require('./i18n/translations')

class Basic extends Component {
  state = { locale: 'en' }

  changeLocale = () => {
    I18n.locale = 'ru'
    this.setState(() => ({ locale: 'ru' }))
  }

  render() {
    return (
      <>
        <button onClick={this.changeLocale}>RUSSIAN!!!</button>
        <h1>{I18n.t('hello')}</h1>
        <Router>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/members" component={MembersPage} />
        </Router>
        <Footer />
      </>
    )
  }
}

export default Basic
