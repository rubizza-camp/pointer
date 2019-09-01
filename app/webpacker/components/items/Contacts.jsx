import React from 'react'
import styled from 'styled-components'

const PageTitle = styled.p`
  margin: 80px auto 30px auto;
  font-size: 32px;
  font-weight: 600;
  color: #4d4d4dd1;
  text-align: center;
`
const NormalTitle = styled.p`
  font-size: 20px;
  margin: 20px 0;
  font-weight: 500;
  color: #4d4d4dd1;
`
const ContactsText = styled.p`
  font-size: 16px;
  color: #4d4d4dd1;
`

const ContactsWrapper = styled.div`
  margin: 90px 0 0 0;
`
const ContactsItem = styled.div`
  display: flex;
  flex-direction: column;
`

function Contacts() {
  return (
    <>
    <PageTitle>Наши контакты</PageTitle>
    <ContactsText></ContactsText>
    <ContactsWrapper>
      <ContactsItem>
        <NormalTitle>Наш адрес:</NormalTitle>
        <ContactsText>г. Минск, проспект Независимости 14</ContactsText>
      </ContactsItem>
      <ContactsItem>
        <NormalTitle>Телефоны для связи:</NormalTitle>
        <ContactsText>+375(29)5324687</ContactsText>
        <ContactsText>+375(25)8972391</ContactsText>
      </ContactsItem>
    </ContactsWrapper>
    </>
  )
}

export default Contacts
