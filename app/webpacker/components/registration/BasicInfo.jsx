// BasicInfo.jsx
import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        const options = [
            { key: 'o', text: 'Owner', value: 'owner' },
            { key: 'h', text: 'Handler', value: 'handler' },
          ]
        return(
            <div>
            <Alert color="primary">
            <h1 className="ui centered">Enter User Details</h1>
            </Alert>
            <Form onInput={pass2.setCustomValidity(pass1.value != pass2.value ? "Passwords do not match." : "")}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email Address" onChange={this.props.handleChange('email')} defaultValue={values.email} />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="pass1" id="password" placeholder="Your password" onChange={this.props.handleChange('password')} defaultValue={values.password} />
            </FormGroup>
            <FormGroup>
                <Label for="password_confirm">Password Confirmation</Label>
                <Input type="password" name="pass2" id="password_confirm" placeholder="Password Confirmation" onChange={this.props.handleChange('password_confirm')} defaultValue={values.password_confirm} />
            </FormGroup>
            



            
            </Form>
            </div>
                
            
                // <FormGroup>
                //     <label>Password Confirmation</label>
                //     <input
                //     type='password'
                //     placeholder='Password Confirmation'
                //     onChange={this.props.handleChange('password_confirm')}
                //     defaultValue={values.password_confirm}
                //     />
                // </FormGroup>
            //     <FormGroup control={Select} options={options} label='Select your role' placeholder='Select your Role' />
                
            //     <Button onClick={this.saveAndContinue}>Next</Button>
            // </Form>
            // </div>
        )
    }
}

export default UserDetails;