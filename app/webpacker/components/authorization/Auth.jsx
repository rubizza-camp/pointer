// Auth.jsx
import React, { Component } from 'react';
import { Alert, Button, Label, Spinner } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import axios from 'axios'
import Errors from './Errors';
  
class Auth extends Component{

    saveAndContinue = () => {
        this.requestData();
        this.form.reset();
    }

    requestData = () => {
        var AuthData = new FormData();
        AuthData.set('user[email]', this.props.values.email);
        AuthData.set('user[password]',this.props.values.password);
        AuthData.set('commit', 'Sign up');
        axios({
            method: 'post',
            url: '/users',
            data: AuthData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then((response) => {
                this.props.nextStep()
            })
            .catch((error) => {
                if(error.response) {
                this.setState({error : error.response.data.errors[0].detail});
            }});
    }
    
    render(){
        return(
            <div>
            <Alert color="success">
            <h2 className="ui centered">Please, enter your login and password</h2>
            </Alert>
            <Errors data={this.state} />
            <AvForm onValidSubmit={this.saveAndContinue} ref={c => (this.form = c)}>
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
            <Button type='submit' size="lg" color="primary" >Login</Button>
            </AvForm>               
            </div>    
        )
    }
}

export default Auth;