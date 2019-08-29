import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'

const Errors = ({ data }) => {
  if (!data.error) return null

  const arr = data.error.split('<br>')
  const items = arr.map((error) => <b><li>{error}</li></b>)
  return (
    <div>
      <Alert color="danger">
        <ul>{items}</ul>
      </Alert>
    </div>
  )
}

Errors.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
  }).isRequired,
}

export default Errors
