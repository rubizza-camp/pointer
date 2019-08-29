import { Button } from 'reactstrap'
import styled from 'styled-components'

export const Field = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;`

export const CloseButton = styled(Button)`
  padding: 0rem 0.4rem;`

export const Input = styled.input`
  border-radius: 15px;
  border: 1px solid #b7b7b7;
  padding: 5px 5px 5px 10px;
  transition: 0.2s;`

export const Label = styled.label`
text-transform: uppercase;
font-weight: 700;
color: #676767;
border-radius: 50%;
  display: inline-block;
  position: relative;
  padding: 6px;
  cursor: pointer;`
