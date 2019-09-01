import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
`
const PageTitle = styled.p`
  margin: 80px auto 30px auto;
  font-size: 32px;
  font-weight: 600;
  color: #4d4d4dd1;
  text-align: center;
`

const AboutPage = styled.p`
  margin: 0 50px;
  font-size: 24px;
  font-weight: 400;
  color: #4d4d4dd1;
  text-align: center;
`


function About() {
  return (
    <AboutWrapper>
     <PageTitle>Кто мы такие</PageTitle>
     <AboutPage>Сервис Pointer был создан с одной единственной целью - сделать заботу и уход о наших четвероногих
     любимцах более простой и доступной. Жизнь ускоряется с каждым днем и всем нам нужна возможность получить помощь
     в любом бытовом деле. Будь то уборка дома, доставка продуктов или выгул вашей собаки и уход за ней.
     Если вы часто в командировке, много и усердно работаете или просто заболели - теперь всегда есть кому
     позаботиться о вашей собаке. Это мы! И мы безумно рады помочь вам и вашему питомцу!
     </AboutPage>
    </AboutWrapper>
  )
}

export default About
