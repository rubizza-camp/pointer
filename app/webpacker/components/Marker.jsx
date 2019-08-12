import React from 'react'
import styled from 'styled-components'

const StyledMarker = styled.div`
  position: absolute;
  border-radius: 50% 50% 50% 0;
  border: 4px solid blue;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);`

const MarkerWrapper = () => (<StyledMarker />)

export default MarkerWrapper
