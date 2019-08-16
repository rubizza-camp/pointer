// BasicInfo.jsx
import React, { Component } from 'react';
import { Alert, Button, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import axios from 'axios'

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        // this.props.nextStep()
        this.requestData();
    }
    requestData = () => {
        var bodyFormData = new FormData();
        bodyFormData.set('user[email]', this.props.values.email);
        bodyFormData.set('user[password]',this.props.values.password);
        bodyFormData.set('user[password_confirmation]', this.props.values.password_confirm);
        bodyFormData.set('commit', 'Sign up');
        axios({
            method: 'post',
            url: '/users',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response.status);
            })
            .catch(function (error) {
                //handle error
                console.log(error.response.data.errors[0].detail);
                console.log(error.response.status);
                console.log(error.response.headers);
            });
    }
    render(){
        return(
            <div>
            <Alert color="success">
            <h1 className="ui centered">Welcome to the registration page!<br/>Please, enter user details</h1>
            </Alert>
            <AvForm onValidSubmit={this.saveAndContinue}>
            <AvGroup>
                <Label for="email">Email:</Label>
                <AvInput type="email" name="email" id="email" placeholder="Email Address" 
                 onChange={this.props.handleChange('email')} required/>
            </AvGroup>
            <AvGroup>
                <Label for="password">Password:</Label>
                <AvInput type="password" name="pass1" id="password" placeholder="Your password" 
                 onChange={this.props.handleChange('password')} required/>
            </AvGroup>
            <AvGroup>
                <Label for="password_confirm">Password Confirmation:</Label>
                <AvInput type="password" name="pass2" id="password_confirm" placeholder="Password Confirmation" 
                 onChange={this.props.handleChange('password_confirm')} required/>
            </AvGroup>
            <AvGroup>
                <Label for="exampleSelect">Choose your role:</Label>
                <AvInput type="select" name="select_role" id="select_role" 
                 onChange={this.props.handleChange('role')} required>
                <option>Owner</option>
                <option>Handler</option>
                </AvInput>
            </AvGroup>
            <Button type='submit' size="lg" color="primary" >Next</Button>
            </AvForm>
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