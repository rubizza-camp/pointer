import React from 'react';
import { Alert } from 'reactstrap';

const Errors = (props) => {
    if(!props.data) {
        return (
          <div></div>
        );
    }
    else {
        var errors = [];
        if(props.data.error.email){
            errors.push("This email has already been taken");
        } 
        if(props.data.error.password){
            errors.push("\nPassword in too short (minimum is 6 characters)");
        }   
        if(props.data.error.password_confirmation){
            errors.push("\nPassword confirmation doesn't match password");
        }
        const items = errors.map((error) => 
          <b><li>{error}</li></b>
        );
      return (
          <div>
          <Alert color="danger">
            <ul>{items}</ul>
          </Alert>
          </div>
      );
    }

}

export default Errors;