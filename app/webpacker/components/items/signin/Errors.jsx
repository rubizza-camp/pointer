import React from 'react'
import { Alert } from 'reactstrap'

const Errors = (props) => {
  if (!props.data) return null
  console.log(props.data.error.error)

  return (
    <div>
      <Alert color="danger">
        <h5>{props.data.error.error}</h5>
      </Alert>
    </div>
  )
}

export default Errors
