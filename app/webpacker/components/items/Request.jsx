import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import walk from '../../images/walk.jpg'

const RequestWrapper = styled.div`
margin: 60px 0 40px 0;
font-size: 24px;
font-weight: 500;
color: #4d4d4dd1;
`
const RequestContainer = styled.div`
display: flex;
justify-content: space-between;
position: relative;
`
const RequestText = styled.div`
width: 50%;
@media only screen and (max-width: 767px) {
  width: 100%;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  margin: 0;
}
`
const RequestTitle = styled.p`
font-size: 41px;
font-weight: 600;
`
const RequestBody = styled.div`
padding: 20px 0 0 0;
`
const RequestButton = styled.div`
margin: 30px 0 0 0;
a{
  background: #f6d673ff;
  margin: 20px 0 0 0;
  padding: 12px 60px;
  width: 200px;
  color: #fff;
  border-radius: 30px;
  transition: 0.3s;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  &:hover{
    background: #e8c65a;
  }
}
`
const RequestImage = styled.div`
width: 500px;
display: block;
img{
  width: 100%;
  transform: scale(-1, 1);
  filter: alpha(Opacity=50);
  opacity: 0.4;
  transition: 80%;
}
@media only screen and (max-width: 767px) {
  width: 100%;
  img{
    width: 80%;
    margin: 0 0 0 20%;
  }
}
`

function Request() {
  return (
    <RequestWrapper>
      <RequestContainer>
        <RequestText>
          <RequestTitle>Оформите заявку в несколько кликов</RequestTitle>
          <RequestBody>
            <p>Если вы уже наш клиент или просто хотите быстро оформить заявку,
            эта кнопка для вас</p>
          </RequestBody>
          <RequestButton>
          <a href="#">Оформить</a>
          </RequestButton>
        </RequestText>
        <RequestImage>
          <img src={walk} alt="walk" />
        </RequestImage>
      </RequestContainer>
    </RequestWrapper>
  )
}

export default Request
