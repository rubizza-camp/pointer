/* global I18n */

import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import Members from '../items/Members'

const PageTitle = styled.p`
  margin: 70px 50px;
  font-size: 32px;
  font-weight: 600;
  color: #4d4d4dd1;
  text-align: center;
}
`

function MembersPage() {
  return (
    <>
      <Container>
        <PageTitle>{I18n.t('members.title')}</PageTitle>
        <Members />
      </Container>
    </>
  )
}

export default MembersPage
