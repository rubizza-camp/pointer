/* global I18n */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Container, Button } from 'reactstrap'
import styled from 'styled-components'
import Select from 'react-select'

const TopHeader = styled.div`
  width: 100%;
  height: 40px;
  background: #f6d673ff;
  display: flex;
  align-items: center;
  font-size: 14px;
`
const GreenLink = styled(Link)`
  color: #38b593cf !important;
`
const TopHeaderContacts = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color: #4d4d4dd6;
    font-weight: 500;
  }
  p{
    text-decoration: none;
    color: #4d4d4dd6;
    margin: 0 5px 0 0;
    font-weight: 500;
  }
`
const TopHeaderContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
`
const LowHeader = styled.div`
  display: flex;
  height: 75px;
  background: #f7f7f7ff;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
const LowHeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LowHeaderLogo = styled.div`
  width: 20%;
  a{
    font-family: 'Kalam', cursive;
    text-decoration: none;
    font-weight: 800;
    color: #4d4d4dff;
    font-size: 24px;
    display: flex;
  }
`
const LowHeaderMenu = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  a{
    text-decoration: none;
    color: #4d4d4dff;
  }
`

const OPTIONS = [
  { value: 'ru', label: 'ru' },
  { value: 'en', label: 'en' },
]

const customStyles = {
  control: () => ({
    display: 'flex',
    width: 70,
  }),
}

const Header = ({ isAuthorized, logout, locale, changeLocale }) => (
  <>
    <TopHeader>
      <TopHeaderContainer>
        <TopHeaderContacts>
          <p>Телефон для связи:</p>
          <Link to="/">+375(25)5729105</Link>
        </TopHeaderContacts>
        <Select options={OPTIONS} onChange={changeLocale} styles={customStyles} defaultValue={OPTIONS[1]}/>
      </TopHeaderContainer>
    </TopHeader>
    <LowHeader>
      <LowHeaderContainer>
        <LowHeaderLogo>
          <Link to="/">Pointer</Link>
        </LowHeaderLogo>
        <LowHeaderMenu>
          <Link to="/">{I18n.t('header.about')}</Link>
          <Link to="/members">{I18n.t('header.members')}</Link>
          <Link to="/">{I18n.t('header.work')}</Link>
          <Link to="/">{I18n.t('header.reviews')}</Link>
          <Link to="/">{I18n.t('header.contacts')}</Link>
          {isAuthorized
            ? (<Button outline color="warning" onClick={logout}>Logout</Button>)
            : (
              <>
                <GreenLink to="/signin">
                  {I18n.t('header.log_in')}
                </GreenLink>
                <GreenLink to="/signup">
                  {I18n.t('header.sign_up')}
                </GreenLink>
              </>
            )}
        </LowHeaderMenu>
      </LowHeaderContainer>
    </LowHeader>
  </>
)

Header.propTypes = {
  locale: PropTypes.oneOf(OPTIONS.map(({ value }) => value)).isRequired,
  changeLocale: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
}

export default Header
