import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'

const Errors = ({ data }) => {
  if (!data) return null
  console.log(data.error.error)

  return (
    <div>
      <Alert color="danger">
        <h5>{data.error.error}</h5>
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
