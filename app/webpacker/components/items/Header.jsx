import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const TopHeader = styled.div`
  width: 100%;
  height: 40px;
  background: #f6d673ff;
  display: flex;
  align-items: center;
  font-size: 14px;
`
const GreenLink = styled.a`
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

function Header() {
  return (
    <>
      <TopHeader>
        <TopHeaderContainer>
          <TopHeaderContacts>
            <p>Телефон для связи:</p>
            <Link to="/">+375(25)5729105</Link>
          </TopHeaderContacts>
        </TopHeaderContainer>
      </TopHeader>
      <LowHeader>
        <LowHeaderContainer>
          <LowHeaderLogo>
            <Link to="/">Pointer</Link>
          </LowHeaderLogo>
          <LowHeaderMenu>
            <Link to="/">О нас</Link>
            <Link to="/members">Выгульщики</Link>
            <Link to="/">Работа</Link>
            <Link to="/pets/1/reviews">Отзывы</Link>
            <Link to="/">Контакты</Link>
            <GreenLink href="#">Вход</GreenLink>
            <GreenLink href="#">Регистрация</GreenLink>
          </LowHeaderMenu>
        </LowHeaderContainer>
      </LowHeader>

    </>
  )
}

export default Header
