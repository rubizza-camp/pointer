import React from 'react'
import PropTypes from 'prop-types'

const Marker = (props) => {
  const { show } = props
  const markerStyle = {
    border: '1px solid white',
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: show ? 'red' : 'blue',
    cursor: 'pointer',
    zIndex: 10,
  }

  return (
    <>
      <div style={markerStyle} />
      {show}
    </>
  )
}
Marker.propTypes = {
  show: PropTypes.bool,
}

Marker.defaultProps = {
  show: false,
}
export default Marker
