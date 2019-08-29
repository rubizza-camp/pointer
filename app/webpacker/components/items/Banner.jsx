/* global I18n */

import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import banner from '../../images/banner.svg'

const BannerWrapper = styled.div`
background: #faf7f0;
padding: 10px 0;
width: 100%;
`
const BannerContainer = styled(Container)`
position: relative;
justify-content: flex-end;
`
const BannerImage = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-end;
img{
  width: 70%;
}
`
const BannerText = styled.div`
position: absolute;
top: 20px;
`
const BannerTitleLow = styled.p`
  font-size: 72px;
  font-weight: 800;
  text-transform: uppercase;
  color: #38b59386;
  @media only screen and (max-width: 767px) {
    font-size: 36px;
    margin: 0;
  }
`
const BannerTitleMedium = styled.p`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 800;
  color: #4d4d4dd1;
  max-width: 70%;
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    margin: 0;
  }
`
const BannerTitleNormal = styled.p`
font-size: 26px;
font-weight: 500;
color: #4d4d4da6;
margin: 20px 0 0 0;
@media only screen and (max-width: 767px) {
  font-size: 18px;
  margin: 5px 0 0 0;
}
`
const BannerButton = styled.div`
display: flex;
a{
  background: #38b593c7;
  margin: 20px 0 0 0;
  padding: 10px 45px;
  color: #fff;
  border-radius: 30px;
  transition: 0.3s;
  font-size: 16px;
  text-decoration: none;
  &:hover{
    background: #2f987c;
  }
  @media only screen and (max-width: 767px) {
    padding: 7px 24px;
    a{
      margin: 15px 0 0 0;
    }
  }
}
`
function Banner() {
  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerImage>
          <img src={banner} alt="banner" />
        </BannerImage>
        <BannerText>
          <BannerTitleLow>{I18n.t('banner.height_title')}</BannerTitleLow>
          <BannerTitleMedium>{I18n.t('banner.average_title')}</BannerTitleMedium>
          <BannerTitleNormal>
            {I18n.t('banner.average_title')}
          </BannerTitleNormal>
          <BannerButton>
            <Link to="/">{I18n.t('button.more_info')}</Link>
          </BannerButton>
        </BannerText>
      </BannerContainer>
    </BannerWrapper>
  )
}

export default Banner
