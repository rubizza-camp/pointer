import styled from 'styled-components'

export const Card = styled.div`
  padding: 15px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 5px 5px 15px 0px  #3fa1a9;
  box-shadow: 5px 5px 15px 0px  #3fa1a9;
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  background: #f7f7f7ff;
  width: 30%
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0 0 25px 0;
  }`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`

export const Button = styled.button`
  position: relative;
  color: #054231;
  letter-spacing: 1px;
  margin: 20px;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  transition: 0.5s;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  background: #64d488;
  :hover{
  color: #fff;
  box-shadow: 0px 0px 20px 0px 
  }
`

export const EditButton = styled(Button)`
color: #fff;
width: 180px;`

export const TaskButton = styled(Button)`
background: #ffdab9;
width: 200px;`

export const DeleteButton = styled(Button)`
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
box-shadow: 10px 0px 10px 0px  #f00;
max-height: 50px;
background: #f00`

export const SaveButton = styled(Button)`
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
box-shadow: 10px 0px 10px 0px  #63d3a6;
max-height: 50px;`
