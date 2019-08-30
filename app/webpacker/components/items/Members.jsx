/* global I18n */

import React from 'react'
import styled from 'styled-components'
import star from '../../images/star.png'

const MembersItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 10px 0 0;
  background: #f7f7f7ff;
  padding: 0;
  margin: 0 0 30px 0;
  border: none;
  border-radius: .28571429rem;
  -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  -webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
  z-index: '';
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0 0 25px 0;
  }
`
const MemberPhoto = styled.div`
width: 100%;
height: 370px;
img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 992px) {
  width: 100%;
  height: 100%;
  img{
    width: 100%;
  }
}
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

const Members = (props) => {
  return (
    <MembersItem>
      <MemberPhoto>
        <img src={props.avatar_url} alt="member_photo" />
      </MemberPhoto>
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
          <p>{props.name}</p>
        </MemberName>
        <MemberWalks>
          <p>{props.trip_count}</p>
        </MemberWalks>
        <MemberReviews>
          <p>{I18n.t('members.reviews_count')}</p>
        </MemberReviews>
        <MemberLink>
          <p>{I18n.t('members.link_to_profile')}</p>
        </MemberLink>
      </MemberBody>
    </MembersItem>
  )
}

Members.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trip_count: PropTypes.number.isRequired,
}

export default Members
