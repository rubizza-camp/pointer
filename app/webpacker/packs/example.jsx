import React from 'react'
import I18n from 'i18n-js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Select from 'react-select'
import Header from '../components/items/Header'
import Footer from '../components/items/Footer'
import MembersPage from '../components/pages/MembersPage'
import HomePage from '../components/pages/HomePage'

global.I18n = I18n
require('./i18n/translations')

const options = [
  { value: 'ru', label: 'ru' },
  { value: 'en', label: 'en' },
]

class Basic extends React.Component {
  state = { locale: 'en' }

  changeLocale = (e) => {
    console.log(e)
    I18n.locale = e.value
    this.setState(() => ({ locale: I18n.locale }))
  }

  render() {
    console.log(I18n.locale)
    return (
      <>
        <Select options={options} onChange={this.changeLocale} />
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
