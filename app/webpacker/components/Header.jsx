import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

const HeaderWrapper = styled.div`
`
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
    <HeaderWrapper>
      <TopHeader>
        <TopHeaderContainer>
          <TopHeaderContacts>
            <p>Телефон для связи:</p>
            <a href='#'>+375(25)5729105</a>
          </TopHeaderContacts>
        </TopHeaderContainer>
      </TopHeader>

      <LowHeader>
        <LowHeaderContainer>
          <LowHeaderLogo>
            <a href='#'>Pointer</a>
          </LowHeaderLogo>
          <LowHeaderMenu>
            <a href='#'>О нас</a>
            <a href='#'>Выгульщики</a>
            <a href='#'>Работа</a>
            <a href='#'>Отзывы</a>
            <a href='#'>Контакты</a>
            <GreenLink href='#'>Вход</GreenLink>
            <GreenLink href='#'>Регистрация</GreenLink>
          </LowHeaderMenu>
        </LowHeaderContainer>
      </LowHeader>
    </HeaderWrapper>
  )
}

export default Header
