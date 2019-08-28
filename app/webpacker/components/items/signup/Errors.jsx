import React from 'react'
import { Alert } from 'reactstrap'

const Errors = (props) => {
  if (!props.data.error) {
    return null
  }

  const arr = props.data.error.split('<br>')
  const items = arr.map((error) => <b><li>{error}</li></b>)
  return (
    <div>
      <Alert color="danger">
        <ul>{items}</ul>
      </Alert>
    </div>
  )
}

export default Errors
