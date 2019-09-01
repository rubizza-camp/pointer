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
import PetController from '../components/pages/PetController'
import { axiosDeleteRequest } from '../utils/axios_helper'
import MapController from '../components/pages/MapController'
import MapViewer from '../components/pages/MapViewer'

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
    axiosDeleteRequest('/users/sign_out', '', '')
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
          <Route path="/:reviewable_type/:id/reviews" component={ReviewList} />
          <Route path="/signin" render={routeProps => <MainFormSignIn {...routeProps} setAuth={this.setAuth} />} />
          <Route path="/signup" component={MainFormSignUp} />
          <Route exact path="/pets" component={PetController} />
          <Route path="/trips" component={MapController} />
          <Route exact path="/tripwatcher/:uuid" component={MapViewer} />
        </Router>
        <Footer />
      </Wrapper>
    )
  }
}

export default Basic
