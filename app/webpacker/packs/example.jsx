import React, { Component } from 'react'
import Cookies from 'js-cookie'
import I18n from 'i18n-js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/items/Header'
import Footer from '../components/items/Footer'
import MembersPage from '../components/pages/MembersPage'
import HomePage from '../components/pages/HomePage'
import MainFormSignIn from '../components/items/signin/MainForm'
import MainFormSignUp from '../components/items/signup/MainForm'
import setAuthorizationToken from '../utils/set_auth_token'

global.I18n = I18n
require('./i18n/translations')

class Basic extends Component {
  state = {isAuthorized: false, isInitialRender: true}
  static getDerivedStateFromProps(_nextProps, prevState) {
    if( prevState.isInitialRender) return { isAuthorized: !!Cookies.get('Authorization'), isInitialRender: false }
  }
  setAuth = isAuthorized => {
    this.setState({ isAuthorized }) 
  }
  logout = () => {
    Cookies.remove('Authorization')
    setAuthorizationToken()
    this.setAuth(false)
  }
  render() {
    const { isAuthorized } = this.state
    return (
      <>
        <Router>
          <Header logout={this.logout} isAuthorized = {isAuthorized}  />
          <Route path="/" exact component={HomePage} />
          <Route path="/members" component={MembersPage} />
          <Route path="/signin" render={routeProps => <MainFormSignIn {...routeProps} setAuth={this.setAuth}/>} />
          <Route path="/signup" component={MainFormSignUp} />
        </Router>
        <Footer />
      </>
    )
  }
}

export default Basic
