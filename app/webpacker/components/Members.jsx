import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import star from '../images/star.png'

const MembersItem = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin: 0 10px 0 0;
background: #f7f7f7ff;
padding: 0;
border: none;
border-radius: .28571429rem;
-webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
-webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
transition: box-shadow .1s ease,transform .1s ease;
transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
z-index: '';
&:last-child{
  margin: 0 0 0 0;
}
@media only screen and (max-width: 767px) {
  width: 100%;
  margin: 0 0 25px 0;
}
`
const MemberPhoto = styled.div`
width: 100%;
height: 400px;
background: #e4e4e4;
`
const MemberBody = styled.div`
padding: 0 10px 10px 10px;
`
const MemberStars = styled.div`
display: flex;
margin: 10px 0 5px 0;
`
const MemberStarsItem = styled.div`
width: 19px;
img{
  width: 100%;
}
`
const MemberName = styled.div`
margin: 0 0 20px 0;
p{
  font-weight: 500;
  color: #6f6f6f;
  font-size: 18px;
}
`
const MemberWalks = styled.div`
p{
  font-weight: 200;
  color: #6f6f6f;
  font-size: 13px;
}
`
const MemberReviews = styled.div`
p{
  font-weight: 200;
  color: #6f6f6f;
  font-size: 13px;
}
`
const MemberLink = styled.div`
margin: 25px 0 0 0;
padding-top: 20px;
padding-bottom: 4px;
border-top: 1px solid #f6d6736e;
a{
  color: #38b593;
}
`

function Members() {
  return (
    <>
      <MembersItem>
        <MemberPhoto />
        <MemberBody>
          <MemberStars>
            <MemberStarsItem>
              <img src={star} alt="star" />
            </MemberStarsItem>
            <MemberStarsItem>
              <img src={star} alt="star" />
            </MemberStarsItem>
            <MemberStarsItem>
              <img src={star} alt="star" />
            </MemberStarsItem>
            <MemberStarsItem>
              <img src={star} alt="star" />
            </MemberStarsItem>
            <MemberStarsItem>
              <img src={star} alt="star" />
            </MemberStarsItem>
          </MemberStars>
          <MemberName>
            <p>Анастасия Горовая</p>
          </MemberName>
          <MemberWalks>
            <p>Количество прогулок: 107</p>
          </MemberWalks>
          <MemberReviews>
            <p>Количество отзывов: 19</p>
          </MemberReviews>
          <MemberLink>
            <a href="#">Перейти в профиль</a>
          </MemberLink>
        </MemberBody>
      </MembersItem>
    </ >
  )
}

export default Members
