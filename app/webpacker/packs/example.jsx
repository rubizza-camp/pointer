import React, { Component } from 'react'
import Cookies from 'js-cookie'
import I18n from 'i18n-js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Select from 'react-select'
import styled from 'styled-components'
import Header from '../components/items/Header'
import Footer from '../components/items/Footer'
import MembersPage from '../components/pages/MembersPage'
import HomePage from '../components/pages/HomePage'
import ReviewList from '../components/ReviewList'
import MainFormSignIn from '../components/items/signin/MainForm'
import MainFormSignUp from '../components/items/signup/MainForm'
import setAuthorizationToken from '../utils/set_auth_token'
import PetController from '../components/pages/PetController'

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`

global.I18n = I18n
require('./i18n/translations')

class Basic extends Component {
  state = { isAuthorized: false, isInitialRender: true, locale: 'en' }

  static getDerivedStateFromProps(_nextProps, prevState) {
    if (prevState.isInitialRender) return { isAuthorized: !!Cookies.get('Authorization'), isInitialRender: false }
  }

  setAuth = isAuthorized => {
    this.setState({ isAuthorized })
  }

  logout = () => {
    Cookies.remove('Authorization')
    setAuthorizationToken()
    this.setAuth(false)
  }

  changeLocale = (e) => {
    I18n.locale = e.value
    this.setState(() => ({ locale: I18n.locale }))
  }

  render() {
    const { isAuthorized, locale } = this.state

    return (
      <Wrapper>
        <Router>
          <Header
            logout={this.logout}
            isAuthorized={isAuthorized}
            locale={locale}
            changeLocale={this.changeLocale}
          />
          <Route path="/" exact component={HomePage} />
          <Route path="/members" component={MembersPage} />
          <Route exact path="/:reviewable_type/:id/reviews" component={ReviewList} />
          <Route path="/signin" render={routeProps => <MainFormSignIn {...routeProps} setAuth={this.setAuth} />} />
          <Route path="/signup" component={MainFormSignUp} />
          <Route path="/pets" component={PetController} />
        </Router>
        <Footer />
      </Wrapper>
    )
  }
}

export default Basic
