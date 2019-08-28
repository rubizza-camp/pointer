import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'

const Errors = (props) => {
  if (!props.data) return null

  return (
    <div>
      <Alert color="danger">
        <h3>Invalid email or password</h3>
      </Alert>
    </div>
  )
}

Errors.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Errors
