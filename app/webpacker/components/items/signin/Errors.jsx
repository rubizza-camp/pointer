import React from 'react';
import { Alert } from 'reactstrap';

const Errors = (props) => {
    if(!props.data) {
        return (
          <div></div>
        );
    }
    else {
     return (
          <div>
          <Alert color="danger">
            <h3>Invalid email fo password</h3>
          </Alert>
          </div>
      );
    }

}

export default Errors;