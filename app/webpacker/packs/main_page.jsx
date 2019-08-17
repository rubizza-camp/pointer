import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import Example from '../components/Navbar'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Request from '../components/Request'
import Questions from '../components/Questions'
import Reviews from '../components/Reviews'
import Members from '../components/Members'
import MembersController from '../components/MembersController'
import Footer from '../components/Footer'

const PageTitle = styled.div`
font-size: 26px;
color: #4d4d4dd1;
font-weight: 500;
margin: 70px 0 60px 0;
text-align: center;
`
const PageButton = styled.div`
display: flex;
justify-content: center;
a{
background: #38b59386;
margin: 0 0 0 0;
padding: 10px 40px;
color: #fff;
border-radius: 30px;
transition: 0.3s;
&:hover{
  color: #fff;
  text-decoration: none;
  background: #2f987c;
}
`
const MembersList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 70px 0;
  flex-wrap: wrap;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`
const PageContainer = styled(Container)`
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
      <Header />
      <Example />
      <Banner />
      <PageContainer>
        <Request />
        <PageTitle>Часто задаваемые вопросы</PageTitle>
        <Questions />
        <PageTitle>Наши выгульщики</PageTitle>
        <MembersList>
          <MembersController />
        </MembersList>
        <PageButton><a href="#">Смотреть всех</a></PageButton>
        <PageTitle>Отзывы наших клиентов</PageTitle>
        <Reviews />
        <PageButton><a href="#">Смотреть все</a></PageButton>
      </PageContainer>
      <Footer />
    </>,
    document.body.appendChild(document.createElement('div'))
  )
})
